import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
