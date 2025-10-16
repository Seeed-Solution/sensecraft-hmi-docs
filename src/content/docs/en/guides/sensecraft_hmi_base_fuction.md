---
title: Basic Function Usage
description: A comprehensive guide to understanding and using the core toolbars and page management features in SenseCraft HMI.
---

## Introduction

Welcome to SenseCraft HMI! This tutorial will be your guide to the central nervous system of the platform: the main toolbars. Mastering these features is the key to efficiently managing your projects, understanding your device's status, and bringing your designs to life.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_28.png" style={{width:400, height:'auto'}}/></div>

We will cover three main areas:
1.  **The Device Status Bar**: Your at-a-glance source for all device-related information.
2.  **Page and Pagelist Management**: The system for organizing and creating your display content.
3.  **The Main Toolbar**: The essential set of controls for designing, saving, and deploying your work.

By the end of this guide, you'll have a deep understanding of how to navigate and control the SenseCraft HMI workspace like a pro.

## The Device Status Bar

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_29.png" style={{width:400, height:'auto'}}/></div>

Located at the very top of the workspace, the Device Status Bar provides real-time information about your connected device.

Let's break down what each piece of information means:

*   **Device / e1001**: This shows the name and model of your currently selected device.
*   **Sleep**: This indicates the current status of the device. It can be "Sleep" or "Awake".
*   **Last Online: 15:27**: This timestamp tells you the last time the device successfully communicated with the SenseCraft HMI cloud platform.
*   **Interval(min): 30**: This is a crucial setting. It defines how often (in minutes) the device will wake up to refresh its display and pull new data or designs.
*   **Next Online: 15:57**: Based on the "Last Online" time and the "Interval", this predicts when the device will next wake up and connect.
*   **800x480**: This is the screen resolution of your connected device. All your designs in the canvas will be based on this dimension.
*   **Device Sensor Data**: For compatible devices like the reTerminal E Series, this area displays live readings from the built-in sensors:
    *   🌡️ **26.7**: Temperature.
    *   💧 **55.9%**: Humidity.
    *   🔋 **100%**: Current battery level.

:::tip
To prevent screen burn-in, especially on e-paper displays, it is highly recommended to set a refresh interval. Refreshing at least once a day can help maintain the health and longevity of your screen. An interval of `1440` minutes would correspond to a daily refresh.
:::

## Managing Pages and Pagelists

This section is where you organize all the content you want to display on your device. Before diving in, it's crucial to understand two key concepts: **Pages** and **Pagelists**.

*   **Page**: A single screen design. This could be a UI Design from Canvas, an image from the Gallery, an RSS feed, or a Web page. Think of it as a single "slide" in a presentation.
*   **Pagelist**: A collection or "playlist" of Pages. A Pagelist can contain one or more Pages. Your device is always set to display one active Pagelist. If the Pagelist contains multiple Pages, the device will cycle through them at the defined interval.

:::tip
1. The maximum number of pages. The limit for images is 20, while other page types are capped at 3 each. Pages exceeding these limits cannot be successfully added to Pagelists.
:::

### Creating a New Page

The `+ New` button is your starting point for adding new content.

**Step 1.** Click the **+ New** button.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_30.png" style={{width:400, height:'auto'}}/></div>

**Step 2.** A dialog will appear, giving you several options to create a new page:
*   **UI Design (Canvas)**: Create a custom layout from scratch with various components.
*   **Gallery**: Create a page to display an image.
*   **RSS**: Create a page to display an RSS feed.
*   **Web**: Create a page to display a webpage.
*   **Templates**: You can also choose from a variety of pre-designed templates to get a head start.

#### Templates

Templates provide pre-designed layouts that combine multiple components into a cohesive, ready-to-use display. They save time and ensure professional results without having to design layouts from scratch.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_31.png" style={{width:400, height:'auto'}}/></div>

##### Weather Display Template

The Weather Display Template offers a complete weather dashboard showing current conditions and a 7-day forecast for any city.

Step 1. Click on the "Weather Display" template in the Templates section

Step 2. In the "Configure Template: Weather Display" dialog that appears:

   - Enter a city name in the "City Name" field

   - Click "Search" to verify the city exists in the weather database

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_32.png" style={{width:400, height:'auto'}}/></div>

Step 3. After a successful search, click "OK" to proceed

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_33.png" style={{width:400, height:'auto'}}/></div>

Step 4. A "Template Preview" window will appear showing:

   - Left panel with current date, weather condition, temperature, high/low, and humidity

   - Right panel with city name and 7-day forecast including condition icons and temperature ranges

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_34.png" style={{width:400, height:'auto'}}/></div>

Step 5. Review the preview and note:

   - All template elements will be given unique IDs to avoid conflicts

   - You can modify the template after applying it to the canvas

Step 6. Click "Apply to Canvas" to add the template to your workspace

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_35.png" style={{width:400, height:'auto'}}/></div>

Step 7. The Weather Display template is now on your canvas, ready for deployment or further customization

:::note
- The Weather Display template uses real-time weather API data that requires internet connectivity on your device.

- The template is fully customizable after being applied to your canvas - you can resize, reposition, or modify any element.

- Weather data automatically updates according to the refresh interval set in your project settings.
:::

##### GitHub Profile Template

The GitHub Profile Template creates a comprehensive dashboard displaying a GitHub user's profile information and selected repositories with their statistics.

Step 1. Click on the "GitHub Profile" template in the Templates section


Step 2. In the "Configure Template: GitHub Profile" dialog that appears:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_38.png" style={{width:400, height:'auto'}}/></div>

   - Enter your [GitHub Personal Access Token](https://github.com/settings/tokens). You may need to enable all user permissions to ensure the SenseCraft HMI backend has permission to read data from the open-source repository.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_41.png" style={{width:400, height:'auto'}}/></div>

   - Enter a GitHub username in the required field (e.g., "seeed-studio")

   - Optionally enter keywords in the Repository Search field to filter repositories

   - Leave the search field empty to show all repositories from the user

Step 3. Click the "Search all '[username]' repositories" button to retrieve the user's repositories

Step 4. From the list of repositories displayed, select up to 3 repositories you want to showcase

   - Each repository shows its name, description, primary programming language, and star count

   - You can use the filter field to narrow down the repository list

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_39.png" style={{width:400, height:'auto'}}/></div>

Step 5. Click "OK" to confirm your selections

Step 6. A "Template Preview" window will appear showing:

   - The GitHub user's display name at the top

   - "Github" label with follower count

   - A horizontal divider line

   - Selected repositories with their names and star counts

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_40.png" style={{width:400, height:'auto'}}/></div>

Step 7. Review the preview and note:

   - The template will replace all current elements on your canvas

   - All template elements will be given unique IDs to avoid conflicts

   - You can modify the template after applying it to the canvas

Step 8. Click "Apply to Canvas" to add the template to your workspace

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_42.png" style={{width:400, height:'auto'}}/></div>

:::note
- The template has two search modes clearly explained in the interface:

  1. User only: Enter just the username to show all repositories

  2. User + keywords: Enter username and specific keywords to filter repositories

- Repository selection is limited to 3 to ensure optimal display on smaller screens.

- Some GitHub statistics may be approximated (like follower counts over 1,000 shown as "1.0K").
:::

##### Stock Dashboard Template

The Stock Dashboard Template provides a clean, professional display of real-time stock market data including price and percentage change.

Step 1. Click on the "Stock Dashboard" template in the Templates section

Step 2. In the "Configure Template: Stock Dashboard" dialog that appears:

   - Enter your [Twelve Data API Key](#getting-a-twelve-data-api-key) in the field provided (masked for security)

Step 3. The template provides four default company stocks. If you wish to use stocks from other companies for display, you can modify them yourself after applying the template.

Step 4. Click "Preview" to confirm

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_36.png" style={{width:400, height:'auto'}}/></div>

Step 5. A "Template Preview" window will appear showing:

   - Left panel with the stock symbol in large text

   - Right panel displaying the current stock price and percentage change

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_37.png" style={{width:400, height:'auto'}}/></div>

Step 6. Review the preview and note:

   - All template elements will be given unique IDs to avoid conflicts

   - You can modify the template after applying it to the canvas

Step 7. Click "Apply to Canvas" to add the template to your workspace

:::note
- The Stock Dashboard template requires internet access on your device to fetch real-time market data.

- Stock market data is delayed by at least 15 minutes on the free tier of Twelve Data.

- Data refreshes according to your project's refresh interval settings.

- Market data is only available during trading hours for the respective exchanges.
:::

##### YouTube Channel Stats Template

The YouTube Channel Stats Template showcases a YouTube channel's branding, slogan, and subscriber count in a clean, modern design.

Step 1. Click on the "YouTube Channel Stats" template in the Templates section

Step 2. In the "Configure Template: YouTube Channel Stats" dialog that appears:

   - Enter your [YouTube Data API Key](#getting-a-youtube-data-api-key) (masked for security)

   - Enter a YouTube Channel Identifier in one of the supported formats:

     * Channel ID: 24-character string starting with "UC" (e.g., UC_x5XG1OV2P6uZZ5FSM9Ttw)
     * @Handle: Channel handle starting with @ (e.g., @seeedstudiosz)
     * Channel URL: Full YouTube URL (e.g., youtube.com/@seeedstudiosz)

Step 3. Click "Validate Channel" to verify the channel exists and retrieve its data

Step 4. If validation is successful, you'll see a confirmation message (e.g., "Found channel: Seeed Studio • 20.4K")

Step 5. Click "OK" to proceed

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/125.png" style={{width:800, height:'auto'}}/></div>

Step 6. A "Template Preview" window will appear showing:

   - Left panel with the channel name and slogan/description in a stylish black background

   - Right panel with "YouTube" label, subscriber count, and "Subscribers" text

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/126.png" style={{width:800, height:'auto'}}/></div>

Step 7. Review the preview and note:

   - The template will replace all current elements on your canvas

   - All template elements will be given unique IDs to avoid conflicts

   - You can modify the template after applying it to the canvas

Step 8. Click "Apply to Canvas" to add the template to your workspace

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/127.png" style={{width:1000, height:'auto'}}/></div>


:::note
- The YouTube Channel Stats template requires internet access on your device to fetch channel data.

- YouTube Data API has quotas and rate limits that may affect usage.

- The template automatically retrieves the channel's slogan or description when available.

- For channels with a large number of subscribers, the count may be abbreviated (e.g., "1.2M" for 1,200,000).
:::

### Managing Pagelists

The **Pagelists** button opens a powerful management interface that gives you full control over your content organization.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_43.png" style={{width:400, height:'auto'}}/></div>

**Step 1.** Click the **Pagelists** button next to the `+ New` button.

**Step 2.** The "Manage pagelists and pages" modal will appear, which is divided into three sections:

1.  **Pagelists (Left Panel)**: This area lists all the Pagelists you have created.
    *   The starred list (`Default Pagelist` in the image) is the one currently active and will be displayed on the device.
    *   You can click `+ New` here to create a new, empty Pagelist.

2.  **Current Pagelist (Middle Panel)**: This shows all the Pages currently inside the selected Pagelist.
    *   Click the red minus icon (`-`) to remove a page from the Pagelist (this does not delete the page itself).

3.  **All Pages (Right Panel)**: This is your library of all the Pages you have ever created. Only pages where you have clicked the Save button will appear here.
    *   To add a page to your currently selected Pagelist, simply click the plus icon (`+`) on the desired page thumbnail. It will then appear in the "Current Pagelist" panel.

**Step 3.** Once you have organized your Pagelist as desired, click **Confirm** to save the changes.

## The Main Toolbar: Your Control Center

This toolbar contains the essential action buttons for the design and deployment process.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_44.png" style={{width:400, height:'auto'}}/></div>

*   **Screen Orientation**: These two icons allow you to switch your design canvas between landscape (horizontal) and portrait (vertical) modes.

*   **Debug (Bug Icon)**: This is a powerful feature for advanced users.
    *   Clicking it opens the "Debug: Current Layout Data" modal.
    *   This modal shows the entire layout's configuration in JSON (JavaScript Object Notation) format, detailing every element, its position, size, color, and other properties.
    *   You can use this to understand the structure of your design for debugging purposes.
    *   Users comfortable with code can even click **Manual Edit JSON** to directly modify the layout's properties, offering an incredible degree of control.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_45.png" style={{width:400, height:'auto'}}/></div>

*   **Import / Export**: These buttons allow you to save your page designs to a local file (Export) or load a design from a local file (Import). This is useful for backing up your work or sharing designs.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/142.png" style={{width:1000, height:'auto'}}/></div>

The Export function allows you to save your current UI design as a file:

**Step 1.** After completing your interface design, click the **Export** button (outward arrow icon) in the top toolbar.

**Step 2.** In the file save dialog that appears, choose a save location and name your file.

**Step 3.** Click "Save" to complete the export process.

Your design will be saved as a JSON file containing all interface information, which can be used for backup or sharing.

The Import function enables you to load previously exported designs or templates:

**Step 1.** Click the **Import** button (inward arrow icon) in the top toolbar.

**Step 2.** In the file selection dialog, locate and select your previously exported design file.

**Step 3.** Click "Open" and the selected design will load into your current workspace.

:::tip
The import operation will replace the current workspace content. It's recommended to export your current design before importing to prevent data loss.
:::

These features are particularly useful for:
- Backing up designs before making major changes
- Sharing interface designs with team members
- Transferring projects between different devices
- Quickly starting new projects using pre-made templates

*   **Save**: This is one of the most important buttons. It saves your current page design to the **SenseCraft HMI cloud**. It does **not** save to your device.

    :::tip
    Get into the habit of clicking **Save** frequently to ensure you don't lose any progress.
    :::

*   **Preview**: This button shows you a virtual preview of how your current design will look on the device's screen. It's a quick and easy way to check your layout, fonts, and colors without having to deploy to the actual hardware.

*   **Deploy**: This is the final step. The **Deploy** button sends your saved and active Pagelist to your connected device. The device will then download and display the new content.

    :::tip
    For the deployment to take effect immediately, your device needs to be awake. If the device is in sleep mode, it will pull the new design the next time it wakes up based on its interval schedule. You can manually wake the device (e.g., by pressing a button on the device) to trigger an immediate update and download of the deployed design.
    :::

## Conclusion

You now have a solid understanding of the fundamental controls within SenseCraft HMI. By effectively using the Device Status Bar, managing your Pages and Pagelists, and following the Save -> Preview -> Deploy workflow, you are well-equipped to create, manage, and display any content you can imagine on your screen-based device.

---

## Introduction

The **Tools** page in SenseCraft HMI provides a suite of advanced utilities designed to help you optimize content for your display and manage your device's software. This section is separate from the main design workspace and focuses on two key functions:

1.  **Image Dithering**: A powerful tool to process and prepare images for optimal quality on displays with limited color palettes, such as e-paper screens.
2.  **Firmware Flasher**: An integrated utility to update your device's firmware, ensuring it has the latest features and bug fixes.

This guide will walk you through each of these tools, explaining their features and how to use them effectively.

## Firmware Flasher

The Firmware Flasher is an essential tool for keeping your device's software up to date. It provides a simple, step-by-step interface to flash new firmware directly from your web browser. You can install official SenseCraft HMI firmware or alternative firmware, such as TRMNL, on supported devices.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_46.png" style={{width:400, height:'auto'}}/></div>

### Step-by-Step Flashing Guide

#### Step 1: Select Your Device

Before you begin, ensure your device is connected to your computer via a USB cable.

1.  Click the **Select** button.
2.  A modal will appear asking you to choose your device from a list of supported hardware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_47.png" style={{width:400, height:'auto'}}/></div>

:::note
If you select the **ePaper DIY Kit - EE04**, you will be prompted with an additional step: you must select the specific screen type and size you are using with the kit. This ensures that the correct display drivers are included in the firmware.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_48.png" style={{width:400, height:'auto'}}/></div>
:::

#### Step 2: Select Firmware

Once a device is selected, the firmware options will become available.

1.  Click the dropdown menu under **Select firmware** to see a list of available firmware versions for your device. This may include different versions of the SenseCraft HMI firmware or other compatible firmware like TRMNL.
2.  Choose the version you wish to install.

*   **Connect Serial Monitor**: This button opens a serial monitor in your browser, which is an advanced tool for viewing debug messages and logs from the device during the flashing process.

#### Step 3: Flash

This is the final step where the firmware is written to the device.

1.  Click the **Flash** button to begin the process. Do not disconnect the device or close the browser tab until it is complete.
2.  The tool will show a progress bar indicating the status of the flash.

:::tip
You will see a checkbox labeled **Full Flash**. Be very careful with this option.

*   **Standard Flash (unchecked)**: Updates the firmware but preserves your saved settings in the device's non-volatile storage, such as your Wi-Fi credentials.
*   **Full Flash (checked)**: Erases the **entire** flash memory on the device before writing the new firmware. **This will delete all saved settings, including your Wi-Fi password.** You will need to reconfigure your Wi-Fi connection after a Full Flash. This option is typically only used for troubleshooting or to perform a "factory reset".
*   We recommend using Full Flash when switching between different platforms.
:::

## Image Dithering

E-paper displays have unique characteristics and often a limited color palette. The Image Dithering tool processes your images to look their best on these screens by using special algorithms to simulate shades and colors. It can also be used to generate C-style header files for developers who wish to embed images directly into their code.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_49.png" style={{width:400, height:'auto'}}/></div>

### Using the Image Dithering Tool

**Step 1. Navigate and Upload**
*   Click on **Tools** in the top navigation bar.
*   Ensure the **Image Dithering** tab is selected.
*   Click **Select Image** to upload a picture from your computer. You can also click **Edit Image** to make basic adjustments.

**Step 2. Configure the Processing Options**
Once your image is uploaded, use the left-hand panel to configure how it will be processed:

*   **Screen Type**: Select the target display type (e.g., `Black/White 1bpp`, `E6 Six-Color 4bpp`). This tells the tool how to optimize the image.
*   **Custom**: Manually set the output resolution (Width and Height) of the image. This should typically match your device's screen resolution.
*   **Dither Algorithm**: Choose a dithering algorithm. Different algorithms (like `Bayer 8x8`, `Floyd-Steinberg`) produce different visual textures when simulating colors. Experiment to see which looks best for your image.
*   **Invert Colors**: Toggles the image between its normal and inverted color state.
*   **Gamma Correction**: Adjusts the brightness and contrast of the image. A lower value generally makes the image darker, while a higher value makes it brighter.
*   **Device ID**: If you plan to generate a header file, you can set a custom ID here. This will influence the variable names (`Array Name`, `Header Macro`) in the generated code.

**Step 3. Preview and Export**
After configuring the options, you can choose one of the following actions at the bottom:

*   **Preview**: Updates the main display area to show you a live preview of what the final processed image will look like.
*   **Export Image**: Downloads the processed image to your computer as a standard image file (e.g., PNG).
*   **Generate Header**: For developers, this creates and downloads a `.h` header file containing the image data as a byte array, ready to be included in a firmware project.

## Conclusion

The Tools page offers indispensable utilities for both designers and developers. With the Image Dithering tool, you can ensure your visuals are perfectly optimized for your screen, while the Firmware Flasher provides a safe and easy way to manage your device's software. Mastering these tools will help you get the most out of your SenseCraft HMI experience.



