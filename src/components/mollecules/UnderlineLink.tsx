import UnstyledLink, { UnstyledLinkProps } from '@/components/atoms/UnstyledLink'

import { twclsx } from '@/libs/twclsx'

export interface UnderlineLinkProps extends UnstyledLinkProps {
  children: React.ReactNode
}

const UnderlineLink: React.FC<UnderlineLinkProps> = ({ children, ...props }) => {
  return (
    <UnstyledLink
      className={twclsx(
        'inline-flex',
        'relative border-b-2 border-dotted font-semibold',
        'border-main-3 dark:border-main-2',
        'after:absolute after:-bottom-0.5 after:left-0 hover:after:w-full',
        'after:h-[3px] after:w-0 after:transition-all after:duration-300',
        'after:bg-primary-3 dark:after:bg-primary-2',
        'text-primary-4 dark:text-primary-2 hover:text-primary-2 dark:hover:text-primary-3'
      )}
      {...props}
    >
      {children}
    </UnstyledLink>
  )
}

export default UnderlineLink
