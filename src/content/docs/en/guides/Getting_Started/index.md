---
title: Getting Started
description: A practical guide to pairing your first device, checking device status, and updating firmware in SenseCraft HMI.
---

This guide walks you through the core first-use workflow in SenseCraft HMI, including connecting a compatible device, pairing it with your account, checking device status, and updating firmware when needed.

If you are new to the platform, we recommend reading the [Overview](/en/overview/) first for platform introduction, account registration, and feature details.

:::tip
Before pairing a device, we recommend updating it to the latest firmware version for the best compatibility, bug fixes, and feature support.
:::

The following walkthrough uses **reTerminal E1002** as an example to demonstrate the basic SenseCraft HMI workflow.

---

## Firmware Flashing
Before you begin, make sure you have:
* **A USB cable** to connect the device to your computer
* **A stable internet connection** to download firmware files
* **A supported browser** such as Chrome, Firefox, Safari, or Edge
* **Enough device power** to complete the flashing process safely

### Step 1: Open the Firmware Flasher
1. Log in to your [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) account.
2. Go to the **Tools** tab.
3. Click **Firmware Flasher** at the top of the page.

### Step 2: Select Your Device
1. Connect your device to your computer with a USB cable.
2. Click **Select**.
3. In the pop-up window, choose your device from the supported hardware list.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_getting_started_1.png" style={{width:600, height:'auto'}}/></div><br />

:::note
If you select **ePaper DIY Kit - EE04**, you must also choose the correct screen type and size so the proper display driver can be included.
:::

### Step 3: Choose Firmware
1. Open the **Select firmware** dropdown menu.
2. Choose the firmware version you want to install.
3. **Optional**: Click **Connect Serial Monitor** if you want to view debug logs during flashing.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_getting_started_2.png" style={{width:600, height:'auto'}}/></div><br />

### Step 4: Flash the Firmware
1. Click **Flash** to start.
2. Do not disconnect the device or close the browser tab until the progress reaches 100%.
3. Choose the flashing mode based on your needs:

**Standard Flash (Unchecked)**: Updates firmware while keeping existing Wi-Fi credentials and settings. Recommended for routine updates.

**Full Flash (Checked)**: Erases the entire device memory, including Wi-Fi credentials and stored settings. Recommended for troubleshooting, recovery, or a clean reset.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_getting_started_3.png" style={{width:600, height:'auto'}}/></div><br />

### After Flashing
1. Wait for the device to restart automatically.
2. If you performed a **Full Flash**, reconnect the device to Wi-Fi and pair it with SenseCraft HMI again.

---


## Connect and Pair Your Device
1. **Enter Config Mode**: By default, new devices, or devices after a **Full Flash**, enter configuration mode automatically after startup.
2. **Connect to Device Wi-Fi**: Use your phone or computer to connect to the Wi-Fi hotspot shown on the ePaper screen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/5.png" style={{width:400, height:'auto'}}/></div><br />

3. **Open the Config Page**: In your browser, go to `http://192.168.4.1/`.
4. **Configure Network**: Select your local Wi-Fi network, enter the password, and click **Connect**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/6.png" style={{width:700, height:'auto'}}/></div><br />

5. **Get the Pairing Code**: After the device connects successfully, a **6-digit pairing code** will appear automatically on the screen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/136.png" style={{width:600, height:'auto'}}/></div>

6. **Add the Device in SenseCraft HMI**: On the **Device** page, click **+ Add NEW Device**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_getting_started_4.png" style={{width:600, height:'auto'}}/></div><br />

7. **Complete Pairing**: Enter a custom device name and the 6-digit pairing code, then click **Create**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/8.png" style={{width:600, height:'auto'}}/></div>


---

## Check Device Information
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

## Device-Specific Guides
For hardware-specific setup details, refer to the corresponding product guide:

* **reTerminal E1001**: [Getting Started Guide](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1001)
* **reTerminal E1002**: [Getting Started Guide](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1002)
* **reTerminal E1003**: [Getting Started Guide](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1003/)
* **reTerminal E1004**: [Getting Started Guide](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1004/)
* **TRMNL 7.5-inch DIY Kit**: [Getting Started Guide](https://wiki.seeedstudio.com/trmnl_7inch5_diy_kit_main_page/)
* **EE02**: [Getting Started Guide](https://wiki.seeedstudio.com/getting_started_with_ee02/)
* **EE03**: [Getting Started Guide](https://wiki.seeedstudio.com/getting_started_with_ee03/)
* **EE04**: [Getting Started Guide](https://wiki.seeedstudio.com/epaper_ee04/)

## Next Steps
Once your device is online, you can continue with the rest of the platform workflow:

* Visit [AI Gen](/en/guides/ai_gen/) to create content with AI assistance.
* Explore the [Workspace](/en/guides/workspace/) to design and deploy your own pages.
* Check [Supported Hardware](/en/supported_hardware/) for more compatible devices.
