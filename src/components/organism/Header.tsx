import { DarkMode, Nav } from '@/components'

import clsx from 'clsx'
import { useRouter } from 'next/router'

export const Header = () => {
  const { pathname } = useRouter()

  if (pathname === '/_error' || pathname === '/404') return null

  return (
    <header className={clsx('fixed inset-0', 'h-16 md:h-20')}>
      <div className={clsx('h-2 w-full', 'bg-gradient-to-r', 'from-primary-3 to-pink-500')} />
      <section className={clsx('layout', 'flex items-center justify-between', 'h-full pb-2')}>
        <Nav />
        <DarkMode />
      </section>
    </header>
  )
}
