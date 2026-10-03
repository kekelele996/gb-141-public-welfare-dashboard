import React from 'react'

const FundFlow = ({ fundFlow }) => {
  return (
    <div className="fund-flow">
      <div className="fund-flow-title">💼 资金流向明细</div>
      <div className="fund-tree">
        {fundFlow.map((node, index) => (
          <div key={index} className="fund-node">
            <div className="fund-node-header">
              <span className="fund-node-name">{node.name}</span>
              <span className="fund-node-amount">¥{node.amount.toLocaleString()}</span>
            </div>
            <div className="fund-children">
              {node.children.map((child, childIndex) => (
                <div key={childIndex} className="fund-child">
                  <span className="fund-child-name">{child.name}</span>
                  <span className="fund-child-amount">¥{child.amount.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const ProjectCard = ({ project, expanded, onExpand }) => {
  const progress = Math.min((project.raised / project.goal) * 100, 100)
  const progressColor = progress >= 100 ? '#388e3c' : '#667eea'

  return (
    <div className={`project-card ${expanded ? 'expanded' : ''}`} onClick={() => onExpand(project.id)}>
      <div className="project-header">
        <div>
          <div className="project-name">{project.name}</div>
          <div style={{ marginTop: '8px' }}>
            <span className={`project-category category-${project.category}`}>{project.categoryName}</span>
          </div>
        </div>
        <span className={`status-tag status-${project.status}`}>{project.statusName}</span>
      </div>
      
      <div className="project-desc">{project.description}</div>
      
      <div className="progress-section">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ 
              width: `${progress}%`,
              background: progress >= 100 
                ? 'linear-gradient(90deg, #66bb6a 0%, #43a047 100%)' 
                : 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)'
            }}
          />
        </div>
        <div className="progress-info">
          <span>已筹集 <span className="progress-amount">¥{project.raised.toLocaleString()}</span></span>
          <span>目标 ¥{project.goal.toLocaleString()}</span>
        </div>
        <div className="progress-info" style={{ marginTop: '8px' }}>
          <span>受益人数: {project.beneficiaries.toLocaleString()} 人</span>
          <span>{progress.toFixed(1)}%</span>
        </div>
      </div>
      
      {expanded && <FundFlow fundFlow={project.fundFlow} />}
    </div>
  )
}

export default ProjectCard