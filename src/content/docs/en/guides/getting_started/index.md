---
title: Getting Started
description: A practical guide to pairing your first device, checking device status, and updating firmware in SenseCraft HMI.
---

This guide walks you through the core first-use workflow in SenseCraft HMI, including connecting a compatible device, pairing it with your account, checking device status, and updating firmware when needed.

If you are new to the platform, we recommend reading the [Overview](/en/overview/) first for platform introduction, account registration, and feature details.

The following walkthrough uses **reTerminal E1002** as an example to demonstrate the basic SenseCraft HMI workflow.

---

## Device Guides
If you would like to learn more about a specific device, click its name below to view the detailed guide.

You can also follow the step-by-step workflow below to get started quickly.

* **[reTerminal E1001](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1001)**
* **[reTerminal E1002](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1002)**
* **[reTerminal E1003](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1003/)**
* **[reTerminal E1004](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1004/)**
* **[TRMNL 7.5\" (OG) DIY Kit](https://wiki.seeedstudio.com/trmnl_7inch5_diy_kit_main_page/)**
* **[XIAO EE02 ePaper DIY Kit](https://wiki.seeedstudio.com/getting_started_with_ee02/)**
* **[XIAO EE03 ePaper DIY Kit](https://wiki.seeedstudio.com/getting_started_with_ee03/)**
* **[XIAO ePaper DIY Kit EE04](https://wiki.seeedstudio.com/epaper_ee04/)**


---

## Firmware Update

:::tip
Before pairing a device, we recommend updating it to the latest firmware version for the best compatibility, bug fixes, and feature support.

If you prefer to start exploring the SenseCraft HMI platform immediately, you can also skip this update section for now.
:::

Before you begin, make sure you have:
* **A USB cable** to connect the device to your computer
* **A stable internet connection** to download firmware files
* **A supported browser** such as Chrome, Firefox, Safari, or Edge
* **Enough device power** to complete the flashing process safely
* **A registered SenseCraft HMI account** with access to the platform

### Step 1: Connect the Device via USB
Connect your device to your computer with a USB cable.

### Step 2: Select Device
Click **Select**. In the pop-up window, choose your device from the supported hardware list.

If you select **ePaper DIY Kit - EE04**, you must also choose the correct screen type and size so the proper display driver can be included.

### Step 3: Update Device
Click **Flash** to start the update process. Do not disconnect the device or close the browser tab until the progress reaches 100%.

:::tip
Choose the flashing mode based on your needs:

**Standard Flash (Unchecked)**: Updates firmware while keeping existing Wi-Fi credentials and settings. Recommended for routine updates.

**Full Flash (Checked)**: Erases the entire device memory, including Wi-Fi credentials and stored settings. Recommended for troubleshooting, recovery, or a clean reset.

The **Connect Serial Monitor** button usually does not need to be used. If your device encounters a problem that is hard to troubleshoot, you can use it to connect to the device port and view debug logs. Sharing those logs with Seeed support can help resolve the problem more efficiently.

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_getting_started_1.png" style={{width:600, height:'auto'}}/></div><br />

### After Flashing
Wait for the device to restart automatically.

If you performed a **Full Flash**, reconnect the device to Wi-Fi and pair it with SenseCraft HMI again.

---

## Connect Device
### Step 1: Enter Config Mode and Connect to Device Wi-Fi
By default, new devices, or devices after a **Full Flash**, enter configuration mode automatically after startup. In this mode, use your phone or computer to connect to the Wi-Fi hotspot shown on the ePaper screen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/5.png" style={{width:400, height:'auto'}}/></div><br />

### Step 2: Open the Config Page and Set Up Wi-Fi
In your browser, go to `http://192.168.4.1/`. Then select your local Wi-Fi network, enter the password, and click **Connect**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/6.png" style={{width:700, height:'auto'}}/></div><br />

### Step 3: Get the Pairing Code
After the device connects successfully, a **6-digit pairing code** will appear automatically on the screen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/136.png" style={{width:600, height:'auto'}}/></div>

### Step 4: Add the Device in SenseCraft HMI
On the **Device** page, click **+ Add NEW Device**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_getting_started_4.png" style={{width:600, height:'auto'}}/></div><br />

### Step 5: Complete Pairing
Enter a custom device name and the 6-digit pairing code, then click **Create**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/8.png" style={{width:600, height:'auto'}}/></div>

---

## Device Information
After pairing, you can view your device on the **Device** page, including basic information such as the **Device Name** and **Battery Level**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_getting_started_5.png" style={{width:600, height:'auto'}}/></div><br />

### Detailed Management
Click a device to open the **Details** view. From there, you can check and manage:
* **Low Power Mode**: Enable or disable power-saving behavior.
* **Refresh Interval**: Control how often the display refreshes.
* **Online Status**: Check whether the device is currently connected.
* **Battery Status**: Monitor the current battery percentage.
* **Active Page**: View and manage the page currently shown on the device.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_getting_started_6.png" style={{width:600, height:'auto'}}/></div><br />

---

## Next Steps
Once your device is online, you can continue with the rest of the platform workflow:

* Visit [AI Gen](/en/guides/ai_gen/) to create content with AI assistance.
* Explore the [Workspace](/en/guides/workspace/) to design and deploy your own pages.
* Check [Supported Hardware](/en/supported_hardware/) for more compatible devices.
