import { StyledThemeProvider } from '../src/definitions/styled-components'

export const decorators = [
  (Story) => (
    <StyledThemeProvider>
      <Story />
    </StyledThemeProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
