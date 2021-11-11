import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.headerBg};
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`