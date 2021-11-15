import { Button } from 'components'
import * as S from './styles'

export default function Hero() {
  return (
    <S.HeroContainer>
      <S.LeftSide>
        <S.HeroHeading>Discover best auctions out there</S.HeroHeading>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        <Button>123</Button>
      </S.LeftSide>
      <S.RightSide>
        <S.HeroImage src='https://picsum.photos/200' />
      </S.RightSide>
    </S.HeroContainer>
  )
}
