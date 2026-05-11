---
title: AI Generation
description: Introducción a las funciones de generación con IA dentro de la plataforma SenseCraft HMI.
last_update:
  date: 11/05/2026
  author:dimo
---

<a id="overview"></a>

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) es la plataforma de diseño de interfaces interactivas de Seeed Studio creada específicamente para dispositivos con pantalla. Una de sus funciones más potentes es **AI Generation**, que te permite crear imágenes y diseños de interfaz simplemente describiendo lo que quieres en lenguaje natural. En SenseCraft HMI, esta función está disponible en dos modos:

* **AI Image Generator**: crea una imagen personalizada independiente a partir de tu descripción.
* **AI Layout Generator**: diseña un diseño completo de interfaz integrado con componentes funcionales, como botones, campos de texto y visualizaciones de datos.

Puedes seguir los pasos que se muestran a continuación para empezar a probar las funciones de AI Generation en SenseCraft HMI.

---

<a id="ai-image-generator"></a>
## Usar IA para generar imágenes

**Paso 1. Activar la función**
Haz clic en el menú **AI Gen** de la barra de navegación y selecciona **AI Image Generator**.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/hmi/img/132.png" style={{width:400, height:'auto'}}/>
</div> 

**Paso 2. Introducir prompts**
En el cuadro de entrada, escribe una descripción detallada de la imagen que deseas crear. Por ejemplo:
* "Una vista montañosa impresionante a la primera luz del amanecer. El sol se asoma suavemente entre una manta ligera de niebla matinal, proyectando un cálido resplandor dorado sobre un tranquilo bosque de pinos antiguos. La escena transmite paz y esperanza, como si el mundo apenas estuviera despertando."

**Paso 3. Iniciar la generación**
Haz clic en el botón de enviar para iniciar el proceso de generación.

**Paso 4. Esperar el procesamiento**
Espera mientras la IA procesa tu solicitud. Normalmente tarda entre 10 y 30 segundos, según la complejidad de la descripción.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/hmi/img/133.png" style={{width:400, height:'auto'}}/>
</div> 

**Paso 5. Refinamiento iterativo**
Una vez generada la imagen, puedes refinarla mediante conversación con la IA. Por ejemplo:
* "Haz los colores más vibrantes."

**Paso 6. Actualizar resultados**
Haz clic otra vez en el botón de enviar para generar una nueva versión basada en tu última indicación.

**Paso 7. Itera hasta quedar satisfecho**
Sigue refinando el resultado hasta que coincida con lo que quieres.

**Paso 8. Ver detalles**
Haz clic en la miniatura generada para abrir una previsualización más grande a la derecha.

**Paso 9. Añadir al Workspace**
Haz clic en **Add to My Page** para guardar la imagen generada como una página de imagen dentro de tu workspace.  
Haz clic en **Insert to Canvas** para añadir la imagen generada directamente a tu lienzo como un componente **Image**.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/hmi/img/134.png" style={{width:400, height:'auto'}}/>
</div> 

---

<a id="ai-layout-generator"></a>
## Usar IA para crear diseños

**Paso 1. Activar la función**
Haz clic en el menú **AI Gen** y selecciona **AI Layout Generator**.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_ai_gen_4.png" style={{width:400, height:'auto'}}/>
</div> 

**Paso 2. Describir los requisitos del diseño**
Introduce una descripción de la interfaz que deseas crear. Sé específico con los componentes que necesitas. Por ejemplo:
* "Crea un panel meteorológico con una visualización de temperatura, indicador de humedad e iconos de pronóstico."

**Paso 3. Generar la interfaz**
Haz clic en el botón de enviar para iniciar el proceso y espera a que la IA construya el diseño completo de la interfaz.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_ai_gen_5.png" style={{width:400, height:'auto'}}/>
</div> 

**Paso 4. Ajuste fino del diseño**
Después de que se genere el diseño inicial, puedes ajustar posiciones o estilos mediante conversación. Por ejemplo:
* "Mueve la temperatura a la esquina superior derecha."

**Paso 5. Actualizar el diseño**
Haz clic otra vez en el botón de enviar, y la IA reorganizará o modificará los componentes según tu feedback.

**Paso 6. Previsualizar detalles**
Haz clic en la miniatura para revisar la disposición de los componentes en el panel de detalles de la derecha.

**Paso 7. Añadir al Workspace**
Haz clic en **Add to My Page** para guardar el diseño como una nueva página en tu workspace.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_ai_gen_6.png" style={{width:400, height:'auto'}}/>
</div> 

---

<a id="best-practices-for-ai-generation"></a>
## Buenas prácticas para la generación con IA

### 1. Consejos para escribir prompts efectivos
* **Sé específico**: en lugar de "Crea un panel", prueba con "Crea un panel con la temperatura en el centro, la humedad a la derecha y un reloj arriba".
* **Menciona colores y estilo**: por ejemplo, "Usa un esquema azul y blanco con esquinas redondeadas para todos los elementos".
* **Haz referencia a diseños conocidos**: por ejemplo, "Que se parezca a la interfaz de un termostato inteligente" o "Diseñado como la pantalla de un rastreador de actividad".

### 2. Refinamiento iterativo
Los diseños más exitosos suelen surgir tras varias rondas de feedback:
1. Empieza con una descripción general.
2. Genera el diseño inicial.
3. Da feedback específico sobre lo que quieras cambiar.
4. Genera una versión actualizada y repite hasta quedar satisfecho.

### 3. Combinar IA con edición manual
Para obtener mejores resultados, se recomienda:
1. **Base con IA**: usa la IA para crear rápidamente la estructura básica y los componentes principales.
2. **Ajuste manual**: afina manualmente la posición, el tamaño y las propiedades de cada elemento.
3. **Vinculación de datos**: añade manualmente funcionalidades personalizadas o conecta fuentes de datos.
4. **Cambios grandes**: si necesitas añadir secciones completamente nuevas, vuelve a apoyarte en la IA.
