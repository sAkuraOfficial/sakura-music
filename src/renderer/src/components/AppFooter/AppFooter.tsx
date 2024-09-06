import { Avatar } from 'antd'
import React from 'react'
import tx from '../AppHeader/tx.jpg'
import './AppFooter.css'
import { Button } from 'antd'
import {
  CaretLeftOutlined,
  CaretRightOutlined,
  PauseOutlined,
  SoundOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons'

const AppFooter: React.FC = () => {
  return (
    <>
      <div className="footer-container">
        {/*左侧音乐信息*/}
        <div className={'music'}>
          <Avatar shape={'square'} size={50} src={<img src={tx} alt="avatar" />} />
          <div className={'music_info'}>
            <span>听妈妈的话</span>
            <span>周杰伦</span>
          </div>
          <div className={'music_progress'}>
            <div>00:00</div>
            <div>|</div>
            <div>03:00</div>
          </div>
        </div>

        {/* 中间音乐控制 */}
        <div>
          <div className={'music_control'}>
            <Button type="primary" shape="circle" icon={<CaretLeftOutlined />} />
            <Button type="primary" shape="circle" icon={<PauseOutlined />} />
            <Button type="primary" shape="circle" icon={<CaretRightOutlined />} />
          </div>
        </div>

        {/* 右侧音乐播放列表，音量调整等 */}
        <div className={'music_list'}>
          <Button type="dashed" shape="round" icon={<SoundOutlined />} />
          <Button type="dashed" shape="round" icon={<MenuUnfoldOutlined />} />
        </div>
      </div>
    </>
  )
}
export default AppFooter
