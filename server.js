const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));

// API 路由
app.get('/api/hello', (req, res) => {
  const messages = [
    '🎉 欢迎使用 React + Node.js Demo!',
    '🚀 这是一个全栈应用演示',
    '💡 前端使用 React，后端使用 Node.js',
    '🐳 支持 Docker 容器化部署',
    '⚡ 实时响应，现代化设计'
  ];
  
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  
  res.json({
    message: randomMessage,
    timestamp: new Date().toISOString(),
    server: 'Node.js Express',
    version: '1.0.0'
  });
});

app.post('/api/message', (req, res) => {
  const { message } = req.body;
  
  if (!message) {
    return res.status(400).json({ error: '消息不能为空' });
  }
  
  // 模拟处理消息
  const responses = [
    `收到你的消息: "${message}"`,
    `很有趣的消息: "${message}"`,
    `感谢你发送: "${message}"`,
    `我明白了: "${message}"`,
    `好的，关于 "${message}" 我会处理的`
  ];
  
  const randomResponse = responses[Math.floor(Math.random() * responses.length)];
  
  res.json({
    message: randomResponse,
    originalMessage: message,
    timestamp: new Date().toISOString(),
    processed: true
  });
});

// 获取服务器状态
app.get('/api/status', (req, res) => {
  res.json({
    status: 'running',
    message: '服务器运行正常',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    nodeVersion: process.version,
    environment: process.env.NODE_ENV || 'development'
  });
});

// 健康检查端点
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// 为生产环境提供 React 应用
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error('服务器错误:', err.stack);
  res.status(500).json({
    error: '服务器内部错误',
    message: process.env.NODE_ENV === 'development' ? err.message : '请稍后重试'
  });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`服务器已启动，运行在端口 ${PORT}`);
  console.log(`http://localhost:${PORT}`);
  console.log(`⚙️  环境: ${process.env.NODE_ENV || 'development'}`);
});

// 优雅关闭
process.on('SIGINT', () => {
  console.log('\n📝 正在关闭服务器...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n📝 收到终止信号，正在关闭服务器...');
  process.exit(0);
});
