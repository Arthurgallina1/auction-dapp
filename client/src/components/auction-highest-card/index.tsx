import { Button } from 'components'
import * as S from './styles'

export default function HighestOfferCard() {
  return (
    <S.Container>
      <h3>Highest offer</h3>
      <S.PriceBox>
        ETH <strong>0.6</strong>
      </S.PriceBox>
      <Button>Place Bid</Button>
    </S.Container>
  )
}
