import React from 'react'
import { Carousel } from 'antd'
import './BannerCarousel.css'

interface BannerCarouselProps {
  banners: { img: string }[]
  onChange: (currentSlide: number) => void
}

const BannerCarousel: React.FC<BannerCarouselProps> = ({ banners, onChange }) => (
  <Carousel
    className="Banner-Carousel"
    afterChange={onChange}
    autoplaySpeed={5000}
    autoplay
    arrows
    adaptiveHeight
    draggable
  >
    {banners.map((banner, index) => (
      <div key={index}>
        <img src={banner.img} alt={`Banner ${index}`} className="Banner-pic" />
      </div>
    ))}
  </Carousel>
)

export default BannerCarousel
