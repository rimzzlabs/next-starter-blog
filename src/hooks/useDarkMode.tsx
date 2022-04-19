import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const useDarkMode = () => {
  const { theme, setTheme, systemTheme } = useTheme(),
    [mounted, setMounted] = useState<boolean>(false),
    currentTheme = theme === 'system' ? systemTheme : theme

  const changeTheme = () => {
    if (currentTheme === 'dark') {
      setTheme('light')
      return
    }
    setTheme('dark')
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (currentTheme) {
      setTheme(currentTheme)
    }
  }, [currentTheme])

  return {
    mounted,
    changeTheme,
    theme
  }
}

export default useDarkMode
