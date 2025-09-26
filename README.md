# React Demo - 生产就绪版本

🚀 一个简化的全栈演示项目，使用 React 前端 + Node.js Express 后端，专为生产部署优化。

## ✨ 功能特点

- ✅ **React 18** - 现代化前端框架
- ✅ **Node.js Express** - 轻量级后端服务器  
- ✅ **实时时间显示** - 动态更新当前时间
- ✅ **API 通信** - 前后端数据交互
- ✅ **响应式设计** - 适配移动端和桌面端
- ✅ **Docker 支持** - 容器化部署
- ✅ **健康检查** - 应用状态监控
- ✅ **生产优化** - 单一模式，端口 5000

## 📦 项目结构

```
ReactDemo/
├── client/                 # React 前端应用
│   ├── public/             # 静态文件
│   ├── src/                # 源代码
│   │   ├── App.js          # 主应用组件
│   │   ├── App.css         # 样式文件
│   │   ├── index.js        # 入口文件
│   │   └── index.css       # 全局样式
│   └── package.json        # 前端依赖
├── server.js               # Node.js 服务器
├── package.json            # 根目录依赖
├── Dockerfile              # Docker 镜像构建
├── docker-compose.yml      # Docker Compose 配置
└── README.md               # 说明文档
```

## 🚀 快速部署

### 方法一：手动部署

```bash
# 1. 安装所有依赖
npm run install:all

# 2. 构建前端应用
npm run build

# 3. 启动生产服务器
npm start
```

### 方法二：Docker 部署

```bash
# 使用 Docker Compose（推荐）
docker-compose up -d

# 或手动构建
docker build -t react-demo .
docker run -p 5000:5000 react-demo
```

## 🌐 访问地址

应用启动后，访问：**http://localhost:5000**

## 🛠️ 可用脚本

- `npm start` - 启动生产服务器（端口 5000）
- `npm run build` - 构建 React 应用
- `npm run install:all` - 安装所有依赖

## 🔌 API 端点

- `GET /api/hello` - 获取随机欢迎消息
- `POST /api/message` - 发送消息到服务器
- `GET /api/status` - 获取服务器状态
- `GET /health` - 健康检查端点

## 📱 环境变量

| 变量名 | 默认值 | 描述 |
|--------|--------|------|
| `PORT` | 5000 | 服务器端口 |
| `NODE_ENV` | production | 运行环境 |

## 🔧 故障排除

### 常见问题

1. **端口占用**
   - 确保端口 5000 没有被占用
   - 使用 `netstat -ano | findstr :5000` 检查

2. **依赖安装失败**
   - 删除 node_modules 文件夹重新安装
   - 使用 `npm cache clean --force` 清理缓存

3. **Docker 构建失败**
   - 确保 Docker 服务正在运行
   - 检查网络连接和权限

## 🚀 生产部署建议

1. **服务器要求**
   - Node.js 16+
   - 至少 1GB RAM
   - 端口 5000 开放

2. **性能优化**
   - 使用 PM2 进程管理
   - 配置 Nginx 反向代理
   - 启用 GZIP 压缩

3. **监控建议**
   - 定期检查 `/health` 端点
   - 监控服务器资源使用
   - 配置日志收集

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！