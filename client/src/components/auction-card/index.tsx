import Badge from 'components/badge'
import { useHistory } from 'react-router-dom'
import { RiAuctionFill } from 'react-icons/ri'
import { AiOutlineHeart } from 'react-icons/ai'
import * as S from './styled'
import useAuctionContract from 'hooks/useAuctionContract'

type AuctionCardType = {
  address: string
}

export default function AuctionCard({ address }: AuctionCardType): JSX.Element {
  const history = useHistory()
  const { auctionOwner, auctionState, auctionHighestBid } = useAuctionContract(
    address,
  )

  const onCardClick = () => {
    history.push(`/auction/${address}`)
  }

  return (
    <AuctionCardView
      onCardClick={onCardClick}
      auctionOwner={auctionOwner}
      auctionHighestBid={auctionHighestBid}
      auctionState={auctionState}
      address={address}
    />
  )
}

const AuctionCardView = ({
  onCardClick,
  auctionOwner,
  auctionHighestBid,
  auctionState,
  address,
}) => {
  return (
    <S.Container onClick={onCardClick}>
      <S.UpperInfo>
        <S.Badges>
          <S.BadgeContainer>
            <Badge icon={<RiAuctionFill color='white' />} onClick={() => {}} />
          </S.BadgeContainer>
          <S.BadgeContainer>
            <Badge
              color='white'
              icon={<AiOutlineHeart color='blue' />}
              onClick={() => {}}
            />
          </S.BadgeContainer>
          {/* <Badge icon={<RiAuctionFill color='white' />} onClick={() => {}} /> */}
        </S.Badges>
        <S.Image src='https://picsum.photos/200/150' />
      </S.UpperInfo>

      <S.BottomInfo>
        <S.Upperbox>
          <S.AuctionTitle>{address.slice(0, 5)}</S.AuctionTitle>
          <div>
            <small>By</small>{' '}
            <S.UserTitle href='/'>{auctionOwner.slice(0, 10)}</S.UserTitle>
          </div>
        </S.Upperbox>
        <S.Lowerbox>
          <p>
            ETH <strong>{auctionHighestBid}</strong>
          </p>
          <br />
          <span>Auction {auctionState}</span>
        </S.Lowerbox>
      </S.BottomInfo>
    </S.Container>
  )
}
