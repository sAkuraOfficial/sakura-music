import React, { useEffect, useRef, useState } from 'react'
import PlayListCard from '../../../../components/PlayListCard/PlayListCard'
import './PlayListContent.css'

interface PlayListContentProps {
  personalized: { name: string; img: string }[]
}

const PlayListContent: React.FC<PlayListContentProps> = ({ personalized }) => {
  const [visibleItems, setVisibleItems] = useState<any[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateVisibleItems = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        const cardWidth = 150 // Card width, adjust as necessary
        const cardMargin = 15 // Margin between cards
        const totalCardWidth = cardWidth + cardMargin

        // Calculate the number of cards that can fit
        const visibleCount = Math.floor(containerWidth / totalCardWidth)

        // Only update visible items if there are enough to fill at least one card
        if (visibleCount > 0) {
          setVisibleItems(personalized.slice(0, visibleCount))
        } else {
          setVisibleItems([])
        }
      }
    }

    updateVisibleItems()
    window.addEventListener('resize', updateVisibleItems)

    return () => {
      window.removeEventListener('resize', updateVisibleItems)
    }
  }, [personalized])

  return (
    <div className="play-list-content" ref={containerRef}>
      {visibleItems.map((item, index) => (
        <div className="music-card" key={index}>
          <PlayListCard
            title={item.name}
            img={item.img}
            isPlaying={false}
            onPlayPause={() => {}}
            artist={''}
          />
        </div>
      ))}
    </div>
  )
}

export default PlayListContent
