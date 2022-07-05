import Button from '@/components/atoms/Button'
import Drawer from '@/components/organism/Drawer'

import { useDrawer } from '@/hooks'
import { twclsx } from '@/libs/twclsx'

import { MenuAlt4Icon, XIcon } from '@heroicons/react/outline'
import { AnimatePresence, Variants, m } from 'framer-motion'

const v: Variants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { type: 'tween', duration: 0.05 } },
  exit: { scale: 0 }
}

const DrawerToggler = () => {
  const { isOpen, changeState } = useDrawer()

  return (
    <>
      <Button
        onClick={changeState}
        screenReaderText='toggle drawer'
        className={twclsx(
          'relative flex items-center justify-center',
          'md:hidden w-9 h-9 rounded-md -ml- z-50',
          'text-main-5 dark:text-main-1'
        )}
      >
        <AnimatePresence exitBeforeEnter>
          {isOpen ? (
            <m.span key='close' variants={v} initial='hidden' animate='visible' exit='exit'>
              <XIcon className='w-4 h-4' />
            </m.span>
          ) : (
            <m.span key='open' variants={v} initial='hidden' animate='visible' exit='exit'>
              <MenuAlt4Icon className='w-4 h-4' />
            </m.span>
          )}
        </AnimatePresence>
      </Button>

      <AnimatePresence exitBeforeEnter>{isOpen && <Drawer />}</AnimatePresence>
    </>
  )
}

export default DrawerToggler
