import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 3rem;
  background-color: ${({ theme }) => theme.colors.cardsBg};
  max-width: 200px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

export const Image = styled.img`
  border-radius: 5px;
`

export const BottomInfo = styled.div`
  border-radius: 5px;
`
