import styled from 'styled-components'

export const Container = styled.div<{ color: string }>`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  background: ${({ theme, color }) =>
    color === 'blue' ? theme.colors.primary : 'white'};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
