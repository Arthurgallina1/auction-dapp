import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 20px 0px 20px;
  border: ${({ theme }) => theme.colors.gray} 1px solid;
  border-radius: 5px;

  h3 {
    margin: 0;
    line-height: 1.5;
    font-size: 14px;
  }
`

export const PriceBox = styled.div`
  margin: 7px 0 10px 0;
`
