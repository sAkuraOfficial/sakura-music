// src/pages/online/hooks/useRandomSong.ts
import { useState, useEffect } from 'react'

const useRandomSong = () => {
  const [randomSong, setRandomSong] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('http://114.132.98.222:3001/search?keywords=华语')
      .then((response) => response.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length)
        setRandomSong(data[randomIndex])
      })
      .catch((error) => {
        console.error('Error fetching search results:', error)
        setError('Failed to fetch search results')
      })
  }, [])

  return { randomSong, error }
}

export default useRandomSong
