---
title: UI 设计功能
description: 介绍 SenseCraft HMI 平台下的 UI 设计功能的使用。
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/141.jpg" style={{width:800, height:'auto'}}/></div>

## 简介

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) 中的 UI 设计功能是平台最强大和最灵活的功能，允许您创建自定义界面、仪表板和数据可视化。使用画布，您可以设计精美的显示，将静态元素与来自各种来源的动态数据相结合，包括设备传感器、天气信息、股票数据等。

本综合指南将引导您使用 UI 设计功能为 Seeed 设备创建专业显示。从基本形状和文本到实时数据小部件和预制模板，您将学习构建满足特定需求的自定义界面所需的一切。

本文将以 [reTerminal E1002](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1002/) 为例，说明如何在 SenseCraft HMI 平台上使用此功能。

## 画布入门

### 访问画布功能

步骤 1. 导航到下面的 **[SenseCraft HMI](https://sensecraft.seeed.cc/hmi)** 平台。

步骤 2. 连接您的设备或选择已配对的设备使用。

步骤 3. 如果您还没有创建页面，您可能需要首先创建一个新的 UI 设计页面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_1.png" style={{width:1000, height:'auto'}}/></div>

### 了解画布界面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_2.png" style={{width:1000, height:'auto'}}/></div>

画布界面由几个关键部分组成：

1. **组件侧边栏**：左侧面板，包含所有可用元素，分类为基本、设备、数据和模板

2. **UI 设计区域**：中央工作区，您可以在其中设计界面

3. **工具栏**：顶部栏，包含设计工具、设置和格式选项

4. **属性面板**：选择元素时出现，允许自定义外观和行为

5. **操作按钮**：保存、预览和部署按钮，用于测试和应用设计

## 基本组件

基本部分提供用于创建界面布局的基本元素：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_3.png" style={{width:1000, height:'auto'}}/></div>

### 文本

文本组件允许您向画布添加标签、标题和其他文本内容。

步骤 1. 点击基本部分中的 "文本" 组件。然后文本会自动放置在画布中心

步骤 2. 将文本拖动到您想要放置的区域

步骤 3. 出现带有 "文本" 字样的默认文本框

步骤 4. 使用属性面板自定义：

  - 字体大小（默认为 30px）

  - 文本样式（粗体、斜体、下划线）

  - 对齐方式（左、中、右）

  - 颜色

  - 字体系列

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_4.png" style={{width:1000, height:'auto'}}/></div>

### 数据

数据组件是一个强大的工具，用于直接在画布上显示从外部 API 获取的动态信息。这允许您集成实时数据，例如天气、股票价格或通过 Web API 提供的任何其他信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_5.png" style={{width:1000, height:'auto'}}/></div>

步骤 1. 点击基本部分中的 "数据" 组件。画布上将出现带有 "数据" 字样的占位符文本框。

步骤 2. 将 "数据" 组件拖动到所需位置。

步骤 3. 选择组件后，点击工具栏中的 **数据设置** 图标（看起来像链条链接）以打开配置面板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_6.png" style={{width:1000, height:'auto'}}/></div>

步骤 4. 在 **数据设置** 面板中，配置外部数据源：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_7.png" style={{width:400, height:'auto'}}/></div>

**4.1. 建立连接**

这是您告诉组件在哪里找到其信息的地方。

*   **远程数据 URL：** 在此处输入完整的 API 端点 URL。例如，如果您正在构建股票行情，您将输入金融数据 API 提供的 URL。
*   **请求头（可选）：** 某些 API 需要通过标头进行身份验证。使用 **+ 添加自定义标头** 按钮添加必要的键和值，例如 `Authorization` 令牌。
*   **测试按钮：** 输入 URL 后，始终使用 **测试** 按钮。这会立即查询端点并向您显示原始 JSON 响应。这对于验证连接和了解您将使用的数据结构至关重要。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_8.png" style={{width:400, height:'auto'}}/></div>

点击测试按钮后，如果 URL 输入正确，控制台将立即显示测试结果的所有返回值。此时，您可以用鼠标点击所需条目以直接获取特定值。

**4.2. 提取特定值**

API 响应通常包含大量数据，但您通常只需要其中的一部分。

*   **数据键：** 使用点表示法指定要显示的数据的确切路径。如果您的 API 返回 `{"stock":{"price": 150.75}}`，您的数据键将是 `stock.price` 以提取价格。对于数组中的数据，使用括号表示法，如 `forecast[0].temperature`。
*   **精度：** 对于数字数据，此设置控制要显示的小数位数。将其设置为 `2` 将把 `150.7531` 格式化为 `150.75`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_9.png" style={{width:400, height:'auto'}}/></div>

**4.3. 转换数据以供显示**

本节实际上是一个独立模块。它与第 4.1 节和第 4.2 节没有内在联系。它提供了一组预定义的、可能经常使用的数据值，允许用户直接应用它们，而无需自己查找 API。

以下是您可以选择的内置转换器：

*   **无 - 无转换：** 显示原始提取值。
*   **日期格式：** 将计算机时间戳（例如 `1678886400`）转换为人类可读的日期（例如 "2023-03-15"）。
*   **自定义函数：** 灵活性的终极工具。编写自己的 JavaScript 来操作值。例如，`return '$' + value;` 会在股价前加上美元符号。
*   **天气代码转描述：** 一个专门的函数，将 API 中的数字天气代码转换为描述性文本，如 "晴天" 或 "雨天"。
*   **电池电量状态：** 智能地将百分比（0-100）转换为状态，如 "高"、"中" 或 "低"。
*   **大数字格式：** 自动缩短大数字以提高可读性（例如 `1250000` 变为 "1.25M"）。
*   **相对时间：** 将时间戳转换为相对表达式，如 "5 分钟前更新"，使您的数据感觉更即时。

通过组合这些设置，您可以精确控制外部数据的获取、解释和显示方式，创建真正动态和信息丰富的显示。

步骤 5. 您还可以使用属性面板自定义显示数据的外观以调整：
  - 字体大小和样式
  - 对齐方式
  - 颜色
  - 字体系列

### 图像

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_10.png" style={{width:400, height:'auto'}}/></div>

图像组件允许您向画布添加图片。您可以选择本地上传或使用图像链接。

步骤 1. 点击 "图像" 组件

步骤 2. 在属性面板中，点击 "上传" 添加图像或输入图像 URL

步骤 3. 根据需要调整大小和位置

### 日期

日期组件显示可以以各种格式配置的日期、时间或时间戳。

步骤 1. 点击数据部分中的 "日期" 组件

步骤 2. 该组件将自动放置在画布中心，默认日期格式（通常为 MM/DD/YYYY）

步骤 3. 点击工具栏中的日历图标以打开日期设置面板

步骤 4. 在日期设置面板中：

   - 使用日期选择器或输入字段设置特定日期

   - 从下拉菜单中选择日期格式（例如 MM/DD/YYYY、DD/MM/YYYY、YYYY-MM-DD）

   - 在时区部分选择您的时区。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_11.png" style={{width:400, height:'auto'}}/></div>

步骤 5. 使用属性面板进一步自定义：

   - 字体大小和样式

   - 文本颜色

   - 对齐方式

   - 背景（如果需要）

:::note
在数据设置中，有一个使用当前时间开关。默认情况下，开关显示关闭，表示设备将根据实际时间自动更新此组件的时间。当您按下关闭按钮时，此功能被禁用，时间不会自动更新，而是显示固定值。
:::

### 形状

SenseCraft HMI 画布提供各种形状组件：

- **矩形**：创建标准矩形或正方形

- **圆角矩形**：创建带圆角的矩形

- **圆形**：创建完美的圆形

- **椭圆**：创建椭圆形状

- **三角形**：创建三边形状

- **多边形**：创建多边形状

- **线条**：创建直线

- **绘图**：启用手绘

对于每个形状：

步骤 1. 点击所需的形状组件

步骤 2. 在画布上点击并拖动以确定最终放置位置

步骤 3. 使用属性面板自定义：

  - 填充颜色

  - 边框颜色和宽度

  - 不透明度

  - 圆角半径（对于矩形）

  - 其他特定于形状的属性

### 二维码

二维码组件从您提供的任何文本或 URL 生成可扫描的 QR（快速响应）码。

步骤 1. 点击组件列表绘图部分中的 "二维码" 组件。

步骤 2. 该组件将放置在画布上，带有默认二维码。

步骤 3. 点击组件工具栏中的二维码图标以打开二维码内容面板。

步骤 4. 在内容面板中，在 "二维码内容" 输入字段中输入您想要编码的文本或 URL。画布上的二维码将在您输入时自动更新。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_26.png" style={{width:400, height:'auto'}}/></div>

步骤 5. 使用属性面板进一步自定义组件在画布上的大小和位置。

### 条形码

条形码组件从文本或数字生成标准可扫描条形码。

步骤 1. 点击组件列表绘图部分中的 "条形码" 组件。

步骤 2. 该组件将放置在画布上，带有默认条形码及其下方显示的相应数字。

步骤 3. 点击组件工具栏中的条形图标以打开条形码内容面板。

步骤 4. 在内容面板中，在 "条形码内容" 输入字段中输入您想要编码的文本或数字。条形码及其下方的文本将自动更新。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_27.png" style={{width:400, height:'auto'}}/></div>

步骤 5. 使用属性面板进一步自定义组件在画布上的大小和位置。

## 设备组件

设备部分包含自动显示已连接 Seeed reTerminal E 系列电子纸显示设备传感器数据的组件：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_12.png" style={{width:400, height:'auto'}}/></div>

### 电池组件

电池组件显示已连接设备的当前电池电量。

步骤 1. 点击 "电池" 组件

步骤 2. 该组件将自动显示设备的电池百分比

步骤 3. 使用属性面板自定义：

  - 字体大小（默认为 30px）

  - 文本样式（粗体、斜体、下划线）

  - 对齐方式（左、中、右）

  - 颜色

  - 字体系列

### 温度组件

温度组件显示设备传感器的当前温度读数。

步骤 1. 点击 "温度" 组件

步骤 2. 该组件将自动显示设备的温度读数

步骤 3. 使用属性面板自定义：

  - 字体大小（默认为 30px）

  - 文本样式（粗体、斜体、下划线）

  - 对齐方式（左、中、右）

  - 颜色

  - 字体系列

### 湿度组件

湿度组件显示设备传感器的当前湿度读数。

步骤 1. 点击 "湿度" 组件

步骤 2. 该组件将自动显示设备的湿度百分比

步骤 3. 使用属性面板自定义：

  - 字体大小（默认为 30px）

  - 文本样式（粗体、斜体、下划线）

  - 对齐方式（左、中、右）

  - 颜色

  - 字体系列

### SenseCAP 组件

如果您以前购买过 SenseCAP 传感器，SenseCraft-HMI 现在支持直接从您账户下的 SenseCAP 节点检索传感器读数。

步骤 1. 点击 "SenseCAP" 组件

步骤 2. 组件将自动放置在画布中心

步骤 3. 请在属性窗格中选择您希望显示的传感器值。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_13.png" style={{width:400, height:'auto'}}/></div>

步骤 4. 使用属性面板自定义：

  - 字体大小（默认为 30px）

  - 文本样式（粗体、斜体、下划线）

  - 对齐方式（左、中、右）

  - 颜色

  - 字体系列

## 数据组件

数据部分包含连接到外部数据源以显示天气、股票等信息的组件：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/96.png" style={{width:400, height:'auto'}}/></div>

### 天气

天气组件显示指定位置的当前天气信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_14.png" style={{width:400, height:'auto'}}/></div>

步骤 1. 点击数据部分中的 "天气" 组件

步骤 2. 该组件将自动放置在画布中心，默认显示温度

步骤 3. 使用顶部工具栏配置天气显示选项：

   - 从位置字段中选择位置（例如 "New York"）

   - 从下拉菜单中选择要显示的天气数据：

     * 当前天气（温度、状况）

     * 今天（今天的预报）

     * 第 2 天到第 7 天（未来预报）

步骤 4. 使用属性面板进一步自定义外观

### 天气图标

天气图标组件显示当前天气状况的视觉表示。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_15.png" style={{width:400, height:'auto'}}/></div>

步骤 1. 点击数据部分中的 "天气图标" 组件

步骤 2. 该组件将自动放置在画布中心

步骤 3. 使用顶部工具栏，从位置字段中选择位置（例如 "New York"）

步骤 4. 使用属性面板自定义：
   - 大小和位置
   - 图标样式

### GitHub

GitHub 组件显示有关 GitHub 用户个人资料的信息。

步骤 1. 点击数据部分中的 "GitHub" 组件

步骤 2. 该组件将自动放置在画布中心，默认文本显示 "Seeed Studio"

步骤 3. 在工具栏中，您将看到一个 GitHub 用户名字段（例如 "seeed-studio"）和一个下拉菜单

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_16.png" style={{width:400, height:'auto'}}/></div>

步骤 4. 在这里，您需要[从 GitHub 账户请求令牌](https://github.com/settings/tokens)。SenseCraft HMI 将使用此令牌检索与您提供的 GitHub 名称相关的信息以供显示。然后在字段中输入有效的 GitHub 用户名，并在出现的 GitHub 用户配置面板中点击 "验证"。

步骤 5. 从标记为 "显示名称"（或类似）的下拉菜单中，选择要显示的 GitHub 用户信息：

   - 显示名称（显示用户的显示名称）

   - 用户名（显示用户的 GitHub 句柄）

   - 关注者（显示关注者数量）

   - 正在关注（显示正在关注的用户数量）

   - 公共仓库（显示公共仓库数量）

   - 公共 Gist（显示公共 gist 数量）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_18.png" style={{width:400, height:'auto'}}/></div>

步骤 6. 使用属性面板自定义 GitHub 组件的外观

:::note
- GitHub 组件需要设备具有互联网访问权限以获取实时 GitHub 数据。

- GitHub API 有速率限制，因此过度刷新可能会暂时禁用组件。
:::

:::tip
尝试这些 GitHub 用户名进行测试：

- seeed-studio（Seeed Studio 的官方 GitHub）

- torvalds（Linus Torvalds，Linux 创建者）

- microsoft（Microsoft 的官方 GitHub）

- google（Google 的官方 GitHub）
:::

### GitHub 仓库

GitHub 仓库组件显示有关特定 GitHub 仓库的信息。

步骤 1. 点击数据部分中的 "GitHub 仓库" 组件

步骤 2. 该组件将自动放置在画布中心，默认文本显示 "wiki-documents"

步骤 3. 在出现的 GitHub 仓库配置面板中：

   - 您可以看到当前用户和仓库状态

   - 通过输入关键字搜索仓库，或将字段留空以显示用户的所有仓库

   - 以 "用户名/仓库" 格式手动输入特定仓库（例如 "Seeed-Studio/wiki-documents"）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_17.png" style={{width:400, height:'auto'}}/></div>

步骤 4. 点击 "搜索" 查找并验证仓库

步骤 5. 从工具栏中的下拉菜单中，选择要显示的仓库信息：

   - 名称（显示仓库名称）

   - 全名（显示用户名/仓库格式）

   - 星标（显示星标数量）

   - 分叉（显示分叉数量）

   - 观察者（显示观察者数量）

   - 描述（显示仓库描述）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_20.png" style={{width:400, height:'auto'}}/></div>

步骤 6. 使用属性面板自定义 GitHub 仓库组件的外观

:::note
- 与 GitHub 用户组件一样，GitHub 仓库组件需要设备具有互联网访问权限以获取数据。

- GitHub API 有速率限制，可能会影响数据更新频率。
:::

### 股票

股票组件显示指定符号的实时股票市场信息。

步骤 1. 点击数据部分中的 "股票" 组件

步骤 2. 该组件将自动放置在画布中心，默认文本为 "AAPL"（Apple 的股票代码）

步骤 3. 点击工具栏中的 "配置" 按钮以打开股票配置面板

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_19.png" style={{width:400, height:'auto'}}/></div>

步骤 4. 在股票配置面板中：

   - 在股票代码字段中输入股票代码（例如 "AAPL"、"MSFT"、"GOOGL"）

   - 点击 "搜索" 验证代码

   - 在提供的字段中输入您的 Twelve Data API 密钥（您可以参考[下面](#获取-twelve-data-api-密钥)的教程了解如何获取 API）

步骤 5. 从工具栏中的 "代码" 下拉菜单中，选择要显示的股票数据：

   - 代码（仅显示股票代码符号）

   - 当前价格（显示最新股价）

   - 变化（显示自前一收盘以来的价格变化）

   - 变化百分比（显示百分比变化）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_21.png" style={{width:400, height:'auto'}}/></div>

步骤 6. 使用属性面板自定义股票组件的外观

#### 获取 Twelve Data API 密钥

要使用股票组件，您需要从 Twelve Data 获取免费 API 密钥：

步骤 1. 访问 [twelvedata.com](https://twelvedata.com/)

步骤 2. 点击 "免费开始" 或 "注册"

步骤 3. 使用电子邮件地址和密码创建账户

步骤 4. 注册并登录后，导航到您的仪表板

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/103.png" style={{width:1000, height:'auto'}}/></div>

步骤 5. 找到并复制您的 API 密钥

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/104.png" style={{width:800, height:'auto'}}/></div>

步骤 6. 将此 API 密钥粘贴到股票配置面板中的 "Twelve Data API 密钥" 字段

:::note
- Twelve Data 的免费层允许每分钟和每天有限数量的 API 调用。

- 画布中显示的股票数据仅用于显示目的。只有在将设计部署到设备后，才会显示实时股票信息，设备将从 Twelve Data 的服务器获取当前数据。

- 为获得最可靠的体验，如果您需要频繁的股票更新，请考虑升级到付费的 Twelve Data 计划。
:::

:::tip
用于测试的常用股票代码：

- AAPL（Apple）

- MSFT（Microsoft）

- GOOGL（Alphabet/Google）

- AMZN（Amazon）

- TSLA（Tesla）
:::

### YouTube

YouTube 组件显示有关 YouTube 频道的信息和统计数据。

步骤 1. 点击数据部分中的 "YouTube" 组件

步骤 2. 该组件将自动放置在画布中心，默认文本显示 "SeeedStudio"

步骤 3. 在出现的 YouTube 配置面板中：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_22.png" style={{width:400, height:'auto'}}/></div>

   - 在 YouTube 频道字段中输入 YouTube 频道 ID（例如 "UC_x5XG1OV2P6uZZ5FSM9Ttw"）

   - 点击 "搜索" 验证频道

   - 在提供的字段中输入您的 YouTube Data API 密钥

   - 点击 "Google Cloud Console" 链接以[获取免费 API 密钥](#获取-youtube-data-api-密钥)（如果您还没有）

步骤 4. 从工具栏中的下拉菜单中，选择要显示的频道信息：

   - 频道名称（显示 YouTube 频道名称）

   - 频道 ID（显示 YouTube 频道 ID）

   - 描述（显示频道描述）

   - 订阅者（显示订阅者数量）

   - 观看次数（显示总观看次数）

   - 视频（显示上传视频的数量）

   - 发布于（显示频道创建日期）

   - 自定义 URL（如果可用，显示自定义 URL）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_23.png" style={{width:400, height:'auto'}}/></div>

步骤 5. 使用属性面板自定义 YouTube 组件的外观

#### 获取 YouTube Data API 密钥

:::note
如果您不知道如何获取 API 密钥，您也可以阅读 [Google 的官方文档](https://developers.google.com/youtube/v3/getting-started)。
:::

要使用 YouTube 组件，您需要从 Google Cloud Console 获取免费 API 密钥：

步骤 1. 访问 [Google Cloud Console](https://console.cloud.google.com/)

步骤 2. 创建新项目或选择现有项目

步骤 3. 导航到 "API 和服务" > "库"

步骤 4. 搜索 "YouTube Data API v3" 并启用它

步骤 5. 转到 "API 和服务" > "凭据"

步骤 6. 点击 "创建凭据" > "API 密钥"

步骤 7. 复制新的 API 密钥

步骤 8. 将此 API 密钥粘贴到 YouTube 配置面板中的 "YouTube Data API 密钥" 字段

:::note
- YouTube 组件需要设备具有互联网访问权限以获取频道数据。

- 画布显示 "未配置 API 密钥"，直到您提供有效的 API 密钥和频道 ID。

- Google 的 YouTube Data API 有配额和速率限制，可能会影响使用。

- 某些统计数据（如确切的订阅者数量）可能会根据 YouTube 的政策进行四舍五入或近似。
:::

### AI 布局生成器

SenseCraft HMI 画布包含 AI 驱动的布局生成器：

步骤 1. 点击右上角的 "AI 生成器" 按钮

步骤 2. 输入您想要创建的布局的描述

步骤 3. 点击 "生成" 让 AI 根据您的描述创建布局

步骤 4. 根据需要自定义生成的布局

此功能非常适合快速创建布局而无需从头开始。

:::tip
有关使用本节的详细说明，请参阅 **[在 SenseCraft HMI 中使用 AI 生成](https://sensecraft-hmi-docs.seeed.cc/zh/guides/sensecraft-hmi-ai-generator/)**。
:::

## 部署到设备

创建画布设计后，您将希望将其部署到 Seeed 设备：

### 部署前预览

步骤 1. 点击顶部工具栏中的 "预览" 按钮

步骤 2. 查看布局在设备上的显示效果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_24.png" style={{width:400, height:'auto'}}/></div>

步骤 3. 进行必要的调整

### 保存您的布局

步骤 1. 点击 "保存" 按钮存储当前布局

步骤 2. 您的布局将保存到 SenseCraft HMI 云

### 部署到设备

步骤 1. 确保设备已连接并显示 "在线" 状态

步骤 2. 点击 "部署" 按钮

步骤 3. 等待部署过程完成

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_25.png" style={{width:400, height:'auto'}}/></div>

步骤 4. 您的布局将显示在已连接的设备上

### 部署注意事项

要成功部署到 Seeed 设备：

1. **设备兼容性**：确保您的布局针对特定设备的屏幕分辨率进行了优化

2. **连接状态**：确保设备在部署前显示 "在线" 状态

3. **数据组件**：如果使用数据组件（天气、股票等），请确保设备具有互联网连接

4. **设备传感器**：电池、温度和湿度等组件只能与具有相应传感器的兼容 Seeed reTerminal E 系列电子纸显示设备一起使用

5. **刷新率**：根据数据需要更新的频率和设备的功能设置适当的间隔时间

## 故障排除

### 常见画布问题和解决方案

1. **组件不显示数据**：
   - 检查设备的互联网连接
   - 验证数据源是否可用
   - 确保动态组件的数据键路径正确
   - 尝试刷新画布或重新部署

2. **设备上的布局问题**：
   - 在部署前使用预览功能进行测试
   - 避免将元素放置得太靠近画布边缘

3. **部署失败**：
   - 确保设备正确连接到 SenseCraft HMI
   - 检查设备的互联网连接
   - 尝试保存布局然后再次部署
   - 重启设备并再次尝试部署

4. **设备传感器数据未显示**：
   - 验证设备是否具有所需的传感器
   - 检查设备的固件是否为最新
   - 确保设备正确连接到 SenseCraft HMI

5. **文本或图像显示失真**：
   - 调整组件的大小和位置
   - 检查文本组件的字体设置
   - 对于图像，确保它们具有适合显示器的分辨率

## 结论

SenseCraft HMI 中的画布功能为 Seeed 设备创建自定义界面和仪表板提供了强大的平台。通过将基本设计元素与动态数据组件和预制模板相结合，您可以创建专业的显示，服务于广泛的目的。

无论您是构建气象站、设备监视器、信息显示还是控制面板，画布都为您提供了将愿景变为现实的工具。直观的拖放界面结合高级功能（如动态数据绑定和调试工具）使其对初学者来说易于访问，同时仍然为有经验的用户提供深度。



