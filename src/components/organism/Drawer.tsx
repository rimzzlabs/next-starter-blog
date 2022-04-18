import UnstyledLink from '@/components/atoms/UnstyledLink'

import { APP_ROUTE } from '@/constant/route'
import useDrawer from '@/hooks/useDrawer'

import clsx from 'clsx'
import { Variants, m } from 'framer-motion'

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { staggerChildren: 0.05, ease: 'easeOut' } }
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
  },
  exit: {
    opacity: 0,
    x: -25
  }
}

const Drawer = () => {
  const { changeState } = useDrawer()

  return (
    <aside
      className={clsx(
        'fixed left-0 bottom-0 top-20 z-50',
        'w-screen h-screen backdrop-blur',
        'bg-main-1 dark:bg-main-5',
        'md:hidden'
      )}
    >
      <nav className='layout flex flex-col'>
        <m.ul variants={container} initial='hidden' animate='visible' exit='exit'>
          {APP_ROUTE.map((prop, id) => (
            <m.li key={id} variants={item}>
              <UnstyledLink
                key={id}
                href={prop.href}
                onClick={changeState}
                className={clsx(
                  'text-left w-full',
                  'py-4 border-b font-bold',
                  'text-main-4 dark:text-main-2 border-b-main-2 dark:border-b-main-3'
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
