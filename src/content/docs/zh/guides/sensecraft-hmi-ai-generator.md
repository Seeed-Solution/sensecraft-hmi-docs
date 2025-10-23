---
title: AI 生成功能
description: 介绍 SenseCraft HMI 平台下的 AI 生成功能的使用。
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/65.jpg" style={{width:700, height:'auto'}}/></div>

## 简介

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) 是 Seeed Studio 的交互式界面设计平台，专为基于屏幕的产品而创建。其最强大的功能之一是 AI 生成功能，它允许您通过简单描述您想要的内容来创建精美的显示布局和图像，使用自然语言即可。

本教程将指导您在 [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) 的图库和画布部分使用 AI 生成功能，使您能够：

- 根据文本描述生成自定义图像
- 创建具有正确定位组件的完整界面布局
- 通过对话完善和调整 AI 生成的内容
- 一键将设计直接部署到您的设备

本文将以 [reTerminal E1002](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1002/) 为例，说明如何在 SenseCraft HMI 平台上使用此功能。

## 开始使用

AI 生成功能在 SenseCraft HMI 的图库和画布部分均可用。每个实现服务于不同的目的：

AI 生成功能可以在 SenseCraft HMI 的图像和布局部分使用。每种实现方法都有其特定的应用：

- **AI 图像生成器**：根据您的描述创建独立图像。
- **AI 布局生成器**：设计具有功能组件（如按钮、文本字段和数据显示）的完整布局

让我们探索如何有效使用这些功能。

### 启动 AI 项目

- 打开 SenseCraft 平台

    [SenseCraft HMI](https://sensecraft.seeed.cc/hmi)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/ai_generate_1.png" style={{width:800, height:'auto'}}/></div>

- 选择 **UI 设计器**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/ai_generate_2.png" style={{width:800, height:'auto'}}/></div>

- 点击右侧的 AI 按钮，然后根据您的实际需求选择 **AI 图像生成器** 或 **AI 布局生成器**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/ai_generate_3.png" style={{width:800, height:'auto'}}/></div>

## AI 图像生成器

AI 图像生成器允许您为显示器创建自定义图像，而无需任何设计技能或外部工具。

### 使用 AI 创建图像

步骤 1. 点击右侧的 AI 按钮，然后选择 AI 图像生成器，将出现以下屏幕。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/ai_image_1.png" style={{width:800, height:'auto'}}/></div>

步骤 2. 输入您想要创建的图像的详细描述。例如：

- 一个美丽的山景，日出和松树
- 显示温度和湿度图标的简约仪表板
- 中心带有 Seeed Studio 标志的电路板图案

步骤 3. 点击 **生成** 按钮（魔杖图标）开始图像生成过程

步骤 4. 在 AI 处理您的请求时等待。这通常需要 10-30 秒，具体取决于描述的复杂性。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/ai_image_2.png" style={{width:800, height:'auto'}}/></div>

步骤 5. 完成后，点击 **添加到页面列表** 按钮，AI 生成的图像将出现在您的图库中

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/ai_image_3.png" style={{width:800, height:'auto'}}/></div>

### 优化生成的图像

生成图像后，您可以通过与 AI 对话来完善它：

步骤 1. 如果您对结果不满意，可以直接在 AI 生成器面板中提供反馈。例如：

- 使颜色更加鲜艳
- 添加一些动物和颜色
- 将背景更改为蓝色

步骤 2. 再次点击 **生成** 以根据您的反馈创建新版本

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/ai_image_4.png" style={{width:800, height:'auto'}}/></div>

步骤 3. 继续此迭代过程，直到您对结果满意

### 效果演示

预览和上传图像

- 点击预览，您可以查看预览图像。

:::tip
默认预览颜色为黑白。点击抖动模式并选择六色以显示颜色。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/ai_image_5.png" style={{width:800, height:'auto'}}/></div>

- 点击部署按钮上传图像。

效果演示：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/ai_image_6.png" style={{width:800, height:'auto'}}/></div>

## AI 布局生成器

AI 布局生成器更强大，允许您创建具有功能组件的完整交互式界面。

### 使用 AI 创建布局

步骤 1. 点击右侧的 AI 按钮，然后选择 AI 布局生成器，将出现以下屏幕。

步骤 2. 注意屏幕右侧的 AI 生成器面板，类似于图像中的面板

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/ai_layout_1.png" style={{width:800, height:'auto'}}/></div>

### 在布局中使用 AI 创建界面

步骤 1. 在 AI 生成器面板中，输入您想要创建的界面的描述。具体说明您需要的组件。例如：

- 创建一个天气仪表板，包含温度显示、湿度表和预报图标
- 设计一个智能家居控制面板，包含灯光、恒温器和安全按钮
- 制作一个健身追踪器界面，包含步数计数器、心率显示和活动历史

步骤 2. 点击 **生成** 按钮开始界面生成过程

步骤 3. 在 AI 处理您的请求并创建界面布局时等待

步骤 4. 完成后，AI 将根据您的描述在画布上放置各种组件

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/ai_layout_2.png" style={{width:800, height:'auto'}}/></div>

### 优化生成的画布

AI 设计用于迭代改进：

步骤 1. 查看生成的界面并确定您想要进行的任何更改

步骤 2. 您可以在 AI 生成器面板中提供具体反馈。例如：

- 将温度显示移动到右上角
- 使按钮更大并在其下方添加标签
- 将配色方案更改为深色模式
- 在顶部中心添加一个时钟

步骤 3. 再次点击 **生成** 以根据您的反馈更新界面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/ai_layout_3.png" style={{width:800, height:'auto'}}/></div>

步骤 4. 如果 AI 组件不符合您的预期结果，您可以手动将画布上的组件拖动到您指定的位置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/ai_layout_4.png" style={{width:800, height:'auto'}}/></div>

### 使用组件编辑

布局 AI 可以创建和定位各种组件：

**基本组件：**

- 文本
- 数据
- 形状（矩形、圆形、线条等）
- 二维码
- 绘图

**设备数据组件：**

- 温度
- 湿度
- 电池
- SenseCAP

**数据：**

- 天气
- 天气图标
- Github
- Github 仓库
- 股票
- Youtube

生成界面时，您可以在提示中专门请求这些组件。

### 上传

- 选择六色，点击保存，然后点击部署上传。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/ai_layout_5.png" style={{width:800, height:'auto'}}/></div>

- 效果演示：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/ai_layout_6.png" style={{width:800, height:'auto'}}/></div>

## AI 生成的最佳实践

要充分利用 AI 生成功能，请遵循以下提示：

### 有效提示的技巧

1. **具体**：不要说 "创建仪表板"，而是尝试 "创建一个仪表板，中心显示温度，右侧显示湿度，顶部显示时钟"
2. **提及颜色和风格**："使用蓝白配色方案，所有元素都有圆角"
3. **参考熟悉的设计**："使其看起来像智能恒温器界面" 或 "设计类似于健身追踪器显示"

### 迭代完善

最成功的设计通常来自多轮反馈：

1. 从一般描述开始
2. 生成初始设计
3. 提供关于要更改的内容的具体反馈
4. 生成更新版本
5. 重复直到满意

### AI 与手动编辑相结合

为获得最佳结果：

1. 使用 AI 快速创建基本布局和组件
2. 手动微调单个元素的位置、大小和属性
3. 手动添加任何自定义功能或数据绑定
4. 如果您想添加新部分或进行重大更改，请再次使用 AI

## 结论

使用 SenseCraft HMI 的 AI 生成功能在几分钟内创建令人惊叹的界面。由 AI 驱动并可无缝部署，它帮助您设计专业的交互式屏幕 - 无需设计经验。

从图库中的图像到画布中的完整界面，AI 生成以速度和便捷将您的想象变为现实。



