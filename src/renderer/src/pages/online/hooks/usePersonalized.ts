// src/pages/online/hooks/usePersonalized.ts
import { useState, useEffect } from 'react'

const usePersonalized = () => {
  const [personalized, setPersonalized] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('http://114.132.98.222:3001/personalized?limit=10')
      .then((response) => response.json())
      .then((data) => setPersonalized(data))
      .catch((error) => {
        console.error('Error fetching personalized:', error)
        setError('Failed to fetch personalized')
      })
  }, [])
  return { personalized, error }
}

export default usePersonalized
