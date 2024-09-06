import React, { useEffect, useState } from 'react'
import MusicCard from '../../components/MusicCard/MusicCard'
import './Online.css'
import zj from './zj.png'

const Online: React.FC = () => {
  const [musicData, setMusicData] = useState([])
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    fetch('/api/music')
      .then((response) => response.json())
      .then((data) => setMusicData(data))
      .catch((error) => console.error('Error fetching music data:', error))
  }, [])

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className={'Page-Online'}>
      {musicData.map((music) => (
        <MusicCard
          key={music.id}
          title={music.title}
          artist={music.artist}
          img={zj}
          isPlaying={isPlaying}
          onPlayPause={handlePlayPause}
        />
      ))}
    </div>
  )
}

export default Online
