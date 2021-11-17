import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from 'components'
import AuctionPageView from 'components/auction-page-view'
import useAuctionContract from 'hooks/useAuctionContract'
import { useWeb3 } from 'context/web3.context'
import { AuctionState, AuctionStateEnum } from 'data/models'

export default function AuctionPage() {
  const { auction } = useParams()
  const { account, web3 } = useWeb3()
  const { auctionContract, getAuctionState } = useAuctionContract(auction)

  const [auctionState, setAuctionState] = useState<AuctionStateEnum>()
  const [auctionBids, setAuctionBids] = useState([])

  useEffect(() => {
    const fetchContractData = async () => {
      try {
        if (web3 && account && auctionContract) {
          // const auctionState = await auctionContract.methods.auctionState().call()
          const auctionBids = await auctionContract.methods.getBids().call()
          const auctionState = await getAuctionState()
          console.log(auctionState)
          setAuctionBids(auctionBids)
          setAuctionState(auctionState)
        }

        //      deployedNetwork && deployedNetwork.address,
      } catch (error) {
        // Catch any errors for any of the above operations.
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`,
        )
        console.error(error)
      }
    }

    fetchContractData()
  }, [web3, account, auctionContract])

  useEffect(() => {
    if (auctionContract) {
      auctionContract.events
        .AuctionStateChange({})
        .on('data', function (event) {
          console.log(event) // same results as the optional callback above
          const { auctionState } = event.returnValues
          console.debug('returned values', event.returnValues)
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
          console.log(event) // same results as the optional callback above
          const { value, _address } = event.returnValues
          setAuctionBids((auctionBids) => [...auctionBids, value])
        })
        .on('changed', function (event) {
          console.debug('event changed', event)
          // remove event from local database
        })
        .on('error', console.error)
    }
  }, [auctionContract])

  const placeBid = async () => {
    try {
      console.debug('zcc', account)
      await auctionContract.methods.placeBid().send({
        from: account,
        value: 555555,
      })
    } catch (e) {
      const data = e.data
      console.log(e)
    }
  }

  const cancelAuction = async () => {
    await auctionContract.methods.cancelAuction().send({ from: account })
  }

  return (
    <div>
      <AuctionPageView
        name={auction}
        auctionState={auctionState}
        bids={auctionBids}
        placeBid={placeBid}
      />
      {/* <Button onClick={placeBid}>Place a bid</Button> */}
      <Button onClick={cancelAuction}>Cancel Auction</Button>
      <Button onClick={getAuctionState}>Get status a bid</Button>
    </div>
  )
}
