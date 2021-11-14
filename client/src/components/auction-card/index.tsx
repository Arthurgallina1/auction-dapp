import { AuctionStateEnum } from 'data/models'
import * as S from './styled'

type AuctionCardType = {
  name: string
  currentBid: number
  user: string
  status: AuctionStateEnum
}

export default function AuctionCard({
  name,
  currentBid,
  user,
  status = AuctionStateEnum.Canceled,
}: AuctionCardType): JSX.Element {
  const showAuctionState = status === AuctionStateEnum.Canceled
  return (
    <S.Container>
      <S.UpperInfo>
        <S.Badges>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </S.Badges>
        <S.Image src='https://picsum.photos/200/150' />
      </S.UpperInfo>

      <S.BottomInfo>
        <S.Upperbox>
          <S.AuctionTitle>{name}</S.AuctionTitle>
          <div>
            <small>By</small> <S.UserTitle href='/'>{user}</S.UserTitle>
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
