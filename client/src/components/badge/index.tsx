import * as S from './style'

type BadgeType = {
  icon: JSX.Element
  color?: string
  onClick: () => void
}
export default function Badge({ color = 'blue', icon, onClick }: BadgeType) {
  return (
    <S.Container onClick={onClick} color={color}>
      {icon}
    </S.Container>
  )
}
