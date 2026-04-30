---
description: Learn how to use the SenseCraft HMI workspace, including basic drawing, advanced components, data integration, and custom widgets.
title: Workspace Guide
---

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/weather.jpg" style={{width:800, height:'auto'}}/></div> -->

The Workspace is divided into four main sections: **Data**, **Basic**, **Component**, and **My widgets**. Each section includes a variety of built-in components, allowing you to design and customize your interface. While we offer seamless, out-of-the-box integration with standard data sources like Google Calendar, YouTube, and GitHub, our capabilities extend far beyond these native connectors.

---

## Create new design

**Step 1.** Click **Workspace** on the left sidebar to enter the workspace canvas. Your previous designs will be listed here.

**Step 2.** Click the **+ New** button in the top-left corner to create a new canvas. Alternatively, hover your mouse over "Workspace" to reveal the quick-add button.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_1.png" style={{width:800, height:'auto'}}/></div>

**Step 3.** In the pop-up window, select **New Design** to start a fresh project, or use the **Import Image** option below to bring in an existing graphic.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_2.png" style={{width:800, height:'auto'}}/></div>

**Step 4.** After selecting **New Design**, give your project a name, select the target device from the device list, and click the **Confirm** button. A blank canvas will appear, and you can now begin designing your custom interface.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_3.png" style={{width:800, height:'auto'}}/></div>



---

## Data

This is one of the standout features of SenseCraft, allowing you to easily connect external data. Whether you use our built-in data connectors or custom data sources, you can build powerful visual dashboards.

--- 


### Device Sensors Function

The **Device Sensors** function allows you to read data from device sensors and display it directly on your screen.

**Step 1.** Inside the **New Design** canvas, click the **Data** tab on the left and find the **Device Sensors** component.

**Step 2.** Select the device you want to monitor and click the **Load Sensor Data** button. The **Available Fields** will appear on the right.

**Step 3.** Click the specific sensor data or text content you wish to display.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_9.png" style={{width:800, height:'auto'}}/></div>

**Step 4.** In the tree structure, check the data fields you want to display. The selected data will automatically appear on the canvas to the right.

**Step 5.** Click the **Apply** button in the top-right corner of the canvas to push the data to the device.

--- 

### SenseCAP Function

The **SenseCAP** function lets you connect your SenseCAP account and read real-time data from the linked sensors.

**Step 1.** Inside the **New Design** canvas, click the **Data** tab on the left and find the **SenseCAP** component.

**Step 2.** Enter your SenseCAP **Access ID** in the corresponding input field.

**Step 3.** Enter your SenseCAP **Access Key** in the corresponding input field.

**Step 4.** In the **Devices** list, select the device you want to monitor. The corresponding sensor data will appear on the right.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_sensecap.png" style={{width:800, height:'auto'}}/></div>

**Step 5.** Click the **Apply** button in the top-right corner of the canvas to push the data to the device.

--- 

### Weather Function

The **Weather** function allows you to create live weather displays for a selected city. You can quickly generate a ready-made layout with preset fields, or fine-tune the displayed data and units for a more customized result.

**Step 1.** Inside the **New Design** canvas, click the **Data** tab on the left and find the **Weather** component.

**Step 2.** Enter the city name you want to query in the first field.

**Step 3.** Use **Quick presets** to select a default weather layout and field combination. In the **Units** section, choose the measurement units you want to display. If needed, switch to **Advanced** for more detailed customization.

**Step 4.** Click **Load Data** to generate a preview on the right. After confirming the result, click **Confirm** to place the weather layout on the canvas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_weather.png" style={{width:800, height:'auto'}}/></div>

**Step 5.** Click the **Apply** button in the top-right corner of the canvas to push the data to the device.


--- 

### Stock Function

The **Stock** function lets you display real-time stock information on your page. You can look up a stock by symbol and choose whether to show the current price or a K-line chart.

**Step 1.** Inside the **New Design** canvas, click the **Data** tab on the left and find the **Stock** component.

**Step 2.** Enter your Stock API key in the first field. If you do not already have one, use the link provided in the interface to view the API key instructions.

**Step 3.** In the **Stock Symbol** field, enter the stock symbol you want to track. Then choose the display type in the **Display** section, such as **Current Price** or **K-line Chart**.

**Step 4.** Click **Search** to generate a preview on the right. After reviewing the result, click **Confirm** to add the stock layout to the canvas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_stock.png" style={{width:800, height:'auto'}}/></div>

**Step 5.** Click the **Apply** button in the top-right corner of the canvas to push the data to the device.


--- 

### CoinMarketCap Function

The **CoinMarketCap** function lets you display cryptocurrency market data in your design. By entering a crypto symbol, you can quickly generate a live data widget for the asset you want to follow.

**Step 1.** Inside the **New Design** canvas, click the **Data** tab on the left and find the **CoinMarketCap** component.

**Step 2.** Enter your CoinMarketCap API key in the first field. If you do not already have one, use the link provided in the interface to check how to obtain it.

**Step 3.** In the **Cryptocurrency Symbol** field, enter the crypto symbol you want to monitor.

**Step 4.** Click **Search** to generate a preview on the right. After reviewing the result, click **Confirm** to place the cryptocurrency layout on the canvas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_coinmarketmap.png" style={{width:800, height:'auto'}}/></div>

**Step 5.** Click the **Apply** button in the top-right corner of the canvas to push the data to the device.



--- 

### GitHub Function

The **GitHub** function lets you display user or repository information directly in your layout, such as profile stats, repo metadata, and activity-related fields.

**Step 1.** Inside the **New Design** canvas, click the **Data** tab on the left and find the **GitHub** component.

**Step 2.** Enter your GitHub API key in the first field. If you do not already have one, use the link provided in the interface to check how to obtain it.

**Step 3.** In the **GitHub User** field, enter the GitHub username you want to monitor.

**Step 4.** Select **User Info** to display profile-related data. After entering the username, available fields will appear on the right for quick selection.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_github1.png" style={{width:800, height:'auto'}}/></div>

**Step 5.** You can also select **Repository Info**. Enter a repository name, click **Search**, then choose a repository from the results. Available repository fields will appear on the right.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_github2.png" style={{width:800, height:'auto'}}/></div>

**Step 6.** Click the **Apply** button in the top-right corner of the canvas to push the data to the device.



--- 


### YouTube Function

The **YouTube** function lets you display channel-level data such as channel name, subscriber metrics, and other supported public fields.

**Step 1.** Inside the **New Design** canvas, click the **Data** tab on the left and find the **YouTube** component.

**Step 2.** Enter your YouTube API key in the first field. If you do not already have one, use the link provided in the interface to check how to obtain it.

**Step 3.** Enter a **Channel ID** or **Handle** in the input field below.

**Step 4.** Click **Search** to load channel data. After reviewing the preview on the right, click **Confirm** to place the channel information layout on the canvas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_youtube.png" style={{width:800, height:'auto'}}/></div>

**Step 5.** Click the **Apply** button in the top-right corner of the canvas to push the data to the device.


--- 


### ZenQuotes Function

The **ZenQuotes** function lets you add inspirational quotes to your design, with optional filtering by type, author, or keyword.

**Step 1.** Inside the **New Design** canvas, click the **Data** tab on the left and find the **ZenQuotes** component.

**Step 2.** Enter your API key if available. This function can still work in basic mode even without an API key.

**Step 3.** If you entered an API key, you can further refine results using **Quote Type**, **Filter by Author**, and **Keyword**.

**Step 4.** Click **Load Quotes** to generate a preview on the right. After reviewing the result, click **Confirm** to place the quote layout on the canvas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_zenquotes.png" style={{width:800, height:'auto'}}/></div>

**Step 5.** Click the **Apply** button in the top-right corner of the canvas to push the data to the device.


--- 



### Todoist Function

The **Todoist** function lets you display task data from your Todoist account, making it easy to build productivity dashboards on ePaper screens.

**Step 1.** Inside the **New Design** canvas, click the **Data** tab on the left and find the **Todoist** component.

**Step 2.** Enter your Todoist API key in the first field. If you do not already have one, use the link provided in the interface to check how to obtain it.

**Step 3.** Optionally configure available task filters (for example, task type or query fields) based on your use case.

**Step 4.** Click **Load All Tasks** to generate a task preview on the right. After reviewing the result, click **Confirm** to place the task layout on the canvas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_todolist.png" style={{width:800, height:'auto'}}/></div>

**Step 5.** Click the **Apply** button in the top-right corner of the canvas to push the data to the device.


--- 


### Google Calendar Function

The **Google Calendar** function lets you display calendar events from your Google account, including event type and time-range based filtering.

**Step 1.** Inside the **New Design** canvas, click the **Data** tab on the left and find the **Google Calendar** component.

**Step 2.** If you signed in with Google, your calendar may already be linked. You can also click **Re-authorize with Google** to reconnect, or click **Revoke Authorization** to remove access.

**Step 3.** Configure filters such as **Event Type** and **Time Range** to narrow down which events are displayed.

**Step 4.** Click **Load Data** to generate a preview on the right. After reviewing the result, click **Confirm** to place the calendar layout on the canvas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_caelndar.png" style={{width:800, height:'auto'}}/></div>

**Step 5.** Click the **Apply** button in the top-right corner of the canvas to push the data to the device.


---
### RSS Function

The RSS function allows you to transform your screen-based devices into real-time information displays. By connecting to RSS feeds from news outlets, blogs, weather services, and more, you can create dynamic displays that automatically update with the latest content. 

**Step 1.** Inside the **New Design** canvas, click the **Data** tab on the left and find the **RSS Feed** component.

**Step 2.** Enter the API address (URL) from which you want to fetch data into the component configuration box. For example:

:::note[Example URL]
[https://feeds.bbci.co.uk/news/world/rss.xml](https://feeds.bbci.co.uk/news/world/rss.xml)
:::

**Step 3.** The system will automatically parse the data returned by the API and expand it below in a **Tree Structure**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_6.png" style={{width:800, height:'auto'}}/></div>

**Step 4.** In the tree structure, check the data fields you want to display. The selected data will automatically appear on the canvas to the right.

**Step 5.** Click the **Apply** button in the top-right corner of the canvas to push the data to the device.

---
### HTML Function

The **HTML** function allows you to display web content directly on your ePaper display devices. This powerful feature transforms your device into a dedicated web display, capable of showing dashboards, monitoring systems, documentation, or any web content you need.

**Step 1.** Inside the **New Design** canvas, click the **Data** tab on the left and find the **HTML** component.

**Step 2.** Enter the API address (URL) from which you want to fetch data into the component configuration box. For example:

:::note[Example URL]
[https://www.windy.com/](https://www.windy.com/)
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_7.png" style={{width:800, height:'auto'}}/></div>

Alternatively, click **File Upload** to upload your own custom HTML file.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_8.png" style={{width:800, height:'auto'}}/></div>

**Step 3.** The system will automatically parse the data returned by the API and expand it below in a **Tree Structure**.

**Step 4.** In the tree structure, check the data fields you want to display. The selected data will automatically appear on the canvas to the right.

**Step 5.** Click the **Apply** button in the top-right corner of the canvas to push the data to the device.

---
### HackerNews Function

The **HackerNews** function lets you quickly bring trending Hacker News content into your design. You can choose different content sources and control how many items to load, making it suitable for technology news dashboards.

**Step 1.** Inside the **New Design** canvas, click the **Data** tab on the left and find the **HackerNews** component.

**Step 2.** In the **Data Source** dropdown, select a content source such as **Top Stories**, **Newest**, **Best**, **Ask HN**, **Show HN**, or **Job**.

**Step 3.** In **Number of Stories**, choose how many items you want to load.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_HackerNews.png" style={{width:800, height:'auto'}}/></div>

**Step 4.** Click the **Load Data** button below to generate a preview on the right. After confirming the result, click **Confirm** to add the content to the page.

**Step 5.** Click the **Apply** button in the top-right corner of the canvas to push the data to the device.

---

### Reddit Function

The **Reddit** function helps you display posts from a specified community on your page. You can choose the target subreddit, sort method, and number of posts to load for community, news aggregation, or topic update pages.

**Step 1.** Inside the **New Design** canvas, click the **Data** tab on the left and find the **Reddit** component.

**Step 2.** In the **Subreddit** input field, enter the target community name without the `r/` prefix, for example **gadgets**.

**Step 3.** In the **Sort** section, choose a sorting method such as **Hot**, **New**, **Top**, or **Rising**.

**Step 4.** In **Number of Stories**, choose how many posts you want to load.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_Reddit.png" style={{width:800, height:'auto'}}/></div>

**Step 5.** Click the **Load Data** button below to generate a preview on the right. After confirming the result, click **Confirm** to add the content to the page.

**Step 6.** Click the **Apply** button in the top-right corner of the canvas to push the data to the device.

---
### External Data Source 

The **External Data Source** component allows you to fetch external data using APIs and visualize it on your dashboard.

**Step 1.** Inside the **New Design** canvas, click the **Data** tab on the left and locate the **External Data Source** component at the bottom.

**Step 2.** Enter the API address (URL) from which you want to fetch data into the component configuration box.

**Step 3.** The system will automatically parse the data returned by the API and expand it below in a **Tree Structure**.

**Step 4.** In the tree structure, check the data fields you want to display. The selected data will automatically appear on the canvas to the right.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/w4.jpg" style={{width:800, height:'auto'}}/></div>

**Step 5.** Click the **Apply** button in the top-right corner of the canvas to push the data to the device.


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

In addition to pulling external data, we provide the **Push to SenseCraft** component. This allows you to actively push data from your hardware program (such as Arduino or ESP32 code) to the platform.

**Step 1.** Ensure your device is connected to the SenseCraft platform and is actively sending data.

**Step 2.** Select the **Push to SenseCraft** component from the **Data** tab.

**Step 3.** Use the demo code to test and the data will immediately appear on the canvas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/w8.jpg" style={{width:800, height:'auto'}}/></div>

**Step 4.** Use the basic text function to add labels or descriptions to the data.

**Step 5.** Click the **Apply** button in the top-right corner of the canvas to push the data to the device.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/w9.jpg" style={{width:800, height:'auto'}}/></div>

This is extremely useful for real-time monitoring of sensor data such as temperature, humidity, and light levels.







---

## Basic

The **Basic** section covers fundamental design needs, including text, images, dates, simple shapes, and even barcodes or QR codes.

Using the **Date/Time** component as an example:

**Step 1.** Click the **Date/Time** component in the Basic tab; it will automatically appear on the canvas.

**Step 2.** Click the component to view its properties in the right sidebar, where you can adjust the date/time format, font size, color, and more.

**Step 3.** Modify the format in the property bar, such as changing it to `YYYY-MM-DD HH:mm:ss`.

**Step 4.** Deselect the component or click the canvas to see the date/time updated to your chosen format.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_4.png" style={{width:800, height:'auto'}}/></div>

---

## Component

The **Component** section features more complex widgets like charts, dashboards, calendars, and clocks—think of it as an upgraded version of the Basic tab.

Using the **Calendar** component as an example:

**Step 1.** Click the **Calendar** component in the Component tab to add it to the canvas.

**Step 2.** Click the component to configure its properties, such as the specific date displayed and its color scheme.

**Step 3.** Change the date in the property bar (e.g., to `2026-04-20`).

**Step 4.** Click the canvas to see the calendar update to the configured date.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_5.png" style={{width:800, height:'auto'}}/></div>


---

## My widgets

The **My widgets** section is for your custom components. If you use a specific data source frequently, you can click the **Add to My Widgets** button in the bottom-right corner. This saves the data component to your personal widget library, allowing you to drag and drop it directly next time without reconfiguring the API.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_worksp_advance_2.png" style={{width:800, height:'auto'}}/></div>
