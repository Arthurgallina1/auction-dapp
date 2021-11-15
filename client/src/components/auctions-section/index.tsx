import AuctionCard from 'components/auction-card'
import * as S from './styles'
import { AuctionStateEnum } from 'data/models'

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
  return (
    <S.Wrapper>
      <S.SectionTitle>Auctions!!</S.SectionTitle>
      <S.AuctionGrid style={{ marginBottom: 80 }}>
        {auctionsCardsData.map((auctionCard) => (
          <AuctionCard
            name={auctionCard.name}
            currentBid={auctionCard.currentBid}
            user={auctionCard.user}
            status={auctionCard.status}
          />
        ))}
      </S.AuctionGrid>
    </S.Wrapper>
  )
}
