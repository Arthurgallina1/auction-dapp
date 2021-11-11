import React from 'react'
import AuctionCard from 'components/auction-card'
import * as S from './styles'

const auctionsCardsData = [
  {
    name: 'Kenobi v1',
    currentBid: 3,
    user: 'General',
  },
  {
    name: 'Kenobi v1',
    currentBid: 3,
    user: 'General',
  },
  {
    name: 'Kenobi v1',
    currentBid: 3,
    user: 'General',
  },
  {
    name: 'Kenobi v1',
    currentBid: 3,
    user: 'General',
  },
  {
    name: 'Kenobi v1',
    currentBid: 3,
    user: 'General',
  },
]

export default function Auctions() {
  return (
    <S.Wrapper>
      <h1>Auctions!!</h1>
      <S.AuctionGrid style={{ marginBottom: 80 }}>
        {auctionsCardsData.map((auctionCard) => (
          <AuctionCard
            name={auctionCard.name}
            currentBid={auctionCard.currentBid}
            user={auctionCard.user}
          />
        ))}
      </S.AuctionGrid>
    </S.Wrapper>
  )
}
