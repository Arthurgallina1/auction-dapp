import { Button } from 'components'
import EthSVG from 'components/svgs/eth'
import * as S from './styles'

type HighestOfferCardType = {
  placeBid: (value: number) => void
}

export default function HighestOfferCard({ placeBid }: HighestOfferCardType) {
  return (
    <S.Container>
      <h3>Highest offer</h3>
      <S.PriceBox>
        <EthSVG /> <strong>0.6</strong> ETH
      </S.PriceBox>
      <Button onClick={() => placeBid(200)}>Place Bid</Button>
    </S.Container>
  )
}
