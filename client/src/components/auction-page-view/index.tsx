import HighestOfferCard from 'components/auction-highest-card'
import Offers from 'components/offers'
import * as S from './styles'

export default function AuctionPageView() {
  return (
    <S.Wrapper>
      <S.LeftSide>
        <S.AuctionImage src='https://picsum.photos/260' />
      </S.LeftSide>
      <S.RightSide>
        <S.TitleBox>
          <S.TitleWrapper>
            <h3>Auction name</h3>
            <h5>State Running</h5>
          </S.TitleWrapper>
          <S.Subtitle>First day 25/05</S.Subtitle>
          <S.Subtitle>Last day 30/05</S.Subtitle>
        </S.TitleBox>
        <HighestOfferCard />
        <Offers />
      </S.RightSide>
    </S.Wrapper>
  )
}
