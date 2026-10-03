import React from 'react'
import { heatmapData } from '../data.js'

const Heatmap = () => {
  const maxValue = Math.max(...heatmapData.map(d => d.value))
  
  const getColor = (value) => {
    const intensity = value / maxValue
    if (intensity > 0.8) return '#0d47a1'
    if (intensity > 0.6) return '#1565c0'
    if (intensity > 0.4) return '#1976d2'
    if (intensity > 0.2) return '#42a5f5'
    return '#90caf9'
  }

  return (
    <div className="heatmap-section">
      <div className="section-title">🗺️ 受益人分布</div>
      <div className="heatmap-container">
        <div className="heatmap-grid">
          {heatmapData.map((item, index) => (
            <div 
              key={index} 
              className="heatmap-cell"
              style={{ backgroundColor: getColor(item.value) }}
              title={`${item.region}: ${item.value}人`}
            >
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '14px', fontWeight: 600 }}>{item.region}</div>
                <div style={{ fontSize: '11px', opacity: 0.9 }}>{item.value}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="heatmap-legend">
          <span>少</span>
          <div className="heatmap-legend-bar" />
          <span>多</span>
        </div>
      </div>
    </div>
  )
}

export default Heatmap