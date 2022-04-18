import Drawer from '@/components/organism/Drawer'

import useDrawer from '@/hooks/useDrawer'

import { MenuAlt4Icon, XIcon } from '@heroicons/react/outline'
import clsx from 'clsx'

const DrawerToggler = () => {
  const { isOpen, changeState } = useDrawer()

  return (
    <>
      <button
        onClick={changeState}
        className={clsx(
          'relative flex items-center justify-center',
          'md:hidden w-9 h-9 rounded-md -ml-2 z-50',
          'text-main-5 dark:text-main-1'
        )}
      >
        {isOpen ? <XIcon className='w-4 h-4' /> : <MenuAlt4Icon className='w-4 h-4' />}
      </button>

      {isOpen && <Drawer />}
    </>
  )
}

export default DrawerToggler
