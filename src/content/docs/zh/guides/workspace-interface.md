---
title: 工作区界面和模板
description: 全面了解和使用 SenseCraft HMI 中的核心工具栏和页面管理功能的指南。
---

## 简介

欢迎使用 SenseCraft HMI！本教程将成为您了解平台中枢神经系统的指南：主工具栏。掌握这些功能是高效管理项目、了解设备状态以及实现设计的关键。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_28.png" style={{width:400, height:'auto'}}/></div>

我们将涵盖三个主要领域：
1.  **设备状态栏**：您一目了然的所有设备相关信息来源。
2.  **页面和页面列表管理**：组织和创建显示内容的系统。
3.  **主工具栏**：用于设计、保存和部署工作的基本控制集。

在本指南结束时，您将深入了解如何像专业人士一样导航和控制 SenseCraft HMI 工作区。

## 设备状态栏

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_29.png" style={{width:400, height:'auto'}}/></div>

设备状态栏位于工作区的最顶部，提供有关已连接设备的实时信息。

让我们分解每条信息的含义：

*   **Device / e1001**：显示当前选择设备的名称和型号。
*   **Sleep**：指示设备的当前状态。可以是 "睡眠" 或 "唤醒"。
*   **Last Online: 15:27**：此时间戳告诉您设备上次成功与 SenseCraft HMI 云平台通信的时间。
*   **Interval(min): 30**：这是一个关键设置。它定义设备将每隔多少分钟唤醒一次以刷新显示并提取新数据或设计。
*   **Next Online: 15:57**：根据 "上次在线" 时间和 "间隔"，这预测设备下次何时唤醒和连接。
*   **800x480**：这是已连接设备的屏幕分辨率。画布中的所有设计都将基于此尺寸。
*   **设备传感器数据**：对于 reTerminal E 系列等兼容设备，此区域显示内置传感器的实时读数：
    *   🌡️ **26.7**：温度。
    *   💧 **55.9%**：湿度。
    *   🔋 **100%**：当前电池电量。

:::tip
为防止屏幕烧屏，特别是在电子纸显示器上，强烈建议设置刷新间隔。至少每天刷新一次有助于维持屏幕的健康和寿命。间隔为 `1440` 分钟相当于每天刷新一次。
:::

## 管理页面和页面列表

这部分是您组织要在设备上显示的所有内容的地方。在深入之前，了解两个关键概念至关重要：**页面** 和 **页面列表**。

*   **页面**：单个屏幕设计。这可以是来自画布的 UI 设计、来自图库的图像、RSS 提要或网页。将其视为演示文稿中的单个 "幻灯片"。
*   **页面列表**：页面的集合或 "播放列表"。页面列表可以包含一个或多个页面。您的设备始终设置为显示一个活动的页面列表。如果页面列表包含多个页面，设备将按定义的间隔循环显示它们。

:::tip
1. 页面的最大数量。图像的限制为 20 张，而其他页面类型每种上限为 3 个。超出这些限制的页面无法成功添加到页面列表。
:::

### 创建新页面

`+ New` 按钮是添加新内容的起点。

**步骤 1.** 点击 **+ New** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_30.png" style={{width:400, height:'auto'}}/></div>

**步骤 2.** 将出现一个对话框，为您提供几个创建新页面的选项：
*   **UI 设计（画布）**：从头开始创建带有各种组件的自定义布局。
*   **图库**：创建一个显示图像的页面。
*   **RSS**：创建一个显示 RSS 提要的页面。
*   **网页**：创建一个显示网页的页面。
*   **模板**：您还可以从各种预先设计的模板中进行选择，以获得良好的开端。

#### 模板

模板提供预先设计的布局，将多个组件组合成一个有凝聚力的即用型显示。它们节省时间并确保专业效果，而无需从头开始设计布局。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_31.png" style={{width:400, height:'auto'}}/></div>

##### 天气显示模板

天气显示模板提供一个完整的天气仪表板，显示任何城市的当前状况和 7 天预报。

步骤 1. 在模板部分点击 "天气显示" 模板

步骤 2. 在出现的 "配置模板：天气显示" 对话框中：

   - 在 "城市名称" 字段中输入城市名称

   - 点击 "搜索" 以验证该城市是否存在于天气数据库中

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_32.png" style={{width:400, height:'auto'}}/></div>

步骤 3. 搜索成功后，点击 "确定" 继续

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_33.png" style={{width:400, height:'auto'}}/></div>

步骤 4. 将出现一个 "模板预览" 窗口，显示：

   - 左侧面板显示当前日期、天气状况、温度、最高/最低温度和湿度

   - 右侧面板显示城市名称和 7 天预报，包括天气状况图标和温度范围

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_34.png" style={{width:400, height:'auto'}}/></div>

步骤 5. 查看预览并注意：

   - 所有模板元素将获得唯一 ID 以避免冲突

   - 您可以在将模板应用到画布后对其进行修改

步骤 6. 点击 "应用到画布" 将模板添加到您的工作区

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_35.png" style={{width:400, height:'auto'}}/></div>

步骤 7. 天气显示模板现在位于您的画布上，可以部署或进一步自定义

:::note
- 天气显示模板使用需要设备互联网连接的实时天气 API 数据。

- 将模板应用到画布后，它是完全可自定义的 - 您可以调整大小、重新定位或修改任何元素。

- 天气数据会根据项目设置中设置的刷新间隔自动更新。
:::

##### GitHub 个人资料模板

GitHub 个人资料模板创建一个综合仪表板，显示 GitHub 用户的个人资料信息和选定的仓库及其统计信息。

步骤 1. 在模板部分点击 "GitHub 个人资料" 模板


步骤 2. 在出现的 "配置模板：GitHub 个人资料" 对话框中：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_38.png" style={{width:400, height:'auto'}}/></div>

   - 输入您的 [GitHub 个人访问令牌](https://github.com/settings/tokens)。您可能需要启用所有用户权限，以确保 SenseCraft HMI 后端有权限从开源仓库读取数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_41.png" style={{width:400, height:'auto'}}/></div>

   - 在必填字段中输入 GitHub 用户名（例如 "seeed-studio"）

   - 可选择在仓库搜索字段中输入关键字以过滤仓库

   - 将搜索字段留空以显示该用户的所有仓库

步骤 3. 点击 "搜索所有 '[用户名]' 仓库" 按钮以检索用户的仓库

步骤 4. 从显示的仓库列表中，选择最多 3 个您想要展示的仓库

   - 每个仓库显示其名称、描述、主要编程语言和星标数

   - 您可以使用过滤字段缩小仓库列表

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_39.png" style={{width:400, height:'auto'}}/></div>

步骤 5. 点击 "确定" 确认您的选择

步骤 6. 将出现一个 "模板预览" 窗口，显示：

   - 顶部的 GitHub 用户显示名称

   - "Github" 标签和关注者数量

   - 一条水平分隔线

   - 选定的仓库及其名称和星标数

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_40.png" style={{width:400, height:'auto'}}/></div>

步骤 7. 查看预览并注意：

   - 模板将替换画布上的所有当前元素

   - 所有模板元素将获得唯一 ID 以避免冲突

   - 您可以在将模板应用到画布后对其进行修改

步骤 8. 点击 "应用到画布" 将模板添加到您的工作区

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_42.png" style={{width:400, height:'auto'}}/></div>

:::note
- 模板有两种搜索模式在界面中明确解释：

  1. 仅用户：仅输入用户名以显示所有仓库

  2. 用户 + 关键字：输入用户名和特定关键字以过滤仓库

- 仓库选择限制为 3 个，以确保在较小屏幕上的最佳显示。

- 某些 GitHub 统计数据可能是近似值（例如超过 1,000 的关注者数显示为 "1.0K"）。
:::

##### 股票仪表板模板

股票仪表板模板提供简洁专业的实时股票市场数据显示，包括价格和百分比变化。

步骤 1. 在模板部分点击 "股票仪表板" 模板

步骤 2. 在出现的 "配置模板：股票仪表板" 对话框中：

   - 在提供的字段中输入您的 [Twelve Data API 密钥](https://sensecraft-hmi-docs.seeed.cc/zh/guides/sensecraft-hmi-canvas/#获取-twelve-data-api-密钥)（出于安全原因已屏蔽）

步骤 3. 模板提供四个默认公司股票。如果您希望使用其他公司的股票进行显示，可以在应用模板后自行修改。

步骤 4. 点击 "预览" 确认

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_36.png" style={{width:400, height:'auto'}}/></div>

步骤 5. 将出现一个 "模板预览" 窗口，显示：

   - 左侧面板以大文本显示股票代码

   - 右侧面板显示当前股价和百分比变化

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_37.png" style={{width:400, height:'auto'}}/></div>

步骤 6. 查看预览并注意：

   - 所有模板元素将获得唯一 ID 以避免冲突

   - 您可以在将模板应用到画布后对其进行修改

步骤 7. 点击 "应用到画布" 将模板添加到您的工作区

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_50.png" style={{width:400, height:'auto'}}/></div>

:::note
- 股票仪表板模板需要设备具有互联网访问权限以获取实时市场数据。

- Twelve Data 免费层的股票市场数据至少延迟 15 分钟。

- 数据根据您项目的刷新间隔设置进行刷新。

- 市场数据仅在各自交易所的交易时间内可用。
:::

##### YouTube 频道统计模板

YouTube 频道统计模板以简洁现代的设计展示 YouTube 频道的品牌、口号和订阅者数量。

步骤 1. 在模板部分点击 "YouTube 频道统计" 模板

步骤 2. 在出现的 "配置模板：YouTube 频道统计" 对话框中：

   - 输入您的 [YouTube Data API 密钥](https://sensecraft-hmi-docs.seeed.cc/zh/guides/sensecraft-hmi-canvas/#获取-youtube-data-api-密钥)（出于安全原因已屏蔽）

   - 以支持的格式之一输入 YouTube 频道标识符：

     * 频道 ID：以 "UC" 开头的 24 个字符字符串（例如 UC_x5XG1OV2P6uZZ5FSM9Ttw）
     * @句柄：以 @ 开头的频道句柄（例如 @seeedstudiosz）
     * 频道 URL：完整的 YouTube URL（例如 youtube.com/@seeedstudiosz）

步骤 3. 点击 "验证频道" 以验证频道是否存在并检索其数据

步骤 4. 如果验证成功，您将看到确认消息（例如 "找到频道：Seeed Studio • 20.4K"）

步骤 5. 点击 "确定" 继续

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/125.png" style={{width:800, height:'auto'}}/></div>

步骤 6. 将出现一个 "模板预览" 窗口，显示：

   - 左侧面板以时尚的黑色背景显示频道名称和口号/描述

   - 右侧面板显示 "YouTube" 标签、订阅者数量和 "订阅者" 文本

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/126.png" style={{width:800, height:'auto'}}/></div>

步骤 7. 查看预览并注意：

   - 模板将替换画布上的所有当前元素

   - 所有模板元素将获得唯一 ID 以避免冲突

   - 您可以在将模板应用到画布后对其进行修改

步骤 8. 点击 "应用到画布" 将模板添加到您的工作区

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/127.png" style={{width:1000, height:'auto'}}/></div>


:::note
- YouTube 频道统计模板需要设备具有互联网访问权限以获取频道数据。

- YouTube Data API 有配额和速率限制，可能会影响使用。

- 模板会在可用时自动检索频道的口号或描述。

- 对于拥有大量订阅者的频道，数量可能会被缩写（例如 "1.2M" 表示 1,200,000）。
:::

### 管理页面列表

**页面列表** 按钮打开一个强大的管理界面，让您完全控制内容组织。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_43.png" style={{width:400, height:'auto'}}/></div>

**步骤 1.** 点击 `+ New` 按钮旁边的 **页面列表** 按钮。

**步骤 2.** 将出现 "管理页面列表和页面" 模态框，分为三个部分：

1.  **页面列表（左侧面板）**：此区域列出您创建的所有页面列表。
    *   标星的列表（图像中的 `默认页面列表`）是当前活动的列表，将显示在设备上。
    *   您可以在此处点击 `+ New` 创建一个新的空页面列表。

2.  **当前页面列表（中间面板）**：显示所选页面列表中当前的所有页面。
    *   点击红色减号图标（`-`）从页面列表中删除页面（这不会删除页面本身）。

3.  **所有页面（右侧面板）**：这是您曾经创建的所有页面的库。只有点击了保存按钮的页面才会出现在这里。
    *   要将页面添加到当前选定的页面列表，只需点击所需页面缩略图上的加号图标（`+`）。然后它将出现在 "当前页面列表" 面板中。

**步骤 3.** 根据需要组织好页面列表后，点击 **确认** 保存更改。

## 主工具栏：您的控制中心

此工具栏包含设计和部署过程的基本操作按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_44.png" style={{width:400, height:'auto'}}/></div>

*   **屏幕方向**：这两个图标允许您在横向（水平）和纵向（垂直）模式之间切换设计画布。

*   **调试（Bug 图标）**：这是高级用户的强大功能。
    *   点击它会打开 "调试：当前布局数据" 模态框。
    *   此模态框以 JSON（JavaScript Object Notation）格式显示整个布局的配置，详细说明每个元素、其位置、大小、颜色和其他属性。
    *   您可以使用它来了解设计的结构以进行调试。
    *   熟悉代码的用户甚至可以点击 **手动编辑 JSON** 直接修改布局的属性，提供令人难以置信的控制程度。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_45.png" style={{width:400, height:'auto'}}/></div>

*   **导入/导出**：这些按钮允许您将页面设计保存到本地文件（导出）或从本地文件加载设计（导入）。这对于备份工作或共享设计很有用。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/142.png" style={{width:1000, height:'auto'}}/></div>

导出功能允许您将当前 UI 设计保存为文件：

**步骤 1.** 完成界面设计后，点击顶部工具栏中的 **导出** 按钮（向外箭头图标）。

**步骤 2.** 在出现的文件保存对话框中，选择保存位置并为文件命名。

**步骤 3.** 点击 "保存" 完成导出过程。

您的设计将保存为包含所有界面信息的 JSON 文件，可用于备份或共享。

导入功能使您可以加载以前导出的设计或模板：

**步骤 1.** 点击顶部工具栏中的 **导入** 按钮（向内箭头图标）。

**步骤 2.** 在文件选择对话框中，找到并选择您以前导出的设计文件。

**步骤 3.** 点击 "打开"，所选设计将加载到您当前的工作区。

:::tip
导入操作将替换当前工作区内容。建议在导入之前导出当前设计以防止数据丢失。
:::

这些功能特别适用于：
- 在进行重大更改之前备份设计
- 与团队成员共享界面设计
- 在不同设备之间转移项目
- 使用预制模板快速启动新项目

*   **保存**：这是最重要的按钮之一。它将您当前的页面设计保存到 **SenseCraft HMI 云**。它 **不会** 保存到您的设备。

    :::tip
    养成频繁点击 **保存** 的习惯，以确保不会丢失任何进度。
    :::

*   **预览**：此按钮显示当前设计在设备屏幕上的虚拟预览。这是一种快速简便的方法来检查布局、字体和颜色，而无需部署到实际硬件。

*   **部署**：这是最后一步。**部署** 按钮将您保存的活动页面列表发送到已连接的设备。然后设备将下载并显示新内容。

    :::tip
    要使部署立即生效，您的设备需要处于唤醒状态。如果设备处于睡眠模式，它将在下次根据其间隔计划唤醒时提取新设计。您可以手动唤醒设备（例如通过按设备上的按钮）以触发立即更新和下载已部署的设计。
    :::

## 结论

您现在对 SenseCraft HMI 中的基本控件有了扎实的了解。通过有效使用设备状态栏、管理页面和页面列表，以及遵循保存 -> 预览 -> 部署工作流程，您已经充分准备好在基于屏幕的设备上创建、管理和显示您能想象的任何内容。


