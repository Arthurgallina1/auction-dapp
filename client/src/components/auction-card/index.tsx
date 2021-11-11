import React from 'react'

import * as S from './styled'

export const Cards: React.FC = () => {
  return (
    <S.Container>
      <S.Image src='https://picsum.photos/200/150' />
      <S.BottomInfo>
        <h3>pinky ocean</h3>
        <p>2.9 eth</p>

        <p>user</p>
      </S.BottomInfo>
    </S.Container>
  )
}
