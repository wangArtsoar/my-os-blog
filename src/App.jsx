import React, { useState, useEffect } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { 
  styleReset, List, ListItem, Divider, AppBar, Toolbar, Button, 
  Window, WindowHeader, WindowContent, Cutout, ScrollView 
} from 'react95';
import original from 'react95/dist/themes/original'; 

// 全局样式
const GlobalStyles = createGlobalStyle`
  ${styleReset}
  body {
    font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif; 
    background-color: teal; 
    overflow: hidden; 
  }
`;

// 📺 1. 这里配置你的视频列表
// 如果没有 title，代码会自动用 1, 2, 3 代替
const videoList = [
  {
    id: 'v1',
    title: '我的第一条抖音', 
    // 建议把视频下载下来放到 public/videos 文件夹里，这样最稳定
    src: './videos/douyin_1.mp4', 
    type: 'video/mp4' 
  },
  {
    id: 'v2',
    title: '', // 👈 空标题，会自动变成 "2"
    src: './videos/douyin_2.mp4',
    type: 'video/mp4'
  },
  {
    id: 'v3',
    title: '搞笑合集', 
    src: './videos/douyin_3.mp4',
    type: 'video/mp4'
  },
  {
    id: 'v4',
    title: '', // 👈 空标题，会自动变成 "4"
    // 如果你想用 iframe 嵌入（注意：抖音很难直接嵌入，B站/Youtube 比较容易）
    src: 'https://player.bilibili.com/player.html?bvid=BV1GJ411x7h7',
    isIframe: true 
  }
];

function App() {
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  
  // 窗口状态
  const [activePost, setActivePost] = useState(null);
  const [showTV, setShowTV] = useState(false); // 电视机开关状态
  
  // 播放器状态
  const [currentVideo, setCurrentVideo] = useState(videoList[0]);

  // 时间跳动逻辑
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const posts = [
    { id: 1, title: '你好，世界.txt', content: '这是我的第一篇博客。' },
    { id: 2, title: '关于我.doc', content: '全栈开发者，喜欢复古风。' },
  ];

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        
        <div style={{ height: 'calc(100vh - 50px)', padding: '20px', position: 'relative' }}>
          
          {/* ================= 文章窗口 ================= */}
          {activePost && (
            <Window style={{ width: 400, position: 'absolute', top: '10%', left: '10%', zIndex: 10 }}>
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

          {/* ================= 📺 电视机窗口 (新增核心功能) ================= */}
          {showTV && (
            <Window style={{ width: 600, height: 450, position: 'absolute', top: '15%', left: '20%', zIndex: 20 }}>
              <WindowHeader style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>📺 抖音播放器.exe</span>
                <Button onClick={() => setShowTV(false)} size={'sm'} square>
                  <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>x</span>
                </Button>
              </WindowHeader>
              <WindowContent style={{ display: 'flex', gap: '10px', height: '100%', paddingBottom: '30px' }}>
                
                {/* 左侧：选台列表 */}
                <div style={{ width: '150px', display: 'flex', flexDirection: 'column' }}>
                    <p style={{ marginBottom: 8 }}>播放列表:</p>
                    <Cutout style={{ flex: 1, background: 'white' }}>
                        <ScrollView style={{ height: '100%' }}>
                            {videoList.map((video, index) => (
                                <div 
                                    key={video.id}
                                    onClick={() => setCurrentVideo(video)}
                                    style={{ 
                                        padding: '8px', 
                                        cursor: 'pointer',
                                        backgroundColor: currentVideo.id === video.id ? '#000080' : 'transparent',
                                        color: currentVideo.id === video.id ? 'white' : 'black',
                                        userSelect: 'none'
                                    }}
                                >
                                    {/* 👇 核心逻辑：有标题显示标题，没标题显示序号 */}
                                    {video.title ? video.title : `${index + 1}`}
                                </div>
                            ))}
                        </ScrollView>
                    </Cutout>
                </div>

                {/* 右侧：屏幕区域 */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Cutout style={{ flex: 1, backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                        {currentVideo.isIframe ? (
                             // 如果是 iframe (比如 B站)
                            <iframe 
                                src={currentVideo.src} 
                                style={{ width: '100%', height: '100%', border: 'none' }} 
                                title="video"
                                allowFullScreen
                            />
                        ) : (
                            // 如果是本地 mp4 文件 (推荐方式)
                            <video 
                                key={currentVideo.src} // key 变化时强制重载视频
                                controls 
                                autoPlay 
                                style={{ maxWidth: '100%', maxHeight: '100%' }}
                            >
                                <source src={currentVideo.src} type={currentVideo.type} />
                                您的浏览器不支持视频标签。
                            </video>
                        )}
                    </Cutout>
                    <div style={{ marginTop: '10px', textAlign: 'center' }}>
                        当前播放: {currentVideo.title || '频道 ' + (videoList.indexOf(currentVideo) + 1)}
                    </div>
                </div>

              </WindowContent>
            </Window>
          )}

          {/* ================= 桌面图标 ================= */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* 我的电脑 */}
            <div style={{ textAlign: 'center', width: 80, cursor: 'pointer' }} onClick={() => setActivePost(posts[1])}>
                <span style={{ fontSize: '40px' }}>💻</span>
                <p style={{ color: 'white', textShadow: '1px 1px black' }}>我的电脑</p>
            </div>

            {/* 📺 电视机图标 */}
            <div style={{ textAlign: 'center', width: 80, cursor: 'pointer' }} onClick={() => setShowTV(true)}>
                <span style={{ fontSize: '40px' }}>📺</span>
                <p style={{ color: 'white', textShadow: '1px 1px black' }}>抖音TV</p>
            </div>
          </div>

        </div>

        {/* 底部任务栏 */}
        <AppBar position='fixed' style={{ top: 'auto', bottom: 0, zIndex: 999 }}>
          <Toolbar style={{ justifyContent: 'space-between' }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <Button onClick={() => setStartMenuOpen(!startMenuOpen)} active={startMenuOpen} style={{ fontWeight: 'bold' }}>
                <span style={{ marginRight: 4 }}>🏁</span> Start
              </Button>
              {startMenuOpen && (
                <List style={{ position: 'absolute', left: '0', bottom: '100%' }} onClick={() => setStartMenuOpen(false)}>
                  <ListItem onClick={() => setShowTV(true)}>📺 打开电视</ListItem>
                  <Divider />
                  <ListItem>🚪 关机</ListItem>
                </List>
              )}
            </div>
            <div style={{ paddingRight: '10px' }}>
                {time.toLocaleTimeString()}
            </div>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
}

export default App;