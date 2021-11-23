import { useEffect, useState } from 'react'
import { useWeb3 } from '../context/web3.context'
import Auction from '../contracts/Auction.json'
import { AuctionState, AuctionStateEnum } from 'data/models'
import { formatAuctionBidsTuple } from 'utils/formatters'

export default function useAuctionContract(auctionAddress) {
  const { account, web3 } = useWeb3()
  const [auctionContract, setAuctionContract] = useState(null)
  const [auctionHighestBid, setAuctionHighestBid] = useState<string>('0')
  const [auctionOwner, setAuctionOwner] = useState<string>('')
  const [auctionState, setAuctionState] = useState<AuctionStateEnum>()
  const [auctionBids, setAuctionBids] = useState<number[]>([])
  const [auctionStartDate, setAuctionStartDate] = useState(0)
  const [auctionEndDate, setAuctionEndDate] = useState(0)
  const [addressLastBid, setAddressLastBid] = useState<string>('0')

  // const [auctionBlocks, setAuctionBlocks] = useState(0)

  const cancelAuction = async () => {
    try {
      await auctionContract.methods.cancelAuction().send({ from: account })
    } catch (err) {
      console.log(err)
    }
  }

  const placeBid = async (value = 350) => {
    try {
      await auctionContract.methods.placeBid().send({
        from: account,
        value: value,
      })
    } catch (err) {
      console.log(err)
    }
  }

  const finalizeAuction = async () => {
    try {
      await auctionContract.methods.finalizeAuction().send({
        from: account,
      })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const runWeb3 = async () => {
      try {
        if (web3 && account) {
          const instance = new web3.eth.Contract(
            Auction.abi,
            auctionAddress, //deployedNetwork && deployedNetwork.address,
          )
          setAuctionContract(instance)
        }
      } catch (error) {
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`,
        )
        console.error(error)
      }
    }

    runWeb3()
  }, [web3, account, auctionAddress])

  useEffect(() => {
    const fetchContractData = async () => {
      if (!auctionContract) return
      const highestBid = await auctionContract.methods
        .highestBindingBid()
        .call()
      setAuctionHighestBid(highestBid)

      const owner = await auctionContract.methods.owner().call()
      setAuctionOwner(owner)

      const auctionState = await auctionContract.methods.auctionState().call()
      setAuctionState(AuctionState[auctionState])

      const auctionBids = await auctionContract.methods.getBids().call()
      const formattedAuctionBids = formatAuctionBidsTuple(auctionBids)
      setAuctionBids(formattedAuctionBids)

      const addressBid = await auctionContract.methods.bids(account).call()
      setAddressLastBid(addressBid)

      const auctionStartDate = await auctionContract.methods.startDate().call()
      setAuctionStartDate(auctionStartDate)

      const auctionEndDate = await auctionContract.methods.endDate().call()
      setAuctionEndDate(auctionEndDate)
    }

    fetchContractData()
    if (!auctionContract) return
    auctionContract.events
      .AuctionStateChange({})
      .on('data', function (event) {
        const { auctionState } = event.returnValues
        setAuctionState(AuctionState[auctionState])
      })
      .on('changed', function (event) {
        console.debug('event changed', event)

        // remove event from local database
      })
      .on('error', console.error)

    auctionContract.events
      .BidPlaced({})
      .on('data', function (event) {
        // console.log('bid place event', event) // same results as the optional callback above
        const { value, _address: address } = event.returnValues
        //TODO: Improve how this is formatted
        const [formattedAuctionBids] = formatAuctionBidsTuple([
          [value, address],
        ])
        setAuctionBids((oldAuctionBids) => {
          return [...oldAuctionBids, formattedAuctionBids]
        })
        setAuctionHighestBid(value)
      })
      .on('changed', function (event) {
        console.debug('event changed', event)
        // remove event from local database
      })
      .on('error', console.error)

    auctionContract.events
      .AuctionFinalized({})
      .on('data', function (event) {
        const { value, _address } = event.returnValues
        setAddressLastBid('0')
        console.log('auction finalized', { value, _address })
      })
      .on('changed', function (event) {
        console.debug('event changed', event)
        // remove event from local database
      })
      .on('error', console.error)
  }, [auctionContract])

  // useEffect(() => {
  //   console.debug('auctionContract', auctionContract)
  // }, [auctionContract])

  return {
    auctionContract,
    auctionOwner,
    auctionHighestBid,
    auctionState,
    auctionBids,
    auctionStartDate,
    auctionEndDate,
    addressLastBid,
    cancelAuction,
    placeBid,
    finalizeAuction,
  }
}
