---
description: 学习如何使用 SenseCraft HMI 工作区，包括基础绘制、高级组件、数据集成和自定义组件。
title: Workspace 指南
---

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/weather.jpg" style={{width:800, height:'auto'}}/></div> -->

Workspace 主要分为四个区域：**Data**、**Basic**、**Component** 和 **My widgets**。每个区域都包含多种内置组件，帮助您设计和自定义界面。除了支持 Google Calendar、YouTube、GitHub 等标准数据源的开箱即用集成外，平台还支持更广泛的自定义数据连接方式。

---

## 创建新设计

**步骤 1.** 点击左侧边栏中的 **Workspace** 进入工作区画布，您此前创建的设计会显示在这里。

**步骤 2.** 点击左上角的 **+ New** 按钮创建新画布。您也可以将鼠标悬停在 “Workspace” 上，快速显示添加按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_1.png" style={{width:800, height:'auto'}}/></div>

**步骤 3.** 在弹出的窗口中，选择 **New Design** 开始一个全新项目，或者使用下方的 **Import Image** 导入已有图片。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_2.png" style={{width:800, height:'auto'}}/></div>

**步骤 4.** 选择 **New Design** 后，输入项目名称，从设备列表中选择目标设备，并点击 **Confirm**。随后会出现一个空白画布，您就可以开始设计自定义界面了。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_3.png" style={{width:800, height:'auto'}}/></div>

---

## Data

这是 SenseCraft 最具特色的部分之一，可帮助您轻松接入外部数据。无论使用内置数据连接器还是自定义数据源，您都可以快速构建强大的可视化仪表板。

--- 

### Device Sensors Function

**Device Sensors** 功能可以读取设备传感器数据，并直接显示在屏幕上。

**步骤 1.** 在 **New Design** 画布中，点击左侧的 **Data** 标签，找到 **Device Sensors** 组件。

**步骤 2.** 选择您要监控的设备，并点击 **Load Sensor Data** 按钮。右侧会显示 **Available Fields**。

**步骤 3.** 点击您希望显示的传感器数据或文本内容。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_9.png" style={{width:800, height:'auto'}}/></div>

**步骤 4.** 在树状结构中勾选要显示的数据字段，所选内容会自动出现在右侧画布中。

**步骤 5.** 点击画布右上角的 **Apply** 按钮，将数据推送到设备。

--- 

### Weather Function

**Weather** 功能可以为指定城市创建实时天气显示。您可以快速生成一个预设布局，也可以自行细化展示的数据和单位。

**步骤 1.** 在 **New Design** 画布中，点击左侧的 **Data** 标签，找到 **Weather** 组件。

**步骤 2.** 在第一个输入框中输入您想查询的城市名称。

**步骤 3.** 使用 **Quick presets** 选择默认天气布局和字段组合。在 **Units** 区域中选择您希望显示的单位。如有需要，也可以切换到 **Advanced** 进行更详细的自定义设置。

**步骤 4.** 点击 **Load Data** 在右侧生成预览，确认无误后点击 **Confirm** 将天气布局放入画布中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_weather.png" style={{width:800, height:'auto'}}/></div>

**步骤 5.** 点击画布右上角的 **Apply** 按钮，将数据推送到设备。

--- 

### Stock Function

**Stock** 功能可在页面中显示实时股票信息。您可以通过股票代码查询，并选择显示当前价格或 K 线图。

**步骤 1.** 在 **New Design** 画布中，点击左侧的 **Data** 标签，找到 **Stock** 组件。

**步骤 2.** 在第一个输入框中输入您的 Stock API Key。如果您还没有，可通过界面中的链接查看获取方法。

**步骤 3.** 在 **Stock Symbol** 输入框中输入您要跟踪的股票代码，然后在 **Display** 区域中选择显示类型，例如 **Current Price** 或 **K-line Chart**。

**步骤 4.** 点击 **Search** 在右侧生成预览，查看结果后点击 **Confirm** 将股票布局添加到画布中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_stock.png" style={{width:800, height:'auto'}}/></div>

**步骤 5.** 点击画布右上角的 **Apply** 按钮，将数据推送到设备。

--- 

### CoinMarketCap Function

**CoinMarketCap** 功能可在设计中显示加密货币市场数据。输入币种符号后，您可以快速生成对应资产的实时数据组件。

**步骤 1.** 在 **New Design** 画布中，点击左侧的 **Data** 标签，找到 **CoinMarketCap** 组件。

**步骤 2.** 在第一个输入框中输入您的 CoinMarketCap API Key。如果您还没有，可通过界面中的链接查看获取方法。

**步骤 3.** 在 **Cryptocurrency Symbol** 字段中输入您要监控的加密货币符号。

**步骤 4.** 点击 **Search** 在右侧生成预览，查看结果后点击 **Confirm** 将加密货币布局添加到画布中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_coinmarketmap.png" style={{width:800, height:'auto'}}/></div>

**步骤 5.** 点击画布右上角的 **Apply** 按钮，将数据推送到设备。

--- 

### GitHub Function

**GitHub** 功能可直接在布局中显示用户或仓库信息，例如个人资料统计、仓库元数据和相关活动字段。

**步骤 1.** 在 **New Design** 画布中，点击左侧的 **Data** 标签，找到 **GitHub** 组件。

**步骤 2.** 在第一个输入框中输入您的 GitHub API Key。如果您还没有，可通过界面中的链接查看获取方法。

**步骤 3.** 在 **GitHub User** 字段中输入您要监控的 GitHub 用户名。

**步骤 4.** 选择 **User Info** 显示用户资料相关数据。输入用户名后，右侧会出现可供快速选择的字段。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_github1.png" style={{width:800, height:'auto'}}/></div>

**步骤 5.** 您也可以选择 **Repository Info**。输入仓库名称后点击 **Search**，再从结果中选择目标仓库，右侧会显示对应可选字段。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_github2.png" style={{width:800, height:'auto'}}/></div>

**步骤 6.** 点击画布右上角的 **Apply** 按钮，将数据推送到设备。

--- 

### YouTube Function

**YouTube** 功能可显示频道级数据，例如频道名称、订阅者统计和其他公开字段。

**步骤 1.** 在 **New Design** 画布中，点击左侧的 **Data** 标签，找到 **YouTube** 组件。

**步骤 2.** 在第一个输入框中输入您的 YouTube API Key。如果您还没有，可通过界面中的链接查看获取方法。

**步骤 3.** 在下方输入框中输入 **Channel ID** 或 **Handle**。

**步骤 4.** 点击 **Search** 加载频道数据。查看右侧预览后，点击 **Confirm** 将频道信息布局放入画布中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_youtube.png" style={{width:800, height:'auto'}}/></div>

**步骤 5.** 点击画布右上角的 **Apply** 按钮，将数据推送到设备。

--- 

### ZenQuotes Function

**ZenQuotes** 功能可在设计中加入励志名言，并支持按类型、作者或关键词进行筛选。

**步骤 1.** 在 **New Design** 画布中，点击左侧的 **Data** 标签，找到 **ZenQuotes** 组件。

**步骤 2.** 如果有 API Key，请在第一个输入框中填写。即使没有 API Key，该功能也可以以基础模式使用。

**步骤 3.** 如果填写了 API Key，您还可以使用 **Quote Type**、**Filter by Author** 和 **Keyword** 进一步筛选结果。

**步骤 4.** 点击 **Load Quotes** 在右侧生成预览。查看结果后，点击 **Confirm** 将名言布局放入画布中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_zenquotes.png" style={{width:800, height:'auto'}}/></div>

**步骤 5.** 点击画布右上角的 **Apply** 按钮，将数据推送到设备。

--- 

### Todoist Function

**Todoist** 功能可显示您 Todoist 账户中的任务数据，非常适合在 ePaper 屏幕上构建效率类仪表板。

**步骤 1.** 在 **New Design** 画布中，点击左侧的 **Data** 标签，找到 **Todoist** 组件。

**步骤 2.** 在第一个输入框中输入您的 Todoist API Key。如果您还没有，可通过界面中的链接查看获取方法。

**步骤 3.** 根据使用场景，可选配置可用的任务筛选条件，例如任务类型或查询字段。

**步骤 4.** 点击 **Load All Tasks** 在右侧生成任务预览。查看结果后，点击 **Confirm** 将任务布局放入画布中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_todolist.png" style={{width:800, height:'auto'}}/></div>

**步骤 5.** 点击画布右上角的 **Apply** 按钮，将数据推送到设备。

--- 

### Google Calendar Function

**Google Calendar** 功能可显示您 Google 账户中的日历事件，并支持按事件类型和时间范围进行筛选。

**步骤 1.** 在 **New Design** 画布中，点击左侧的 **Data** 标签，找到 **Google Calendar** 组件。

**步骤 2.** 如果您通过 Google 登录，您的日历可能已自动完成绑定。您也可以点击 **Re-authorize with Google** 重新授权，或者点击 **Revoke Authorization** 取消访问权限。

**步骤 3.** 设置筛选条件，例如 **Event Type** 和 **Time Range**，以限定要显示的事件范围。

**步骤 4.** 点击 **Load Data** 在右侧生成预览。查看结果后，点击 **Confirm** 将日历布局放入画布中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_caelndar.png" style={{width:800, height:'auto'}}/></div>

**步骤 5.** 点击画布右上角的 **Apply** 按钮，将数据推送到设备。

--- 

### HTML Function

**HTML** 功能允许您直接在 ePaper 显示设备上显示网页内容。借助这一功能，您的设备可以作为专用网页显示终端，用于展示仪表板、监控系统、文档或任何您需要的网页内容。

**步骤 1.** 在 **New Design** 画布中，点击左侧的 **Data** 标签，找到 **HTML** 组件。

**步骤 2.** 在组件配置框中输入要获取内容的 API 地址（URL）。例如：

:::note[示例 URL]
[https://www.windy.com/](https://www.windy.com/)
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_7.png" style={{width:800, height:'auto'}}/></div>

您也可以点击 **File Upload** 上传自己的 HTML 文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_8.png" style={{width:800, height:'auto'}}/></div>

**步骤 3.** 系统会自动解析 API 返回的数据，并以下方 **Tree Structure** 的形式展开。

**步骤 4.** 在树状结构中勾选您要显示的数据字段，所选内容会自动出现在右侧画布中。

**步骤 5.** 点击画布右上角的 **Apply** 按钮，将数据推送到设备。

---
### RSS Function

RSS 功能可将您的设备变成实时信息显示终端。通过接入新闻媒体、博客、天气服务等 RSS 源，您可以创建一个会自动更新最新内容的动态显示页面。

**步骤 1.** 在 **New Design** 画布中，点击左侧的 **Data** 标签，找到 **RSS Feed** 组件。

**步骤 2.** 在组件配置框中输入要获取数据的 API 地址（URL）。例如：

:::note[示例 URL]
[https://feeds.bbci.co.uk/news/world/rss.xml](https://feeds.bbci.co.uk/news/world/rss.xml)
:::

**步骤 3.** 系统会自动解析返回的数据，并以下方 **Tree Structure** 的形式展开。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_6.png" style={{width:800, height:'auto'}}/></div>

**步骤 4.** 在树状结构中勾选您要显示的数据字段，所选内容会自动出现在右侧画布中。

**步骤 5.** 点击画布右上角的 **Apply** 按钮，将数据推送到设备。

---
### External Data Source 

**External Data Source** 组件可通过 API 获取外部数据，并将其可视化展示在仪表板中。

**步骤 1.** 在 **New Design** 画布中，点击左侧的 **Data** 标签，在底部找到 **External Data Source** 组件。

**步骤 2.** 在组件配置框中输入要获取数据的 API 地址（URL）。

**步骤 3.** 系统会自动解析返回的数据，并以下方 **Tree Structure** 的形式展开。

**步骤 4.** 在树状结构中勾选您要显示的数据字段，所选内容会自动出现在右侧画布中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/w4.jpg" style={{width:800, height:'auto'}}/></div>

**步骤 5.** 点击画布右上角的 **Apply** 按钮，将数据推送到设备。

<table style={{border: 'none', width: '100%'}}>
  <tr style={{border: 'none'}}>
    <td style={{border: 'none', textAlign: 'center'}}>
      <img src="https://files.seeedstudio.com/wiki/hmi/img/w5.jpg"  />
    </td>
    <td style={{border: 'none', textAlign: 'center'}}>
      <img src="https://files.seeedstudio.com/wiki/hmi/img/w7.jpeg" />
    </td>
  </tr>
</table>

---
### Push Data to SenseCraft

除了拉取外部数据，我们还提供 **Push to SenseCraft** 组件。该组件允许您从硬件程序，例如 Arduino 或 ESP32 代码，主动向平台推送数据。

**步骤 1.** 确保您的设备已连接到 SenseCraft 平台，并且正在主动发送数据。

**步骤 2.** 在 **Data** 标签中选择 **Push to SenseCraft** 组件。

**步骤 3.** 使用示例代码进行测试，数据会立即显示在画布中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/w8.jpg" style={{width:800, height:'auto'}}/></div>

**步骤 4.** 使用基础文本组件为数据添加标签或说明。

**步骤 5.** 点击画布右上角的 **Apply** 按钮，将数据推送到设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/w9.jpg" style={{width:800, height:'auto'}}/></div>

这一功能非常适合实时监控温度、湿度、光照等传感器数据。

---

## Basic

**Basic** 区域涵盖文本、图片、日期、简单图形，甚至条形码和二维码等基础设计需求。

下面以 **Date/Time** 组件为例：

**步骤 1.** 点击 Basic 标签中的 **Date/Time** 组件，它会自动出现在画布中。

**步骤 2.** 点击该组件，在右侧边栏中查看属性，您可以调整日期/时间格式、字体大小、颜色等参数。

**步骤 3.** 在属性栏中修改格式，例如改为 `YYYY-MM-DD HH:mm:ss`。

**步骤 4.** 取消选中该组件或点击画布，即可看到日期/时间按照新的格式更新。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_4.png" style={{width:800, height:'auto'}}/></div>

---

## Component

**Component** 区域包含更复杂的组件，例如图表、仪表盘、日历和时钟，可以理解为 Basic 区域的增强版。

下面以 **Calendar** 组件为例：

**步骤 1.** 点击 Component 标签中的 **Calendar** 组件，将其添加到画布中。

**步骤 2.** 点击该组件，配置其属性，例如显示的具体日期和配色方案。

**步骤 3.** 在属性栏中修改日期，例如改为 `2026-04-20`。

**步骤 4.** 点击画布，即可看到日历按照配置内容更新。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_5.png" style={{width:800, height:'auto'}}/></div>

---

## My widgets

**My widgets** 区域用于保存您的自定义组件。如果您经常使用某个数据源组件，可以点击右下角的 **Add to My Widgets** 按钮，将该组件保存到个人组件库中，下次即可直接拖拽使用，而无需重新配置 API。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_worksp_advance_2.png" style={{width:800, height:'auto'}}/></div>
