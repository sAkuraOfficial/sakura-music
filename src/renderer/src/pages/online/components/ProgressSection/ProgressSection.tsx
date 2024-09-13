import React from 'react'
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import './ProgressSection.css'

interface ProgressSectionProps {
  percentage: number
}

const ProgressSection: React.FC<ProgressSectionProps> = ({ percentage }) => (
  <div className="play-number-day-container">
    <CircularProgressbarWithChildren
      className="play-number-day-progress"
      value={percentage}
      styles={buildStyles({
        textColor: 'red',
        pathColor: 'turquoise',
        trailColor: 'pink'
      })}
    >
      <div className="progress-text-container">
        <div style={{ fontSize: 35, marginTop: -20 }}>🥰</div>
        <div style={{ fontSize: 25, marginTop: -5 }}>{percentage}%</div>
      </div>
    </CircularProgressbarWithChildren>
    <div className="play-number-day-title">今日听歌目标</div>
  </div>
)

export default ProgressSection
