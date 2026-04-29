---
title: AI 生成功能
description: 介绍 SenseCraft HMI 平台中的 AI 生成功能。
---

## 简介

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) 是 Seeed Studio 面向显示设备打造的交互式界面设计平台。其最强大的功能之一就是 **AI 生成功能**，您只需用自然语言描述需求，即可快速生成精美的显示布局和图像。

---

## 快速开始

SenseCraft HMI 的 AI 生成功能提供 **Image** 和 **Layout** 两种模式，适用于不同的应用场景：

* **AI 图像生成器**：根据您的描述生成一张独立的自定义图像。
* **AI 布局生成器**：生成包含功能组件，如按钮、文本字段和数据显示的完整 UI 布局。

---

## AI 图像生成器

**步骤 1. 启用功能**
点击导航栏中的 **AI Gen** 菜单，并选择 **AI Image Generator**。

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_ai_gen_1.png" style={{width:400, height:'auto'}}/>
</div> 

**步骤 2. 输入提示词**
在输入框中输入您想创建图像的详细描述。例如：
* “一幅带有日出和松树的美丽山景。”
* “一个显示温度和湿度图标的极简仪表板。”
* “中间带有 Seeed Studio 标志的电路板图案。”

**步骤 3. 开始生成**
点击发送按钮开始生成。

**步骤 4. 等待处理**
等待 AI 处理您的请求。通常根据描述复杂度不同，大约需要 10 至 30 秒。

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_ai_gen_2.png" style={{width:400, height:'auto'}}/>
</div> 

**步骤 5. 迭代优化**
图像生成后，您可以继续通过对话来进行微调。例如：
* “让颜色更鲜艳一些。”
* “再加一些动物和更多颜色。”
* “把背景改成蓝色。”

**步骤 6. 更新结果**
再次点击发送按钮，AI 会根据您的最新反馈生成新版本。

**步骤 7. 循环优化**
重复这一过程，直到您满意为止。

**步骤 8. 查看细节**
点击生成后的缩略图，可在右侧查看更大的预览图和更多细节。

**步骤 9. 添加到工作区**
点击 **”Add to My Page”** 按钮，该图像会作为一个新页面保存到您的工作区中。

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_ai_gen_3.png" style={{width:400, height:'auto'}}/>
</div> 

---

## AI 布局生成器

**步骤 1. 启用功能**
点击 **AI Gen** 菜单，并选择 **AI Layout Generator**。

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_ai_gen_4.png" style={{width:400, height:'auto'}}/>
</div> 

**步骤 2. 描述布局需求**
输入您想创建的界面描述。请尽量具体说明所需组件。例如：
* “创建一个天气仪表板，包含温度显示、湿度表和预报图标。”
* “设计一个智能家居控制面板，包含灯光、恒温器和安防按钮。”
* “创建一个健身追踪界面，包含步数计数器、心率显示和活动历史。”

**步骤 3. 生成界面**
点击发送按钮开始生成，并等待 AI 构建完整的界面布局。

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_ai_gen_5.png" style={{width:400, height:'auto'}}/>
</div> 

**步骤 4. 布局微调**
初始布局生成后，您可以通过对话进一步调整位置和样式。例如：
* “把温度显示移动到右上角。”
* “让按钮更大，并在下方增加文字标签。”
* “把配色改成深色模式。”
* “在顶部中央添加一个时钟。”

**步骤 5. 刷新布局**
再次点击发送按钮，AI 会根据您的反馈重新调整或修改组件布局。

**步骤 6. 预览细节**
点击缩略图，在右侧详情面板中查看组件布局。

**步骤 7. 添加到工作区**
点击 **"Add to My Page"** 按钮，该布局会作为一个新页面保存到您的工作区中。

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_ai_gen_6.png" style={{width:400, height:'auto'}}/>
</div> 

---

## AI 生成功能限制

- **每日限额**：每个账户每天最多可生成 10 次 AI 内容，其中包括 5 次图像生成/调整和 5 次画布生成/调整
- **重置时间**：每 24 小时重置一次

---

## AI 生成最佳实践

### 1. 如何写出更有效的提示词
* **尽量具体**：与其说“创建一个仪表板”，不如说“创建一个仪表板，温度显示位于中央，湿度显示在右侧，顶部放一个时钟。”
* **说明颜色和风格**：例如“使用蓝白配色，并为所有元素设置圆角。”
* **参考熟悉的设计**：例如“做成智能恒温器的风格”或“设计得像健身追踪器显示界面。”

### 2. 迭代优化
最成功的设计通常来自多轮反馈：
1. 从一个较为概括的描述开始。
2. 生成初始设计。
3. 针对需要修改的地方提供具体反馈。
4. 生成更新版本并重复，直到满意为止。

### 3. AI 与手动编辑结合使用
为了获得最佳效果，建议：
1. **AI 打底**：先用 AI 快速生成基础布局和核心组件。
2. **手动微调**：再手动调整元素的位置、大小和属性。
3. **数据绑定**：手动补充自定义功能或绑定数据源。
4. **重大改动**：如果需要新增整个模块，可以再次借助 AI 完成。
