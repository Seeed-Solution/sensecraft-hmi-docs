---
title: API 参考示例
description: SenseCraft HMI API 参考文档示例
---

# API 参考示例

这是 SenseCraft HMI API 参考文档的示例页面。

## 核心 API

### 初始化

```javascript
import { SenseCraftHMI } from 'sensecraft-hmi';

const hmi = new SenseCraftHMI({
  // 配置选项
});
```

### 方法

#### `init()`

初始化 HMI 系统。

**参数：**
- `config` (Object): 配置对象

**返回值：**
- `Promise<void>`

**示例：**
```javascript
await hmi.init({
  theme: 'dark',
  language: 'zh-CN'
});
```

#### `render()`

渲染 HMI 界面。

**参数：**
- `component` (Component): 要渲染的组件

**返回值：**
- `HTMLElement`

## 事件系统

### 事件监听

```javascript
hmi.on('userAction', (data) => {
  console.log('用户操作:', data);
});
```

### 事件触发

```javascript
hmi.emit('customEvent', {
  type: 'buttonClick',
  timestamp: Date.now()
});
```

## 配置选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `theme` | string | 'light' | 主题模式 |
| `language` | string | 'en' | 界面语言 |
| `debug` | boolean | false | 调试模式 |

## 更多信息

- [快速开始指南](/zh/guides/example/)
- [GitHub 仓库](https://github.com/Seeed-Studio/sensecraft-hmi-docs)
