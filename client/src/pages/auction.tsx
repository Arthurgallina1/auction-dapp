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
    auctionHighestBid,
    auctionOwner,
    auctionState,
    auctionBids,
    auctionEndDate,
    auctionStartDate,
    addressLastBid,
    cancelAuction,
    placeBid,
    finalizeAuction,
  } = useAuctionContract(auctionAddress)

  const isCancelled = auctionState === AuctionStateEnum.Canceled
  const isUserOwner = auctionOwner === account
  const hasAddressBid = addressLastBid !== '0'

  const canAddressCancelAuction = isUserOwner && !isCancelled
  const canAddressFinalizeAuction =
    auctionState ===
      (AuctionStateEnum.Canceled || Date.now() / 1000 > auctionEndDate) &&
    (isUserOwner || hasAddressBid)
  console.log('canAddressFinalizeAuction', canAddressFinalizeAuction)

  return (
    <div>
      Auction Owner: {auctionOwner}
      <br /> {isUserOwner && <span>Owner</span>}
      <AuctionPageView
        address={auctionAddress}
        auctionState={auctionState}
        bids={auctionBids}
        placeBid={placeBid}
        auctionHighestBid={auctionHighestBid}
        isUserOwner={isUserOwner}
        addressLastBid={addressLastBid}
        auctionStartDate={auctionStartDate}
        auctionEndDate={auctionEndDate}
      />
      {canAddressCancelAuction && (
        <Button onClick={cancelAuction}>Cancel Auction</Button>
      )}
      {canAddressFinalizeAuction && (
        <Button onClick={finalizeAuction}>Finalize Auction</Button>
      )}
    </div>
  )
}
