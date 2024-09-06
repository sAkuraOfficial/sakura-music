import React from 'react'
import './MusicCard.css'
import { Button } from 'antd'
import { CaretRightOutlined, PauseOutlined } from '@ant-design/icons'

// 定义组件接收的 props 类型
interface MusicCardProps {
  title: string
  artist: string
  img: string // 传入背景图的 URL
  isPlaying: boolean
  onPlayPause: () => void // 点击播放/暂停按钮时的回调函数
}

const MusicCard: React.FC<MusicCardProps> = ({ title, artist, img, isPlaying, onPlayPause }) => {
  return (
    <div className={'MusicCard'} style={{ backgroundImage: `url(${img})` }}>
      <div className="MusicCard-info">
        <div className={'MusicCard-title'}>{title}</div>
        <div className={'MusicCard-artist'}>{artist}</div>
      </div>
      {/* 播放/暂停按钮 */}
      <div className={'MusicCard-play'}>
        <Button
          type="primary"
          shape="circle"
          icon={isPlaying ? <PauseOutlined /> : <CaretRightOutlined />}
          onClick={onPlayPause}
        />
      </div>
    </div>
  )
}

export default MusicCard
