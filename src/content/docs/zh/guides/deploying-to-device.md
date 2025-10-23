---
title: 部署到您的设备
description: 将 SenseCraft HMI 项目部署到电子纸显示设备的完整指南
---

使用任何 SenseCraft HMI 功能（仪表板、图库、画布、RSS 或网页）创建内容后，您将希望将其部署到 Seeed 设备。本指南涵盖所有内容类型的部署过程。

## 部署前预览

在将内容部署到设备之前，预览其外观非常重要：

步骤 1. 点击顶部工具栏中的 "预览" 按钮

步骤 2. 查看布局在设备上的显示效果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_24.png" style={{width:400, height:'auto'}}/></div>

步骤 3. 对设计进行必要的调整

:::tip
预览功能允许您准确查看内容在设备屏幕上的显示效果，帮助您在部署前识别任何布局问题。
:::

## 保存您的布局

在部署之前，请确保保存您的工作：

步骤 1. 点击 "保存" 按钮存储当前布局

步骤 2. 您的布局将保存到 SenseCraft HMI 云

:::note
保存布局可确保您的工作得到保存，并可从任何设备或浏览器访问。
:::

## 部署到设备

当您对预览满意并保存布局后：

步骤 1. 确保您的设备已连接并显示 "在线" 状态

步骤 2. 点击 "部署" 按钮

步骤 3. 等待部署过程完成

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_25.png" style={{width:400, height:'auto'}}/></div>

步骤 4. 您的布局将显示在已连接的设备上

## 部署注意事项

要成功部署到 Seeed 设备，请考虑以下事项：

### 1. 设备兼容性
- 确保您的布局针对特定设备的屏幕分辨率进行了优化
- 不同的设备具有不同的屏幕尺寸和功能
- 在目标设备的分辨率上测试您的布局

### 2. 连接状态
- 确保您的设备在部署前显示 "在线" 状态
- 检查设备是否正确连接到互联网
- 验证设备是否与您的 SenseCraft HMI 账户配对

### 3. 数据组件
- 如果使用数据组件（天气、股票等），请确保您的设备具有互联网连接
- 某些数据源可能需要 API 密钥或身份验证
- 检查所有外部数据源是否可访问

### 4. 设备传感器
- 电池、温度和湿度等组件只能与具有相应传感器的兼容 Seeed reTerminal E 系列电子纸显示设备一起使用
- 验证您的设备是否具有基于传感器的组件所需的硬件

### 5. 刷新率
- 根据数据需要更新的频率和设备的功能设置适当的间隔时间
- 设置刷新间隔时考虑电池寿命
- 在数据新鲜度和功耗之间取得平衡

---

**恭喜！** 您已成功将内容部署到设备。您的电子纸显示屏现在应该显示您的自定义布局。

*需要特定功能的帮助？查看我们的 [工作区界面](/zh/guides/workspace-interface/)、[图库](/zh/guides/sensecraft-hmi-gallery/)、[画布](/zh/guides/sensecraft-hmi-canvas/)、[RSS](/zh/guides/sensecraft-hmi-rss/) 和 [网页](/zh/guides/sensecraft-hmi-web/) 功能的详细指南。*

