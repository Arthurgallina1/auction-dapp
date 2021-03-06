import { Button } from 'components'
import useAuctionCreator from 'hooks/useAuctionCreator'
import * as S from './styles'

export default function Hero() {
  const { createAuction } = useAuctionCreator()

  return (
    <S.Wrapper>
      <S.HeroContainer>
        <S.LeftSide>
          <S.HeroHeading>Discover the best auctions</S.HeroHeading>
          <S.Subtitle>Explore, create and bid on auctions.</S.Subtitle>
          <Button onClick={createAuction}>Start Auction</Button>
        </S.LeftSide>
        <S.RightSide>
          <S.HeroImage src='https://picsum.photos/200' />
        </S.RightSide>
      </S.HeroContainer>
    </S.Wrapper>
  )
}
