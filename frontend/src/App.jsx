import React, { useState, useMemo } from 'react'
import StatCard from './components/StatCard.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import Timeline from './components/Timeline.jsx'
import Heatmap from './components/Heatmap.jsx'
import ComparisonChart from './components/ComparisonChart.jsx'
import { projectsData } from './data.js'

function App() {
  const [expandedProject, setExpandedProject] = useState(null)

  const stats = useMemo(() => {
    const ongoingProjects = projectsData.filter(p => p.status === 'ongoing').length
    const totalRaised = projectsData.reduce((sum, p) => sum + p.raised, 0)
    const totalBeneficiaries = projectsData.reduce((sum, p) => sum + p.beneficiaries, 0)
    
    return {
      ongoingProjects,
      totalRaised,
      totalBeneficiaries
    }
  }, [])

  const handleExpand = (id) => {
    setExpandedProject(expandedProject === id ? null : id)
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>🌟 公益项目进展看板</h1>
        <p>实时追踪筹款进度与执行情况，让爱心看得见</p>
      </div>

      <div className="stats-row">
        <StatCard
          icon="📁"
          label="在执行项目数"
          value={stats.ongoingProjects}
          unit="个"
          color="blue"
        />
        <StatCard
          icon="💰"
          label="累计筹款额"
          value={Math.floor(stats.totalRaised / 10000)}
          unit="万元"
          color="green"
        />
        <StatCard
          icon="👥"
          label="累计受益人数"
          value={stats.totalBeneficiaries}
          unit="人"
          color="orange"
        />
      </div>

      <div className="projects-section">
        <div className="section-title">📋 项目列表</div>
        <div className="projects-grid">
          {projectsData.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              expanded={expandedProject === project.id}
              onExpand={handleExpand}
            />
          ))}
        </div>
      </div>

      <div className="main-content">
        <Timeline />
        <Heatmap />
      </div>

      <ComparisonChart />
    </div>
  )
}

export default App