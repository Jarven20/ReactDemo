#!/bin/bash

# React + Node.js Demo 启动脚本

echo "🚀 启动 React + Node.js Demo 应用..."

# 检查是否安装了 Node.js
if ! command -v node &> /dev/null; then
    echo "❌ 错误: 未找到 Node.js，请先安装 Node.js"
    exit 1
fi

# 检查是否安装了 npm
if ! command -v npm &> /dev/null; then
    echo "❌ 错误: 未找到 npm，请先安装 npm"
    exit 1
fi

echo "📦 安装根目录依赖..."
npm install

echo "📦 安装客户端依赖..."
cd client && npm install
cd ..

echo "🏗️  构建 React 应用..."
cd client && npm run build
cd ..

echo "🎯 启动服务器..."
npm start
