import UnstyledLink from '@/components/atoms/UnstyledLink'

import { APP_ROUTE } from '@/constant/route'

import clsx from 'clsx'
import { useRouter } from 'next/router'

const Nav = () => {
  const { pathname } = useRouter()

  return (
    <nav className={clsx('md:flex items-center space-x-4', 'hidden')}>
      {APP_ROUTE.map((item, id) => (
        <UnstyledLink
          scroll={false}
          key={id}
          href={item.href}
          className={clsx(
            'px-1.5 py-0.5 transition font-semibold',
            pathname === item.href
              ? 'text-main-5 dark:text-primary-2 bg-primary-1 hover:bg-primary-1 dark:bg-transparent'
              : 'text-main-4 dark:text-main-1 hover:bg-primary-0.5 dark:hover:bg-transparent dark:hover:text-primary-3'
          )}
        >
          {item.children}
        </UnstyledLink>
      ))}
    </nav>
  )
}

export default Nav
