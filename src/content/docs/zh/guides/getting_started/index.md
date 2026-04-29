---
title: 快速开始
description: 一份实用指南，帮助您在 SenseCraft HMI 中配对第一台设备、查看设备状态并在需要时更新固件。
---

本指南将带您完成 SenseCraft HMI 的首次使用核心流程，包括连接兼容设备、将其与您的账户配对、查看设备状态，以及在需要时更新固件。

如果您是第一次使用该平台，我们建议先阅读 [概览](/zh/overview/) 了解平台介绍、账户注册方式和核心功能。

以下示例将以 **reTerminal E1002** 为例，演示 SenseCraft HMI 的基本使用流程。

---

## 设备指南
如果您想了解某一款设备的更多信息，可以点击下方对应设备名称查看详细指南。

您也可以直接按照下方的步骤流程快速开始。

* **[reTerminal E1001](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1001)**
* **[reTerminal E1002](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1002)**
* **[reTerminal E1003](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1003/)**
* **[reTerminal E1004](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1004/)**
* **[TRMNL 7.5" (OG) DIY Kit](https://wiki.seeedstudio.com/trmnl_7inch5_diy_kit_main_page/)**
* **[XIAO EE02 ePaper DIY Kit](https://wiki.seeedstudio.com/getting_started_with_ee02/)**
* **[XIAO EE03 ePaper DIY Kit](https://wiki.seeedstudio.com/getting_started_with_ee03/)**
* **[XIAO ePaper DIY Kit EE04](https://wiki.seeedstudio.com/epaper_ee04/)**

---

## 固件更新

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
点击 **Select**。在弹出的窗口中，从支持的硬件列表中选择您的设备。

如果您选择的是 **ePaper DIY Kit - EE04**，还需要同时选择正确的屏幕类型和尺寸，以便包含对应的显示驱动。

### 步骤 3：更新设备
点击 **Flash** 开始更新过程。在进度达到 100% 之前，请不要断开设备，也不要关闭浏览器页面。

:::tip
请根据您的需求选择刷写模式：

**Standard Flash（未勾选）**：更新固件，同时保留已有的 Wi-Fi 凭据和设备设置。适合日常更新。

**Full Flash（勾选）**：清除设备中的全部存储内容，包括 Wi-Fi 凭据和已保存的设置。适合排障、恢复或完全重置。

通常情况下，**Connect Serial Monitor** 按钮不需要使用。如果设备遇到较难排查的问题，您可以使用该功能连接设备端口并查看调试日志。将这些日志提供给 Seeed 支持团队，有助于更高效地解决问题。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_getting_started_1.png" style={{width:600, height:'auto'}}/></div><br />

### 刷写完成后
等待设备自动重启。

如果您执行的是 **Full Flash**，请重新为设备配置 Wi-Fi，并再次与 SenseCraft HMI 配对。

---

## 连接设备
### 步骤 1：进入配置模式并连接设备 Wi-Fi
默认情况下，新设备或执行 **Full Flash** 后的设备会在启动后自动进入配置模式。在此模式下，请使用手机或电脑连接 ePaper 屏幕上显示的 Wi-Fi 热点。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/5.png" style={{width:400, height:'auto'}}/></div><br />

### 步骤 2：打开配置页面并设置 Wi-Fi
在浏览器中访问 `http://192.168.4.1/`。然后选择您的本地 Wi-Fi 网络，输入密码，并点击 **Connect**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/6.png" style={{width:700, height:'auto'}}/></div><br />

### 步骤 3：获取配对码
设备成功连接 Wi-Fi 后，屏幕上会自动显示一个 **6 位配对码**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/136.png" style={{width:600, height:'auto'}}/></div>

### 步骤 4：在 SenseCraft HMI 中添加设备
在 **Device** 页面中，点击 **+ Add NEW Device**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_getting_started_4.png" style={{width:600, height:'auto'}}/></div><br />

### 步骤 5：完成配对
输入自定义设备名称和 6 位配对码，然后点击 **Create**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/8.png" style={{width:600, height:'auto'}}/></div>

---

## 设备信息
完成配对后，您可以在 **Device** 页面查看设备的基本信息，例如 **Device Name** 和 **Battery Level**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_getting_started_5.png" style={{width:600, height:'auto'}}/></div><br />

### 详细管理
点击某台设备即可进入 **Details** 视图。在这里，您可以查看和管理：
* **Low Power Mode**：启用或关闭省电行为
* **Refresh Interval**：设置屏幕刷新频率
* **Online Status**：查看设备当前是否在线
* **Battery Status**：查看当前电量百分比
* **Active Page**：查看并管理当前正在设备上显示的页面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_getting_started_6.png" style={{width:600, height:'auto'}}/></div><br />

---

## 下一步
设备上线后，您可以继续体验平台的其他功能：

* 访问 [AI Gen](/zh/guides/ai_gen/) 使用 AI 辅助生成内容。
* 查看 [Workspace](/zh/guides/workspace/) 学习如何设计并部署自己的页面。
* 查看 [支持的硬件](/zh/supported_hardware/) 了解更多兼容设备。

