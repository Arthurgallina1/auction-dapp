import { useParams } from 'react-router-dom'
import { Button } from 'components'
import AuctionPageView from 'components/auction-page-view'
import useAuctionContract from 'hooks/useAuctionContract'
import { useWeb3 } from 'context/web3.context'
import { AuctionStateEnum } from 'data/models'

export default function AuctionPage() {
  const { auctionAddress } = useParams()
  const { account } = useWeb3()
  const {
    auctionContract,
    auctionHighestBid,
    auctionOwner,
    auctionState,
    auctionBids,
    cancelAuction,
  } = useAuctionContract(auctionAddress)

  const isCancelled = auctionState === AuctionStateEnum.Canceled
  const isUserOwner = auctionOwner === account

  // const [auctionBids, setAuctionBids] = useState([])

  // move this to hook
  // React to place bid event to upgrade highest offer
  // useEffect(() => {
  //   if (auctionContract) {
  //     auctionContract.events
  //       .AuctionStateChange({})
  //       .on('data', function (event) {
  //         console.log(event) // same results as the optional callback above
  //         const { auctionState } = event.returnValues
  //         console.debug('returned values', event.returnValues)
  //         // setAuctionState(AuctionState[auctionState])
  //       })
  //       .on('changed', function (event) {
  //         console.debug('event changed', event)

  //         // remove event from local database
  //       })
  //       .on('error', console.error)

  //     auctionContract.events
  //       .BidPlaced({})
  //       .on('data', function (event) {
  //         console.log(event) // same results as the optional callback above
  //         const { value, _address } = event.returnValues
  //         setAuctionBids((auctionBids) => [...auctionBids, value])
  //       })
  //       .on('changed', function (event) {
  //         console.debug('event changed', event)
  //         // remove event from local database
  //       })
  //       .on('error', console.error)
  //   }
  // }, [auctionContract])

  const placeBid = async (value = 350) => {
    try {
      console.debug('zcc', account)
      await auctionContract.methods.placeBid().send({
        from: account,
        value: value,
      })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      Auction Owner: {auctionOwner}
      <AuctionPageView
        name={auctionAddress}
        auctionState={auctionState}
        bids={auctionBids}
        placeBid={placeBid}
        auctionHighestBid={auctionHighestBid}
      />
      {!isCancelled && isUserOwner && (
        <Button onClick={cancelAuction}>Cancel Auction</Button>
      )}
    </div>
  )
}
