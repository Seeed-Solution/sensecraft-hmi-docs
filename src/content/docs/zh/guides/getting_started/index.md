---
title: 快速开始
description: 一份实用指南，帮助您在 SenseCraft HMI 中配对第一台设备、查看设备状态并在需要时更新固件。
last_update:
  data:11/05/2026
  author:dimo
---

<a id="overview"></a>

本指南将带您完成 SenseCraft HMI 的首次使用核心流程，包括连接兼容设备、将其与您的账户配对、查看设备状态，以及在需要时更新固件。

如果您是第一次使用该平台，我们建议先阅读 [概览](/zh/overview/) 了解平台介绍、账户注册方式和核心功能。

以下示例将以 **reTerminal E1002** 为例，演示 SenseCraft HMI 的基本使用流程。

如果您使用的是其他设备，也可以按照相同的整体流程进行操作。您可以前往 [支持的硬件](/zh/supported_hardware/) 查找对应设备页面，或直接通过下方链接跳转到相应的 wiki 指南。

* **[reTerminal E1001](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1001)**
* **[reTerminal E1002](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1002)**
* **[reTerminal E1003](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1003/)**
* **[reTerminal E1004](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1004/)**
* **[TRMNL 7.5" (OG) DIY Kit](https://wiki.seeedstudio.com/trmnl_7inch5_diy_kit_main_page/)**
* **[XIAO ePaper DIY Kit EE02](https://wiki.seeedstudio.com/getting_started_with_ee02/)**
* **[XIAO ePaper DIY Kit EE03](https://wiki.seeedstudio.com/getting_started_with_ee03/)**
* **[XIAO ePaper DIY Kit EE04](https://wiki.seeedstudio.com/epaper_ee04/)**
* **[XIAO ePaper DIY Kit EE05](https://wiki.seeedstudio.com/epaper_ee05/)**

---

<a id="firmware-update"></a>
## 更新设备固件

:::tip
在配对设备之前，我们建议先将设备更新到最新固件版本，以获得最佳兼容性、错误修复和新功能支持。

如果您希望先快速体验 SenseCraft HMI 平台，也可以暂时跳过这一节。
:::

开始之前，请确认您已准备好：
* **一根 USB 数据线**，用于将设备连接到电脑
* **稳定的网络连接**，用于下载固件文件
* **受支持的浏览器**，例如 Chrome、Firefox、Safari 或 Edge
* **足够的设备电量**，以确保更新过程安全完成
* **一个已注册并可正常登录的 SenseCraft HMI 账户**

### 步骤 1：通过 USB 连接设备
使用 USB 数据线将设备连接到您的电脑。

### 步骤 2：选择设备
点击 **Select** 后，在弹出的窗口中从支持的硬件列表里选择您的设备。

如果您选择的是 **ePaper DIY Kit - EE04**，还需要同时选择正确的屏幕类型和尺寸，以便包含对应的显示驱动。

### 步骤 3：更新设备
确认设备选择无误后，点击 **Flash** 开始更新。在进度达到 100% 之前，请不要断开设备，也不要关闭浏览器页面。

:::tip
请根据您的需求选择刷写模式：

**Standard Flash（未勾选）**：更新固件，同时保留已有的 Wi-Fi 凭据和设备设置。适合日常更新。

**Full Flash（勾选）**：清除设备中的全部存储内容，包括 Wi-Fi 凭据和已保存的设置。适合排障、恢复或完全重置。

大多数情况下，您无需使用 **Connect Serial Monitor** 按钮。如果设备遇到较难排查的问题，您可以使用该功能连接设备端口并查看调试日志。将这些日志提供给 Seeed 支持团队，有助于更高效地解决问题。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_getting_started_1.png" style={{width:600, height:'auto'}}/></div><br />

### 刷写完成后
等待设备自动重启，这可能需要一点时间。

如果您执行的是 **Full Flash**，由于刷写过程中已清除设备中保存的设置，设备重启后需要重新完成设置。重启后它会返回配置模式。请先重新连接 Wi-Fi，然后按照下一节的步骤再次与 SenseCraft HMI 配对。

例如，如果您使用的是 reTerminal E1002，那么执行 **Full Flash** 后，设备屏幕会显示如下画面：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/155.png" style={{width:600, height:'auto'}}/></div><br />

---

<a id="connect-device"></a>
## 连接您的设备
### 步骤 1：进入配置模式并连接设备 Wi-Fi
默认情况下，新设备或执行 **Full Flash** 后的设备会在启动后自动进入配置模式。在此模式下，请使用手机或电脑连接 ePaper 屏幕上显示的 Wi-Fi 热点。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/5.png" style={{width:400, height:'auto'}}/></div><br />

### 步骤 2：打开配置页面并设置 Wi-Fi
在浏览器中访问 `http://192.168.4.1/`。进入配置页面后，选择您的本地 Wi-Fi 网络，输入密码，再点击 **Connect**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/6.png" style={{width:700, height:'auto'}}/></div><br />

### 步骤 3：获取配对码
设备成功连接 Wi-Fi 后，屏幕上会自动显示一个 **6 位配对码**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/136.png" style={{width:600, height:'auto'}}/></div>

### 步骤 4：在 SenseCraft HMI 中添加设备
回到 **Device** 页面后，点击 **+ Add NEW Device** 开始添加设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_getting_started_4.png" style={{width:600, height:'auto'}}/></div><br />

### 步骤 5：完成配对
输入自定义设备名称和 6 位配对码后，点击 **Create** 即可完成配对。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/8.png" style={{width:600, height:'auto'}}/></div>

---

<a id="device-information"></a>
## 管理您的设备
完成配对后，您可以在 **Device** 页面查看设备。顶部区域会显示您为设备设置的名称，随后是设备型号、支持的屏幕尺寸、颜色模式、MAC 地址或 SN 号码、在线状态、电池电量以及固件版本等信息。

例如，一台 E1002 设备可能会显示自定义名称 `test`、型号 `reTerminal E1002`、支持的屏幕尺寸 `7.3"`、颜色模式 `全彩`、SN 号码 `1049****0040`、`Offline` 状态、`0%` 电量以及 `1.1.2` 固件版本。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_getting_started_5.png" style={{width:600, height:'auto'}}/></div><br />

点击设备卡片即可进入 **Details** 视图。在这里，您可以查看和管理：
* **Low Power Mode**：启用或关闭省电行为
* **Refresh Interval**：设置屏幕刷新频率
* **Online Status**：查看设备当前是否在线
* **Battery Status**：查看当前电量百分比
* **Active Page**：查看并管理当前正在设备上显示的页面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_getting_started_6.png" style={{width:600, height:'auto'}}/></div><br />

---

<a id="quick-deployment"></a>
## 快速下发社区模板
接下来，让我们快速将一个社区模板下发到您的设备上。

**步骤 1.** 点击 **Home** 返回主页面。

**步骤 2.** 打开任意一个由其他用户分享的模板，查看其详情。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/114.png" style={{width:600, height:'auto'}}/></div><br />

**步骤 3.** 在详情页面右侧点击 **Add to My Page**，先将这个模板加入您的页面库中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/115.png" style={{width:600, height:'auto'}}/></div><br />

**步骤 4.** 随后会打开该页面的编辑视图，这时点击右上角的 **Apply**，即可将模板发送到您的设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/116.png" style={{width:600, height:'auto'}}/></div><br />

**步骤 5.** 稍等片刻，内容就会自动下发到设备上。

---

## 接下来呢
设备上线后，您可以继续体验平台的其他功能：

* 查看 [Workspace](/zh/guides/workspace/) 学习如何设计并部署自己的页面。
* 访问 [AI Gen](/zh/guides/ai_gen/) 使用 AI 辅助生成内容。
* 查看 [支持的硬件](/zh/supported_hardware/) 了解更多兼容设备。

