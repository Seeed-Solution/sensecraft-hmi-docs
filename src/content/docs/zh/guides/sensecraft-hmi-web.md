---
title: 网页功能
description: 介绍 SenseCraft HMI 平台下的网页功能的使用。
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/88.jpg" style={{width:800, height:'auto'}}/></div>

## 简介

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) 中的网页功能允许您直接在基于屏幕的设备上显示网页内容。这一强大功能将您的设备转变为专用的网页显示器，能够显示仪表板、监控系统、文档或您需要的任何网页内容。与传统浏览器不同，SenseCraft HMI 的网页功能针对嵌入式显示器和物联网设备进行了优化，非常适合创建信息亭、状态监视器或专用网页界面。

本教程将指导您在 SenseCraft HMI 中使用网页功能，涵盖网页内容的设置、预览和部署到设备。

本文将以 [reTerminal E1002](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1002/) 为例，说明如何在 SenseCraft HMI 平台上使用此功能。

## 网页功能入门

### 访问网页功能

步骤 1. 导航到下面的 SenseCraft HMI 平台。<br>
[SenseCraft HMI](https://sensecraft.seeed.cc/hmi)<br>
步骤 2. 连接您的设备或选择已配对的设备使用。<br>
步骤 3. 点击左侧边栏中的 **网页内容**<br>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/web_start_1.png" style={{width:1000, height:'auto'}}/></div>

步骤 4. 输入网页 URL，例如

```url
https://www.windy.com/
```

### 了解网页界面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/web_start_2.png" style={{width:1000, height:'auto'}}/></div>

网页界面由三个主要部分组成：

1. **URL 配置面板**：位于顶部，您可以输入网址
2. **显示区域**：预览或部署后显示网页内容的主要部分
3. **控制按钮**：位于顶部，包括预览、保存和部署选项

首次访问网页功能时，显示区域将为空，直到您配置和预览网页。

## 配置网页内容

### 添加网页

步骤 1. 在屏幕顶部找到网页配置面板<br>
步骤 2. 找到 **URL** 输入字段<br>
步骤 3. 在字段中输入有效的网址（例如 https://www.windy.com/）<br>

:::tip
确保包含完整的 URL，包括 https:// 或 http:// 前缀。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/web_configurate_1.png" style={{width:1000, height:'auto'}}/></div>

步骤 4. 点击 **设置** 按钮验证 URL

### 预览网页内容

与 SenseCraft HMI 中的其他功能不同，网页功能需要显式预览步骤来显示内容：

步骤 1. 输入并设置 URL 后，点击顶部工具栏中的 **预览** 按钮

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/web_configurate_2.png" style={{width:1000, height:'auto'}}/></div>

步骤 2. 等待网页在显示区域加载<br>
步骤 3. 检查网页内容是否正确显示并适合设备的屏幕尺寸

:::note
预览步骤至关重要，因为它允许您在部署前验证网页内容在设备上的显示效果。
:::

### 保存和部署网页内容

预览并确认网页内容看起来不错后：

步骤 1. 点击 **保存** 按钮存储网页配置<br>
步骤 2. 点击 **部署** 将配置发送到已连接的设备<br>
步骤 3. 等待部署确认消息<br>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/web_configurate_3.png" style={{width:1000, height:'auto'}}/></div>

成功部署后，您的设备将显示配置的网页。

## 为设备优化网页内容

并非所有网站都是为小型显示器或嵌入式设备设计的。以下是选择和优化网页内容的技巧：

### 选择网页友好的内容

1. **选择移动响应式网站**：

    - 为移动设备设计的网站通常在较小屏幕上显示更好
    - 寻找具有适应性布局的网站，在您设备的分辨率下效果良好

2. **考虑简单、轻量级的页面**：

    - 具有大量 JavaScript 的复杂网站可能加载缓慢或消耗更多资源
    - 静态页面通常比动态 Web 应用程序性能更好

3. **避免需要身份验证的网站**：

    - 登录会话可能过期，需要手动干预
    - 某些身份验证方法在嵌入式设备上可能无法正常工作

### 推荐的网页内容类型

以下是一些特别适合 SenseCraft HMI 网页功能的网页内容类型：

1. **天气仪表板**：

    - [Weather.gov](https://weather.gov)<br>
    - [Windy.com](https://www.windy.com/)<br>
    - [AccuWeather](https://www.accuweather.com/)<br>

2. **监控仪表板**：

    - Grafana 仪表板<br>
    - 家庭自动化控制面板<br>
    - 系统状态页面<br>

3. **信息显示**：

    - 交通时刻表<br>
    - 航班信息<br>
    - 会议室可用性<br>

4. **文档或参考**：

    - 本地维基<br>
    - 程序指南<br>
    - 快速参考信息<br>

## 创建自定义网页内容

为获得最佳体验，请考虑创建专门为设备显示器设计的自定义网页：

### 简单的 HTML 页面

您可以创建针对设备分辨率优化的基本 HTML 页面。这是一个简单的示例：

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>设备仪表板</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            font-size: 18px;
        }
        .container {
            padding: 15px;
        }
        .title {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 15px;
        }
        .info-box {
            border: 1px solid #ccc;
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="title">设备状态</div>
        <div class="info-box">温度：22.5°C</div>
        <div class="info-box">湿度：45%</div>
        <div class="info-box">电池：87%</div>
    </div>
</body>
</html>
```

### 自定义页面的托管选项

要显示自定义网页内容，您需要将其托管在设备可访问的地方：

1. **本地网络服务器**：

    - 在本地网络上设置简单的 Web 服务器
    - 使用 XAMPP、NGINX 或运行 Web 服务器的 Raspberry Pi 等工具

2. **免费静态托管服务**：

    - [GitHub Pages](https://pages.github.com/)
    - [Netlify](https://www.netlify.com/)
    - [Vercel](https://vercel.com/)

3. **具有免费层的云服务**：

    - [Firebase Hosting](https://firebase.google.com/products/hosting)
    - [AWS S3 Static Website Hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)

## 特殊用例

### 显示本地网络资源

网页功能可用于显示本地网络上的资源：

1. **家庭自动化仪表板**：

    - Home Assistant：`http://homeassistant.local:8123`
    - OpenHAB：`http://openhab.local:8080`

2. **网络监控工具**：

    - 路由器管理面板
    - 网络监控仪表板

3. **本地媒体服务器**：

    - Plex 状态页面
    - NAS Web 界面

:::tip
出于安全原因，在公开可见的设备上显示管理界面时要谨慎。
:::

### 自动页面轮换

如果您想轮换显示多个网页：

1. 创建一个带有 JavaScript 的简单 HTML 页面来循环显示 URL：

```html
<!DOCTYPE html>
<html>
<head>
    <title>页面轮换器</title>
    <style>
        body, html, iframe {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
            border: none;
            overflow: hidden;
        }
    </style>
    <script>
        // 要轮换的 URL 数组
        const urls = [
            'https://weather.gov',
            'https://example.com/dashboard',
            'https://example.com/calendar'
        ];
        
        let currentIndex = 0;
        
        function rotatePages() {
            document.getElementById('display-frame').src = urls[currentIndex];
            currentIndex = (currentIndex + 1) % urls.length;
            setTimeout(rotatePages, 30000); // 每 30 秒更换页面
        }
        
        window.onload = rotatePages;
    </script>
</head>
<body>
    <iframe id="display-frame" src="about:blank"></iframe>
</body>
</html>
```

2. 使用上述方法之一托管此页面

3. 在 SenseCraft HMI 的网页功能中输入此轮换器页面的 URL

## 故障排除

### 常见网页显示问题和解决方案

1. **网页无法加载**：

    - 验证 URL 是否正确并包含 http:// 或 https:// 前缀。有时明显输入了正确的 URL，但仍无法预览，您可以尝试在 URL 末尾添加 "/"，可能会有奇效。
    - 通过在常规浏览器中测试检查页面是否可访问
    - 确保设备具有互联网连接
    - 某些网站可能阻止嵌入或有安全限制

2. **内容显示不正确**：

    - 网站可能未针对设备的屏幕尺寸进行优化
    - 如果可用，尝试网站的移动版本
    - 考虑创建专门为您的显示尺寸设计的自定义页面

3. **性能问题**：

    - 具有动画或大量 JavaScript 的复杂网站可能运行缓慢
    - 尝试更简单的页面或自定义构建的替代方案
    - 某些网站可能使用的内存超过设备的处理能力

4. **部署失败**：

    - 确保设备正确连接到 SenseCraft HMI
    - 检查设备的互联网连接
    - 重启设备并再次尝试部署

5. **内容需要频繁刷新**：

    - 某些动态内容可能不会自动更新
    - 考虑在自定义页面中设置刷新间隔，或
    - 定期重新部署配置

## 最佳实践

### 安全注意事项

使用网页功能时，请记住这些安全注意事项：

1. **避免敏感信息**：

    - 不要在公开可见的设备上显示包含个人或机密信息的页面
    - 对管理面板或控制界面要谨慎

2. **尽可能使用 HTTPS**：

    - 优先使用安全（https://）URL 而不是非安全（http://）URL
    - 这有助于保护传输到设备的数据

3. **考虑网络隔离**：

    - 对于显示内部资源的显示器，考虑使用单独的网络
    - 使用防火墙规则限制设备可以访问的内容

### 维护技巧

要保持网页显示流畅运行：

1. **定期检查**：

    - 定期验证显示的内容是否仍然正常工作
    - 网站可以在没有通知的情况下更改其布局或 URL

2. **更新书签**：

    - 为显示器保留有用 URL 的列表
    - 测试替代方案，以防首选网站发生变化

3. **创建备份**：

    - 对于关键显示器，创建并托管可快速部署的备份页面
    - 这确保了主要 Web 资源不可用时的连续性

## 结论

SenseCraft HMI 中的网页功能提供了一种灵活的方式在基于屏幕的设备上显示网页内容。通过遵循本指南，您可以配置、预览和部署网页以创建信息显示、仪表板或根据您的需求定制的参考屏幕。

请记住，并非所有网页内容都适合小型显示器或嵌入式设备。为获得最佳体验，请考虑使用移动响应式网站或创建专门为设备的尺寸和功能设计的自定义网页。
