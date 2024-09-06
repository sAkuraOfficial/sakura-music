import { Routes, Route } from 'react-router-dom'
import Online from '../../pages/online/online'
import ZhouJieLun from '../../pages/zhoujielun/zhoujielun'
import ZhangJie from '../../pages/ZhangJie/zhangjie'
import HuaChenYu from '../../pages/HuaChenYu/huaChenYu'
import TNT from '../../pages/TNT/TNT'
import Search from '../../pages/search/Search'
import React from 'react'

const AppContent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Online />} />
      <Route path="/zhoujielun" element={<ZhouJieLun />} />
      <Route path="/zhangjie" element={<ZhangJie />} />
      <Route path="/huachenyu" element={<HuaChenYu />} />
      <Route path="/TNT" element={<TNT />} />
      <Route path="/search" element={<Search />} />
      {/* 添加其他页面路由 */}
    </Routes>
  )
}

export default AppContent
