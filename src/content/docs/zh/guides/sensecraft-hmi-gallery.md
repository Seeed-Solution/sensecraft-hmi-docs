---
title: 图库功能
description: 介绍 SenseCraft HMI 平台下的图库功能的使用。
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/66.jpg" style={{width:800, height:'auto'}}/></div>

## 简介

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) 中的图库功能允许您将基于屏幕的设备转变为精美的数字相框。您可以上传本地图像或从 URL 导入图像，然后使用可自定义的过渡间隔和视觉效果显示它们。此功能非常适合使用 Seeed Studio 显示设备创建环境显示、信息屏幕或装饰相册。

本教程将指导您在 SenseCraft HMI 中使用图库功能，涵盖图像上传方法、显示设置和最佳性能的重要注意事项。

本文将以 [reTerminal E1002](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1002/) 为例，说明如何在 SenseCraft HMI 平台上使用此功能。

## 图库入门

### 访问图库功能

**步骤 1.** 导航到下面的 SenseCraft HMI 平台。<br/>

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi)<br/>

**步骤 2.** 连接您的设备或选择已配对的设备使用。<br/>
**步骤 3.** 点击 **图像图库**，您可以选择上传本地图像或从 URL 导入图像。<br/>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gallery_start_1.png" style={{width:800, height:'auto'}}/></div>

### 了解图库界面

图库界面由几个关键元素组成：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gallery_interface_1.png" style={{width:800, height:'auto'}}/></div>

1. **控制面板**：此部分包括用于添加已添加项目、页面列表、抖动模式和图像显示方向的设置。
2. **图像显示区域**：显示当前图像的主要部分
3. **图像工具栏**：包含用于调整或下载当前图像的工具
4. **缩略图条**：显示图库中所有上传的图像
5. **操作按钮**：保存、预览和部署按钮，用于测试和将图库应用到设备

## 向图库添加图像

SenseCraft HMI 提供两种向图库添加图像的方法：上传本地文件或从 URL 导入。

### 上传本地图像

步骤 1. 点击控制面板中的 **新建** 按钮

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gallery_img_1.png" style={{width:800, height:'auto'}}/></div>

**步骤 2.** 在出现的对话框中，选择 **图像图库**，并在弹出的对话框中进行选择。**上传文件**<br>
**步骤 3.** 点击 **选择图像文件**，从计算机中选择要上传的图像

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gallery_img_2.png" style={{width:600, height:'auto'}}/></div>

**步骤 4.** 重要的图像要求和限制：

- 支持 JPG、PNG 和 GIF 格式
- 超过 2MB 的照片将自动压缩
- 非 5:3 宽高比将使用白色填充调整
- 目标分辨率：800x480 像素（或设备的原生分辨率）
- 没有 MicroSD 卡，您最多可以上传 3 张照片
- 使用 MicroSD 卡，您最多可以上传 20 张照片

步骤 5. 如果需要，使用 Ctrl/Cmd + 点击选择多个文件

步骤 6. 点击 "打开" 上传所选图像

### 从 URL 导入图像

**步骤 1.** 点击控制面板中的 **新建** 按钮<br>
**步骤 2.** 在出现的对话框中，选择图像图库，然后选择从 URL 导入<br>
**步骤 3.** 在提供的字段中输入直接图像 URL<br>
**步骤 4.** 点击 "导入" 将图像添加到您的图库

:::tip
从 URL 导入时，请确保使用以 .jpg、.png 或 .gif 等文件扩展名结尾的直接图像链接。包含图像的网页链接可能无法工作。
:::

## 管理您的图库

### 设置显示间隔

间隔设置决定每张图像在过渡到下一张之前显示多长时间：

步骤 1. 在控制面板中找到 "间隔(分):" 字段

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gallery_manage_1.png" style={{width:600, height:'auto'}}/></div>

步骤 2. 输入您期望的显示时间（以分钟为单位）（例如，1 表示每张图像一分钟）

### 选择抖动模式

抖动模式影响图像的处理方式以在特定设备上获得最佳显示效果：

步骤 1. 在控制面板中找到 "抖动模式:" 下拉菜单
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gallery_manage_2.png" style={{width:600, height:'auto'}}/></div><br>
步骤 2. 为您的设备选择适当的选项：

- **六色**：最适合彩色 LCD 显示器，保留所有颜色信息
- **黑白**：将图像转换为纯黑白，适用于单色电子纸显示器

:::tip
对于电子纸/电子墨水显示器，选择 "黑白" 模式以获得最佳显示质量和更快的刷新率。对于 LCD 屏幕，"六色" 将提供最佳的视觉体验。
:::

### 使用图像工具栏

图库中的每张图像都可以使用图像下方出现的工具栏进行调整：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gallery_manage_3.png" style={{width:700, height:'auto'}}/></div>

从左到右，工具是：

1. **水平填充**：调整图像以水平填充屏幕，同时保持宽高比
2. **垂直填充**：调整图像以垂直填充屏幕，同时保持宽高比
3. **下载**：将处理后的图像保存到您的计算机

:::tip
对横向图像使用 "水平填充" 选项，对纵向图像使用 "垂直填充" 选项，以在避免图像失真的同时最好地利用显示空间。
:::

### 重新排列图像

您可以使用缩略图条更改图像的显示顺序：

**步骤 1.** 在屏幕底部的条中找到要移动的图像缩略图<br>
**步骤 2.** 点击并拖动缩略图到序列中的新位置<br>
**步骤 3.** 释放以设置新顺序

## 将图库部署到设备

添加和配置图像后，您可以将图库部署到已连接的设备：

**步骤 1.** 点击 "保存" 按钮存储图库配置

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gallery_manage_4.png" style={{width:800, height:'auto'}}/></div>

:::tip
上传或设计图像后，习惯性地点击保存按钮，以确保您的布局设计不会轻易丢失。
:::

**步骤 2.** （可选）点击 "预览" 查看图库在设备上的显示效果，而无需完全部署

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gallery_manage_5.png" style={{width:800, height:'auto'}}/></div>

**步骤 3.** 点击 "部署" 将图库发送到已连接的设备

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gallery_manage_6.png" style={{width:800, height:'auto'}}/></div>

**步骤 4.** 等待部署确认消息

:::tip
点击部署按钮后，设备可能不会立即更新相册。设备可能处于睡眠模式。它将在下次唤醒时提取最新的相册图像。如果您想立即更新照片，可以点击设备上方的绿色按钮，设备将立即唤醒并提取仪表板更新。
:::

部署后，您的设备将根据您的间隔设置开始显示图像。
效果演示：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gallery_manage_7.png" style={{width:800, height:'auto'}}/></div>

## 存储注意事项

### MicroSD 卡要求

要在设备上存储超过 3 张图像，您需要使用 MicroSD 卡：

1. **格式**：MicroSD 卡必须格式化为 FAT32
2. **大小**：推荐 8GB 或更大（支持最多 32GB）
3. **速度**：推荐 Class 10 或更高以获得更好的性能

:::tip
使用 FAT32 以外的文件系统可能导致设备无法识别 MicroSD 卡或无法正确保存图像。
:::

### 如何将 MicroSD 卡格式化为 FAT32

- **在 Windows 上：**<br>
    步骤 1. 将 MicroSD 卡插入计算机<br>
    步骤 2. 打开文件资源管理器并右键点击 MicroSD 卡<br>
    步骤 3. 选择 "格式化..."<br>
    步骤 4. 从文件系统下拉菜单中选择 "FAT32"<br>
    步骤 5. 点击 "开始" 开始格式化

- **在 Mac 上：**<br>
    步骤 1. 将 MicroSD 卡插入计算机<br>
    步骤 2. 打开磁盘工具（应用程序 > 实用工具 > 磁盘工具）<br>
    步骤 3. 从侧边栏中选择您的 MicroSD 卡<br>
    步骤 4. 点击 "抹掉"<br>
    步骤 5. 选择 "MS-DOS (FAT)" 作为格式<br>
    步骤 6. 点击 "抹掉" 格式化卡

### 插入 MicroSD 卡

步骤 1. 关闭设备电源<br>
步骤 2. 在设备上找到 MicroSD 卡插槽<br>
步骤 3. 插入正确格式化的 MicroSD 卡<br>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/133.jpg" style={{width:700, height:'auto'}}/></div>

步骤 4. 开启设备电源<br>
步骤 5. 重新连接到 SenseCraft HMI 以验证扩展存储是否被识别

## 为显示器优化图像

要在设备显示器上获得最佳视觉效果：

1. **匹配分辨率**：准备与设备原生分辨率匹配的图像（通常为 800x480 像素）
2. **考虑宽高比**：使用 5:3 宽高比的图像以避免白色填充
3. **针对显示类型优化**：

- 对于彩色 LCD：标准彩色图像效果很好
- 对于电子纸/电子墨水：对比度更高、色彩渐变较少的图像
- 对于 2 色电子纸：黑白或高对比度图像

4. **文件大小**：保持图像大小在 2MB 以下以避免自动压缩
5. **亮度/对比度**：根据特定显示器的特性进行调整

### 使用 HMI 工具优化图像

您可以选择 SenseCraft HMI 的图像工具来优化您的图片。它不仅可以用于预览您在 SenseCraft HMI 中的使用，还可以生成 C 代码头文件，供您在代码中编辑和使用。
步骤 1. 在 [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) 页面上，选择 **工具**，然后选择 **图像抖动**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gallery_tools_1.png" style={{width:800, height:'auto'}}/></div>

步骤 2. 上传您想要优化的图像<br>
步骤 3. 根据需要进行必要的修改。

- 编辑图像：可以调整图像的大小
- 屏幕类型：选择您的显示屏幕类型
- 自定义：基于您使用的屏幕分辨率大小
- 抖动算法：使用算法处理您的图像，支持多种常用算法。
- 设备 ID：您的设备标识符用于区分您的设备，并根据您的工程要求定义。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gallery_tools_2.png" style={{width:800, height:'auto'}}/></div>

步骤 4. 选择 **预览** 以查看屏幕上显示的图像。根据您的具体情况，您可以选择导出图像或生成头文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gallery_tools_3.png" style={{width:800, height:'auto'}}/></div>

## 故障排除

### 常见问题和解决方案

1. **图像无法上传**：

- 检查图像是否为支持的格式（JPG、PNG、GIF）
- 确保文件大小不太大（理想情况下低于 2MB）
- 尝试不同的浏览器或清除浏览器缓存

2. **无法上传超过 3 张图像**：

- 验证您的设备中插入了正确格式化的 MicroSD 卡
- 检查 MicroSD 卡是否格式化为 FAT32
- 确保设备正确检测到 MicroSD 卡

3. **图像显示不正确**：

- 使用图像工具栏调整亮度/对比度
- 准备与设备分辨率匹配的图像

4. **部署失败**：

- 确保设备正确连接到 SenseCraft HMI
- 检查设备是否有足够的存储空间
- 重启设备并再次尝试部署

## 结论

SenseCraft HMI 中的图库功能提供了一种简单的方法将基于屏幕的设备转变为数字相框。通过遵循本指南，您可以在设备上上传、管理和显示图像，并使用自定义设置以获得最佳观看效果。

请记住，要存储超过 3 张图像，您需要在设备中插入正确格式化的 MicroSD 卡。通过正确的设置，您可以创建精美的幻灯片和显示，在 Seeed Studio 显示设备上展示您最喜欢的图像。


