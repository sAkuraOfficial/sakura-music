import React from 'react'
import { Menu, type MenuProps } from 'antd'
import { CustomerServiceOutlined, LaptopOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const menu_items: MenuProps['items'] = [
  {
    key: 'sub1',
    icon: React.createElement(CustomerServiceOutlined),
    label: '在线音乐',
    children: [
      { key: '/', label: '推荐' },
      { key: '/zhoujielun', label: '周杰伦' },
      { key: '/zhangjie', label: '张杰' },
      { key: '/huachenyu', label: '华晨宇' },
      { key: '/TNT', label: 'TNT' }
    ]
  },
  {
    key: 'sub2',
    icon: React.createElement(LaptopOutlined),
    label: '我的音乐',
    children: [
      { key: '/star', label: '个人收藏' },
      { key: '/download', label: '本地下载' },
      { key: '/history', label: '最近播放' }
    ]
  }
]

const AppSider: React.FC = () => {
  const navigate = useNavigate()

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleMenuClick = (e) => {
    navigate(e.key)
  }

  return (
    <>
      <Menu
        mode="inline"
        defaultSelectedKeys={['/']}
        defaultOpenKeys={['sub1', 'sub2']}
        style={{ height: '100%', borderRight: 0 }}
        items={menu_items}
        onClick={handleMenuClick}
      />
    </>
  )
}

export default AppSider
