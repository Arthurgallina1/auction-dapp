import { Button } from 'components'
import EthSVG from 'components/svgs/eth'
import { useState } from 'react'
import * as S from './styles'

type HighestOfferCardType = {
  isBidDisabled: boolean
  auctionHighestBid: string
  placeBid: (value: number) => void
}

//TODO: Add a slider instead of input
//TODO: Add validation on value that can be bid
//TODO: Improve component name

export default function HighestOfferCard({
  isBidDisabled = true,
  placeBid,
  auctionHighestBid,
}: HighestOfferCardType) {
  const [inputValue, setInputValue] = useState(0)

  const onChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <S.Container>
      <h3>Highest offer</h3>
      <S.PriceBox>
        <EthSVG /> <strong>{auctionHighestBid}</strong> ETH
      </S.PriceBox>
      {!isBidDisabled ? (
        <>
          <input onChange={onChange} value={inputValue} />
          <Button onClick={() => placeBid(inputValue)}>Place Bid</Button>
        </>
      ) : (
        <h4>Bid not available</h4>
      )}
    </S.Container>
  )
}
