import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'

export type UnstyledLinkProps = {
  children: React.ReactNode
  sr?: string
  title?: string
  className?: string
} & LinkProps

const UnstyledLink: React.FunctionComponent<UnstyledLinkProps> = ({ href, className, children, ...props }) => {
  const baseClassName = 'inline-flex items-center justify-center'
  if (href.toString().startsWith('http')) {
    return (
      <a
        {...props}
        href={href as string}
        className={clsx(baseClassName, className)}
        target='_blank'
        rel='noopener noreferrer'
      >
        {props.sr && <span className='sr-only'>{props.sr}</span>}
        {children}
      </a>
    )
  }
  return (
    <Link {...props} href={href}>
      <a title={props.sr} className={clsx(baseClassName, className)}>
        {props.sr && <span className='sr-only'>{props.sr}</span>}
        {children}
      </a>
    </Link>
  )
}

export default UnstyledLink
