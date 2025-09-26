import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [serverMessage, setServerMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // 获取服务器消息
    fetchServerMessage();
    
    // 每秒更新时间
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const fetchServerMessage = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/hello');
      setServerMessage(response.data.message);
    } catch (error) {
      console.error('获取服务器消息失败:', error);
      setServerMessage('无法连接到服务器');
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async () => {
    if (!message.trim()) return;
    
    try {
      setLoading(true);
      const response = await axios.post('/api/message', { message });
      alert(`服务器回应: ${response.data.message}`);
      setMessage('');
    } catch (error) {
      console.error('发送消息失败:', error);
      alert('发送消息失败');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1 className="title">🚀 React + Node.js Demo</h1>
          <p className="subtitle">Hello World 演示应用</p>
          
          <div className="time-display">
            <span className="time-label">当前时间:</span>
            <span className="time-value">
              {currentTime.toLocaleString('zh-CN')}
            </span>
          </div>

          <div className="server-message">
            <h3>服务器消息:</h3>
            {loading ? (
              <div className="loading">加载中...</div>
            ) : (
              <p className="message">{serverMessage}</p>
            )}
            <button 
              className="refresh-btn" 
              onClick={fetchServerMessage}
              disabled={loading}
            >
              刷新消息
            </button>
          </div>

          <div className="message-input">
            <h3>发送消息到服务器:</h3>
            <div className="input-group">
              <input
                type="text"
                placeholder="输入你的消息..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                disabled={loading}
              />
              <button 
                onClick={sendMessage} 
                disabled={loading || !message.trim()}
              >
                发送
              </button>
            </div>
          </div>

          <div className="features">
            <h3>功能特点:</h3>
            <ul>
              <li>✅ React 18 + Hooks</li>
              <li>✅ Node.js Express 后端</li>
              <li>✅ 实时时间显示</li>
              <li>✅ API 通信</li>
              <li>✅ 响应式设计</li>
              <li>✅ Docker 容器化</li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
