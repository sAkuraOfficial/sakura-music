import React from 'react'
import { useLocation } from 'react-router-dom'
import MusicCard from '../../components/MusicCard/MusicCard'
import './Search.css' // 确保 CSS 文件存在并包含相关样式

interface Artist {
  id: number
  name: string
}

interface SearchResult {
  id: number
  name: string
  artists: Artist[]
  img: string // 音乐封面
}

const Search: React.FC = () => {
  const location = useLocation()
  const results: SearchResult[] = location.state?.results || []

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const getImageSrc = (imgUrl: string) => {
    if (imgUrl.startsWith('https://p1.music.126.net/')) {
      return `/image1/${imgUrl.split('https://p1.music.126.net/')[1]}?param=200y200`
    } else if (imgUrl.startsWith('https://p2.music.126.net/')) {
      return `/image2/${imgUrl.split('https://p2.music.126.net/')[1]}?param=200y200`
    }
    return `${imgUrl}?param=200y200`
  }

  return (
    <div style={{ padding: '20px' }} className={'Page-Search'}>
      {results.length > 0 ? (
        <div className={'MusicCardContainer'}>
          {results.map((result) => (
            <MusicCard
              key={result.id}
              title={result.name}
              artist={result.artists.map((artist) => artist.name).join(', ')}
              img={getImageSrc(result.img)} // 传入背景图 URL
              isPlaying={false}
              onPlayPause={() => {
                /*逻辑 */
              }}
            />
          ))}
        </div>
      ) : (
        <p>没有找到结果</p>
      )}
    </div>
  )
}

export default Search
