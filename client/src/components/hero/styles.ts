import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2.5rem;
  background: linear-gradient(
    -45deg,
    rgba(5, 67, 236, 1) 45%,
    rgba(247, 196, 45, 1) 45%
  );
  width: 100%;
  min-height: 50vh;
`
export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1000px;
`
export const Subtitle = styled.h4`
  color: ${({ theme }) => theme.colors.white};
`
export const LeftSide = styled.div``

export const RightSide = styled.div`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`

export const HeroHeading = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`

export const HeroImage = styled.img`
  padding: 5px;
  width: 300px;
  height: 350px;
  border-radius: 10px;
`
