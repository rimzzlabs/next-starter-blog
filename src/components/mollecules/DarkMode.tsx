import useDarkMode from '@/hooks/useDarkMode'

import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import clsx from 'clsx'

const DarkMode = () => {
  const { theme, mounted, changeTheme } = useDarkMode()

  if (!mounted) return null

  return (
    <button
      onClick={changeTheme}
      className={clsx('inline-flex items-center justify-center', 'w-9 h-9 rounded-lg', 'bg-main-1.5 dark:bg-main-4')}
    >
      {theme === 'dark' ? (
        <SunIcon className='w-4 md:w-5 h-4 md:h-5 text-yellow-500' />
      ) : (
        <MoonIcon className='w-4 md:w-5 h-4 md:h-5 text-main-3' />
      )}
    </button>
  )
}

export default DarkMode
