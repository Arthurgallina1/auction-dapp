import React from 'react'

import * as S from './styled'

type AuctionCardType = {
  name: string
  currentBid: number
  user: string
}

export default function AuctionCard({
  name,
  currentBid,
  user,
}: AuctionCardType): JSX.Element {
  return (
    <S.Container>
      <S.Image src='https://picsum.photos/200/150' />
      <S.BottomInfo>
        <S.Upperbox>
          <S.AuctionTitle>{name}</S.AuctionTitle>
          <div>
            <small>By</small> <S.UserTitle href='/'>{user}</S.UserTitle>
          </div>
        </S.Upperbox>
        <S.Lowerbox>
          ETH <strong>{currentBid}</strong>
        </S.Lowerbox>
      </S.BottomInfo>
    </S.Container>
  )
}
