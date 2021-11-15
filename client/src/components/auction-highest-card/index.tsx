import { Button } from 'components'
import EthSVG from 'components/svgs/eth'
import * as S from './styles'

export default function HighestOfferCard() {
  return (
    <S.Container>
      <h3>Highest offer</h3>
      <S.PriceBox>
        <EthSVG /> <strong>0.6</strong> ETH
      </S.PriceBox>
      <Button>Place Bid</Button>
    </S.Container>
  )
}
