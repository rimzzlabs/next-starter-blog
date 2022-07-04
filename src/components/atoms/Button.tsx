import { createElement } from 'react'

export interface ButtonProps {
  children: React.ReactNode
  className?: string
  screenReaderText?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  disabled?: boolean
}

const Button: React.FunctionComponent<ButtonProps> = ({ children, screenReaderText, ...props }) =>
  createElement(
    'button',
    { ...props, [screenReaderText ? 'aria-label' : '']: screenReaderText },
    screenReaderText ? <span className='sr-only'>{screenReaderText}</span> : null,
    children
  )

export default Button
