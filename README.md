# React + Node.js Demo 应用

🚀 一个完整的全栈 Hello World 演示项目，使用 React 作为前端，Node.js Express 作为后端，支持 Docker 容器化部署。

## ✨ 功能特点

- ✅ **React 18** - 现代化前端框架，使用 Hooks
- ✅ **Node.js Express** - 轻量级后端服务器
- ✅ **实时时间显示** - 动态更新当前时间
- ✅ **API 通信** - 前后端数据交互
- ✅ **响应式设计** - 适配移动端和桌面端
- ✅ **Docker 支持** - 容器化部署
- ✅ **健康检查** - 应用状态监控
- ✅ **现代化 UI** - 渐变背景和毛玻璃效果

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
├── start.sh                # 启动脚本
└── README.md               # 说明文档
```

## 🚀 快速开始

### 方法一：本地开发运行

#### 前提条件
- Node.js 16+ 
- npm 或 yarn

#### 步骤

1. **克隆项目**
   ```bash
   git clone <repository-url>
   cd ReactDemo
   ```

2. **安装依赖**
   ```bash
   # 安装根目录依赖
   npm install
   
   # 安装前端依赖
   cd client
   npm install
   cd ..
   ```

3. **开发模式运行**
   ```bash
   # 启动后端服务器 (端口 5000)
   npm run dev
   
   # 新终端启动前端开发服务器 (端口 3000)
   npm run dev:client
   ```

4. **生产模式运行**
   ```bash
   # 构建前端应用
   npm run build
   
   # 启动生产服务器
   npm start
   ```

5. **访问应用**
   - 开发模式: http://localhost:3000
   - 生产模式: http://localhost:5000

### 方法二：Docker 部署

#### 使用 Docker

```bash
# 构建镜像
docker build -t react-demo .

# 运行容器
docker run -p 3000:5000 react-demo
```

#### 使用 Docker Compose

```bash
# 启动服务
docker-compose up -d

# 查看日志
docker-compose logs -f

# 停止服务
docker-compose down
```

访问地址: http://localhost:3000

## 🛠️ 可用脚本

在根目录中，你可以运行：

- `npm start` - 生产模式启动服务器
- `npm run dev` - 开发模式启动服务器（使用 nodemon）
- `npm run build` - 构建 React 应用用于生产
- `npm run dev:client` - 启动 React 开发服务器
- `npm run install:client` - 安装客户端依赖

## 🔌 API 端点

- `GET /api/hello` - 获取随机欢迎消息
- `POST /api/message` - 发送消息到服务器
- `GET /api/status` - 获取服务器状态
- `GET /health` - 健康检查端点

## 🎨 UI 特性

- **现代渐变背景** - 紫色到蓝色的渐变效果
- **毛玻璃卡片** - 半透明背景和模糊效果
- **实时时间显示** - 每秒更新的时钟
- **响应式布局** - 适配各种屏幕尺寸
- **交互式按钮** - 悬停和点击效果
- **加载状态** - 用户友好的加载提示

## 🐳 Docker 特性

- **多阶段构建** - 优化镜像大小
- **非 root 用户** - 增强安全性
- **健康检查** - 自动监控应用状态
- **生产优化** - 仅包含生产依赖

## 📱 环境变量

| 变量名 | 默认值 | 描述 |
|--------|--------|------|
| `PORT` | 5000 | 服务器端口 |
| `NODE_ENV` | development | 运行环境 |


