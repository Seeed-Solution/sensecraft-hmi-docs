---
title: Basic Function Usage
description: Introduction to SenseCraft HMI Page Usage and Operation Methods
---

## Templates

Templates provide pre-designed layouts that combine multiple components into a cohesive, ready-to-use display. They save time and ensure professional results without having to design layouts from scratch.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/113.png" style={{width:350, height:'auto'}}/></div>

### Weather Display Template

The Weather Display Template offers a complete weather dashboard showing current conditions and a 7-day forecast for any city.

Step 1. Click on the "Weather Display" template in the Templates section

Step 2. In the "Configure Template: Weather Display" dialog that appears:

   - Select your preferred temperature unit (Celsius °C or Fahrenheit °F)

   - Enter a city name in the "City Name" field

   - Click "Search" to verify the city exists in the weather database

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/114.png" style={{width:800, height:'auto'}}/></div>

Step 3. After a successful search, click "OK" to proceed

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/115.png" style={{width:700, height:'auto'}}/></div>

Step 4. A "Template Preview" window will appear showing:

   - Left panel with current date, weather condition, temperature, high/low, and humidity

   - Right panel with city name and 7-day forecast including condition icons and temperature ranges


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/116.png" style={{width:700, height:'auto'}}/></div>

Step 5. Review the preview and note:

   - The template will replace all current elements on your canvas

   - All template elements will be given unique IDs to avoid conflicts

   - You can modify the template after applying it to the canvas

Step 6. Click "Apply to Canvas" to add the template to your workspace

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/117.png" style={{width:1000, height:'auto'}}/></div>

Step 7. The Weather Display template is now on your canvas, ready for deployment or further customization

:::note
- The Weather Display template uses real-time weather API data that requires internet connectivity on your device.

- The template is fully customizable after being applied to your canvas - you can resize, reposition, or modify any element.

- Weather data automatically updates according to the refresh interval set in your project settings.
:::

### Stock Dashboard Template

The Stock Dashboard Template provides a clean, professional display of real-time stock market data including price, daily change, and percentage change.

Step 1. Click on the "Stock Dashboard" template in the Templates section

Step 2. In the "Configure Template: Stock Dashboard" dialog that appears:

   - Enter your [Twelve Data API Key](#getting-a-twelve-data-api-key) in the field provided (masked for security)

   - Enter a stock symbol (e.g., "AAPL" for Apple Inc.) in the Stock Symbol field

   - Click "Search" to find the stock

Step 3. After searching, a list of matching stocks appears. Select your desired stock from the results (e.g., "AAPL Apple Inc.")

Step 4. Click "OK" to confirm your selection

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/118.png" style={{width:700, height:'auto'}}/></div>

Step 5. A "Template Preview" window will appear showing:

   - Left panel with the stock symbol in large text

   - Right panel displaying the current stock price, price change, and percentage change

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/119.png" style={{width:700, height:'auto'}}/></div>

Step 6. Review the preview and note:

   - The template will replace all current elements on your canvas

   - All template elements will be given unique IDs to avoid conflicts

   - You can modify the template after applying it to the canvas

Step 7. Click "Apply to Canvas" to add the template to your workspace

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/120.png" style={{width:1000, height:'auto'}}/></div>

:::note
- The Stock Dashboard template requires internet access on your device to fetch real-time market data.

- Stock market data is delayed by at least 15 minutes on the free tier of Twelve Data.

- Data refreshes according to your project's refresh interval settings.

- Market data is only available during trading hours for the respective exchanges.
:::

### GitHub Profile Template

The GitHub Profile Template creates a comprehensive dashboard displaying a GitHub user's profile information and selected repositories with their statistics.

Step 1. Click on the "GitHub Profile" template in the Templates section


Step 2. In the "Configure Template: GitHub Profile" dialog that appears:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/121.png" style={{width:800, height:'auto'}}/></div>

   - Enter a GitHub username in the required field (e.g., "seeed-studio")

   - Optionally enter keywords in the Repository Search field to filter repositories

   - Leave the search field empty to show all repositories from the user

Step 3. Click the "Search all '[username]' repositories" button to retrieve the user's repositories

Step 4. From the list of repositories displayed, select up to 3 repositories you want to showcase

   - Each repository shows its name, description, primary programming language, and star count

   - You can use the filter field to narrow down the repository list

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/122.png" style={{width:700, height:'auto'}}/></div>

Step 5. Click "OK" to confirm your selections

Step 6. A "Template Preview" window will appear showing:

   - The GitHub user's display name at the top

   - "Github" label with follower count

   - A horizontal divider line

   - Selected repositories with their names and star counts

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/123.png" style={{width:700, height:'auto'}}/></div>

Step 7. Review the preview and note:

   - The template will replace all current elements on your canvas

   - All template elements will be given unique IDs to avoid conflicts

   - You can modify the template after applying it to the canvas

Step 8. Click "Apply to Canvas" to add the template to your workspace

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/124.png" style={{width:1000, height:'auto'}}/></div>

:::note
- Unlike other templates that may require API keys, the GitHub Profile template uses GitHub's public API and doesn't require authentication.

- The template has two search modes clearly explained in the interface:

  1. User only: Enter just the username to show all repositories

  2. User + keywords: Enter username and specific keywords to filter repositories

- Repository selection is limited to 3 to ensure optimal display on smaller screens.

- Some GitHub statistics may be approximated (like follower counts over 1,000 shown as "1.0K").
:::

### YouTube Channel Stats Template

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

## Advanced Canvas Features

### Debugging and JSON Editing

SenseCraft HMI Canvas provides advanced debugging capabilities:

Step 1. Click the debug icon in the toolbar

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/128.png" style={{width:400, height:'auto'}}/></div>

Step 2. A modal will open showing the current layout data in JSON format

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/129.png" style={{width:700, height:'auto'}}/></div>

Step 3. You can:

   - View the JSON structure of your layout

   - Click "Manual Edit JSON" to directly modify the layout code

   - Click "Copy to Clipboard" to save the JSON for backup or sharing

   - Click "Generate HTML" to create an HTML version of your layout

This feature is particularly useful for:

- Understanding how your layout is structured

- Making precise adjustments that might be difficult in the visual editor

- Creating backups of complex layouts

- Sharing layouts with others

### Import Export and Share

SenseCraft HMI provides convenient Import and Export functions that allow you to easily save, share, and restore your design work. These two features are located in the top toolbar of the interface, clearly identified by their icons.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/142.png" style={{width:1000, height:'auto'}}/></div>

#### Exporting Designs

The Export function allows you to save your current UI design as a file:

**Step 1.** After completing your interface design, click the **Export** button (outward arrow icon) in the top toolbar.

**Step 2.** In the file save dialog that appears, choose a save location and name your file.

**Step 3.** Click "Save" to complete the export process.

Your design will be saved as a JSON file containing all interface information, which can be used for backup or sharing.

#### Importing Designs

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





