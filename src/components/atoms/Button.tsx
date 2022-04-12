import clsx from 'clsx'

export interface ButtonProps {
  children: React.ReactNode
  sr?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button: React.FunctionComponent<ButtonProps> = ({ children, sr, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(
        'inline-flex items-center justify-between',
        'p-2 rounded-lg transition-all',
        'outline-none',
        'ring-offset-2 ring-offset-main-1 dark:ring-offset-main-5',
        'ring-main-3/70 dark:ring-main-3',
        'bg-main-2 dark:bg-main-4',
        'hover:ring-2',
        sr && 'relative'
      )}
    >
      {sr && <span className='sr-only'>{sr}</span>}
      {children}
    </button>
  )
}
