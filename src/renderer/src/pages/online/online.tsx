import React, { useState, useEffect } from 'react'
import { Carousel } from 'antd'
import './Online.css'

const contentStyle: React.CSSProperties = {
  width: '100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79'
}

const Online: React.FC = () => {
  const [banners, setBanners] = useState<{ img: string }[]>([])

  useEffect(() => {
    // 使用 fetch 获取数据
    fetch('http://114.132.98.222:3001/getBanner')
      .then(response => response.json())
      .then(data => setBanners(data))
      .catch(error => console.error('Error fetching banners:', error))

    // 如果使用 axios 获取数据
    // axios.get('http://114.132.98.222:3001/getBanner')
    //   .then(response => setBanners(response.data))
    //   .catch(error => console.error('Error fetching banners:', error))
  }, [])

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const onChange = (currentSlide: number) => {
    console.log(currentSlide)
  }

  return (
    <div className="Page-Online">

      <Carousel afterChange={onChange} autoplay>
        {banners.map((banner, index) => (
          <div key={index}>
            <img src={banner.img} alt={`Banner ${index}`} style={contentStyle} />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Online
