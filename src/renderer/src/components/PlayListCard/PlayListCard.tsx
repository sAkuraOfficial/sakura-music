import React from 'react'
import './PlayListCard.css'
import { Button } from 'antd'
import { CaretRightOutlined, PauseOutlined } from '@ant-design/icons'

// 定义组件接收的 props 类型
interface PlayListCardProps {
  title: string
  artist: string
  img: string // 传入背景图的 URL
  isPlaying: boolean
  onPlayPause: () => void // 点击播放/暂停按钮时的回调函数
}

const PlayListCard: React.FC<PlayListCardProps> = ({ title, artist, img, isPlaying, onPlayPause }) => {
  return (
    <div className={'PlayListCard'} style={{ backgroundImage: `url(${img})` }}>
      <div className="PlayListCard-info">
        <div className={'PlayListCard-title'}>{title}</div>
        <div className={'PlayListCard-artist'}>{artist}</div>
      </div>
      {/* 播放/暂停按钮 */}
      <div className={'PlayListCard-play'}>
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

export default PlayListCard
