---
title: AI Generation Function
description: Introduction to AI Generation features within the SenseCraft HMI platform.
---

## Introduction

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) is Seeed Studio's interactive interface design platform specifically created for display-based devices. One of its most powerful features is the **AI Generation** function, which allows you to create beautiful display layouts and images by simply describing what you want in natural language.

---

## Quick Start

The AI Generation feature is available in both the **Image** and **Layout** sections of SenseCraft HMI, each catering to different application scenarios:

* **AI Image Generator**: Creates a standalone custom image based on your description.
* **AI Layout Generator**: Designs a complete UI layout integrated with functional components (such as buttons, text fields, and data displays).

---

## AI Image Generator

**Step 1. Enable the Function**
Click the **AI Gen** menu in the navigation bar and select **AI Image Generator**.



<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_ai_gen_1.png" style={{width:400, height:'auto'}}/>
</div> 

**Step 2. Enter Prompts**
In the input box, enter a detailed description of the image you want to create. For example:
* "A beautiful mountain landscape with a sunrise and pine trees."
* "A minimalist dashboard showing temperature and humidity icons."
* "A circuit board pattern with the Seeed Studio logo in the center."

**Step 3. Start Generation**
Click the send button to initiate the generation process.

**Step 4. Wait for Processing**
Wait while the AI processes your request. This typically takes 10–30 seconds depending on the complexity of your description.



<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_ai_gen_2.png" style={{width:400, height:'auto'}}/>
</div> 

<!-- 
**Step 5. Iterative Refinement**
Once the image is generated, you can refine it through conversation with the AI. For example:
* "Make the colors more vibrant."
* "Add some animals and more colors."
* "Change the background to blue."

**Step 6. Update Results**
Click the send button again to generate a new version based on your latest feedback.

![Image 3]

**Step 7. Loop Optimization**
Repeat this iterative process until you are satisfied with the result. -->

**Step 5. View Details**
Click the generated thumbnail to view a larger preview on the right for more details.


**Step 6. Add to Workspace**
Click the **"Add to My Page"** button. The image will be saved as a new page in your workspace.



<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_ai_gen_3.png" style={{width:400, height:'auto'}}/>
</div> 

---

## AI Layout Generator

**Step 1. Enable the Function**
Click the **AI Gen** menu and select **AI Layout Generator**.



<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_ai_gen_4.png" style={{width:400, height:'auto'}}/>
</div> 

**Step 2. Describe Layout Requirements**
Enter a description of the interface you want to create. Be specific about the components you need. For example:
* "Create a weather dashboard with a temperature display, humidity gauge, and forecast icons."
* "Design a smart home control panel with buttons for lights, thermostat, and security."
* "Make a fitness tracker interface with a step counter, heart rate display, and activity history."

**Step 3. Generate Interface**
Click the send button to start the process and wait for the AI to build the complete interface layout.



<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_ai_gen_5.png" style={{width:400, height:'auto'}}/>
</div> 

<!-- 
**Step 4. Layout Fine-Tuning**
After the initial layout is generated, you can adjust positions or styles through conversation. For example:
* "Move the temperature display to the top right."
* "Make the buttons larger and add labels below them."
* "Change the color scheme to dark mode."
* "Add a clock at the top center."

**Step 5. Refresh Layout**
Click the send button again, and the AI will rearrange or modify components based on your feedback. -->

**Step 6. Preview Details**
Click the thumbnail and check the component layout in the right-side detail panel.

**Step 7. Add to Workspace**
Click the **"Add to My Page"** button. The layout will be saved as a new page in your workspace.



<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_ai_gen_6.png" style={{width:400, height:'auto'}}/>
</div> 

---

## AI Generation Limits

- **Daily Limit**: Each account is limited to 10 AI-generated creations per day, including 5 image generation/adjustments and 5 canvas generation/adjustments
- **Reset Time**: Limits reset every 24 hours

---

## Best Practices for AI Generation

### 1. Tips for Effective Prompts
* **Be specific**: Instead of "Create a dashboard," try "Create a dashboard with temperature display in the center, humidity on the right, and a clock at the top."
* **Mention colors and style**: For example, "Use a blue and white color scheme with rounded corners for all elements."
* **Reference familiar designs**: For example, "Make it look like a smart thermostat interface" or "Design it similar to a fitness tracker display."

### 2. Iterative Refinement
The most successful designs often come from multiple rounds of feedback:
1.  Start with a general description.
2.  Generate the initial design.
3.  Provide specific feedback on what to change.
4.  Generate an updated version and repeat until satisfied.

### 3. AI Meets Manual Editing
For the best results, it is recommended to:
1.  **AI Base**: Use AI to quickly create the basic layout and core components.
2.  **Manual Tuning**: Fine-tune the positioning, sizing, and properties of individual elements manually.
3.  **Data Binding**: Manually add custom functionality or link data sources.
4.  **Major Changes**: If you need to add entirely new sections, seek assistance from the AI again.