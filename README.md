# Salzburg Card - React Project

Salzburg Card 网页应用，展示萨尔茨堡景点地图和列表。

## 功能特性

- ✅ 响应式布局，包含顶部品牌区域、地图和右侧景点列表
- ✅ 可点击的景点列表（右侧每一行都可以点击）
- ✅ 点击景点后在地图固定位置显示图钉图标
- ✅ 地图右上角绿色区域为按钮（用于未来集成 chatbot）
- ✅ "Chat with Kartie" 按钮（左下角）
- ✅ "Get the Kartie App" 按钮（右下角）

## 安装和运行

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 构建生产版本：
```bash
npm run build
```

4. 预览生产版本：
```bash
npm run preview
```

## 项目结构

```
├── src/
│   ├── components/
│   │   ├── Header.jsx          # 顶部品牌区域
│   │   ├── Map.jsx              # 地图组件
│   │   ├── AttractionList.jsx   # 景点列表
│   │   ├── ChatButton.jsx       # Chat with Kartie 按钮
│   │   └── AppButton.jsx        # Get the Kartie App 按钮
│   ├── App.jsx                  # 主应用组件
│   ├── main.jsx                 # 入口文件
│   └── index.css                # 全局样式
├── index.html
├── package.json
└── vite.config.js
```

## 技术栈

- React 18
- Vite
- CSS3

## 未来计划

- 集成 chatbot 到地图右上角绿色区域
- 集成 chatbot 到 "Chat with Kartie" 按钮
