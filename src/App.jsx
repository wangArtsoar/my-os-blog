// src/App.jsx
import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { styleReset, List, ListItem, Divider } from 'react95';
// 引入 Windows 95 原始主题
import original from 'react95/dist/themes/original'; 
// 引入字体
import ms_sans_serif from 'react95-original';

import { AppBar, Toolbar, Button, Window, WindowHeader, WindowContent } from 'react95';

// 1. 全局样式重置（设为灰色背景，强制使用像素字体）
const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  body {
    font-family: 'ms_sans_serif';
    background-color: teal; /* 经典的 Windows 95 蓝绿色背景 */
    overflow: hidden; /* 禁止页面滚动，模拟桌面 */
  }
`;

function App() {
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [activePost, setActivePost] = useState(null);

  // 模拟博客文章数据
  const posts = [
    { id: 1, title: '你好，世界.txt', content: '这是我的第一篇博客，欢迎来到我的 1995 年！' },
    { id: 2, title: '关于我.doc', content: '我是一个全栈开发者，喜欢复古美学。' },
    { id: 3, title: '项目清单.xls', content: '1. 复古博客\n2. AI 聊天机器人' }
  ];

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        
        {/* 桌面区域：这里可以放图标 */}
        <div style={{ height: 'calc(100vh - 50px)', padding: '20px', position: 'relative' }}>
          
          {/* 这里是打开的文章窗口 */}
          {activePost && (
            <Window style={{ width: 400, position: 'absolute', top: '20%', left: '30%' }} className='window'>
              <WindowHeader style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>{activePost.title}</span>
                <Button onClick={() => setActivePost(null)} size={'sm'} square>
                  <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>x</span>
                </Button>
              </WindowHeader>
              <WindowContent>
                <p>{activePost.content}</p>
              </WindowContent>
            </Window>
          )}

          {/* 桌面图标示例 */}
          <div style={{ textAlign: 'center', width: 80, cursor: 'pointer' }} onClick={() => setActivePost(posts[1])}>
            <span style={{ fontSize: '40px' }}>💻</span>
            <p style={{ color: 'white', textShadow: '1px 1px black' }}>我的电脑</p>
          </div>
        </div>

        {/* 底部任务栏 */}
        <AppBar position='fixed' style={{ top: 'auto', bottom: 0 }}>
          <Toolbar style={{ justifyContent: 'space-between' }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <Button 
                onClick={() => setStartMenuOpen(!startMenuOpen)} 
                active={startMenuOpen} 
                style={{ fontWeight: 'bold' }}
              >
                <img 
                    src="https://win98icons.alexmeub.com/icons/png/windows-0.png" 
                    alt="logo" 
                    style={{ height: '20px', marginRight: 4 }} 
                />
                Start
              </Button>
              
              {/* 开始菜单 */}
              {startMenuOpen && (
                <List style={{ position: 'absolute', left: '0', bottom: '100%' }} onClick={() => setStartMenuOpen(false)}>
                  <ListItem disabled>👨‍💻 个人主页 v1.0</ListItem>
                  <Divider />
                  {posts.map(post => (
                    <ListItem key={post.id} onClick={() => setActivePost(post)}>
                      📄 {post.title}
                    </ListItem>
                  ))}
                  <Divider />
                  <ListItem>🚪 关机 (Shut Down)</ListItem>
                </List>
              )}
            </div>

            {/* 右下角时间 */}
            <div style={{ paddingRight: '10px' }}>
                {new Date().toLocaleTimeString()}
            </div>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
}

export default App;