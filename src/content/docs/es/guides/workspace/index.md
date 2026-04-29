---
description: Aprende a usar el espacio de trabajo de SenseCraft HMI, incluyendo dibujo básico, componentes avanzados, integración de datos y widgets personalizados.
title: Guía de Workspace
---

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/weather.jpg" style={{width:800, height:'auto'}}/></div> -->

El Workspace se divide en cuatro secciones principales: **Data**, **Basic**, **Component** y **My widgets**. Cada sección incluye una variedad de componentes integrados, lo que te permite diseñar y personalizar tu interfaz. Además de ofrecer integración lista para usar con fuentes de datos estándar como Google Calendar, YouTube y GitHub, la plataforma también admite conexiones de datos personalizadas mucho más amplias.

---

## Crear un nuevo diseño

**Paso 1.** Haz clic en **Workspace** en la barra lateral izquierda para entrar al lienzo del espacio de trabajo. Tus diseños anteriores aparecerán listados allí.

**Paso 2.** Haz clic en el botón **+ New** en la esquina superior izquierda para crear un nuevo lienzo. También puedes pasar el cursor sobre "Workspace" para mostrar el botón de acceso rápido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_1.png" style={{width:800, height:'auto'}}/></div>

**Paso 3.** En la ventana emergente, selecciona **New Design** para iniciar un proyecto nuevo, o usa la opción **Import Image** para importar una imagen existente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_2.png" style={{width:800, height:'auto'}}/></div>

**Paso 4.** Después de seleccionar **New Design**, asigna un nombre a tu proyecto, selecciona el dispositivo objetivo desde la lista y haz clic en **Confirm**. Aparecerá un lienzo en blanco y podrás comenzar a diseñar tu interfaz personalizada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_3.png" style={{width:800, height:'auto'}}/></div>

---

## Data

Esta es una de las funciones más destacadas de SenseCraft, ya que te permite conectar datos externos con facilidad. Ya sea con conectores de datos integrados o con fuentes de datos personalizadas, puedes crear potentes paneles visuales.

--- 

### Device Sensors Function

La función **Device Sensors** te permite leer datos de sensores del dispositivo y mostrarlos directamente en tu pantalla.

**Paso 1.** Dentro del lienzo **New Design**, haz clic en la pestaña **Data** de la izquierda y localiza el componente **Device Sensors**.

**Paso 2.** Selecciona el dispositivo que deseas monitorizar y haz clic en **Load Sensor Data**. A la derecha aparecerán los **Available Fields**.

**Paso 3.** Haz clic en el dato del sensor o en el contenido de texto que quieras mostrar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_9.png" style={{width:800, height:'auto'}}/></div>

**Paso 4.** En la estructura en árbol, marca los campos de datos que quieras mostrar. El contenido seleccionado aparecerá automáticamente en el lienzo de la derecha.

**Paso 5.** Haz clic en el botón **Apply** en la esquina superior derecha del lienzo para enviar los datos al dispositivo.

--- 

### Weather Function

La función **Weather** te permite crear vistas meteorológicas en tiempo real para una ciudad seleccionada. Puedes generar rápidamente un diseño predefinido o ajustar con más detalle los datos y las unidades mostradas.

**Paso 1.** Dentro del lienzo **New Design**, haz clic en la pestaña **Data** de la izquierda y localiza el componente **Weather**.

**Paso 2.** Introduce en el primer campo el nombre de la ciudad que quieres consultar.

**Paso 3.** Usa **Quick presets** para seleccionar una combinación predeterminada de diseño y campos. En la sección **Units**, elige las unidades de medida que deseas mostrar. Si lo necesitas, cambia a **Advanced** para una personalización más detallada.

**Paso 4.** Haz clic en **Load Data** para generar una vista previa a la derecha. Cuando el resultado sea correcto, haz clic en **Confirm** para colocar el diseño meteorológico en el lienzo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_weather.png" style={{width:800, height:'auto'}}/></div>

**Paso 5.** Haz clic en el botón **Apply** en la esquina superior derecha del lienzo para enviar los datos al dispositivo.

--- 

### Stock Function

La función **Stock** te permite mostrar información bursátil en tiempo real en tu página. Puedes buscar una acción por símbolo y elegir si mostrar el precio actual o un gráfico K-line.

**Paso 1.** Dentro del lienzo **New Design**, haz clic en la pestaña **Data** de la izquierda y localiza el componente **Stock**.

**Paso 2.** Introduce tu clave de API de Stock en el primer campo. Si aún no tienes una, usa el enlace de la interfaz para consultar cómo obtenerla.

**Paso 3.** En el campo **Stock Symbol**, introduce el símbolo bursátil que quieres seguir. Luego selecciona el tipo de visualización en la sección **Display**, como **Current Price** o **K-line Chart**.

**Paso 4.** Haz clic en **Search** para generar una vista previa a la derecha. Después de revisarla, haz clic en **Confirm** para añadir el diseño bursátil al lienzo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_stock.png" style={{width:800, height:'auto'}}/></div>

**Paso 5.** Haz clic en el botón **Apply** en la esquina superior derecha del lienzo para enviar los datos al dispositivo.

--- 

### CoinMarketCap Function

La función **CoinMarketCap** te permite mostrar datos de mercado de criptomonedas en tu diseño. Introduciendo un símbolo, puedes generar rápidamente un widget con datos en vivo del activo que quieres seguir.

**Paso 1.** Dentro del lienzo **New Design**, haz clic en la pestaña **Data** de la izquierda y localiza el componente **CoinMarketCap**.

**Paso 2.** Introduce tu clave de API de CoinMarketCap en el primer campo. Si aún no tienes una, usa el enlace disponible en la interfaz para consultar cómo obtenerla.

**Paso 3.** En el campo **Cryptocurrency Symbol**, introduce el símbolo de la criptomoneda que deseas monitorizar.

**Paso 4.** Haz clic en **Search** para generar una vista previa a la derecha. Después de revisarla, haz clic en **Confirm** para colocar el diseño de criptomonedas en el lienzo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_coinmarketmap.png" style={{width:800, height:'auto'}}/></div>

**Paso 5.** Haz clic en el botón **Apply** en la esquina superior derecha del lienzo para enviar los datos al dispositivo.

--- 

### GitHub Function

La función **GitHub** te permite mostrar información de usuario o de repositorio directamente en tu diseño, como estadísticas de perfil, metadatos del repositorio y campos relacionados con la actividad.

**Paso 1.** Dentro del lienzo **New Design**, haz clic en la pestaña **Data** de la izquierda y localiza el componente **GitHub**.

**Paso 2.** Introduce tu clave de API de GitHub en el primer campo. Si aún no tienes una, usa el enlace de la interfaz para consultar cómo obtenerla.

**Paso 3.** En el campo **GitHub User**, introduce el nombre de usuario de GitHub que quieres monitorizar.

**Paso 4.** Selecciona **User Info** para mostrar datos relacionados con el perfil. Tras introducir el nombre de usuario, aparecerán a la derecha los campos disponibles para selección rápida.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_github1.png" style={{width:800, height:'auto'}}/></div>

**Paso 5.** También puedes seleccionar **Repository Info**. Introduce el nombre del repositorio, haz clic en **Search** y luego elige uno de los resultados. A la derecha aparecerán los campos disponibles del repositorio.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_github2.png" style={{width:800, height:'auto'}}/></div>

**Paso 6.** Haz clic en el botón **Apply** en la esquina superior derecha del lienzo para enviar los datos al dispositivo.

--- 

### YouTube Function

La función **YouTube** te permite mostrar datos a nivel de canal, como nombre del canal, métricas de suscriptores y otros campos públicos compatibles.

**Paso 1.** Dentro del lienzo **New Design**, haz clic en la pestaña **Data** de la izquierda y localiza el componente **YouTube**.

**Paso 2.** Introduce tu clave de API de YouTube en el primer campo. Si aún no tienes una, usa el enlace de la interfaz para consultar cómo obtenerla.

**Paso 3.** Introduce un **Channel ID** o un **Handle** en el campo inferior.

**Paso 4.** Haz clic en **Search** para cargar los datos del canal. Después de revisar la vista previa de la derecha, haz clic en **Confirm** para colocar la información del canal en el lienzo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_youtube.png" style={{width:800, height:'auto'}}/></div>

**Paso 5.** Haz clic en el botón **Apply** en la esquina superior derecha del lienzo para enviar los datos al dispositivo.

--- 

### ZenQuotes Function

La función **ZenQuotes** te permite añadir citas inspiradoras a tu diseño, con filtros opcionales por tipo, autor o palabra clave.

**Paso 1.** Dentro del lienzo **New Design**, haz clic en la pestaña **Data** de la izquierda y localiza el componente **ZenQuotes**.

**Paso 2.** Si dispones de una API Key, introdúcela en el primer campo. Esta función también puede usarse en modo básico aunque no tengas una clave.

**Paso 3.** Si has introducido una API Key, puedes refinar aún más los resultados con **Quote Type**, **Filter by Author** y **Keyword**.

**Paso 4.** Haz clic en **Load Quotes** para generar una vista previa a la derecha. Después de revisarla, haz clic en **Confirm** para colocar el diseño de citas en el lienzo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_zenquotes.png" style={{width:800, height:'auto'}}/></div>

**Paso 5.** Haz clic en el botón **Apply** en la esquina superior derecha del lienzo para enviar los datos al dispositivo.

--- 

### Todoist Function

La función **Todoist** te permite mostrar datos de tareas de tu cuenta de Todoist, lo que facilita la creación de paneles de productividad en pantallas ePaper.

**Paso 1.** Dentro del lienzo **New Design**, haz clic en la pestaña **Data** de la izquierda y localiza el componente **Todoist**.

**Paso 2.** Introduce tu clave de API de Todoist en el primer campo. Si aún no tienes una, usa el enlace de la interfaz para consultar cómo obtenerla.

**Paso 3.** Opcionalmente, configura los filtros de tareas disponibles según tu caso de uso, por ejemplo tipo de tarea o campos de consulta.

**Paso 4.** Haz clic en **Load All Tasks** para generar una vista previa de tareas a la derecha. Después de revisarla, haz clic en **Confirm** para colocar el diseño de tareas en el lienzo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_todolist.png" style={{width:800, height:'auto'}}/></div>

**Paso 5.** Haz clic en el botón **Apply** en la esquina superior derecha del lienzo para enviar los datos al dispositivo.

--- 

### Google Calendar Function

La función **Google Calendar** te permite mostrar eventos de tu cuenta de Google, incluyendo filtros por tipo de evento y rango temporal.

**Paso 1.** Dentro del lienzo **New Design**, haz clic en la pestaña **Data** de la izquierda y localiza el componente **Google Calendar**.

**Paso 2.** Si iniciaste sesión con Google, es posible que tu calendario ya esté vinculado. También puedes hacer clic en **Re-authorize with Google** para volver a autorizarlo, o en **Revoke Authorization** para retirar el acceso.

**Paso 3.** Configura filtros como **Event Type** y **Time Range** para acotar qué eventos se mostrarán.

**Paso 4.** Haz clic en **Load Data** para generar una vista previa a la derecha. Después de revisarla, haz clic en **Confirm** para colocar el diseño del calendario en el lienzo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_caelndar.png" style={{width:800, height:'auto'}}/></div>

**Paso 5.** Haz clic en el botón **Apply** en la esquina superior derecha del lienzo para enviar los datos al dispositivo.

--- 

### HTML Function

La función **HTML** te permite mostrar contenido web directamente en dispositivos con pantallas ePaper. Esta potente función convierte tu dispositivo en una pantalla web dedicada, capaz de mostrar paneles, sistemas de monitorización, documentación o cualquier contenido web que necesites.

**Paso 1.** Dentro del lienzo **New Design**, haz clic en la pestaña **Data** de la izquierda y localiza el componente **HTML**.

**Paso 2.** Introduce en el cuadro de configuración del componente la dirección API (URL) desde la que deseas obtener contenido. Por ejemplo:

:::note[URL de ejemplo]
[https://www.windy.com/](https://www.windy.com/)
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_7.png" style={{width:800, height:'auto'}}/></div>

También puedes hacer clic en **File Upload** para subir tu propio archivo HTML.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_8.png" style={{width:800, height:'auto'}}/></div>

**Paso 3.** El sistema analizará automáticamente los datos devueltos por la API y los expandirá debajo en una **Tree Structure**.

**Paso 4.** En la estructura en árbol, marca los campos de datos que quieras mostrar. El contenido seleccionado aparecerá automáticamente en el lienzo de la derecha.

**Paso 5.** Haz clic en el botón **Apply** en la esquina superior derecha del lienzo para enviar los datos al dispositivo.

---
### RSS Function

La función RSS permite convertir tu dispositivo en una pantalla de información en tiempo real. Al conectarlo a feeds RSS de medios de noticias, blogs, servicios meteorológicos y más, puedes crear pantallas dinámicas que se actualicen automáticamente con el contenido más reciente.

**Paso 1.** Dentro del lienzo **New Design**, haz clic en la pestaña **Data** de la izquierda y localiza el componente **RSS Feed**.

**Paso 2.** Introduce en el cuadro de configuración la dirección API (URL) desde la que quieres obtener los datos. Por ejemplo:

:::note[URL de ejemplo]
[https://feeds.bbci.co.uk/news/world/rss.xml](https://feeds.bbci.co.uk/news/world/rss.xml)
:::

**Paso 3.** El sistema analizará automáticamente los datos devueltos y los expandirá debajo en una **Tree Structure**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_6.png" style={{width:800, height:'auto'}}/></div>

**Paso 4.** En la estructura en árbol, marca los campos de datos que quieras mostrar. El contenido seleccionado aparecerá automáticamente en el lienzo de la derecha.

**Paso 5.** Haz clic en el botón **Apply** en la esquina superior derecha del lienzo para enviar los datos al dispositivo.

---
### External Data Source 

El componente **External Data Source** te permite obtener datos externos mediante APIs y visualizarlos en tu panel.

**Paso 1.** Dentro del lienzo **New Design**, haz clic en la pestaña **Data** de la izquierda y localiza al final el componente **External Data Source**.

**Paso 2.** Introduce en el cuadro de configuración la dirección API (URL) desde la que deseas obtener los datos.

**Paso 3.** El sistema analizará automáticamente los datos devueltos y los expandirá debajo en una **Tree Structure**.

**Paso 4.** En la estructura en árbol, marca los campos de datos que quieras mostrar. El contenido seleccionado aparecerá automáticamente en el lienzo de la derecha.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/w4.jpg" style={{width:800, height:'auto'}}/></div>

**Paso 5.** Haz clic en el botón **Apply** en la esquina superior derecha del lienzo para enviar los datos al dispositivo.

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

Además de extraer datos externos, también ofrecemos el componente **Push to SenseCraft**. Este componente te permite enviar activamente datos desde tu programa de hardware, como código Arduino o ESP32, hacia la plataforma.

**Paso 1.** Asegúrate de que tu dispositivo esté conectado a la plataforma SenseCraft y enviando datos activamente.

**Paso 2.** Selecciona el componente **Push to SenseCraft** desde la pestaña **Data**.

**Paso 3.** Usa el código de demostración para realizar una prueba y los datos aparecerán inmediatamente en el lienzo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/w8.jpg" style={{width:800, height:'auto'}}/></div>

**Paso 4.** Usa la función básica de texto para añadir etiquetas o descripciones a los datos.

**Paso 5.** Haz clic en el botón **Apply** en la esquina superior derecha del lienzo para enviar los datos al dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/w9.jpg" style={{width:800, height:'auto'}}/></div>

Esto resulta especialmente útil para monitorizar en tiempo real datos de sensores como temperatura, humedad o niveles de luz.

---

## Basic

La sección **Basic** cubre necesidades fundamentales de diseño, incluyendo texto, imágenes, fechas, formas simples e incluso códigos de barras o códigos QR.

Tomemos como ejemplo el componente **Date/Time**:

**Paso 1.** Haz clic en el componente **Date/Time** dentro de la pestaña Basic; aparecerá automáticamente en el lienzo.

**Paso 2.** Haz clic en el componente para ver sus propiedades en la barra lateral derecha, donde podrás ajustar el formato de fecha/hora, el tamaño de la fuente, el color y más.

**Paso 3.** Modifica el formato en la barra de propiedades, por ejemplo a `YYYY-MM-DD HH:mm:ss`.

**Paso 4.** Deselecciona el componente o haz clic en el lienzo para ver la fecha y hora actualizadas con el formato elegido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_4.png" style={{width:800, height:'auto'}}/></div>

---

## Component

La sección **Component** incluye widgets más complejos como gráficos, paneles, calendarios y relojes; puede considerarse una versión avanzada de la pestaña Basic.

Tomemos como ejemplo el componente **Calendar**:

**Paso 1.** Haz clic en el componente **Calendar** dentro de la pestaña Component para añadirlo al lienzo.

**Paso 2.** Haz clic en el componente para configurar sus propiedades, como la fecha específica mostrada y su esquema de colores.

**Paso 3.** Cambia la fecha en la barra de propiedades, por ejemplo a `2026-04-20`.

**Paso 4.** Haz clic en el lienzo para ver el calendario actualizado con la fecha configurada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_5.png" style={{width:800, height:'auto'}}/></div>

---

## My widgets

La sección **My widgets** está pensada para tus componentes personalizados. Si utilizas una fuente de datos con frecuencia, puedes hacer clic en el botón **Add to My Widgets** en la esquina inferior derecha. Esto guarda el componente en tu biblioteca personal de widgets, lo que te permitirá arrastrarlo y soltarlo directamente la próxima vez sin volver a configurar la API.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_worksp_advance_2.png" style={{width:800, height:'auto'}}/></div>
