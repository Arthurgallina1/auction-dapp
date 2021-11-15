import styled from 'styled-components/macro'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.cardsBg};
  width: 275px;
  box-shadow: ${({ theme }) => theme.shadow.default};
  border-radius: 5px;
  cursor: pointer;
`

export const Badges = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 20px;
  left: 10px;
  z-index: 10;
`
export const BadgeContainer = styled.div`
  margin-bottom: 10px;
`

export const Image = styled.img`
  height: 185px;
  width: 170px;

  &:hover {
    transition: scale ${({ theme }) => theme.transition.default};
    scale: 1.05;
  }
`

export const UpperInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 230px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  width: 100%;
`

export const UserTitle = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  cursor: pointer;
`

export const Upperbox = styled.div`
  display: flex;
  flex-direction: column;
`

export const Lowerbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  p {
    margin: 0;
  }

  span {
    color: ${({ theme }) => theme.colors.grey};
  }
`

export const AuctionTitle = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-size: 20px;
  margin: 16px 0 3px 0;
`

export const BottomInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  width: 100%;
  border-radius: 5px;
`
