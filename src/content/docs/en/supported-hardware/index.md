---
title: Supported Hardware
description: Complete list of supported devices and hardware requirements
---

SenseCraft HMI supports a wide range of e-paper displays and development boards. Here's the complete list of supported hardware.

## Officially Supported Devices

### [reTerminal E Series](https://wiki.seeedstudio.com/reterminal_e10xx_main_page/)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/24.jpg" style={{width:500, height:'auto'}}/></div>
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/25.jpg" style={{width:500, height:'auto'}}/></div>
</div><br />

The reTerminal E Series ePaper Display combines powerful computing capabilities with ePaper display technology, making it perfect for digital signage, information dashboards, and interactive displays. The series includes two models with different display capabilities:

#### [reTerminal E1001](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1001/)

The reTerminal E1001 features a 7.5-inch monochrome ePaper display with 4-level grayscale capability. With its 800×480 resolution, it delivers crisp text and clear images while consuming minimal power. The monochrome display is perfect for applications where text legibility and battery life are priorities.

**Key Features**

- **Beautiful, Ready-to-Use ePaper Display**
- **Ultra-Low Power with 3-Month Battery Life**
- **No-Code UI Design & Deployment with SenseCraft HMI**
- **Works with Popular Software Platforms**
- **Flexible Hardware & Software Customization**

#### [reTerminal E1002](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1002/)

The reTerminal E1002 features a vibrant 7.3-inch six-color ePaper display with ACeP (Advanced Color ePaper) technology. This color display offers the same power efficiency benefits of ePaper technology while allowing for more visually engaging content with multiple colors, making it ideal for applications where visual distinction and aesthetic appeal are important.

**Key Features**

- **Beautiful, Ready-to-Use E Ink® Spectra™6 Color ePaper Display**
- **Ultra-Low Power with 3-Month Battery Life**
- **No-Code UI Design & Deployment with SenseCraft HMI**
- **Works with Popular Software Platforms**
- **Flexible Hardware & Software Customization**

### ePaper DIY Kits

- **[ePaper DIY Kit - EE04](https://wiki.seeedstudio.com/epaper_ee04/)** - The EE04 expansion board and screen support various sizes and displays.
- **[TRMNL 7.5" (OG) DIY Kit](https://wiki.seeedstudio.com/trmnl_7inch5_diy_kit_main_page/)** - Original TRMNL compatible kit

## Compatibility Matrix

| Device | Display Size | Resolution | Color | Status |
|--------|-------------|------------|-------|--------|
| reTerminal E1001 | 7.5" | 800x480 | B/W | ✅ Supported |
| reTerminal E1002 | 7.3" | 800x480 | Full Color | ✅ Supported |
| ePaper DIY Kit - EE04 with 7.3" ePaper display  | 7.3" | 800x480 | Full Color | ✅ Supported |
| ePaper DIY Kit - EE04 with 7.5" ePaper display | 7.5" | 800x480 | B/W | ✅ Supported |
| TRMNL 7.5" OG Kit | 7.5" | 800x480 | B/W | ✅ Supported |


## Firmware Update History
| Version | Date       | Changes                                                                                                                                                                                                 |
|---------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1.0.8   | 2025/12/19 | 1. Updated the network configuration home page, pairing code display page, and pairing success page of E1001, E1002, E1003, and E1004<br>2. Inverted the LED level of E1004<br>3. Fixed the issue where the device does not automatically update images in always-on mode<br>4. Fixed the display overlap issue after issuing non-screen size images<br>5. Increased the size limit of the manifest.json file to 100KB to allow issuing more images |
| 1.0.7   | 2025/12/3  | 1. Added sleep enable mechanism and reported relevant device status<br>2. Modified the sleep entry interval from 5s to 60s<br>3. The device added support for recognizing black and white, multi-color, 4-grayscale, and 16-grayscale images issued by the platform; currently, 7.5-inch screens support parsing and displaying 4-grayscale images<br>4. Corrected the display area offset issue of 2.13-inch screens<br>5. Compatible with SY6974 fast-charge PMIC; boards with this PMIC support charging status recognition<br>6. Optimized the command sending and receiving logic in the Bluetooth network configuration process to prevent app freezes<br>7. Fixed the bug where the DIY kit continues to carousel pages after successful Bluetooth network configuration; fixed the rare issue where image resources in the device are not updated due to entering sleep mode after issuing the manifest<br>8. Optimized the screen rotation logic of various DIY kits and added a mapping table<br>9. Optimized battery level detection and modified the low battery threshold |
| 1.0.6   | 2025/11/14 | 1. Unified the display direction of content on various size screens<br>2. Fixed the inaccurate battery level measurement issue of EE04 without a battery<br>3. Added PNG decoding for issued images to speed up image download<br>4. Extended the sleep entry interval from 5s to 10s<br>5. Modified the DIY kit network configuration page switching interval from 3s to 5s<br>6. Added size labeling on the network configuration page of 2.13-inch and 2.9-inch screens |
| 1.0.5   | 2025/10/27 | 1. Fixed the time synchronization issue: calculated the correct local time based on timestamp and time offset<br>2. Modified the automatic white screen refresh logic at 4:30 AM, changing the cycle from 15 minutes to 1 minute |
| 1.0.4   | 2025/10/24 | New official environment firmware with several function modifications                                                                                                                                   |
| 1.0.1   | 2025/9/19 | 1. Added regular white screen refresh logic to extend screen service life<br>2. Optimized the manifest image download logic to adapt to the playlist<br>3. Modified the WiFi configuration page: added a background QR code; supported connecting to unencrypted networks<br>4. Supported displaying non-standard aspect ratio images and adaptive image rotation |
| 1.0.0   | 2025/8/26  | 1. Modified each page of E1001 and E1002<br>2. Optimized image parsing and used 4-bit BMP                                                                                                               |
| 0.9.8   | 2025/7/25   | 1. Optimized the ArduinoLog library and added a mutex to prevent multi-threaded log output conflicts                                                                                                   |
| 0.9.7   | 2025/7/17  | 1. Optimized the logic of entering network configuration mode in sleep mode<br>2. Fixed the bug of false activation of network configuration mode<br>3. Optimized the logic of entering sleep mode after various process execution failures |
| 0.9.6   | 2025/7/12         | 1. Modified the switching logic of the album in sleep mode                                                                                                                                             |
| 0.9.5   | 2025/7/2   | 1. Fixed the issue of incorrect humidity reporting data<br>2. Added device status reporting: Online and Sleep<br>3. Optimized and resolved the issue where the device does not sleep when offline       |
| 0.9.4   | 2025/6/30  | 1. Fixed the issue where there is no response when issuing images after the device is unbound and re-bound<br>2. Modified the image storage update logic in dashboard mode: re-downloads images via URL even if the ID remains unchanged<br>3. Canceled NTP synchronization and adopted server_time returned by the platform for time synchronization<br>4. Modified the reported image download progress field<br>5. Modified MQTT QoS to receive IoT control parameters issued by the platform for sleep interval update |
| 0.9.3   | 2025/6/25  | 1. Fixed the issue where long-pressing two page-turning keys could not enter the network configuration mode<br>2. Modified the font in the UI page: used Source Han Sans and updated the "seeed" logo icon |
| 0.9.2   | 2025/6/24  | 1. Optimized the issue where the device does not enter sleep mode after failed network connection during interval wake-up<br>2. Modified the refresh logic of dashboard and album: both will refresh regularly, but the album will display the next picture after each refresh<br>3. Added automatic storage selection logic for SD card/flash: dashboard is stored in flash, supporting up to 30 images; album prefers to be stored in the SD card, and will be stored in flash if no SD card is detected, supporting up to 30 images |
| 0.9.1   | 2025/6/23  | 1. Added album/dashboard functions<br>2. Supported saving multiple sets of WiFi information; the device automatically connects to the last connected WiFi when powered on, and tries other saved WiFi in sequence if the connection fails. One-click connection and ignoring of saved WiFi are available on the network configuration page<br>3. Automatically enters sleep mode after refreshing in album mode; wakes up by pressing a button<br>4. Automatically enters sleep mode after refreshing in dashboard mode; wakes up and refreshes automatically according to the issued interval<br>5. Completed the UI of the unboxing page, pairing page, waiting for the first issuance page, and the UI of WiFi connection failure and low battery reminder as required in the specification<br>6. Added support for 8-bit depth BMP images, accelerating overall image download and storage |
