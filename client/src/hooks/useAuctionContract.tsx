import { useEffect, useState } from 'react'
import { useWeb3 } from '../context/web3.context'
import Auction from '../contracts/Auction.json'
import { AuctionState, AuctionStateEnum } from 'data/models'

// doing:  Move all fetching to contract and expose the state only
// to do: move events here
export default function useAuctionContract(auctionAddress) {
  const { account, web3 } = useWeb3()
  const [auctionContract, setAuctionContract] = useState(null)
  const [auctionHighestBid, setAuctionHighestBid] = useState<string>('0')
  const [auctionOwner, setAuctionOwner] = useState<string>('')
  const [auctionState, setAuctionState] = useState<AuctionStateEnum>()
  const [auctionBids, setAuctionBids] = useState<number[]>([])

  // const [auctionBlocks, setAuctionBlocks] = useState(0)

  // const [auctionStateChangeEvent, setAuctionStateChangeEvent] = useState()

  const cancelAuction = async () => {
    await auctionContract.methods.cancelAuction().send({ from: account })
  }

  useEffect(() => {
    const runWeb3 = async () => {
      console.log('run web 3 on')
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
      setAuctionBids(auctionBids)

      const auctionStartBlock = await auctionContract.methods
        .startBlock()
        .call()
      // console.log('auctionStartBlock', auctionStartBlock)

      const auctionEndBlock = await auctionContract.methods.endBlock().call()
      // console.log('auctionEndBlock', auctionEndBlock)
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
        console.log('bid place event', event) // same results as the optional callback above
        const { value } = event.returnValues
        setAuctionBids((oldAuctionBids) => {
          console.log('oldAuctionBids', oldAuctionBids)
          return [...oldAuctionBids, value]
        })
        setAuctionHighestBid(value)
      })
      .on('changed', function (event) {
        console.debug('event changed', event)
        // remove event from local database
      })
      .on('error', console.error)
  }, [auctionContract])

  useEffect(() => {
    console.debug('auctionContract', auctionContract)
  }, [auctionContract])

  return {
    auctionContract,
    auctionOwner,
    auctionHighestBid,
    auctionState,
    auctionBids,
    cancelAuction,
  }
}
