import styled from 'styled-components/macro'

export const HeroContainer = styled.div`
  display: flex;
  padding: 2.5rem;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.dodgerBlue};
  min-height: 50vh;
`
export const LeftSide = styled.div``

export const RightSide = styled.div``

export const HeroHeading = styled.h1`
  color: ${({ theme }) => theme.colors.white};
`

export const HeroImage = styled.img`
  width: 300px;
  height: 350px;
  border-radius: 10px;
`
