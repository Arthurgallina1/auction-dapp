import * as S from './style'

type BadgeType = {
  icon: JSX.Element
  onClick: () => void
}
export default function Badge({ icon, onClick }: BadgeType) {
  return <S.Container onClick={onClick}>{icon}</S.Container>
}
