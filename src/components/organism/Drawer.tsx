import { APP_ROUTE } from '@/constant/route'
import useDrawer from '@/hooks/useDrawer'

import clsx from 'clsx'
import Link from 'next/link'

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
        {APP_ROUTE.map((prop, id) => (
          <Link key={id} href={prop.href}>
            <a
              onClick={changeState}
              className={clsx(
                'inline-flex items-center',
                'py-4 border-b font-bold',
                'text-main-4 dark:text-main-2 border-b-main-2 dark:border-b-main-3'
              )}
            >
              {prop.children}
            </a>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default Drawer
