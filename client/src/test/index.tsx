import React from 'react'
import { RenderResult, render } from '@testing-library/react'
import { StyledThemeProvider } from 'definitions/styled-components'
/**
 * Custom renderer example with @testing-library/react
 * You can customize it to your needs.
 *
 * To learn more about customizing renderer,
 * please visit https://testing-library.com/docs/react-testing-library/setup
 */

export const AllTheProviders = ({ children }) => {
  return <>{children}</>
}

// const render = (ui: ReactElement, options?: Omit<RenderOptions, "queries">) =>
// baseRender(ui, { wrapper: AllTheProviders, ...options }) as RenderResult;

const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<StyledThemeProvider>{children}</StyledThemeProvider>)

// re-export everything
export * from '@testing-library/react'

// override render method
export { render, renderWithTheme }
