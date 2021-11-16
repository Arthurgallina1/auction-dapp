import styled from 'styled-components'

export const AuctionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  grid-row-gap: 45px;

  @media screen and (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SectionTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 34px;
  line-height: 1.2;
  margin-bottom: 0;
  color: ${({ theme }) => theme.colors.black};
`

export const TitleWrapper = styled.div`
  margin-bottom: 40px;
  margin-top: 50px;
`
