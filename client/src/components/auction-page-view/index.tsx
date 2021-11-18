import { useHistory } from 'react-router-dom'
import HighestOfferCard from 'components/auction-highest-card'
import Offers from 'components/offers'
import { AuctionStateEnum } from 'data/models'
import * as S from './styles'

type AuctionPageViewType = {
  bids: any
  auctionState: AuctionStateEnum
  address: string
  auctionHighestBid: string
  isUserOwner: boolean
  addressLastBid: string
  placeBid: (amount: number) => void
}

export default function AuctionPageView({
  bids,
  auctionState,
  address,
  auctionHighestBid,
  isUserOwner,
  addressLastBid,
  placeBid,
}: AuctionPageViewType) {
  const history = useHistory()
  const isBidDisabled =
    auctionState === AuctionStateEnum.Canceled || isUserOwner

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
          <S.Subtitle>First day 25/05</S.Subtitle>
          <S.Subtitle>Last day 30/05</S.Subtitle>
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
