import React from 'react'
import { Menu, type MenuProps } from 'antd'
import { CustomerServiceOutlined, LaptopOutlined } from '@ant-design/icons'

const menu_items: MenuProps['items'] = [
  {
    key: 'sub1',
    icon: React.createElement(CustomerServiceOutlined),
    label: '在线音乐',
    children: [
      { key: '0', label: '推荐' },
      { key: '1', label: '周杰伦' },
      { key: '2', label: '张杰' },
      { key: '3', label: '华晨宇' },
      { key: '4', label: '时代少年团' }
    ]
  },
  {
    key: 'sub2',
    icon: React.createElement(LaptopOutlined),
    label: '我的音乐',
    children: [
      { key: '5', label: '个人收藏' },
      { key: '6', label: '本地下载' },
      { key: '7', label: '最近播放' }
    ]
  }
]

const AppSider: React.FC = () => {
  return (
    <>
      <Menu
        mode="inline"
        defaultSelectedKeys={['0']}
        defaultOpenKeys={['sub1', 'sub2']}
        style={{ height: '100%', borderRight: 0 }}
        items={menu_items}
      />
    </>
  )
}

export default AppSider
