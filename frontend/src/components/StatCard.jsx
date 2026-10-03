import React from 'react'

const StatCard = ({ icon, label, value, unit, color }) => {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${color}`}>{icon}</div>
      <div className="stat-content">
        <h3>{label}</h3>
        <span className="stat-value">{value.toLocaleString()}</span>
        {unit && <span className="stat-unit">{unit}</span>}
      </div>
    </div>
  )
}

export default StatCard