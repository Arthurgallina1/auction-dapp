import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.cardsBg};
  max-width: 200px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 5px;
`

export const Image = styled.img`
  border-radius: 5px 5px 0 0;
`

export const BottomInfo = styled.div`
  padding: 0 2rem;
  width: 100%;
  border-radius: 5px;
`
