import { useHistory } from 'react-router-dom'
import HighestOfferCard from 'components/auction-highest-card'
import Offers from 'components/offers'
import { AuctionStateEnum } from 'data/models'
import * as S from './styles'
import { formatTimestampToDate } from 'utils/formatters'

type AuctionPageViewType = {
  bids: any
  auctionState: AuctionStateEnum
  address: string
  auctionHighestBid: string
  isUserOwner: boolean
  addressLastBid: string
  auctionStartDate: number
  auctionEndDate: number
  placeBid: (amount: number) => void
}

export default function AuctionPageView({
  bids,
  auctionState,
  address,
  auctionHighestBid,
  isUserOwner,
  addressLastBid,
  auctionStartDate,
  auctionEndDate,
  placeBid,
}: AuctionPageViewType) {
  const history = useHistory()
  const isBidDisabled = auctionState !== AuctionStateEnum.Running || isUserOwner

  return (
    <S.Wrapper>
      <S.LeftSide onClick={() => history.goBack()}>
        <span>BACK</span>
        <S.AuctionImage src='https://picsum.photos/260' />
      </S.LeftSide>
      <S.RightSide>
        <S.TitleBox>
          <S.TitleWrapper>
            <h3>Auction {address}</h3>
            <h5>State {auctionState}</h5>
          </S.TitleWrapper>
          <S.Subtitle>
            Auction started on {formatTimestampToDate(auctionStartDate)}
          </S.Subtitle>
          <S.Subtitle>
            Auction ends on {formatTimestampToDate(auctionEndDate)}
          </S.Subtitle>
        </S.TitleBox>
        <S.OfferWrapper>
          <HighestOfferCard
            isBidDisabled={isBidDisabled}
            placeBid={placeBid}
            auctionHighestBid={auctionHighestBid}
          />
        </S.OfferWrapper>
        <S.OfferWrapper>
          <Offers bids={bids} addressLastBid={addressLastBid} />
        </S.OfferWrapper>
      </S.RightSide>
    </S.Wrapper>
  )
}
