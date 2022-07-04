import UnstyledLink from '@/components/atoms/UnstyledLink'

import { APP_ROUTE } from '@/constant/route'
import { twclsx } from '@/libs/twclsx'

import { useRouter } from 'next/router'

const Nav = () => {
  const { pathname } = useRouter()

  return (
    <nav className={twclsx('md:flex items-center space-x-4', 'hidden')}>
      {APP_ROUTE.map((item, id) => (
        <UnstyledLink
          key={id}
          href={item.href}
          className={twclsx(
            'px-1.5 py-0.5 transition font-semibold bg-gradient-to-tr',
            pathname === item.href
              ? 'text-main-1 dark:text-primary-2 from-primary-3 to-secondary-3 dark:bg-none'
              : 'text-main-4 dark:text-main-1 hover:from-primary-2 to-secondary-2 hover:text-main-1 dark:hover:bg-none dark:hover:text-primary-1'
          )}
        >
          {item.children}
        </UnstyledLink>
      ))}
    </nav>
  )
}

export default Nav
