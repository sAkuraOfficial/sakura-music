import React from 'react'

import { Input, Avatar } from 'antd'
import type { GetProps } from 'antd'
type SearchProps = GetProps<typeof Input.Search>

import tx from './tx.jpg'

const { Search } = Input

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value)

const AppHeader: React.FC = () => {
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
