import Button from '@/components/atoms/Button'

import { CheckCircleIcon, ClipboardCopyIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

interface PreProps {
  children: React.ReactNode
  className?: string
}

const Pre: React.FunctionComponent<PreProps> = ({ children, className }) => {
  const [isCopied, setIsCopied] = useState<boolean>(false)
  const preRef = useRef<HTMLPreElement>(null)

  const copyToClipboard = async () => {
    if (preRef.current && !isCopied) {
      await navigator.clipboard.writeText(preRef.current.textContent as string)
      setIsCopied(true)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => setIsCopied(false), 1500)

    return () => clearTimeout(timer)
  }, [isCopied])

  return (
    <div className='relative'>
      <div
        className={clsx(
          'absolute left-0 top-0',
          'inline-flex items-center justify-center',
          'w-11 h-11 rounded-tl rounded-br',
          'font-semibold text-sm',
          'bg-slate-700 dark:bg-slate-800 text-main-1.5'
        )}
      >
        {className?.replace('language-', '').toUpperCase()}
      </div>

      <Button
        onClick={copyToClipboard}
        screenReaderText='Copy To Clipboard'
        className={clsx(
          'absolute right-4 top-4',
          'inline-flex items-center justify-center',
          'w-9 h-10 rounded-lg transition-all duration-200',
          'bg-slate-700 dark:bg-slate-800 ring-main-2',
          'hover:ring'
        )}
      >
        {isCopied ? (
          <CheckCircleIcon className='w-4 h-4 text-emerald-500' />
        ) : (
          <ClipboardCopyIcon className='w-4 h-4 text-main-1' />
        )}
      </Button>
      <pre ref={preRef} style={{ paddingTop: '4rem' }} className={className}>
        {children}
      </pre>
    </div>
  )
}

export default Pre
