import styled from 'styled-components/macro'

export const BaseButton = styled.button`
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 0.3rem;
  /* border: 1px solid ${({ theme }) => theme.colors.white}; */
  border: 0;
  padding: 0.5rem 1rem;
  cursor: pointer;
`
