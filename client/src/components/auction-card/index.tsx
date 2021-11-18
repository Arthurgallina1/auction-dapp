import Badge from 'components/badge'
import { useHistory } from 'react-router-dom'
import { RiAuctionFill } from 'react-icons/ri'
import { AiOutlineHeart } from 'react-icons/ai'
import { AuctionStateEnum } from 'data/models'
import * as S from './styled'

type AuctionCardType = {
  name: string
  currentBid: number
  user: string
  status: AuctionStateEnum
  address: string
}

export default function AuctionCard({
  name,
  currentBid,
  user,
  status = AuctionStateEnum.Canceled,
  address,
}: AuctionCardType): JSX.Element {
  const history = useHistory()
  const showAuctionState = true //status === AuctionStateEnum.Canceled
  const onCardClick = () => {
    history.push(`/auction/${address}`)
  }

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
          <S.AuctionTitle>{name}</S.AuctionTitle>
          <div>
            <small>By</small> <S.UserTitle href='/'>{address}</S.UserTitle>
          </div>
        </S.Upperbox>
        <S.Lowerbox>
          <p>
            ETH <strong>{currentBid}</strong>
          </p>
          <br />
          {showAuctionState && <span>Auction {status}</span>}
        </S.Lowerbox>
      </S.BottomInfo>
    </S.Container>
  )
}
