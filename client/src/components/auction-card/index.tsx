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
        <h3>{name}</h3>
        <p>{currentBid} eth</p>

        <p>{user}</p>
      </S.BottomInfo>
    </S.Container>
  )
}
