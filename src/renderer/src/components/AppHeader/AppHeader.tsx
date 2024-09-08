import React from 'react'
import { Input, Avatar } from 'antd'
import { useNavigate } from 'react-router-dom'
import tx from './tx.jpg'

const { Search } = Input

const AppHeader: React.FC = () => {
  const navigate = useNavigate()

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const onSearch = async (value: string) => {
    try {
      // 发送请求到 API
      const response = await fetch(
        `http://114.132.98.222:3001/search?keywords=${encodeURIComponent(value)}`
      )
      const data = await response.json()

      // 假设搜索结果页面的路径是 `/search`
      // 并且你可以将搜索结果数据传递给结果页面
      navigate(`/search`, { state: { results: data } })
    } catch (error) {
      console.error('Error fetching search results:', error)
    }
  }

  return (
    <>
      <Avatar
        shape={'square'}
        size={'large'}
        style={{ marginRight: '15px' }}
        src={<img src={tx} alt="avatar" />}
      />
      <Search placeholder="搜索音乐" onSearch={onSearch} enterButton />
    </>
  )
}

export default AppHeader
