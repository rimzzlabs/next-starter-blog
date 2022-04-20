import { AppRoute } from '@/constant/route'
import { SocialMediaProps } from '@/constant/socialMedia'

import UnstyledLink from '../atoms/UnstyledLink'

import clsx from 'clsx'

interface FooterLinkProps<T = SocialMediaProps | AppRoute> {
  data: Array<T>
}

const FooterLinks: React.FunctionComponent<FooterLinkProps> = ({ data }) => {
  return (
    <div className='flex flex-col gap-2 w-full'>
      {data.map((val) => (
        <UnstyledLink
          className={clsx(
            'max-w-max transition text-sm md:text-base',
            'hover:text-primary-4 dark:hover:text-primary-2'
          )}
          key={val.href}
          href={val.href}
        >
          {val.children}
        </UnstyledLink>
      ))}
    </div>
  )
}

export default FooterLinks
