import HighestOfferCard from 'components/auction-highest-card'
import Offers from 'components/offers'
import { AuctionStateEnum } from 'data/models'
import * as S from './styles'

type AuctionPageViewType = {
  bids: any
  auctionState: AuctionStateEnum
  name: string
}

export default function AuctionPageView({
  bids,
  auctionState,
  name,
}: AuctionPageViewType) {
  return (
    <S.Wrapper>
      <S.LeftSide>
        <S.AuctionImage src='https://picsum.photos/260' />
      </S.LeftSide>
      <S.RightSide>
        <S.TitleBox>
          <S.TitleWrapper>
            <h3>Auction {name}</h3>
            <h5>State {auctionState}</h5>
          </S.TitleWrapper>
          <S.Subtitle>First day 25/05</S.Subtitle>
          <S.Subtitle>Last day 30/05</S.Subtitle>
        </S.TitleBox>
        <S.OfferWrapper>
          <HighestOfferCard />
        </S.OfferWrapper>
        <S.OfferWrapper>
          <Offers bids={bids} />
        </S.OfferWrapper>
      </S.RightSide>
    </S.Wrapper>
  )
}
