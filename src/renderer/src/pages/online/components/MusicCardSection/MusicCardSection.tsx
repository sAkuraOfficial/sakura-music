import React from 'react'
import MusicCard from '../../../../components/MusicCard/MusicCard' // 更新路径
import { getImageSrc } from '../../utils' // 更新路径

interface MusicCardSectionProps {
  randomSong: {
    img: string
    artists: { name: string }[]
    name: string
  } | null
}

const MusicCardSection: React.FC<MusicCardSectionProps> = ({ randomSong }) => (
  <div>
    {randomSong && (
      <MusicCard
        img={getImageSrc(randomSong.img)}
        artist={randomSong.artists.map((artist) => artist.name).join(', ')}
        title={randomSong.name}
        isPlaying
        onPlayPause={() => {
          console.log('Play/Pause')
        }}
      />
    )}
  </div>
)

export default MusicCardSection
