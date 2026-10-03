import React from 'react'
import { timelineData } from '../data.js'

const Timeline = () => {
  return (
    <div className="timeline-section">
      <div className="section-title">📅 项目时间轴</div>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-title">{item.title}</div>
            <div className="timeline-desc">{item.description}</div>
            <div className="timeline-photo">{item.photo}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline