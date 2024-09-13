import React from 'react'
import BannerCarousel from './components/BannerCarousel/BannerCarousel'
import MusicCardSection from './components/MusicCardSection/MusicCardSection'
import ProgressSection from './components/ProgressSection/ProgressSection'
import PlayListContent from './components/PlayListContent/PlayListContent'
import useBanners from './hooks/useBanners'
import useRandomSong from './hooks/useRandomSong'
import usePersonalized from './hooks/usePersonalized'
import './Online.css'

const Online: React.FC = () => {
  const { banners, error: bannersError } = useBanners()
  const { randomSong, error: songError } = useRandomSong()
  const { personalized, error: personalizedError } = usePersonalized()

  if (bannersError || songError || personalizedError) {
    return <div>Error loading data</div>
  }

  return (
    <div className="Page-Online">
      <div className="page-online-header">
        <MusicCardSection randomSong={randomSong} />
        <BannerCarousel
          banners={banners}
          onChange={(currentSlide) => {
            console.log('Current slide:', currentSlide)
          }}
        />
        <ProgressSection percentage={30} />
      </div>
      {/* 歌单推荐 */}
      <div className="play-list-container">
        <div className="play-list-recommend">🎧给您推荐歌单~</div>
        <PlayListContent personalized={personalized} />
      </div>
    </div>
  )
}

export default Online
