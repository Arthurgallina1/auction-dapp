import { Button } from 'components'
import EthSVG from 'components/svgs/eth'
import * as S from './styles'

type HighestOfferCardType = {
  isBidDisabled: boolean
  auctionHighestBid: string
  placeBid: (value: number) => void
}

export default function HighestOfferCard({
  isBidDisabled = true,
  placeBid,
  auctionHighestBid,
}: HighestOfferCardType) {
  return (
    <S.Container>
      <h3>Highest offer</h3>
      <S.PriceBox>
        <EthSVG /> <strong>{auctionHighestBid}</strong> ETH
      </S.PriceBox>
      {!isBidDisabled ? (
        <Button onClick={() => placeBid(2300000000000000000)}>Place Bid</Button>
      ) : (
        <h4>Bid not available</h4>
      )}
    </S.Container>
  )
}
