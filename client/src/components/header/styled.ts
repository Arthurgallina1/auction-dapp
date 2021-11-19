import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  display: flex;
  padding: 0 25px;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`
