// src/pages/online/hooks/useBanners.ts
import { useState, useEffect } from 'react'

const useBanners = () => {
  const [banners, setBanners] = useState<{ img: string }[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('http://114.132.98.222:3001/getBanner')
      .then((response) => response.json())
      .then((data) => setBanners(data))
      .catch((error) => {
        console.error('Error fetching banners:', error)
        setError('Failed to fetch banners')
      })
  }, [])

  return { banners, error }
}

export default useBanners
