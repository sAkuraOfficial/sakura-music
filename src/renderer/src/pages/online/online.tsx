import React, { useState, useEffect } from 'react'
import { Carousel } from 'antd'
import './Online.css'
import MusicCard from '../../components/MusicCard/MusicCard'

const Online: React.FC = () => {
  const [banners, setBanners] = useState<{ img: string }[]>([])
  const [song, setSong] = useState([])

  const getImageSrc = (imgUrl: string) => {
    // if (imgUrl.startsWith('https://p1.music.126.net/')) {
    //   return `/image1/${imgUrl.split('https://p1.music.126.net/')[1]}?param=200y200`
    // } else if (imgUrl.startsWith('https://p2.music.126.net/')) {
    //   return `/image2/${imgUrl.split('https://p2.music.126.net/')[1]}?param=200y200`
    // }
    return `${imgUrl}?param=200y200`
  }
  useEffect(() => {
    // 使用 fetch 获取数据
    fetch('http://114.132.98.222:3001/getBanner')
      .then((response) => response.json())
      .then((data) => setBanners(data))
      .catch((error) => console.error('Error fetching banners:', error))
  }, [])

  //从http://114.132.98.222:3001/search?keywords=周杰伦，获取第一首歌的信息
  useEffect(() => {
    fetch('http://114.132.98.222:3001/search?keywords=周杰伦')
      .then((response) => response.json())
      .then((data) => setSong(data[0]))
      .catch((error) => console.error('Error fetching song:', error))
  }, [])

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const onChange = (currentSlide: number) => {
    console.log(currentSlide)
  }

  return (
    <div className="Page-Online">
      <div className="page-online-header">
        <div>
          <MusicCard
            key={song.id}
            title={song.name}
            artist={'周杰伦'}
            img={getImageSrc(song.img)} // 传入背景图 URL
            onPlayPause={() => {
              /*逻辑 */

            }
            }
            isPlaying={false}
          ></MusicCard>
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
      </div>
    </div>
  )
}

export default Online
