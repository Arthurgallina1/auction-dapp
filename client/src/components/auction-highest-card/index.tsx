import { Button } from 'components'
import EthSVG from 'components/svgs/eth'
import * as S from './styles'

type HighestOfferCardType = {
  auctionHighestBid: string
  placeBid: (value: number) => void
}

export default function HighestOfferCard({
  placeBid,
  auctionHighestBid,
}: HighestOfferCardType) {
  return (
    <S.Container>
      <h3>Highest offer</h3>
      <S.PriceBox>
        <EthSVG /> <strong>{auctionHighestBid}</strong> ETH
      </S.PriceBox>
      <Button onClick={() => placeBid(200)}>Place Bid</Button>
    </S.Container>
  )
}
