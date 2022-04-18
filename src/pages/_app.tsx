import '@/styles/tailwind.css'

import Header from '@/components/organism/Header'

import { AnimatePresence, LazyMotion, Variants, domAnimation, m } from 'framer-motion'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'

const v: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: 0
  }
}

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute='class' storageKey='theme' enableSystem>
      <Header />
      <LazyMotion features={domAnimation}>
        {/* disable initial animation to get higher score on lighthouse */}
        <AnimatePresence initial={false} onExitComplete={() => window.scrollTo(0, 0)} exitBeforeEnter>
          <m.div
            key={router.route}
            variants={v}
            initial='hidden'
            animate='visible'
            exit='exit'
            transition={{
              duration: 0.25,
              type: 'tween'
            }}
          >
            <Component as={Fragment} {...pageProps} />
          </m.div>
        </AnimatePresence>
      </LazyMotion>
    </ThemeProvider>
  )
}

export default MyApp
