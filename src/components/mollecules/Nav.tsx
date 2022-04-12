import { APP_ROUTE } from '@/constant/route'

import clsx from 'clsx'
import Link from 'next/link'

export const Nav = () => (
  <nav className={clsx('flex items-center -ml-4')}>
    {APP_ROUTE.map((item, id) => (
      <Link key={item.href + id} href={item.href}>
        <a
          className={clsx(
            'py-2 px-4 transition rounded-lg',
            'text-main-4 dark:text-main-1',
            'hover:bg-main-2 dark:hover:bg-main-4'
          )}
        >
          {item.children}
        </a>
      </Link>
    ))}
  </nav>
)
