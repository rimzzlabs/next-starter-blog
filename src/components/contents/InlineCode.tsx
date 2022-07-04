import { twclsx } from '@/libs/twclsx'

interface InlineCodeProps {
  children: React.ReactNode
}

const InlineCode: React.FunctionComponent<InlineCodeProps> = ({ children }) => {
  return (
    <code className={twclsx('px-2 py-1 rounded border', 'dark:text-main-1', 'border-main-2 dark:border-main-3')}>
      {children}
    </code>
  )
}

export default InlineCode
