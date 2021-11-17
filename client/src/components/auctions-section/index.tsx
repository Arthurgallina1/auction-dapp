import AuctionCard from 'components/auction-card'
import * as S from './styles'
import { AuctionStateEnum } from 'data/models'
import AuctionSVG from 'components/svgs/auction-subtitle'
import useAuctionCreator from 'hooks/useAuctionCreator'
import { useEffect, useState } from 'react'

const auctionsCardsData = [
  {
    name: 'Kenobi v1',
    currentBid: 3,
    user: 'General',
    status: AuctionStateEnum.Canceled,
  },
  {
    name: 'Kenobi v1',
    currentBid: 3,
    user: 'General',
    status: AuctionStateEnum.Ended,
  },
  {
    name: 'Kenobi v1',
    currentBid: 3,
    user: 'General',
    status: AuctionStateEnum.Running,
  },
  {
    name: 'Kenobi v1',
    currentBid: 3,
    user: 'General',
    status: AuctionStateEnum.Started,
  },
  {
    name: 'Kenobi v1',
    currentBid: 3,
    user: 'General',
    status: AuctionStateEnum.Canceled,
  },
]

export default function AuctionSection() {
  const [formattedAuctions, setFormattedAuctions] = useState([])
  const { auctions } = useAuctionCreator()
  console.log(auctions)

  useEffect(() => {
    const auctionsWithAddress = auctions?.map((auction) => ({
      address: auction,
      ...auctionsCardsData[0],
    }))
    setFormattedAuctions(auctionsWithAddress)
    console.log('o123', auctionsWithAddress)
  }, [auctions])

  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.SectionTitle>Live Auctions</S.SectionTitle>
        <AuctionSVG />
      </S.TitleWrapper>
      <S.AuctionGrid style={{ marginBottom: 80 }}>
        {formattedAuctions.map((auctionCard) => (
          <AuctionCard
            key={auctionCard?.address}
            name={auctionCard.name}
            currentBid={auctionCard.currentBid}
            user={auctionCard.user}
            status={auctionCard.status}
            address={auctionCard?.address}
          />
        ))}
      </S.AuctionGrid>
    </S.Wrapper>
  )
}
