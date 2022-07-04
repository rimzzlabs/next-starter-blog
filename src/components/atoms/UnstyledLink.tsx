import { twclsx } from '@/libs/twclsx'

import Link, { LinkProps } from 'next/link'

export type UnstyledLinkProps = {
  children: React.ReactNode
  sr?: string
  title?: string
  className?: string
  onClick?: () => void | (() => Promise<void>)
} & LinkProps

/**
 * An anchor element, with preconfigured and conditially render different type of element
 * base className is `inline-flex`
 * @returns an Unstyled anchor element
 */
const UnstyledLink: React.FunctionComponent<UnstyledLinkProps> = ({ href, className, children, ...props }) => {
  if (href.toString().startsWith('http')) {
    return (
      <a {...props} href={href as string} className={twclsx(className)} target='_blank' rel='noopener noreferrer'>
        {props.sr && <span className='sr-only'>{props.sr}</span>}
        {children}
      </a>
    )
  }
  return (
    // DISABLE DEFAULT SCROLL TO TOP ON NEXTJS LINK
    <Link {...props} scroll={false} href={href}>
      <a title={props.sr} onClick={props.onClick} className={twclsx(className)}>
        {props.sr && <span className='sr-only'>{props.sr}</span>}
        {children}
      </a>
    </Link>
  )
}

export default UnstyledLink
