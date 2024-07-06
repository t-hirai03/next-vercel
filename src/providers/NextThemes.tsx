'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes' // eslint-disable-line import/no-extraneous-dependencies
import { type ThemeProviderProps } from 'next-themes/dist/types'

export const ThemeProvider = (props: ThemeProviderProps): React.JSX.Element => {
  return NextThemesProvider(props) as React.JSX.Element
}
