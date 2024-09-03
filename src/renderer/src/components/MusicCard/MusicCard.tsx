import React from 'react'
import './MusicCard.css'
import { Button } from 'antd'
import { PauseOutlined } from '@ant-design/icons'

const MusicCard: React.FC = () => {
  return (
    <>
      <div className={'MusicCard'}>
        <div className="MusicCard-info">
          <div className={'MusicCard-title'}>听妈妈的话</div>
          <div className={'MusicCard-artist'}>周杰伦</div>
        </div>
        {/*一个播放按钮*/}
        <div className={'MusicCard-play'}>
          <Button type="primary" shape="circle" icon={<PauseOutlined />} />
        </div>
      </div>
    </>
  )
}

export default MusicCard
