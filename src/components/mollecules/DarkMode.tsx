import Button from '@/components/atoms/Button'

import { useDarkMode } from '@/hooks'
import { twclsx } from '@/libs/twclsx'

import { MoonIcon, SunIcon } from '@heroicons/react/solid'

const DarkMode = () => {
  const { theme, mounted, changeTheme } = useDarkMode()

  if (!mounted) return null

  return (
    <Button
      onClick={changeTheme}
      screenReaderText='Switch to dark mode or light mode'
      className={twclsx(
        'inline-flex items-center justify-center',
        'w-9 h-9 rounded-lg transition-all hover:ring',
        'bg-main-1.5 dark:bg-main-4',
        'ring-main-2 dark:ring-main-3',
        'ring-offset-2 ring-offset-white dark:ring-offset-main-5'
      )}
    >
      {theme === 'dark' ? (
        <SunIcon className='w-4 md:w-5 h-4 md:h-5 text-yellow-500' />
      ) : (
        <MoonIcon className='w-4 md:w-5 h-4 md:h-5 text-main-3' />
      )}
    </Button>
  )
}

export default DarkMode
