import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    const mainScreen = document.getElementById('main-screen')
    mainScreen.scrollTo(0, 0)
  }, [pathname])

  return null
}
