import { Button } from '@/components'

import useDarkMode from '@/hooks/useDarkMode'

import { MoonIcon, SunIcon } from '@heroicons/react/solid'

export const DarkMode = () => {
  const { theme, mounted, changeTheme } = useDarkMode()

  if (!mounted) return null

  return (
    <Button sr='switch theme' onClick={changeTheme}>
      {theme === 'dark' ? (
        <MoonIcon className='w-4 md:w-5 h-4 md:h-5 text-yellow-500' />
      ) : (
        <SunIcon className='w-4 md:w-5 h-4 md:h-5 text-main-3' />
      )}
    </Button>
  )
}
