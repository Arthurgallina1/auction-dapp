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
  // const [auctions, setAuctions] = useState([])
  const { auctions } = useAuctionCreator()
  console.log(auctions)

  // useEffect(() => {
  //   const fetchAuctions = async () => {
  //     const acts = await getAuctions()
  //     console.log('acts', acts)
  //     const auctionsWithAddress = acts?.map((auction) => ({
  //       address: auction,
  //       ...auctionsCardsData[0],
  //     }))
  //     // setAuctions(auctionsWithAddress)
  //     console.log('o123', auctionsWithAddress)
  //   }
  //   fetchAuctions()
  // }, [])

  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.SectionTitle>Live Auctions</S.SectionTitle>
        <AuctionSVG />
      </S.TitleWrapper>
      <S.AuctionGrid style={{ marginBottom: 80 }}>
        {auctions.map((auctionCard) => (
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
