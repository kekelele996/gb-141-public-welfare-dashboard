import React, { useState } from 'react'
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts'
import { projectsData, categories, fundraisingTrendData } from '../data.js'

const ComparisonChart = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects = activeCategory === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory)

  const projectColors = [
    '#667eea', '#f5576c', '#38ef7d', '#ffa726', '#26c6da', '#ab47bc'
  ]

  const formatTooltipValue = (value) => {
    if (value >= 10000) {
      return `¥${(value / 10000).toFixed(1)}万`
    }
    return `¥${value}`
  }

  return (
    <div className="comparison-section">
      <div className="section-title">📊 筹款速度对比</div>
      
      <div className="filter-bar">
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>
      
      <div className="comparison-chart">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={fundraisingTrendData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="month" stroke="#666" />
            <YAxis 
              stroke="#666" 
              tickFormatter={(value) => `${value / 10000}万`}
            />
            <Tooltip 
              formatter={(value) => formatTooltipValue(value)}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
            />
            <Legend />
            {filteredProjects.map((project, index) => (
              <Line
                key={project.id}
                type="monotone"
                dataKey={project.name}
                stroke={projectColors[index % projectColors.length]}
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ComparisonChart