---
title: Función de generación con IA
description: Introducción a las funciones de generación con IA dentro de la plataforma SenseCraft HMI.
---

## Introducción

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) es la plataforma de diseño de interfaces interactivas de Seeed Studio creada específicamente para dispositivos con pantalla. Una de sus funciones más potentes es **AI Generation**, que te permite crear hermosos diseños e imágenes simplemente describiendo lo que quieres en lenguaje natural.

---

## Inicio rápido

La función AI Generation de SenseCraft HMI está disponible tanto en la sección **Image** como en la sección **Layout**, y cada una está orientada a diferentes escenarios de uso:

* **AI Image Generator**: crea una imagen personalizada independiente a partir de tu descripción.
* **AI Layout Generator**: diseña un diseño completo de interfaz integrado con componentes funcionales, como botones, campos de texto y visualizaciones de datos.

---

## AI Image Generator

**Paso 1. Activar la función**
Haz clic en el menú **AI Gen** de la barra de navegación y selecciona **AI Image Generator**.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_ai_gen_1.png" style={{width:400, height:'auto'}}/>
</div> 

**Paso 2. Introducir prompts**
En el cuadro de entrada, escribe una descripción detallada de la imagen que deseas crear. Por ejemplo:
* "Un hermoso paisaje de montaña con amanecer y pinos."
* "Un panel minimalista que muestre iconos de temperatura y humedad."
* "Un patrón de placa de circuito con el logotipo de Seeed Studio en el centro."

**Paso 3. Iniciar la generación**
Haz clic en el botón de enviar para iniciar el proceso de generación.

**Paso 4. Esperar el procesamiento**
Espera mientras la IA procesa tu solicitud. Normalmente tarda entre 10 y 30 segundos, según la complejidad de la descripción.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_ai_gen_2.png" style={{width:400, height:'auto'}}/>
</div> 

**Paso 5. Refinamiento iterativo**
Una vez generada la imagen, puedes refinarla mediante conversación con la IA. Por ejemplo:
* "Haz los colores más vibrantes."
* "Añade algunos animales y más colores."
* "Cambia el fondo a azul."

**Paso 6. Actualizar resultados**
Haz clic otra vez en el botón de enviar para generar una nueva versión basada en tu última indicación.

**Paso 7. Optimización en bucle**
Repite este proceso hasta que el resultado te satisfaga.

**Paso 8. Ver detalles**
Haz clic en la miniatura generada para ver una previsualización más grande a la derecha y apreciar mejor los detalles.

**Paso 9. Añadir al Workspace**
Haz clic en el botón **"Add to My Page"**. La imagen se guardará como una nueva página en tu workspace.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_ai_gen_3.png" style={{width:400, height:'auto'}}/>
</div> 

---

## AI Layout Generator

**Paso 1. Activar la función**
Haz clic en el menú **AI Gen** y selecciona **AI Layout Generator**.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_ai_gen_4.png" style={{width:400, height:'auto'}}/>
</div> 

**Paso 2. Describir los requisitos del diseño**
Introduce una descripción de la interfaz que deseas crear. Sé específico con los componentes que necesitas. Por ejemplo:
* "Crea un panel meteorológico con una visualización de temperatura, indicador de humedad e iconos de pronóstico."
* "Diseña un panel de control para hogar inteligente con botones para luces, termostato y seguridad."
* "Crea una interfaz de seguimiento físico con contador de pasos, frecuencia cardiaca e historial de actividad."

**Paso 3. Generar la interfaz**
Haz clic en el botón de enviar para iniciar el proceso y espera a que la IA construya el diseño completo de la interfaz.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_ai_gen_5.png" style={{width:400, height:'auto'}}/>
</div> 

**Paso 4. Ajuste fino del diseño**
Después de que se genere el diseño inicial, puedes ajustar posiciones o estilos mediante conversación. Por ejemplo:
* "Mueve la temperatura a la esquina superior derecha."
* "Haz los botones más grandes y añade etiquetas debajo."
* "Cambia el esquema de colores a modo oscuro."
* "Añade un reloj en el centro superior."

**Paso 5. Actualizar el diseño**
Haz clic otra vez en el botón de enviar, y la IA reorganizará o modificará los componentes según tu feedback.

**Paso 6. Previsualizar detalles**
Haz clic en la miniatura y revisa la disposición de los componentes en el panel de detalles de la derecha.

**Paso 7. Añadir al Workspace**
Haz clic en el botón **"Add to My Page"**. El diseño se guardará como una nueva página en tu workspace.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_ai_gen_6.png" style={{width:400, height:'auto'}}/>
</div> 

---

## Límites de generación con IA

- **Límite diario**: cada cuenta dispone de 10 creaciones con IA por día, incluyendo 5 generaciones/ajustes de imágenes y 5 generaciones/ajustes de lienzo
- **Hora de reinicio**: los límites se reinician cada 24 horas

---

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
