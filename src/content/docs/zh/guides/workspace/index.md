---
description: 学习如何使用 SenseCraft HMI 工作区，包括基础绘制、高级组件、数据集成和自定义组件。
title: Canvas Designer
last_update:
  date: 11/05/2026
  author:dimo
---

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/weather.jpg" style={{width:800, height:'auto'}}/></div> -->

<a id="overview"></a>

在这一节中，您将了解如何使用 Canvas Designer 创建设计。我们会先带您熟悉界面布局，再一步步完成第一个设计，最后介绍各类组件的功能，帮助您更顺畅地开始设计。

<a id="workspace-layout"></a>
## 了解 Canvas Designer
第一次进入 Canvas Designer 时，您可以先把它理解成 5 个最常用的区域：Sidebar、Top Toolbar、Inspector Panel、画布操作和画布参数。先熟悉这几个区域的位置和作用，后续进行设计时会顺手很多。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/140.png" style={{width:800, height:'auto'}}/></div>

1. Sidebar：左侧是组件区域，包含 **Data Widgets**、**Basic Widgets**、**Component Widgets** 和 **My Widgets** 四个板块，是您搭建设计时最常用的入口。
- 在 **Data Widgets** 中，您可以找到已经接好数据能力的数据组件，适合快速生成天气、日历、传感器信息等内容。
- 在 **Basic Widgets** 中，您可以使用文本、图片、日期、基础图形，以及条形码、二维码等常用设计元素。
- 在 **Component Widgets** 中，您可以使用图表、仪表盘、日历、时钟等更丰富的组件，满足更复杂的展示需求。
- 在 **My Widgets** 中，您可以保存和管理自己常用的自定义组件，方便后续重复使用。

2. Top Toolbar：画布上方提供了一些常用的编辑工具，例如复制、旋转、删除、上下移动图层、组合和格式刷等，方便您更高效地排版和调整内容。
您也可以在画布上单击鼠标右键，快速调用其中不少常用工具。

3. Inspector Panel：当您选中画布中的某个组件后，右侧会显示对应的属性面板。您可以在这里调整文字、样式、数据字段或其他参数，让组件更符合您的设计需求。

4. 画布操作：右上角提供了几个常用操作按钮。完成设计后，您可以在这里进行预览、保存应用，或将设计发布到社区。

5. 画布参数：画布底部可以调整一些显示相关设置，例如抖点模式颜色、横竖屏显示模式、画布像素大小和缩放倍数等，方便您根据目标设备快速查看实际效果。

---

现在您已经熟悉了 Canvas Designer，接下来我们就开始搭建您的第一个设计。

---

<a id="build-your-page"></a>
## 如何创建您的设计
了解 Canvas Designer 的布局之后，接下来我们将以一个简单的时钟设计为例，带您一步步完成设计。

下面将以 reTerminal E1002 为例，演示如何制作一个简易的天气与时钟组合设计。您也可以根据自己的设备型号，按照相同流程进行操作。

### 步骤 1：创建新设计

**1.** 开始之前，先创建一个新项目。点击左侧边栏中的 **Canvas Designer** 打开设计列表页面，您此前创建的设计会显示在这里。

**2.** 点击左上角的 **+ New** 按钮创建新画布。您也可以将鼠标悬停在左侧边栏中的 **Canvas Designer** 项上，以显示快速添加按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/136.png" style={{width:800, height:'auto'}}/></div>

**3.** 在弹出的窗口中，选择 **New Design** 开始一个全新项目，或者使用下方的 **Import Image** 导入已有图片。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/137.png" style={{width:800, height:'auto'}}/></div>

**4.** 选择 **New Design** 后，输入项目名称，从设备列表中选择目标设备，并点击 **Confirm**。随后会出现一个空白画布，您就可以开始设计自定义界面了。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/138.png" style={{width:800, height:'auto'}}/></div>

### 步骤 2：编辑设计

**1.** 点击 **Data Widgets** 板块，打开 **Weather** 组件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/118.png" style={{width:800, height:'auto'}}/></div>

**2.** 在 **Location** 输入框中输入您所在的城市名称，并在下方选择一个快速布局。

**3.** 点击 **Load Data** 后，右侧会先生成预览。确认效果没问题后，再点击右下角的 **Confirm** 将内容放入画布。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/119.png" style={{width:800, height:'auto'}}/></div>

**4.** 点击 **Basic Widgets** 板块，选择 **Date/Time** 组件。画布上会自动出现一个日期显示框。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/120.png" style={{width:800, height:'auto'}}/></div>

**5.** 点击 **Component Widgets** 板块，选择 **Clock** 组件。画布上会自动出现一个圆形时钟。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/121.png" style={{width:800, height:'auto'}}/></div>

**6.** 适当调整各个组件的布局，让设计更整洁、更美观。您可以点击右上角的 **Preview** 按钮预览效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/122.png" style={{width:800, height:'auto'}}/></div>

**7.** 设计调整完成后，点击右上角的 **Apply** 即可将它保存到当前项目中。

**8.** 如果您对设计效果满意，并希望让更多人看到，可以点击右上角的 **Publish**，将设计发布到社区，供其他用户浏览和使用。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/123.png" style={{width:800, height:'auto'}}/></div>

---

现在您已经完成了自己的设计并将其下发到设备，接下来的几个章节会继续带您了解各个主要组件板块的具体用法。我们会按照 **Basic**、**Component**、**My Widgets** 和 **Data Widgets** 的顺序来介绍。其中 **Basic Widgets** 是最基础、最适合先开始了解的板块。

---

<a id="data"></a>
## Data Widgets

这是 SenseCraft 最具特色的部分之一，可帮助您轻松接入外部数据。无论使用内置数据连接器还是自定义数据源，您都可以快速构建强大的可视化仪表板。

--- 

### Device Sensors Widget
**Device Sensors** 功能可以读取设备传感器数据，并直接显示在屏幕上。

**步骤 1.** 在 **New Design** 画布中，点击左侧的 **Data Widgets** 标签，找到 **Device Sensors** 组件。

**步骤 2.** 选择您要监控的设备，并点击 **Load Sensor Data** 按钮。右侧会显示 **Available Fields**。

**步骤 3.** 点击您希望显示的传感器数据或文本内容。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_9.png" style={{width:800, height:'auto'}}/></div>

**步骤 4.** 在树状结构中勾选想要显示的数据字段，选中的内容会自动出现在右侧画布中，方便您立即查看效果。

**步骤 5.** 点击画布右上角的 **Apply** 按钮，将数据推送到设备。
---

### SenseCAP Widget
**SenseCAP** 功能可连接您的 SenseCAP 账户，并读取关联传感器的实时数据。

**步骤 1.** 在 **New Design** 画布中，点击左侧的 **Data Widgets** 标签，找到 **SenseCAP** 组件。

**步骤 2.** 在 Access ID 输入框中输入您的 SenseCAP Access ID。

**步骤 3.** 在 Access Key 输入框中输入您的 SenseCAP Access Key。

**步骤 4.** 在 **Devices** 列表中选择您要监控的设备，右侧会显示对应的传感器数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_sensecap.png" style={{width:800, height:'auto'}}/></div>

**步骤 5.** 点击画布右上角的 **Apply** 按钮，将数据推送到设备。

--- 

### Weather Widget
**Weather** 功能可以为指定城市创建实时天气显示。您可以快速生成一个预设布局，也可以自行细化展示的数据和单位。

**步骤 1.** 在 **New Design** 画布中，点击左侧的 **Data Widgets** 标签，找到 **Weather** 组件。

**步骤 2.** 在第一个输入框中输入您想查询的城市名称。

**步骤 3.** 使用 **Quick presets** 选择默认天气布局和字段组合。在 **Units** 区域中选择您希望显示的单位。如有需要，也可以切换到 **Advanced** 进行更详细的自定义设置。

**步骤 4.** 点击 **Load Data** 后，右侧会先生成预览。确认结果没问题后，再点击 **Confirm** 将天气布局放入画布中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_weather.png" style={{width:800, height:'auto'}}/></div>

**步骤 5.** 点击画布右上角的 **Apply** 按钮，将数据推送到设备。

#### Community Templates
After simple layout and style adjustments, your result can look like this community template:

<div style={{textAlign:'center'}}>
  <a href="https://sensecraft.seeed.cc/hmi/template/202" target="_blank" rel="noopener noreferrer"><img width={300} src="https://files.seeedstudio.com/wiki/hmi/img/144.png" /></a>
</div>
<div class="community-template-actions" style={{textAlign:'center'}}>
  <a class="community-template-button" href="https://sensecraft.seeed.cc/hmi/template/202" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>View Template</font></span></strong>
  </a>
</div>
--- 

### Stock Widget
**Stock** 功能可在设计中显示实时股票信息。您可以通过股票代码查询，并选择显示当前价格或 K 线图。

**步骤 1.** 在 **New Design** 画布中，点击左侧的 **Data Widgets** 标签，找到 **Stock** 组件。

**步骤 2.** 先在第一个输入框中填入您的 Stock API Key。如果您还没有，也可以先通过界面中的链接查看获取方法。

**步骤 3.** 在 **Stock Symbol** 输入框中输入您要跟踪的股票代码，然后在 **Display** 区域中选择显示类型，例如 **Current Price** 或 **K-line Chart**。

**步骤 4.** 点击 **Search** 在右侧生成预览，查看结果后点击 **Confirm** 将股票布局添加到画布中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_stock.png" style={{width:800, height:'auto'}}/></div>

**步骤 5.** 点击画布右上角的 **Apply** 按钮，将数据推送到设备。

#### Community Templates
After simple layout and style adjustments, your result can look like this community template:

<div style={{textAlign:'center'}}>
  <a href="https://sensecraft.seeed.cc/hmi/template/9" target="_blank" rel="noopener noreferrer"><img width={300} src="https://files.seeedstudio.com/wiki/hmi/img/145.png" /></a>
</div>
<div class="community-template-actions" style={{textAlign:'center'}}>
  <a class="community-template-button" href="https://sensecraft.seeed.cc/hmi/template/9" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>View Template</font></span></strong>
  </a>
</div>
--- 

### CoinMarketCap Widget
**CoinMarketCap** 功能可在设计中显示加密货币市场数据。输入币种符号后，您可以快速生成对应资产的实时数据组件。

**步骤 1.** 在 **New Design** 画布中，点击左侧的 **Data Widgets** 标签，找到 **CoinMarketCap** 组件。

**步骤 2.** 在第一个输入框中输入您的 CoinMarketCap API Key。如果您还没有，可通过界面中的链接查看获取方法。

**步骤 3.** 在 **Cryptocurrency Symbol** 字段中输入您要监控的加密货币符号。

**步骤 4.** 点击 **Search** 在右侧生成预览，查看结果后点击 **Confirm** 将加密货币布局添加到画布中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_coinmarketmap.png" style={{width:800, height:'auto'}}/></div>

**步骤 5.** 点击画布右上角的 **Apply** 按钮，将数据推送到设备。

#### Community Templates
After simple layout and style adjustments, your result can look like this community template:

<div style={{textAlign:'center'}}>
  <a href="https://sensecraft.seeed.cc/hmi/template/90" target="_blank" rel="noopener noreferrer"><img width={300} src="https://files.seeedstudio.com/wiki/hmi/img/143.png" /></a>
</div>
<div class="community-template-actions" style={{textAlign:'center'}}>
  <a class="community-template-button" href="https://sensecraft.seeed.cc/hmi/template/90" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>View Template</font></span></strong>
  </a>
</div>
--- 

### GitHub Widget
**GitHub** 功能可直接在布局中显示用户或仓库信息，例如个人资料统计、仓库元数据和相关活动字段。

**步骤 1.** 在 **New Design** 画布中，点击左侧的 **Data Widgets** 标签，找到 **GitHub** 组件。

**步骤 2.** 在第一个输入框中输入您的 GitHub API Key。如果您还没有，可通过界面中的链接查看获取方法。

**步骤 3.** 在 **GitHub User** 字段中输入您要监控的 GitHub 用户名。

**步骤 4.** 选择 **User Info** 显示用户资料相关数据。输入用户名后，右侧会出现可供快速选择的字段。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_github1.png" style={{width:800, height:'auto'}}/></div>

**步骤 5.** 您也可以选择 **Repository Info**。输入仓库名称后点击 **Search**，再从结果中选择目标仓库，右侧会显示对应可选字段。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_github2.png" style={{width:800, height:'auto'}}/></div>

**步骤 6.** 点击画布右上角的 **Apply** 按钮，将数据推送到设备。
---

### YouTube Widget
**YouTube** 功能可显示频道级数据，例如频道名称、订阅者统计和其他公开字段。

**步骤 1.** 在 **New Design** 画布中，点击左侧的 **Data Widgets** 标签，找到 **YouTube** 组件。

**步骤 2.** 在第一个输入框中输入您的 YouTube API Key。如果您还没有，可通过界面中的链接查看获取方法。

**步骤 3.** 在下方输入框中输入 **Channel ID** 或 **Handle**。

**步骤 4.** 点击 **Search** 加载频道数据。查看右侧预览后，点击 **Confirm** 将频道信息布局放入画布中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_youtube.png" style={{width:800, height:'auto'}}/></div>

**步骤 5.** 点击画布右上角的 **Apply** 按钮，将数据推送到设备。

--- 

### ZenQuotes Widget
**ZenQuotes** 功能可在设计中加入励志名言，并支持按类型、作者或关键词进行筛选。

**步骤 1.** 在 **New Design** 画布中，点击左侧的 **Data Widgets** 标签，找到 **ZenQuotes** 组件。

**步骤 2.** 如果有 API Key，请在第一个输入框中填写。即使没有 API Key，该功能也可以以基础模式使用。

**步骤 3.** 如果填写了 API Key，您还可以使用 **Quote Type**、**Filter by Author** 和 **Keyword** 进一步筛选结果。

**步骤 4.** 点击 **Load Quotes** 在右侧生成预览。查看结果后，点击 **Confirm** 将名言布局放入画布中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_zenquotes.png" style={{width:800, height:'auto'}}/></div>

**步骤 5.** 点击画布右上角的 **Apply** 按钮，将数据推送到设备。

--- 

### Todoist Widget
**Todoist** 功能可显示您 Todoist 账户中的任务数据，非常适合在 ePaper 屏幕上构建效率类仪表板。

**步骤 1.** 在 **New Design** 画布中，点击左侧的 **Data Widgets** 标签，找到 **Todoist** 组件。

**步骤 2.** 在第一个输入框中输入您的 Todoist API Key。如果您还没有，可通过界面中的链接查看获取方法。

**步骤 3.** 根据使用场景，可选配置可用的任务筛选条件，例如任务类型或查询字段。

**步骤 4.** 点击 **Load All Tasks** 在右侧生成任务预览。查看结果后，点击 **Confirm** 将任务布局放入画布中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_todolist.png" style={{width:800, height:'auto'}}/></div>

**步骤 5.** 点击画布右上角的 **Apply** 按钮，将数据推送到设备。

--- 

### Google Calendar Widget
**Google Calendar** 功能可显示您 Google 账户中的日历事件，并支持按事件类型和时间范围进行筛选。

**步骤 1.** 在 **New Design** 画布中，点击左侧的 **Data Widgets** 标签，找到 **Google Calendar** 组件。

**步骤 2.** 如果您通过 Google 登录，您的日历可能已自动完成绑定。您也可以点击 **Re-authorize with Google** 重新授权，或者点击 **Revoke Authorization** 取消访问权限。

**步骤 3.** 设置筛选条件，例如 **Event Type** 和 **Time Range**，以限定要显示的事件范围。

:::tip
如果您在 **Event Type** 中选择了 **Today** 或 **Specific Day**，但您的 Google Calendar 在该时间范围内没有对应事件，那么点击 **Load Data** 后，右侧预览可能会显示为空。
如果出现这种情况，建议先尝试 **Week** 或 **Weekdays**，这两个选项通常可以正常加载并显示内容。
:::

**步骤 4.** 点击 **Load Data** 后，右侧会生成预览。确认效果后，再点击 **Confirm** 将日历布局放入画布中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_caelndar.png" style={{width:800, height:'auto'}}/></div>

**步骤 5.** 点击画布右上角的 **Apply** 按钮，将数据推送到设备。

--- 

### RSS Widget
RSS Widget 可将 RSS 源中的更新内容显示在屏幕上，例如新闻网站、博客或公告页面。
当您希望屏幕自动刷新最新标题、而不需要手动更新内容时，推荐使用该组件。

**步骤 1.** 在 **New Design** 画布中，点击左侧的 **Data Widgets** 标签，找到 **RSS Feed** 组件。

**步骤 2.** 在组件配置框中输入要获取数据的 API 地址（URL）。例如：

:::note[示例 URL]
[https://feeds.bbci.co.uk/news/world/rss.xml](https://feeds.bbci.co.uk/news/world/rss.xml)
:::

**步骤 3.** 系统会自动解析返回的数据，并以下方 **Tree Structure** 的形式展开。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_6.png" style={{width:800, height:'auto'}}/></div>

**步骤 4.** 在树状结构中勾选想要显示的数据字段，选中的内容会自动出现在右侧画布中，方便您立即查看效果。

**步骤 5.** 点击画布右上角的 **Apply** 按钮，将数据推送到设备。

---

### HTML Widget
HTML Widget 可将网页或上传的 HTML 内容直接渲染到设备屏幕上。
当您已经有现成的 HTML 页面（如仪表板、内部网页或自定义布局）并希望直接展示时，推荐使用该组件。

**步骤 1.** 在 **New Design** 画布中，点击左侧的 **Data Widgets** 标签，找到 **HTML** 组件。

**步骤 2.** 在组件配置框中输入要获取内容的 API 地址（URL）。例如：

:::note[示例 URL]
[https://www.windy.com/](https://www.windy.com/)
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_7.png" style={{width:800, height:'auto'}}/></div>

您也可以点击 **File Upload** 上传自己的 HTML 文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_8.png" style={{width:800, height:'auto'}}/></div>

**步骤 3.** 系统会自动解析 API 返回的数据，并以下方 **Tree Structure** 的形式展开。

**步骤 4.** 在树状结构中勾选想要显示的数据字段，选中的内容会自动出现在右侧画布中，方便您立即查看效果。

**步骤 5.** 点击画布右上角的 **Apply** 按钮，将数据推送到设备。

---


### HackerNews Widget
HackerNews Widget 可从 Hacker News 拉取内容列表，例如 Top、New、Best、Ask、Show 或 Jobs。
当您希望搭建一个会定期更新的轻量技术资讯看板时，推荐使用该组件。

**步骤 1.** 在 **New Design** 画布中，点击左侧的 **Data Widgets** 标签，找到 **HackerNews** 组件。

**步骤 2.** 在 **Data Source** 下拉框中选择内容来源，例如 **Top Stories**、**Newest**、**Best**、**Ask HN**、**Show HN** 或 **Job**。

**步骤 3.** 在 **Number of Stories** 中选择需要加载的条目数量。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_HackerNews.png" style={{width:800, height:'auto'}}/></div>

**步骤 4.** 点击下方的 **Load Data** 按钮后，系统会先在右侧生成预览。确认结果无误后，再点击 **Confirm** 将该内容添加到画布中。

**步骤 5.** 点击画布右上角的 **Apply** 按钮，将数据推送到设备。

#### Community Templates
After simple layout and style adjustments, your result can look like this community template:

<div style={{textAlign:'center'}}>
  <a href="https://sensecraft.seeed.cc/hmi/template/164" target="_blank" rel="noopener noreferrer"><img width={300} src="https://files.seeedstudio.com/wiki/hmi/img/141.png" /></a>
</div>
<div class="community-template-actions" style={{textAlign:'center'}}>
  <a class="community-template-button" href="https://sensecraft.seeed.cc/hmi/template/164" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>View Template</font></span></strong>
  </a>
</div>
---

### Reddit Widget
Reddit Widget 可按指定排序方式显示目标 subreddit 的帖子内容。
当您希望展示某个主题社区的持续更新（如 gadgets、AI 或本地社区）时，推荐使用该组件。

**步骤 1.** 在 **New Design** 画布中，点击左侧的 **Data Widgets** 标签，找到 **Reddit** 组件。

**步骤 2.** 在 **Subreddit** 输入框中填写目标社区名称，无需添加 `r/` 前缀，例如 **gadgets**。

**步骤 3.** 在 **Sort** 栏中选择排序方式，例如 **Hot**、**New**、**Top** 或 **Rising**。

**步骤 4.** 在 **Number of Stories** 中选择需要加载的帖子数量。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_Reddit.png" style={{width:800, height:'auto'}}/></div>

**步骤 5.** 点击下方的 **Load Data** 按钮后，系统会先在右侧生成预览。确认结果无误后，再点击 **Confirm** 将该内容添加到画布中。

**步骤 6.** 点击画布右上角的 **Apply** 按钮，将数据推送到设备。

#### Community Templates
After simple layout and style adjustments, your result can look like this community template:

<div style={{textAlign:'center'}}>
  <a href="https://sensecraft.seeed.cc/hmi/template/143" target="_blank" rel="noopener noreferrer"><img width={300} src="https://files.seeedstudio.com/wiki/hmi/img/142.png" /></a>
</div>
<div class="community-template-actions" style={{textAlign:'center'}}>
  <a class="community-template-button" href="https://sensecraft.seeed.cc/hmi/template/143" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>View Template</font></span></strong>
  </a>
</div>
---

### External Data Source 

**External Data Source** 组件可通过 API 获取外部数据，并将其可视化展示在仪表板中。

**步骤 1.** 在 **New Design** 画布中，点击左侧的 **Data Widgets** 标签，在底部找到 **External Data Source** 组件。

**步骤 2.** 在组件配置框中输入要获取数据的 API 地址（URL）。

**步骤 3.** 系统会自动解析返回的数据，并以下方 **Tree Structure** 的形式展开。

**步骤 4.** 在树状结构中勾选想要显示的数据字段，选中的内容会自动出现在右侧画布中，方便您立即查看效果。

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

**步骤 2.** 在 **Data Widgets** 标签中选择 **Push to SenseCraft** 组件。

**步骤 3.** 使用示例代码进行测试，数据会立即显示在画布中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/w8.jpg" style={{width:800, height:'auto'}}/></div>

**步骤 4.** 使用基础文本组件为数据添加标签或说明。

**步骤 5.** 点击画布右上角的 **Apply** 按钮，将数据推送到设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/w9.jpg" style={{width:800, height:'auto'}}/></div>

这一功能非常适合实时监控温度、湿度、光照等传感器数据。

---

<a id="basic"></a>
## Basic Widgets

**Basic Widgets** 区域涵盖文本、图片、日期、简单图形，甚至条形码和二维码等基础设计需求。

下表按类别列出了 Basic Widgets 区域中的组件：

| Component | What It Does |
|---|---|
| Text | Adds plain text content to the page. |
| Image | Inserts an image into the page. |
| Date/Time | Displays the current date or time. |
| Day Counter | Shows the number of days before or after a target date. |
| Rectangle | Adds a rectangular shape for layout or decoration. |
| Circle | Adds a circular shape to the page. |
| Ellipse | Adds an ellipse shape for visual decoration. |
| Triangle | Adds a triangle shape to the page. |
| Polygon | Adds a polygon shape with multiple sides. |
| Line | Adds a straight line for separation or decoration. |
| Draw | Lets you draw custom freeform graphics manually. |
| QRCode | Generates a QR code from text or a link. |
| Barcode | Generates a barcode for encoded data. |
接下来，按照下面的步骤使用 Basic Widgets 区域中的组件创建一个简易的时钟页面。

**步骤 1.** 点击 Basic 标签中的 **Date/Time** 组件，它会自动出现在画布中。

**步骤 2.** 点击该组件，在右侧边栏中查看属性，您可以调整日期/时间格式、字体大小、颜色等参数。

**步骤 3.** 在属性栏中修改格式，例如改为 `YYYY-MM-DD HH:mm:ss`。

**步骤 4.** 取消选中该组件或点击画布，即可看到日期/时间按照新的格式更新。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/124.png" style={{width:800, height:'auto'}}/></div>

**步骤 5.** 选择 **Text** 组件并输入您想显示的文字。您可以在右侧属性面板中调整字体大小、文字颜色等设置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/125.png" style={{width:800, height:'auto'}}/></div>

**步骤 6.** 选择 **Rectangle** 组件，将其作为背景图形使用。您可以在右侧属性面板中调整它的大小和颜色。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/126.png" style={{width:800, height:'auto'}}/></div>

**步骤 7.** 选择 **Image** 组件。在右侧属性面板中，您可以输入图片 URL 或 Base64 内容。如果暂时没有想使用的图片，也可以在属性面板中的 **Icon Library** 里查找合适的图标。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/127.png" style={{width:800, height:'auto'}}/></div>

**步骤 8.** 调整各个组件的位置，让整体布局更整洁。您也可以使用底部的画布设置来进一步优化页面外观。

**步骤 9.** 点击 **Preview** 预览页面效果。确认无误后，点击 **Apply** 将页面下发到您的设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/128.png" style={{width:800, height:'auto'}}/></div>

---

<a id="component"></a>
## Component Widgets

**Component Widgets** 区域包含更复杂的组件，例如图表、仪表盘、日历和时钟，可以理解为 Basic Widgets 区域的增强版。

下表按类别列出了 Component Widgets 区域中的组件：

| Component | What It Does |
|---|---|
| Calendar | Displays a calendar view for a selected date. |
| Clock | Displays an analog clock on the page. |
| List | Shows multiple items in a list layout. |
| Table | Displays structured data in rows and columns. |
| Line Chart | Displays trends over time or across connected data points. |
| Bar Chart | Visualizes values with bars for easy comparison. |
| Pie Chart | Shows proportions as slices of a circle. |
| Scatter Chart | Shows the distribution of data points across two axes. |
| K-Line Chart | Displays open, high, low, and close values over time. |
| Gauge Chart | Displays a value within a gauge-style range. |
接下来，延续上一部分 Basic 的示例，继续使用 Component Widgets 区域中的组件来完善时钟页面。

**步骤 1.** 点击 Component 标签中的 **Calendar** 组件，将其添加到画布中。

**步骤 2.** 点击该组件，配置其属性，例如显示的日期和配色方案。

**步骤 3.** 点击画布，即可看到日历按照所选设置更新。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/129.png" style={{width:800, height:'auto'}}/></div>

**步骤 4.** 在画布中添加一个 **Clock** 组件，然后在右侧属性面板中调整其样式、大小和颜色等设置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/130.png" style={{width:800, height:'auto'}}/></div>

**步骤 5.** 调整各组件的位置，让页面布局更加整洁。您也可以使用底部的画布设置来进一步优化整体外观。

**步骤 6.** 点击 **Preview** 预览页面效果。确认无误后，点击 **Apply** 将页面下发到设备上。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/131.png" style={{width:800, height:'auto'}}/></div>

---

<a id="my-widgets"></a>
## My Widgets

**My Widgets** 区域用于保存您的自定义组件。如果您经常使用某个数据源组件，可以点击右下角的 **Add to My Widgets** 按钮，将该组件保存到个人组件库中，下次即可直接拖拽使用，而无需重新配置 API。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_worksp_advance_2.png" style={{width:800, height:'auto'}}/></div>















