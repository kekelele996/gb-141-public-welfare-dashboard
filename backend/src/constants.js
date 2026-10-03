const project = {
  id: 'gb-141',
  name: '公益项目进展看板',
  description: '展示公益项目进度、热力分布、时间线和统计卡片的数据看板。',
};

const messages = {
  health: `${project.name} backend is running`,
  notFound: 'Not found',
  serverStarted: `${project.id} backend listening`,
};

module.exports = {
  project,
  messages,
};
