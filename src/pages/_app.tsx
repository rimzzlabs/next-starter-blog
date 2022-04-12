import '@/styles/tailwind.css'

import { Header } from '@/components'

import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' storageKey='theme' enableSystem>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
