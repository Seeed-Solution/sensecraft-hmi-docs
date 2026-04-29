---
title: 发布说明
description: SenseCraft HMI 平台迭代记录与版本历史
---

## SenseCraft HMI v1.4.0 发布说明
发布时间：2026.04.10

> 本次发布分两周完成（上周 + 今天）。抱歉上次没有提前通知。接下来，我们会公开开发路线图，并在一份公开文档中收集反馈。

### 设计器更新

#### Weather Widget
- 新增参数：日期、日均温度、文本形式的天气代码等更多字段
- 单位设置：现在您可以选择显示的温度 / 风速 / 降雨量单位
- 配置界面重设计：已选参数现在会以分组元素方式显示，数值类参数还会提供图表预览。不过您仍然可以继续使用原来的 **Available Field** 模式进行选择
- 新增 4 个预设组件：Current Weather、Compact Weather Card、7-Day Forecast、5-Day Forecast with Date

#### Calendar Widget
- 新增 **Week starts on** 设置，可选择周日或周一为一周起始日

#### Timezone Optimization
- Date/Time/Clock/Calendar/Day Counter 组件的时区处理方式已从 UTC 切换为基于 IANA 的时区体系（原生支持夏令时）

#### Other Improvements
- Draw Widget 从顶部工具栏移动到了 Basic Widgets 中，并新增笔触和图案设置
- 改进了 Group 内多组件逻辑
- Inspector Panel 大幅精简：仅保留最核心的设置项，界面更清爽、更不易让人产生负担

### SenseCraft HMI Core
- 侧边栏二级菜单现在支持悬停展开，为画布设计器释放更多空间
- 侧边栏顶部新增 SenseCraft HMI 图标 Logo
- 首页新增 Banner 区域，用于展示重要通知和更新

### [Workspace](https://sensecraft.seeed.cc/hmi/workspace/page)
- Workspace 现在将 Add New、My Page、My Playlist 集中展示在同一页面中，入口更清晰
- My Page 现在汇总所有 Designs 和上传的 Images。右上角的编辑图标支持批量操作（Apply to Device、Delete）
- 点击 **+New** 后可选择两种方式：从零创建 Design，或上传图片制作 Album
- 选择 **+Design from scratch** 后，会引导您设置设计名称并选择目标设备的屏幕尺寸

### [Tools](https://sensecraft.seeed.cc/hmi/tools/firmware)
- Firmware Flasher 和 Image Dithering 工具界面已更新
- 每个工具现在都附带说明、适用场景和使用提示

### 新硬件支持
- 新增支持 [10.3" 16 级灰度 ePaper 显示设备 reTerminal E1003](https://www.seeedstudio.com/reTerminal-E1003-p-6731.html)

### 路线图与反馈渠道
为了更好地管理版本发布并收集社区反馈，我们现在通过一份公开 Google 文档共享开发路线图：[SenseCraft HMI Open Roadmap](https://docs.google.com/document/d/18xcOUtQjN6NweaFFQ7ZZEqQ3Hoaqs0XX7PX74HbDv4s/edit?usp=sharing)。

如果您有功能建议或遇到问题，可以：
- 直接在 Google 文档中留言（我们会定期查看）
- 或加入 [SenseCraft HMI Discord channel](https://discord.com/invite/Jj2CBXCjtf)，我们也会从这里同步收集反馈并更新路线图

感谢大家一直以来的支持！
SenseCraft HMI 团队

---

## SenseCraft HMI v1.3.2 发布说明
更新时间：2026.02.28

**🚀 新功能**
- **Component Widgets：** 新增 Calendar、Clock、List、Table 和 Data Chart 等组件容器
- **Data Chart Widgets：** 新增图表组件，支持折线图、柱状图、K 线图、散点图、饼图和仪表盘，适用于可视化 SenseCAP 历史数据、股票市场数据以及其他任意数据
- **HTML & RSS 重设计：** 现在已作为 Canvas Editor 的 Data Widgets 区域中的组件集成
  - HTML Widget 同时支持网页 URL 嵌入和本地 HTML 文件上传 / 渲染
  - RSS Widget 可将 RSS 内容作为画布元素无缝嵌入

**🐛 Bug 修复与优化**
- **Calendar Widget：** 优化表格样式和交互逻辑
- **Flip Clock Widget：**
  - Preview 和 Apply to Device 现在会正确反映用户的时区设置
  - 修复调整尺寸后组件消失的问题
- **Google Calendar Widget：** 修复时区显示问题（v1.3.1 已部分处理）
- **Auto-save Enhancement：** 当用户点击 Apply、Preview、Publish 或 Private Share（位于 Dev Tool）时，设计将自动保存，无需手动保存
- **My Page Updates：** 现在默认显示所有 Canvas Designs（包括过去的 Design、RSS 和 Web HTML 页面）。用户上传的图片页面可通过右上角下拉菜单访问
- **SenseCraft HMI Homepage Featured：**
  - Featured Banner 新增社交指标（浏览量、点赞量、添加到我的页面次数）
  - 新增 **Featured** 分类，用于展示所有历史精选设计
- **Device Support Updates：** 首页和设备设置页面新增 13.3'' EINK Spectra 全彩显示设备 [reTerminal E1004](https://www.seeedstudio.com/reTerminal-E1004-p-6692.html) 和 [XIAO EE02 DIY ePaper Kit](https://www.seeedstudio.com/XIAO-ePaper-DIY-Kit-EE02-for-13-3-Spectratm-6-E-Ink.html) 的产品信息与链接

**🌟 欢迎参与**
快来体验新版本并向我们反馈！欢迎在 Discord 报告 bug、提出新功能建议，并参与路线图共建：[https://discord.com/invite/Jj2CBXCjtf](https://discord.com/invite/Jj2CBXCjtf)

---

## SenseCraft HMI v1.3.0 发布说明
更新时间：2026.01.30

**🚀 迈向 UI 模板社区**
此次发布让 SenseCraft HMI 进一步发展为一个协作型平台。现在，您可以以更高效的方式发布、发现并复用由社区创建的 UI 模板。

- **首页重设计**
  - Featured Templates 用于展示优秀设计。
  - 可通过新的顶部导航栏按分类筛选模板。
  - 页脚新增 Change Logs、About、Support 等快捷入口。

- **将页面发布为公共模板**
  - 页面中新增 **Publish** 按钮。
  - 提交页面时可填写封面图、标题、分类和描述；审核通过后即可成为公共模板。
  - 您可以在 User Profile Center 中查看提交状态（Under Review、Published 或 Rejected），点击侧边栏头像即可进入。

- **增强的用户主页**
  - 可自定义公开主页头像、简介和社交链接。

- **社区反馈与协作流程**
  - 可浏览、点赞，并直接将任意已发布模板 **Add to My Pages**。
  - 您的反馈将帮助创作者持续改进模板生态。

**🐛 Bug 修复与优化**
- 4 级灰度支持更新：搭配新固件 V1.1.1，已修复 reTerminal E1001–E1004 的显示支持
→ 现在可直接通过 SenseCraft HMI 中的 Tools Bar 更新固件。
- Google Calendar 时区：已解决不同时区之间的同步问题。
- 平台版本可见性：现在可在侧边栏中 Release Notes 图标（位于 Doc Center 上方）或页脚 Change Logs 中查看当前版本。

**🌟 欢迎参与**
- 分享您的设计：将您最好的页面发布为公共模板，与社区共享。优秀模板还有机会登上首页 Banner！
- 加入讨论：欢迎在 [Discord 路线图频道](https://discord.com/invite/Jj2CBXCjtf) 报告 bug、提出反馈并参与产品共建。

---

## SenseCraft HMI v1.2.6 发布说明
更新时间：2026.01.19

**Canvas Designer 改进**
- 快捷键与右键菜单支持更高效的编辑：
  - `Ctrl+C`：复制
  - `Ctrl+V`：粘贴
  - `Ctrl+X`：剪切
  - `Ctrl+D`：复制副本
  - `Ctrl+Z`：撤销
  - `Ctrl+B`：切换粗体
  - `Ctrl+I`：切换斜体
- 右键点击任意元素即可打开上下文菜单（Copy、Duplicate、Layer、Group、Add to My Widgets）
- 新增基础元素：Clock（Analog & Flip）、Calendar、List 和 Table
- 数据集成增强：
  - Google Calendar（已验证，支持多种事件类型）
  - 优化 Todoist、Reddit 和 HackerNews 的布局展示
  - 更新 UI 设计在画布中的应用流程
- Group 功能升级：
  - 组内所有组件支持同步缩放
  - 可批量编辑相似组件属性（如文本颜色、字号、字重）
- Text Element 增强：
  - 支持自定义背景色、内边距和阴影样式
  - 拖拽时支持自适应选框和自动换行
- 画布缩放优化：
  - 提供更细粒度的缩放控制，便于精细调整

**新硬件支持**
- reTerminal E1003（10.3″ 单色）即将推出
- reTerminal E1004（13.3″ Spectra 全彩）即将推出
- [配备 13.3″ Spectra 全彩显示屏的 EE02 开发套件](https://www.seeedstudio.com/XIAO-ePaper-DIY-Kit-EE02-for-13-3-Spectratm-6-E-Ink.html)

**其他更新**
- 恢复高级开发者工具，支持 UI 配置 JSON 导入 / 导出
- 在 My Pages 中新增页面复制功能
  
**欢迎参与**
欢迎加入 [Discord 社区 #sensecraft-hmi](https://discord.com/invite/Jj2CBXCjtf)，报告问题并与我们一起完善路线图！

---

## SenseCraft HMI v1.2.0 发布说明 
更新时间：2025.12.25

**亮点**
- 全新首页与丰富模板：提供天气、日历、加密货币、股票、名言等开箱即用设计。
- 全新架构：即使硬件尚未到手，也可以先设计 UI。平台现已明确划分为 Workspace（设计）、Device（部署）、Tools 和 AI Gen（Beta）。
- 扩展数据源：新增对 ZenQuotes、Google Calendar、CoinMarketCap、Todoist 等实时数据源的集成。
- 现代化重设计：平台整体 UI 焕新。
- 新硬件支持：支持 TRMNL 7.5" (OG) DIY Kit。
- Always-On 模式：新增常亮显示模式，响应更快。
- 第三方认证：除原有 SenseCraft 邮箱登录外，新增 Google 和 GitHub 登录支持。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/data2.jpg" style={{width:800, height:'auto'}}/></div>

**新平台布局**
- Home：浏览模板并将喜爱的设计添加到画布
- Workspace：设计 UI 页面和播放列表
- Device：管理已连接设备
- Tools：固件更新器、图像抖动工具
- AI Gen（Beta）：AI 驱动的图像与布局生成

**改进**
- 优化 4 级灰度抖动效果（2.9" 显示屏）
- 修复 XIAO EE04 配对码问题
- 提升画布旋转流畅度
- 优化预览渲染效果

**欢迎参与**

欢迎加入 Discord，一起为模板投票、反馈 bug，并参与路线图共建。

Discord Channel: https://discord.com/invite/Jj2CBXCjtf

圣诞快乐！

SenseCraft HMI 团队

---

## SenseCraft HMI v1.1.0 发布说明 
更新时间：2025.11.20

**新支持：XIAO EE04 ePaper DIY Kit（ESP32-S3）**

我们扩展了兼容性范围，现已支持新发布的 EE04 DIY Kit，为您的创意项目提供更丰富的 ePaper 屏幕支持（1.54" 到 7.5"）。

支持的显示类型：
• 单色显示（黑白）
• 4 色显示
• 6 色显示（E Ink Spectra 6 全彩）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/update1.png" style={{width:800, height:'auto'}}/></div>

---
## SenseCraft HMI v1.0 发布说明 
更新时间：2025.10.24

**重新设计的布局与页面列表，让创作更简单**

- 全新 UI 布局，导航更轻松
- 新增 pagelist 功能，可像幻灯片一样创建多个 UI
- 新增页面库，统一保存您的所有 UI

**增强的 UI 编辑器与数据集成**

- 支持横向和纵向画布布局
- 支持 UI 模板导入和导出
- 可直接拉取您账户中的实时 SenseCAP 数据
- 新增设备最后在线时间和下次刷新时间

**扩展的硬件支持**

- 支持 ePaper DIY Kit-EE04，兼容 7.3'' 和 7.5'' 显示屏
- 支持 TRMNL 7.5'' (OG) DIY Kit，搭配 7.5'' 显示屏

**固件更新与图像处理工具页面**

- 支持刷写 SenseCraft HMI 固件和 TRMNL 固件
- 新增图像抖动工具，可处理图片并直接导出为 `.c` 文件

---

## SenseCraft HMI v0.6 发布说明 
更新时间：2025.9.23

**首次发布**

- **设备支持**：reTerminal E1001 和 E1002
- **页面类型**：支持图库页面、画布页面、RSS 页面和网页页面
- **固件管理**：支持在线刷写和更新固件

---

*如需了解每项功能的更多细节，请参考对应的指南页面。*
