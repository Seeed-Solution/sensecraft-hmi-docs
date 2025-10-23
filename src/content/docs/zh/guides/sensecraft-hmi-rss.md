---
title: RSS 功能
description: 介绍 SenseCraft HMI 平台下的 RSS 功能的使用。
---

# 在 SenseCraft HMI 中使用 RSS

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/80.jpg" style={{width:800, height:'auto'}}/></div>

## 简介

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) 中的 RSS 功能允许您将基于屏幕的设备转变为实时信息显示器。通过连接到来自新闻媒体、博客、天气服务等的 RSS 提要，您可以创建自动更新最新内容的动态显示。此功能非常适合创建新闻滚动条、信息板或个人仪表板，让您无需手动干预即可保持了解。

本教程将指导您了解 RSS 提要并在 SenseCraft HMI 中使用 RSS 功能在设备上显示内容。

本文将以 [reTerminal E1002](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1002/) 为例，说明如何在 SenseCraft HMI 平台上使用此功能。

## 了解 RSS

### 什么是 RSS？

RSS（Really Simple Syndication，真正简单的聚合）是一种标准化的网络提要格式，用于发布经常更新的内容，例如：

- 新闻文章
- 博客文章
- 播客
- 视频更新
- 天气预报
- 股票市场数据

RSS 提要允许用户保持更新而无需单独访问每个网站。相反，新内容会自动传送到您的 RSS 阅读器，或者在这种情况下，传送到启用了 SenseCraft HMI 的设备。

### RSS 如何工作

1. **内容发布者**（网站、博客、新闻媒体）创建包含其最新内容的 RSS 提要，采用标准化的 XML 格式<br>
2. **提要阅读器**（如 SenseCraft HMI 中的 RSS 功能）定期检查这些提要以获取更新<br>
3. 当发布新内容时，提要阅读器 **检索并显示** 更新

### 使用 RSS 的好处

- **实时更新**：无需手动刷新即可获得最新信息
- **内容聚合**：在一个显示器中组合多个来源
- **过滤信息**：仅接收您感兴趣的内容
- **带宽高效**：RSS 提要仅包含基本内容，而不是完整的网页
- **无广告**：RSS 通常提供不含广告的干净内容

## 开始使用

### 访问 RSS 功能

步骤 1. 导航到下面的 SenseCraft HMI 平台。<br>
    [SenseCraft HMI](https://sensecraft.seeed.cc/hmi)<br>
步骤 2. 连接您的设备或选择已配对的设备使用。<br>
步骤 3. 点击 **RSS 新闻** 选项
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/rss_start_1.png" style={{width:1000, height:'auto'}}/></div>

步骤 4. 导入 URL，例如

```url
https://feeds.bbci.co.uk/news/world/rss.xml
```

### 了解 RSS 界面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/rss_start_2.png" style={{width:1000, height:'auto'}}/></div>

RSS 界面由两个主要部分组成：

1. **配置面板**：位于顶部，您可以输入和验证 RSS 提要 URL<br>
2. **显示区域**：配置后显示 RSS 内容的主要部分<br>

## 配置 RSS 提要

### 添加 RSS 提要

步骤 1. 在屏幕顶部找到 RSS 配置面板，找到 **RSS URL** 输入字段<br>
步骤 2. 在字段中输入有效的 RSS 提要 URL（例如 https://news.google.com/rss）<br>
步骤 3. 点击 **设置** 按钮验证并应用 RSS 提要，如果 URL 有效，系统将开始从提要中获取和显示内容

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/rss_url_1.png" style={{width:1000, height:'auto'}}/></div>

### 显示设置和自定义

配置 RSS 提要后，您可以调整内容的显示方式：
步骤 1. 使用与图库功能中相同的间隔和抖动模式设置：

- **间隔(分)**：设置显示刷新新内容的频率
- **抖动模式**：根据显示类型选择 "全色" 或 "黑白"

步骤 2. 点击 **保存** 存储您的配置<br>
步骤 3. 点击 **预览** 查看 RSS 内容在设备上的显示效果<br>
步骤 4. 点击 **部署** 将配置发送到已连接的设备<br>

## 查找和使用 RSS 提要

### 流行的 RSS 提要来源

以下是一些可以与 SenseCraft HMI 一起使用的流行可靠 RSS 提要：

**新闻：**

- BBC 新闻：https://feeds.bbci.co.uk/news/world/rss.xml <br>
- 路透社：https://www.reutersagency.com/feed/ <br>
- CNN：https://rss.cnn.com/rss/edition.rss <br>
- 纽约时报：https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml

**技术：**

- Wired：https://www.wired.com/feed/rss <br>
- TechCrunch：https://techcrunch.com/feed/ <br>
- Ars Technica：https://feeds.arstechnica.com/arstechnica/index <br>
- Hackaday：https://hackaday.com/blog/feed/

**天气：**

- 国家飓风中心：https://www.nhc.noaa.gov/index-at.xml

**科学：**

- NASA 突发新闻：https://www.nasa.gov/rss/dyn/breaking_news.rss <br>
- Science Daily：https://www.sciencedaily.com/rss/all.xml

### 如何查找网站的 RSS 提要

许多网站提供 RSS 提要，但它们并不总是容易找到。以下是找到 RSS 提要的一些方法：

- **方法 1**：寻找 RSS 图标<br>
    许多网站在页脚或侧边栏中显示 RSS 图标（通常为橙色）或标有 "RSS"、"提要" 或 "订阅" 的链接。

- **方法 2**：在博客 URL 后添加 "/feed"<br>
    对于许多基于 WordPress 的网站，在 URL 末尾添加 "/feed" 通常有效：<br>
    ```
    https://example.com/feed
    ```
- **方法 3**：使用浏览器扩展<br>
    Chrome 的 "RSS Feed Reader" 或 Firefox 的 "Awesome RSS" 等浏览器扩展可以检测您访问的网站上可用的提要。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/81.png" style={{width:1000, height:'auto'}}/></div>

- **方法 4**：检查源代码<br>
    1. 访问网站
    2. 右键点击并选择 "查看页面源代码"
    3. 搜索（Ctrl+F）"rss" 或 "feed"
    4. 寻找类型属性中包含 "application/rss+xml" 的链接
    
- **方法 5**：使用 RSS 提要查找器<br>
    服务如：<br>
    - [Feed Finder](https://feedfinder.mackerron.com/)<br>
    - [RSS.app](https://rss.app/rss-feed)<br>
    这些可以帮助发现网站的 RSS 提要，即使它们没有显著宣传。

## 创建自定义 RSS 提要

如果找不到想要显示的内容的 RSS 提要，您可以使用各种工具创建自己的提要：

### RSS 提要创建服务

1. **RSS.app**：https://rss.app/

    - 从网站、社交媒体或其他来源创建 RSS 提要
    - 无需编码
    - 提供免费和付费选项

2. **Feedly**：https://feedly.com/

    - 创建可导出为 RSS 的内容板
    - 适合内容管理

3. **Zapier**：https://zapier.com/

    - 创建可从各种触发器生成 RSS 提要的自动化工作流程
    - 高级功能需要付费订阅

### 提要聚合器

您还可以使用聚合器将多个 RSS 提要合并为单个提要：

1. **FeedBlendr**：http://feedblendr.com/

    - 将多个提要合并为一个
    - 简单易用

2. **RSSMix**：http://www.rssmix.com/

    - 合并多个 RSS 提要
    - 免费服务

## 高级 RSS 显示技巧

### 为显示器优化 RSS 内容

要在 SenseCraft HMI 设备上获得 RSS 提要的最佳体验：

1. **选择内容长度适当的提要**：

    - 标题和描述简短的提要最适合小型显示器
    - 完整文章提要对于电子纸显示器可能过于文本密集

2. **考虑更新频率**：

    - 将间隔设置与提要的更新频率匹配
    - 新闻提要可能每小时更新，而博客提要可能每天更新

3. **测试不同的抖动模式**：

    - "黑白" 模式最适合电子纸显示器上的文本密集型 RSS 提要
    - "全色" 更适合 LCD 显示器上带图像的提要

4. **注意图像内容**：

    - 某些 RSS 提要包含的图像在所有设备上可能显示不佳
    - 带有大图像的提要可能加载较慢

## 故障排除

### 常见 RSS 问题和解决方案

1. **"无效的 RSS 提要" 错误**：

    - 验证 URL 是否正确并包含 http:// 或 https:// 前缀
    - 通过在浏览器中粘贴 URL 检查提要是否可访问
    - 某些提要可能需要身份验证或有访问限制

2. **提要加载但不显示内容**：

    - 提要可能为空或当前未发布内容
    - 提要格式可能不兼容（尝试替代提要）
    - 尝试不同的、更活跃的提要

3. **内容显示混乱或格式不正确**：

    - 尝试不同的抖动模式
    - 提要可能包含不受支持的特殊字符或格式
    - 考虑使用提要过滤服务清理内容

4. **提要停止更新**：

    - 源网站可能已更改其提要 URL
    - 可能存在临时服务器问题
    - 尝试删除并重新添加提要

5. **部署失败**：

    - 确保设备正确连接到 SenseCraft HMI
    - 检查设备的互联网连接
    - 重启设备并再次尝试部署

## 结论

SenseCraft HMI 中的 RSS 功能提供了一种强大的方式将基于屏幕的设备转变为动态信息显示器。通过连接到 RSS 提要，您可以创建自动更新的新闻、天气、技术更新或通过 RSS 提供的任何其他内容的显示。

请记住，RSS 显示的质量在很大程度上取决于您选择的提要。尝试不同的提要、更新间隔和显示设置，以创建满足您需求的完美信息显示。



