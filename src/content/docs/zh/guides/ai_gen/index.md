---
title: AI Generation
description: 介绍 SenseCraft HMI 平台中的 AI 生成功能。
---

<a id="overview"></a>

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) 是 Seeed Studio 面向显示设备打造的交互式界面设计平台。其最强大的功能之一就是 **AI Generation**，您只需用自然语言描述需求，即可快速生成图像和 UI 布局。在 SenseCraft HMI 中，AI Generation 提供两种模式：

* **AI 图像生成器**：根据您的描述生成一张独立的自定义图像。
* **AI 布局生成器**：生成包含文本、按钮和数据显示等功能组件的完整 UI 布局。

接下来您可以按照下面的步骤，开始体验 SenseCraft HMI 的 AI Generation 功能。

---

<a id="ai-image-generator"></a>
## 使用 AI 生成图像

**步骤 1. 启用功能**
点击导航栏中的 **AI Gen** 菜单，并选择 **AI Image Generator**。

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/hmi/img/132.png" style={{width:400, height:'auto'}}/>
</div> 

**步骤 2. 输入提示词**
在输入框中输入您想创建图像的详细描述。例如：
* “黎明时分令人惊叹的山景，晨雾轻柔地笼罩着静谧的松林，阳光洒下温暖的金色光芒，给人一种平静而充满希望的感觉。”

**步骤 3. 开始生成**
点击发送按钮开始生成。

**步骤 4. 等待处理**
等待 AI 处理您的请求。通常根据描述复杂度不同，大约需要 10 至 30 秒。

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/hmi/img/133.png" style={{width:400, height:'auto'}}/>
</div> 

**步骤 5. 迭代优化**
图像生成后，您可以继续通过对话来进行微调。例如：
* “让颜色更鲜艳一些。”

**步骤 6. 更新结果**
再次点击发送按钮，AI 会根据您的最新反馈生成新版本。

**步骤 7. 持续迭代直到满意**
继续反复调整，直到结果符合您的预期。

**步骤 8. 查看细节**
点击生成后的缩略图，可在右侧打开更大的预览图。

**步骤 9. 添加到工作区**  
点击 **Add to My Page**，将生成的图片保存为工作区中的图片页面。  
点击 **Insert to Canvas**，将生成的图片作为 **Image** 组件直接插入到画布中。

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/hmi/img/134.png" style={{width:400, height:'auto'}}/>
</div> 

---

<a id="ai-layout-generator"></a>
## 使用 AI 生成布局

**步骤 1. 启用功能**
点击 **AI Gen** 菜单，并选择 **AI Layout Generator**。

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_ai_gen_4.png" style={{width:400, height:'auto'}}/>
</div> 

**步骤 2. 描述布局需求**
输入您想创建的界面描述。请尽量具体说明所需组件。例如：
* “创建一个天气仪表板，包含温度显示、湿度表和预报图标。”

**步骤 3. 生成界面**
点击发送按钮开始生成，并等待 AI 构建完整的界面布局。

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_ai_gen_5.png" style={{width:400, height:'auto'}}/>
</div> 

**步骤 4. 布局微调**
初始布局生成后，您可以通过对话进一步调整位置和样式。例如：
* “把温度显示移动到右上角。”

**步骤 5. 刷新布局**
再次点击发送按钮，AI 会根据您的反馈重新调整或修改组件布局。

**步骤 6. 预览细节**
点击缩略图，在右侧详情面板中查看布局。

**步骤 7. 添加到工作区**
点击 **Add to My Page** 按钮，该布局会作为一个新页面保存到您的工作区中。

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_ai_gen_6.png" style={{width:400, height:'auto'}}/>
</div> 

---

<a id="best-practices-for-ai-generation"></a>
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
为了获得更好的效果，建议：
1. **AI 打底**：先用 AI 快速生成基础布局和核心组件。
2. **手动微调**：再手动调整元素的位置、大小和属性。
3. **数据绑定**：手动补充自定义功能或绑定数据源。
4. **重大改动**：如果需要新增整个模块，可以再次借助 AI 完成。
