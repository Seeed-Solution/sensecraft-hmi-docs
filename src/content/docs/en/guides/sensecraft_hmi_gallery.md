---
title: Gallery Function
description: Introduces the use of Gallery, a feature under the SenseCraft HMI platform.
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/66.jpg" style={{width:800, height:'auto'}}/></div>

## Introduction

The Gallery function in [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) allows you to transform your screen-based devices into beautiful digital photo frames. You can upload local images or import them from URLs, then display them with customizable transition intervals and visual effects. This feature is perfect for creating ambient displays, information screens, or decorative photo albums using your Seeed Studio display devices.

This tutorial will guide you through using the Gallery function in SenseCraft HMI, covering image upload methods, display settings, and important considerations for optimal performance.

This article will use the [reTerminal E1002](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1002/) as an example to explain how to use this feature on the SenseCraft HMI platform.

## Getting Started with Gallery

### Accessing the Gallery Function

**Step 1.** Navigate to the SenseCraft HMI platform below.<br/>

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi)<br/>

**Step 2.** Connect your device or select an already paired device to use.<br/>
**Step 3.** Click on **Image Gallery** and you can choose to upload local images or import images from a URL.<br/>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gallery_start_1.png" style={{width:800, height:'auto'}}/></div>

### Understanding the Gallery Interface

The Gallery interface consists of several key elements:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gallery_interface_1.png" style={{width:800, height:'auto'}}/></div>

1. **Control Panel**: This section includes the settings for adding the added items, Pagelisits, jitter modes, and the display direction of the images.
2. **Image Display Area**: The main section where your current image is displayed
3. **Image Toolbar**: Contains tools for adjusting, or downloading current image
4. **Thumbnail Strip**: Shows all uploaded images in your gallery
5. **Action Buttons**: Save, Preview, and Deploy buttons for testing and applying your gallery to the device

## Adding Images to Your Gallery

SenseCraft HMI provides two methods for adding images to your gallery: uploading local files or importing from URLs.

### Upload Local Images

Step 1. Click the **New** button in the control panel

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gallery_img_1.png" style={{width:800, height:'auto'}}/></div>

**Step 2.** In the dialog that appears,Select **Image Gallery**, and in the pop-up dialog box, make your selection.**Upolad File**<br>
**Step 3.** Click **Select Image Files**,and choose the images you want to upload from your computer

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gallery_img_2.png" style={{width:600, height:'auto'}}/></div>

**Step 4.** Important image requirements and limitations:

- Supports JPG, PNG, and GIF formats
- Photos over 2MB will be automatically compressed
- Non-5:3 aspect ratios will be adjusted with white padding
- Target resolution: 800x480 pixels (or your device's native resolution)
- Without a MicroSD card, you can upload a maximum of 3 photos
- With a MicroSD card, you can upload up to 20 photos

Step 5. Select multiple files using Ctrl/Cmd + Click if desired

Step 6. Click "Open" to upload the selected images

### Import Images from URL

**Step 1.** Click the **New** button in the control panel<br>
**Step 2.** In the dialog that appears, 选择Image Gallery,接着选择 Import for URL<br>
**Step 3.** Enter the direct image URL in the provided field<br>
**Step 4.** Click "Import" to add the image to your gallery

:::tip
When importing from URLs, ensure you're using direct image links that end with file extensions like .jpg, .png, or .gif. Links to web pages containing images may not work.
:::

## Managing Your Gallery

### Setting Display Interval

The interval setting determines how long each image is displayed before transitioning to the next one:

Step 1. Locate the "Interval(min):" field in the control panel

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gallery_manage_1.png" style={{width:600, height:'auto'}}/></div>

Step 2. Enter your desired display time in minutes (e.g., 1 for one minute per image)

### Choosing Dither Mode

The dither mode affects how images are processed for optimal display on your specific device:

Step 1. Find the "Dither Mode:" dropdown in the control panel
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gallery_manage_2.png" style={{width:600, height:'auto'}}/></div><br>
Step 2. Select the appropriate option for your device:

- **Six Colors**: Best for color LCD displays, preserves all color information
- **Black and White**: Converts images to pure black and white, ideal for monochrome e-paper displays

:::tip
For e-paper/e-ink displays, select "Black and White" mode for optimal display quality and faster refresh rates. For LCD screens, "Six Colors" will provide the best visual experience.
:::

### Using the Image Toolbar

Each image in your gallery can be adjusted using the toolbar that appears below the image:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gallery_manage_3.png" style={{width:700, height:'auto'}}/></div>

From left to right, the tools are:

1. **Fill Horizontally**: Adjusts the image to fill the screen horizontally while maintaining aspect ratio
2. **Fill Vertically**: Adjusts the image to fill the screen vertically while maintaining aspect ratio
3. **Download**: Save the processed image to your computer

:::tip
Use the "Fill Horizontally" option for landscape images and "Fill Vertically" for portrait images to make the best use of your display space while avoiding image distortion.
:::

### Reordering Images

You can change the display order of your images using the thumbnail strip:

**Step 1.** Locate the image thumbnail you want to move in the strip at the bottom of the screen<br>
**Step 2.** Click and drag the thumbnail to a new position in the sequence<br>
**Step 3.** Release to set the new order

## Deploying Your Gallery to Your Device

Once you've added and configured your images, you can deploy the gallery to your connected device:

**Step 1.** Click the "Save" button to store your gallery configuration

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gallery_manage_4.png" style={{width:800, height:'auto'}}/></div>

:::tip
After uploading or designing an image, habitually click the save button to ensure your layout design won't be easily lost.
:::

**Step 2.** (Optional) Click "Preview" to see how your gallery will appear on the device without fully deploying it

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gallery_manage_5.png" style={{width:800, height:'auto'}}/></div>

**Step 3.** Click "Deploy" to send your gallery to the connected device

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gallery_manage_6.png" style={{width:800, height:'auto'}}/></div>

**Step 4.** Wait for the deployment confirmation message

:::tip
After clicking the deploy button, the device may not update the album immediately. The device might be in sleep mode. It will pull the latest album images when it wakes up next time. If you want to update the photos immediately, you can click the green button above the device, and the device will wake up instantly and pull the dashboard updates.
:::

After deployment, your device will begin displaying the images according to your interval setting.
Effect Demonstration:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gallery_manage_7.png" style={{width:800, height:'auto'}}/></div>

## Storage Considerations

### MicroSD Card Requirements

To store more than 3 images on your device, you'll need to use a MicroSD card:

1. **Format**: The MicroSD card must be formatted as FAT32
2. **Size**: 8GB or larger recommended (up to 32GB supported)
3. **Speed**: Class 10 or higher recommended for better performance

:::tip
Using file systems other than FAT32 may result in the device not recognizing the MicroSD card or failing to save images properly.
:::

### How to Format a MicroSD Card as FAT32

- **On Windows:**<br>
    Step 1. Insert your MicroSD card into your computer<br>
    Step 2. Open File Explorer and right-click on the MicroSD card<br>
    Step 3. Select "Format..."<br>
    Step 4. Choose "FAT32" from the File System dropdown<br>
    Step 5. Click "Start" to begin formatting

- **On Mac:**<br>
    Step 1. Insert your MicroSD card into your computer<br>
    Step 2. Open Disk Utility (Applications > Utilities > Disk Utility)<br>
    Step 3. Select your MicroSD card from the sidebar<br>
    Step 4. Click "Erase"<br>
    Step 5. Choose "MS-DOS (FAT)" as the format<br>
    Step 6. Click "Erase" to format the card

### Inserting the MicroSD Card

Step 1. Power off your device<br>
Step 2. Locate the MicroSD card slot on your device<br>
Step 3. Insert the properly formatted MicroSD card<br>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/133.jpg" style={{width:700, height:'auto'}}/></div>

Step 4. Power on your device<br>
Step 5. Reconnect to SenseCraft HMI to verify the expanded storage is recognized

## Optimizing Images for Your Display

For the best visual results on your device's display:

1. **Match the resolution**: Prepare images that match your device's native resolution (typically 800x480 pixels)
2. **Consider aspect ratio**: Use images with a 5:3 aspect ratio to avoid white padding
3. **Optimize for display type**:

- For color LCD: Standard color images work well
- For e-paper/e-ink: Higher contrast images with fewer color gradients
- For 2-color e-paper: Black and white or high contrast images

4. **File size**: Keep images under 2MB to avoid automatic compression
5. **Brightness/contrast**: Adjust based on your specific display's characteristics

### Use HMI tools to optimize the image

You can choose the image tool of SenseCraft HMI to optimize your pictures. It can not only be used for previewing your usage in SenseCraft HMI, but also generate C code header files for editing and use in your code.
step 1.On the [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) page, select **Tools**, and then choose **Image Dithering**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gallery_tools_1.png" style={{width:800, height:'auto'}}/></div>

step 2. Upload the image you want to optimize<br>
step 3. Make necessary modifications as required.

- Edit Image: Can resize the size of the image
- Screen Type: Select your display screen type
- Custom: Based on the size of the screen resolution you are using
- Dither Algorithm: Use algorithms to process your images, and support a variety of commonly used algorithms.
- Device ID: Your device identifier is used to distinguish your device and is defined according to your engineering requirements.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gallery_tools_2.png" style={{width:800, height:'auto'}}/></div>

step 4. Select **Preview** to view the image displayed on the screen. Depending on your specific situation, you can choose to export the image or generate a header file.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gallery_tools_3.png" style={{width:800, height:'auto'}}/></div>

## Troubleshooting

### Common Issues and Solutions

1. **Images not uploading**:

- Check that your image is in a supported format (JPG, PNG, GIF)
- Ensure the file size is not too large (ideally under 2MB)
- Try a different browser or clear your browser cache

2. **Cannot upload more than 3 images**:

- Verify that you have a properly formatted MicroSD card inserted in your device
- Check that the MicroSD card is formatted as FAT32
- Ensure the device is properly detecting the MicroSD card

3. **Images display incorrectly**:

- Adjust the brightness/contrast using the image toolbar
- Prepare images that match your device's resolution

4. **Deployment fails**:

- Ensure your device is properly connected to SenseCraft HMI
- Check that your device has sufficient storage space
- Restart your device and try deploying again

## Conclusion

The Gallery function in SenseCraft HMI provides an easy way to transform your screen-based devices into digital photo frames. By following this guide, you can upload, manage, and display images on your device with customized settings for optimal viewing.

Remember that for storing more than 3 images, you'll need a properly formatted MicroSD card inserted in your device. With the right setup, you can create beautiful slideshows and displays that showcase your favorite images on your Seeed Studio display devices.

## Resources

- [SenseCraft HMI Platform](https://sensecraft.seeed.cc/hmi)
- [Compatible Devices - reTerminal E Series](https://wiki.seeedstudio.com/reterminal_e10xx_main_page/)
