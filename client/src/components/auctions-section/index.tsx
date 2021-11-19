import AuctionCard from 'components/auction-card'
import * as S from './styles'
import AuctionSVG from 'components/svgs/auction-subtitle'
import useAuctionCreator from 'hooks/useAuctionCreator'

export default function AuctionSection() {
  const { auctions } = useAuctionCreator()

  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.SectionTitle>Live Auctions</S.SectionTitle>
        <AuctionSVG />
      </S.TitleWrapper>
      <S.AuctionGrid style={{ marginBottom: 80 }}>
        {auctions.map((auction) => (
          <AuctionCard key={auction} address={auction} />
        ))}
      </S.AuctionGrid>
    </S.Wrapper>
  )
}
