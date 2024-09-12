import React, { useState, useEffect } from 'react'
import { Carousel } from 'antd'
import './Online.css'
import MusicCard from '../../components/MusicCard/MusicCard'
import { buildStyles, CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const Online: React.FC = () => {
  const [banners, setBanners] = useState<{ img: string }[]>([])
  const [randomSong, setrandomSong] = useState({})

  const getImageSrc = (imgUrl: string) => {
    return `${imgUrl}?param=200y200`
  }
  useEffect(() => {
    // 使用 fetch 获取数据
    fetch('http://114.132.98.222:3001/getBanner')
      .then((response) => response.json())
      .then((data) => setBanners(data))
      .catch((error) => console.error('Error fetching banners:', error))
  }, [])

  useEffect(() => {
    fetch('http://114.132.98.222:3001/search?keywords=华语')
      .then((response) => response.json())
      .then((data) => {
        //   data是一个数组,随机取一个
        const randomIndex = Math.floor(Math.random() * data.length)
        setrandomSong(data[randomIndex])
        // console.log(data[randomIndex])
      })
      .catch((error) => console.error('Error fetching search results:', error))
  }, [])

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const onChange = (currentSlide: number) => {
    // console.log(currentSlide)
  }
  const percentage = 30

  return (
    <div className="Page-Online">
      <div className="page-online-header">
        <div>
          {randomSong && (
            <MusicCard
              img={getImageSrc(randomSong.img)}
              artist={
                Array.isArray(randomSong.artists)
                  ? randomSong.artists.map((artist: { name: string }) => artist.name).join(', ')
                  : 'Unknown Artist'
              }
              title={randomSong.name}
              isPlaying={true}
              onPlayPause={() => {
                console.log('Play/Pause')
              }}
            />
          )}
        </div>
        <Carousel
          className={'Banner-Carousel'}
          afterChange={onChange}
          autoplaySpeed={5000}
          autoplay
          arrows={true}
          adaptiveHeight
          draggable
        >
          {banners.map((banner, index) => (
            <div key={index}>
              <img src={banner.img} alt={`Banner ${index}`} className={'Banner-pic'} />
            </div>
          ))}
        </Carousel>
        <div className={'play-number-day-container'}>
          <CircularProgressbarWithChildren
            className={'play-number-day-progress'}
            value={percentage}
            styles={buildStyles({
              textColor: 'red',
              pathColor: 'turquoise',
              trailColor: 'pink'
            })}
          >
            <div style={{ fontSize: 35, marginTop: -20 }}>
              🥰
            </div>
            <div style={{ fontSize: 25, marginTop: -5 }}>
              {percentage}%
            </div>
          </CircularProgressbarWithChildren>
          <div className="play-number-day-title">今日听歌目标</div>
        </div>
      </div>

      {/* 歌单推荐 */}
      <div className={'play-list-container'}>
        <div className="play-list-recommend">歌单推荐</div>
      </div>
    </div>
  )
}

export default Online
