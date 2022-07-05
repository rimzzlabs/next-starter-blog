import UnstyledLink from '@/components/atoms/UnstyledLink'

import { APP_ROUTE } from '@/constant/route'
import { useDrawer } from '@/hooks'
import { twclsx } from '@/libs/twclsx'

import { Variants, m } from 'framer-motion'
import { useRouter } from 'next/router'

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05, ease: 'easeOut' } }
}

const item: Variants = {
  hidden: {
    ...container.hidden,
    x: -20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: 'easeOut'
    }
  }
}

const Drawer = () => {
  const { changeState } = useDrawer()
  const { pathname } = useRouter()

  return (
    <aside
      aria-labelledby='toggle drawer'
      className={twclsx(
        'fixed left-0 bottom-0 top-20 z-50',
        'w-screen h-screen backdrop-blur',
        'bg-main-1 dark:bg-main-5',
        'md:hidden'
      )}
    >
      <nav className='layout flex flex-col'>
        <m.ul variants={container} initial='hidden' animate='visible'>
          {APP_ROUTE.map((prop, id) => (
            <m.li key={id} variants={item}>
              <UnstyledLink
                key={id}
                href={prop.href}
                onClick={changeState}
                className={twclsx(
                  'inline-flex text-left w-full',
                  'py-4 border-b-2 font-bold',
                  pathname === prop.href
                    ? 'text-main-5 dark:text-main-1 border-primary-4 dark:border-primary-2'
                    : 'text-main-5/75 dark:text-main-2 border-main-2 dark:border-b-main-3'
                )}
              >
                {prop.children}
              </UnstyledLink>
            </m.li>
          ))}
        </m.ul>
      </nav>
    </aside>
  )
}

export default Drawer
