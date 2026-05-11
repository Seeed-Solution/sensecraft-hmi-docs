---
description: Aprende a usar el espacio de trabajo de SenseCraft HMI, incluyendo dibujo básico, componentes avanzados, integración de datos y widgets personalizados.
title: Canvas Designer
last_update:
  data:11/05/2026
  author:dimo
---

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/weather.jpg" style={{width:800, height:'auto'}}/></div> -->

<a id="overview"></a>

En esta sección aprenderás a usar Canvas Designer para crear diseños. Primero te familiarizarás con el diseño de la interfaz, después crearás tu primer diseño paso a paso y, por último, conocerás las funciones de cada componente para empezar a diseñar con mayor fluidez.

<a id="workspace-layout"></a>
## Conoce Canvas Designer

La primera vez que entras en Canvas Designer, puede ayudarte pensar en él como cinco áreas principales: el Sidebar, Top Toolbar, Inspector Panel, las acciones del lienzo y los ajustes del lienzo. Si primero te familiarizas con la función de cada una, crear diseños después te resultará mucho más sencillo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/140.png" style={{width:800, height:'auto'}}/></div>

1. Sidebar: En el lado izquierdo encontrarás las cuatro secciones principales: **Data Widgets**, **Basic Widgets**, **Component Widgets** y **My Widgets**. Esta será la zona que más usarás al construir un diseño.
- En **Data Widgets**, puedes encontrar widgets ya conectados a datos para mostrar rápidamente información como el tiempo, calendarios o datos de sensores.
- En **Basic Widgets**, puedes usar elementos de diseño esenciales como texto, imágenes, fecha, formas simples, códigos de barras y códigos QR.
- En **Component Widgets**, puedes usar widgets más completos, como gráficos, paneles, calendarios y relojes, para diseños más avanzados.
- En **My Widgets**, puedes guardar y administrar tus widgets personalizados para reutilizarlos más fácilmente después.

2. Top Toolbar: En la parte superior del lienzo encontrarás herramientas de edición de uso frecuente, como copiar, rotar, eliminar, mover capas hacia delante o hacia atrás, agrupar y copiar formato. Te ayudan a organizar el contenido con mayor rapidez.
También puedes hacer clic derecho sobre el lienzo para acceder rápidamente a muchas de estas herramientas.

3. Inspector Panel: Cuando seleccionas un widget en el lienzo, en el lado derecho aparece su panel de propiedades. Aquí puedes ajustar texto, estilo, campos de datos y otros parámetros para adaptarlo mejor a tu diseño.

4. Acciones del lienzo: En la esquina superior derecha se encuentran los botones de acción principales. Desde allí puedes previsualizar el diseño, aplicar los cambios o publicarlo en la comunidad.

5. Ajustes del lienzo: En la parte inferior del lienzo puedes ajustar opciones relacionadas con la visualización, como los colores del tramado, el modo vertical u horizontal, el tamaño en píxeles del lienzo y el nivel de zoom. Así te resultará más fácil comprobar cómo se verá el diseño en tu dispositivo objetivo.

---

Ahora que ya estás familiarizado con Canvas Designer, vamos a crear tu primer diseño.

---
<a id="build-your-page"></a>
## Cómo crear tu diseño
Ahora que ya conoces la estructura de Canvas Designer, veamos paso a paso cómo crear un diseño de reloj sencillo.

En el siguiente ejemplo usaré el reTerminal E1002 para crear un diseño sencillo de clima y reloj. Puedes seguir el mismo proceso según el modelo de tu propio dispositivo.

### Paso 1: Crear un nuevo diseño

**1.** Antes de comenzar, crea un nuevo proyecto. Haz clic en **Canvas Designer** en el Sidebar para abrir la página de diseños, donde aparecerán tus diseños anteriores.

**2.** Haz clic en el botón **+ New** en la esquina superior izquierda para crear un nuevo lienzo. También puedes pasar el cursor sobre el elemento **Canvas Designer** del Sidebar para mostrar el botón de acceso rápido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/136.png" style={{width:800, height:'auto'}}/></div>

**3.** En la ventana emergente, selecciona **New Design** para iniciar un proyecto nuevo, o usa la opción **Import Image** para importar una imagen existente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/137.png" style={{width:800, height:'auto'}}/></div>

**4.** Después de seleccionar **New Design**, asigna un nombre a tu proyecto, selecciona el dispositivo objetivo desde la lista y haz clic en **Confirm**. Aparecerá un lienzo en blanco y podrás comenzar a diseñar tu interfaz personalizada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/138.png" style={{width:800, height:'auto'}}/></div>

### Paso 2: Editar el diseño

**1.** Haz clic en la sección **Data Widgets** y abre el componente **Weather**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/118.png" style={{width:800, height:'auto'}}/></div>

**2.** Introduce el nombre de tu ciudad en el campo **Location** y elige un diseño rápido en la parte inferior.

**3.** Haz clic en **Load Data**. A la derecha aparecerá una vista previa. Luego haz clic en **Confirm** en la esquina inferior derecha para colocarla en el lienzo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/119.png" style={{width:800, height:'auto'}}/></div>

**4.** Haz clic en la sección **Basic Widgets** y selecciona el componente **Date/Time**. Aparecerá automáticamente un cuadro de fecha en el lienzo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/120.png" style={{width:800, height:'auto'}}/></div>

**5.** Haz clic en la sección **Component Widgets** y selecciona el componente **Clock**. Aparecerá automáticamente un reloj redondo en el lienzo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/121.png" style={{width:800, height:'auto'}}/></div>

**6.** Ajusta la distribución de cada componente para que el diseño se vea más limpio y equilibrado. Puedes hacer clic en **Preview** en la esquina superior derecha para comprobar el resultado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/122.png" style={{width:800, height:'auto'}}/></div>

**7.** Haz clic en **Apply** en la esquina superior derecha para guardar el diseño en tu proyecto.

**8.** Si estás satisfecho con tu diseño y quieres compartirlo con más personas, haz clic en **Publish** en la esquina superior derecha para publicarlo en la comunidad.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/123.png" style={{width:800, height:'auto'}}/></div>

---

Ahora que ya has creado y aplicado tu propio diseño, las siguientes secciones te mostrarán cómo funciona cada una de las principales categorías de widgets. Las veremos en este orden: **Basic**, **Component**, **My Widgets** y **Data Widgets**. Empezaremos por **Basic Widgets**, ya que es la sección más fundamental.

---

<a id="data"></a>
## Data Widgets

La sección **Data Widgets** te permite conectar datos externos y mostrarlos en tu diseño. Ya sea con conectores de datos integrados o con fuentes de datos personalizadas, puedes crear paneles visuales dinámicos.

--- 

### Device Sensors Widget
La función **Device Sensors** te permite leer datos de sensores del dispositivo y mostrarlos directamente en tu pantalla.

**Paso 1.** Dentro del lienzo **New Design**, haz clic en la pestaña **Data Widgets** de la izquierda y localiza el componente **Device Sensors**.

**Paso 2.** Selecciona el dispositivo que deseas monitorizar y haz clic en **Load Sensor Data**. A la derecha aparecerán los **Available Fields**.

**Paso 3.** Haz clic en el dato del sensor o en el contenido de texto que quieras mostrar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_9.png" style={{width:800, height:'auto'}}/></div>

**Paso 4.** En la estructura en árbol, marca los campos de datos que quieras mostrar. El contenido seleccionado aparecerá automáticamente en el lienzo de la derecha.

**Paso 5.** Haz clic en el botón **Apply** en la esquina superior derecha del lienzo para enviar los datos al dispositivo.
---

### SenseCAP Widget
La función **SenseCAP** te permite conectar tu cuenta de SenseCAP y leer datos en tiempo real de los sensores vinculados.

**Paso 1.** Dentro del lienzo **New Design**, haz clic en la pestaña **Data Widgets** de la izquierda y localiza el componente **SenseCAP**.

**Paso 2.** Introduce tu **Access ID** de SenseCAP en el campo correspondiente.

**Paso 3.** Introduce tu **Access Key** de SenseCAP en el campo correspondiente.

**Paso 4.** En la lista **Devices**, selecciona el dispositivo que deseas monitorizar. A la derecha aparecerán los datos del sensor correspondientes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_sensecap.png" style={{width:800, height:'auto'}}/></div>

**Paso 5.** Haz clic en el botón **Apply** en la esquina superior derecha del lienzo para enviar los datos al dispositivo.

--- 

### Weather Widget
La función **Weather** te permite crear vistas meteorológicas en tiempo real para una ciudad seleccionada. Puedes generar rápidamente un diseño predefinido o ajustar con más detalle los datos y las unidades mostradas.

**Paso 1.** Dentro del lienzo **New Design**, haz clic en la pestaña **Data Widgets** de la izquierda y localiza el componente **Weather**.

**Paso 2.** Introduce en el primer campo el nombre de la ciudad que quieres consultar.

**Paso 3.** Usa **Quick presets** para seleccionar una combinación predeterminada de diseño y campos. En la sección **Units**, elige las unidades de medida que deseas mostrar. Si lo necesitas, cambia a **Advanced** para una personalización más detallada.

**Paso 4.** Haz clic en **Load Data** para generar una vista previa a la derecha. Cuando el resultado sea correcto, haz clic en **Confirm** para colocar el diseño meteorológico en el lienzo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_weather.png" style={{width:800, height:'auto'}}/></div>

**Paso 5.** Haz clic en el botón **Apply** en la esquina superior derecha del lienzo para enviar los datos al dispositivo.

#### Community Templates
After simple layout and style adjustments, your result can look like this community template:

<div style={{textAlign:'center'}}>
  <a href="https://sensecraft.seeed.cc/hmi/template/202" target="_blank" rel="noopener noreferrer"><img width={300} src="https://files.seeedstudio.com/wiki/hmi/img/144.png" /></a>
</div>
<div class="community-template-actions" style={{textAlign:'center'}}>
  <a class="community-template-button" href="https://sensecraft.seeed.cc/hmi/template/202" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>View Template</font></span></strong>
  </a>
</div>
--- 

### Stock Widget
La función **Stock** te permite mostrar información bursátil en tiempo real en tu diseño. Puedes buscar una acción por símbolo y elegir si mostrar el precio actual o un gráfico K-line.

**Paso 1.** Dentro del lienzo **New Design**, haz clic en la pestaña **Data Widgets** de la izquierda y localiza el componente **Stock**.

**Paso 2.** Introduce tu clave de API de Stock en el primer campo. Si aún no tienes una, usa el enlace de la interfaz para consultar cómo obtenerla.

**Paso 3.** En el campo **Stock Symbol**, introduce el símbolo bursátil que quieres seguir. Luego selecciona el tipo de visualización en la sección **Display**, como **Current Price** o **K-line Chart**.

**Paso 4.** Haz clic en **Search** para generar una vista previa a la derecha. Después de revisarla, haz clic en **Confirm** para añadir el diseño bursátil al lienzo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_stock.png" style={{width:800, height:'auto'}}/></div>

**Paso 5.** Haz clic en el botón **Apply** en la esquina superior derecha del lienzo para enviar los datos al dispositivo.

#### Community Templates
After simple layout and style adjustments, your result can look like this community template:

<div style={{textAlign:'center'}}>
  <a href="https://sensecraft.seeed.cc/hmi/template/9" target="_blank" rel="noopener noreferrer"><img width={300} src="https://files.seeedstudio.com/wiki/hmi/img/145.png" /></a>
</div>
<div class="community-template-actions" style={{textAlign:'center'}}>
  <a class="community-template-button" href="https://sensecraft.seeed.cc/hmi/template/9" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>View Template</font></span></strong>
  </a>
</div>
--- 

### CoinMarketCap Widget
La función **CoinMarketCap** te permite mostrar datos de mercado de criptomonedas en tu diseño. Introduciendo un símbolo, puedes generar rápidamente un widget con datos en vivo del activo que quieres seguir.

**Paso 1.** Dentro del lienzo **New Design**, haz clic en la pestaña **Data Widgets** de la izquierda y localiza el componente **CoinMarketCap**.

**Paso 2.** Introduce tu clave de API de CoinMarketCap en el primer campo. Si aún no tienes una, usa el enlace disponible en la interfaz para consultar cómo obtenerla.

**Paso 3.** En el campo **Cryptocurrency Symbol**, introduce el símbolo de la criptomoneda que deseas monitorizar.

**Paso 4.** Haz clic en **Search** para generar una vista previa a la derecha. Después de revisarla, haz clic en **Confirm** para colocar el diseño de criptomonedas en el lienzo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_coinmarketmap.png" style={{width:800, height:'auto'}}/></div>

**Paso 5.** Haz clic en el botón **Apply** en la esquina superior derecha del lienzo para enviar los datos al dispositivo.

#### Community Templates
After simple layout and style adjustments, your result can look like this community template:

<div style={{textAlign:'center'}}>
  <a href="https://sensecraft.seeed.cc/hmi/template/90" target="_blank" rel="noopener noreferrer"><img width={300} src="https://files.seeedstudio.com/wiki/hmi/img/143.png" /></a>
</div>
<div class="community-template-actions" style={{textAlign:'center'}}>
  <a class="community-template-button" href="https://sensecraft.seeed.cc/hmi/template/90" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>View Template</font></span></strong>
  </a>
</div>
--- 

### GitHub Widget
La función **GitHub** te permite mostrar información de usuario o de repositorio directamente en tu diseño, como estadísticas de perfil, metadatos del repositorio y campos relacionados con la actividad.

**Paso 1.** Dentro del lienzo **New Design**, haz clic en la pestaña **Data Widgets** de la izquierda y localiza el componente **GitHub**.

**Paso 2.** Introduce tu clave de API de GitHub en el primer campo. Si aún no tienes una, usa el enlace de la interfaz para consultar cómo obtenerla.

**Paso 3.** En el campo **GitHub User**, introduce el nombre de usuario de GitHub que quieres monitorizar.

**Paso 4.** Selecciona **User Info** para mostrar datos relacionados con el perfil. Tras introducir el nombre de usuario, aparecerán a la derecha los campos disponibles para selección rápida.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_github1.png" style={{width:800, height:'auto'}}/></div>

**Paso 5.** También puedes seleccionar **Repository Info**. Introduce el nombre del repositorio, haz clic en **Search** y luego elige uno de los resultados. A la derecha aparecerán los campos disponibles del repositorio.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_github2.png" style={{width:800, height:'auto'}}/></div>

**Paso 6.** Haz clic en el botón **Apply** en la esquina superior derecha del lienzo para enviar los datos al dispositivo.
---

### YouTube Widget
La función **YouTube** te permite mostrar datos a nivel de canal, como nombre del canal, métricas de suscriptores y otros campos públicos compatibles.

**Paso 1.** Dentro del lienzo **New Design**, haz clic en la pestaña **Data Widgets** de la izquierda y localiza el componente **YouTube**.

**Paso 2.** Introduce tu clave de API de YouTube en el primer campo. Si aún no tienes una, usa el enlace de la interfaz para consultar cómo obtenerla.

**Paso 3.** Introduce un **Channel ID** o un **Handle** en el campo inferior.

**Paso 4.** Haz clic en **Search** para cargar los datos del canal. Después de revisar la vista previa de la derecha, haz clic en **Confirm** para colocar la información del canal en el lienzo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_youtube.png" style={{width:800, height:'auto'}}/></div>

**Paso 5.** Haz clic en el botón **Apply** en la esquina superior derecha del lienzo para enviar los datos al dispositivo.

--- 

### ZenQuotes Widget
La función **ZenQuotes** te permite añadir citas inspiradoras a tu diseño, con filtros opcionales por tipo, autor o palabra clave.

**Paso 1.** Dentro del lienzo **New Design**, haz clic en la pestaña **Data Widgets** de la izquierda y localiza el componente **ZenQuotes**.

**Paso 2.** Si dispones de una API Key, introdúcela en el primer campo. Esta función también puede usarse en modo básico aunque no tengas una clave.

**Paso 3.** Si has introducido una API Key, puedes refinar aún más los resultados con **Quote Type**, **Filter by Author** y **Keyword**.

**Paso 4.** Haz clic en **Load Quotes** para generar una vista previa a la derecha. Después de revisarla, haz clic en **Confirm** para colocar el diseño de citas en el lienzo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_zenquotes.png" style={{width:800, height:'auto'}}/></div>

**Paso 5.** Haz clic en el botón **Apply** en la esquina superior derecha del lienzo para enviar los datos al dispositivo.

--- 

### Todoist Widget
La función **Todoist** te permite mostrar datos de tareas de tu cuenta de Todoist, lo que facilita la creación de paneles de productividad en pantallas ePaper.

**Paso 1.** Dentro del lienzo **New Design**, haz clic en la pestaña **Data Widgets** de la izquierda y localiza el componente **Todoist**.

**Paso 2.** Introduce tu clave de API de Todoist en el primer campo. Si aún no tienes una, usa el enlace de la interfaz para consultar cómo obtenerla.

**Paso 3.** Opcionalmente, configura los filtros de tareas disponibles según tu caso de uso, por ejemplo tipo de tarea o campos de consulta.

**Paso 4.** Haz clic en **Load All Tasks** para generar una vista previa de tareas a la derecha. Después de revisarla, haz clic en **Confirm** para colocar el diseño de tareas en el lienzo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_todolist.png" style={{width:800, height:'auto'}}/></div>

**Paso 5.** Haz clic en el botón **Apply** en la esquina superior derecha del lienzo para enviar los datos al dispositivo.

--- 

### Google Calendar Widget
La función **Google Calendar** te permite mostrar eventos de tu cuenta de Google, incluyendo filtros por tipo de evento y rango temporal.

**Paso 1.** Dentro del lienzo **New Design**, haz clic en la pestaña **Data Widgets** de la izquierda y localiza el componente **Google Calendar**.

**Paso 2.** Si iniciaste sesión con Google, es posible que tu calendario ya esté vinculado. También puedes hacer clic en **Re-authorize with Google** para volver a autorizarlo, o en **Revoke Authorization** para retirar el acceso.

**Paso 3.** Configura filtros como **Event Type** y **Time Range** para acotar qué eventos se mostrarán.

:::tip
Si eliges **Today** o **Specific Day** en **Event Type**, pero tu Google Calendar no tiene eventos configurados para ese rango de tiempo, es posible que la vista previa de la derecha aparezca vacía después de hacer clic en **Load Data**.
Si eso ocurre, prueba primero con **Week** o **Weekdays**, ya que estas opciones suelen cargar y mostrar contenido con normalidad.
:::

**Paso 4.** Haz clic en **Load Data** para generar una vista previa a la derecha. Después de revisarla, haz clic en **Confirm** para colocar el diseño del calendario en el lienzo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_caelndar.png" style={{width:800, height:'auto'}}/></div>

**Paso 5.** Haz clic en el botón **Apply** en la esquina superior derecha del lienzo para enviar los datos al dispositivo.

--- 

### RSS Widget
El RSS Widget te permite mostrar actualizaciones desde feeds RSS, como sitios de noticias, blogs o páginas de anuncios.
Úsalo cuando quieras que tu pantalla se actualice automáticamente con los últimos titulares, sin actualizar contenido de forma manual.

**Paso 1.** Dentro del lienzo **New Design**, haz clic en la pestaña **Data Widgets** de la izquierda y localiza el componente **RSS Feed**.

**Paso 2.** Introduce en el cuadro de configuración la dirección API (URL) desde la que quieres obtener los datos. Por ejemplo:

:::note[URL de ejemplo]
[https://feeds.bbci.co.uk/news/world/rss.xml](https://feeds.bbci.co.uk/news/world/rss.xml)
:::

**Paso 3.** El sistema analizará automáticamente los datos devueltos y los expandirá debajo en una **Tree Structure**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_6.png" style={{width:800, height:'auto'}}/></div>

**Paso 4.** En la estructura en árbol, marca los campos de datos que quieras mostrar. El contenido seleccionado aparecerá automáticamente en el lienzo de la derecha.

**Paso 5.** Haz clic en el botón **Apply** en la esquina superior derecha del lienzo para enviar los datos al dispositivo.

---
### HTML Widget
El HTML Widget te permite renderizar una página web o contenido HTML subido directamente en tu pantalla.
Úsalo cuando quieras mostrar un panel completo, una página interna o un diseño personalizado que ya esté hecho en HTML.

**Paso 1.** Dentro del lienzo **New Design**, haz clic en la pestaña **Data Widgets** de la izquierda y localiza el componente **HTML**.

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

### HackerNews Widget
El HackerNews Widget te permite cargar listas de historias de Hacker News, como Top, New, Best, Ask, Show o Jobs.
Úsalo cuando quieras un panel ligero de noticias tecnológicas que se actualice con contenido en tendencia de la comunidad.

**Paso 1.** Dentro del lienzo **New Design**, haz clic en la pestaña **Data Widgets** de la izquierda y localiza el componente **HackerNews**.

**Paso 2.** En el menú desplegable **Data Source**, selecciona una fuente de contenido como **Top Stories**, **Newest**, **Best**, **Ask HN**, **Show HN** o **Job**.

**Paso 3.** En **Number of Stories**, selecciona cuántos elementos deseas cargar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_HackerNews.png" style={{width:800, height:'auto'}}/></div>

**Paso 4.** Haz clic en el botón **Load Data** de la parte inferior para generar una vista previa a la derecha. Cuando confirmes que el resultado es correcto, haz clic en **Confirm** para añadir el contenido al lienzo.

**Paso 5.** Haz clic en el botón **Apply** en la esquina superior derecha del lienzo para enviar los datos al dispositivo.

#### Community Templates
After simple layout and style adjustments, your result can look like this community template:

<div style={{textAlign:'center'}}>
  <a href="https://sensecraft.seeed.cc/hmi/template/164" target="_blank" rel="noopener noreferrer"><img width={300} src="https://files.seeedstudio.com/wiki/hmi/img/141.png" /></a>
</div>
<div class="community-template-actions" style={{textAlign:'center'}}>
  <a class="community-template-button" href="https://sensecraft.seeed.cc/hmi/template/164" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>View Template</font></span></strong>
  </a>
</div>
---

### Reddit Widget
El Reddit Widget te permite mostrar publicaciones de un subreddit seleccionado con el método de ordenación que prefieras.
Úsalo cuando quieras ver actualizaciones por tema, como gadgets, IA o comunidades locales, en una pantalla con refresco automático.

**Paso 1.** Dentro del lienzo **New Design**, haz clic en la pestaña **Data Widgets** de la izquierda y localiza el componente **Reddit**.

**Paso 2.** En el campo **Subreddit**, introduce el nombre de la comunidad de destino sin el prefijo `r/`, por ejemplo **gadgets**.

**Paso 3.** En la sección **Sort**, elige un método de ordenación como **Hot**, **New**, **Top** o **Rising**.

**Paso 4.** En **Number of Stories**, selecciona cuántas publicaciones deseas cargar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_Reddit.png" style={{width:800, height:'auto'}}/></div>

**Paso 5.** Haz clic en el botón **Load Data** de la parte inferior para generar una vista previa a la derecha. Cuando confirmes que el resultado es correcto, haz clic en **Confirm** para añadir el contenido al lienzo.

**Paso 6.** Haz clic en el botón **Apply** en la esquina superior derecha del lienzo para enviar los datos al dispositivo.

#### Community Templates
After simple layout and style adjustments, your result can look like this community template:

<div style={{textAlign:'center'}}>
  <a href="https://sensecraft.seeed.cc/hmi/template/143" target="_blank" rel="noopener noreferrer"><img width={300} src="https://files.seeedstudio.com/wiki/hmi/img/142.png" /></a>
</div>
<div class="community-template-actions" style={{textAlign:'center'}}>
  <a class="community-template-button" href="https://sensecraft.seeed.cc/hmi/template/143" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>View Template</font></span></strong>
  </a>
</div>
---
### External Data Source 

El componente **External Data Source** te permite obtener datos externos mediante APIs y visualizarlos en tu panel.

**Paso 1.** Dentro del lienzo **New Design**, haz clic en la pestaña **Data Widgets** de la izquierda y localiza al final el componente **External Data Source**.

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

**Paso 2.** Selecciona el componente **Push to SenseCraft** desde la pestaña **Data Widgets**.

**Paso 3.** Usa el código de demostración para realizar una prueba y los datos aparecerán inmediatamente en el lienzo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/w8.jpg" style={{width:800, height:'auto'}}/></div>

**Paso 4.** Usa la función básica de texto para añadir etiquetas o descripciones a los datos.

**Paso 5.** Haz clic en el botón **Apply** en la esquina superior derecha del lienzo para enviar los datos al dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/w9.jpg" style={{width:800, height:'auto'}}/></div>

Esto resulta especialmente útil para monitorizar en tiempo real datos de sensores como temperatura, humedad o niveles de luz.

---

<a id="basic"></a>
## Basic Widgets

La sección **Basic Widgets** cubre necesidades fundamentales de diseño, incluyendo texto, imágenes, fechas, formas simples e incluso códigos de barras o códigos QR.

A continuación se muestra una tabla con los componentes de Basic organizados por categoría:

| Component | What It Does |
|---|---|
| Text | Adds plain text content to the page. |
| Image | Inserts an image into the page. |
| Date/Time | Displays the current date or time. |
| Day Counter | Shows the number of days before or after a target date. |
| Rectangle | Adds a rectangular shape for layout or decoration. |
| Circle | Adds a circular shape to the page. |
| Ellipse | Adds an ellipse shape for visual decoration. |
| Triangle | Adds a triangle shape to the page. |
| Polygon | Adds a polygon shape with multiple sides. |
| Line | Adds a straight line for separation or decoration. |
| Draw | Lets you draw custom freeform graphics manually. |
| QRCode | Generates a QR code from text or a link. |
| Barcode | Generates a barcode for encoded data. |
A continuación, sigue estos pasos para usar componentes de Basic y crear una página de reloj sencilla.

**Paso 1.** Haz clic en el componente **Date/Time** dentro de la pestaña Basic; aparecerá automáticamente en el lienzo.

**Paso 2.** Haz clic en el componente para ver sus propiedades en la barra lateral derecha, donde podrás ajustar el formato de fecha/hora, el tamaño de la fuente, el color y más.

**Paso 3.** Modifica el formato en la barra de propiedades, por ejemplo a `YYYY-MM-DD HH:mm:ss`.

**Paso 4.** Deselecciona el componente o haz clic en el lienzo para ver la fecha y hora actualizadas con el formato elegido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/124.png" style={{width:800, height:'auto'}}/></div>

**Paso 5.** Selecciona el componente **Text** e introduce el texto que deseas mostrar. En el panel de propiedades de la derecha puedes ajustar el tamaño de la fuente, el color del texto y otros parámetros.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/125.png" style={{width:800, height:'auto'}}/></div>

**Paso 6.** Selecciona el componente **Rectangle** para usarlo como forma de fondo. Puedes ajustar su tamaño y color desde el panel de propiedades de la derecha.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/126.png" style={{width:800, height:'auto'}}/></div>

**Paso 7.** Selecciona el componente **Image**. En el panel de propiedades de la derecha puedes introducir una URL de imagen o contenido en Base64. Si todavía no tienes una imagen para usar, también puedes explorar la **Icon Library** para encontrar un icono adecuado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/127.png" style={{width:800, height:'auto'}}/></div>

**Paso 8.** Ajusta la posición de cada componente para mejorar la composición general. También puedes usar los ajustes del lienzo en la parte inferior para seguir refinando el aspecto de la página.

**Paso 9.** Haz clic en **Preview** para comprobar cómo se verá la página en el lienzo. Cuando estés satisfecho con el resultado, haz clic en **Apply** para enviarla a tu dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/128.png" style={{width:800, height:'auto'}}/></div>

---

<a id="component"></a>
## Component Widgets

La sección **Component Widgets** incluye widgets más complejos como gráficos, paneles, calendarios y relojes; puede considerarse una versión avanzada de la pestaña Basic.

A continuación se muestra una tabla con los widgets de Component organizados por categoría:

| Component | What It Does |
|---|---|
| Calendar | Displays a calendar view for a selected date. |
| Clock | Displays an analog clock on the page. |
| List | Shows multiple items in a list layout. |
| Table | Displays structured data in rows and columns. |
| Line Chart | Displays trends over time or across connected data points. |
| Bar Chart | Visualizes values with bars for easy comparison. |
| Pie Chart | Shows proportions as slices of a circle. |
| Scatter Chart | Shows the distribution of data points across two axes. |
| K-Line Chart | Displays open, high, low, and close values over time. |
| Gauge Chart | Displays a value within a gauge-style range. |
A continuación, retomemos el ejemplo de la sección Basic y usemos widgets de Component para seguir mejorando la página de reloj.

**Paso 1.** Haz clic en el componente **Calendar** dentro de la pestaña Component para añadirlo al lienzo.

**Paso 2.** Haz clic en el componente para configurar sus propiedades, como la fecha mostrada y el esquema de colores.

**Paso 3.** Haz clic en el lienzo para ver el calendario actualizado con la configuración seleccionada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/129.png" style={{width:800, height:'auto'}}/></div>

**Paso 4.** Añade un componente **Clock** al lienzo. Después, usa el panel de propiedades de la derecha para ajustar opciones como el estilo, el tamaño y el color.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/130.png" style={{width:800, height:'auto'}}/></div>

**Paso 5.** Reubica los componentes para conseguir una disposición más limpia. También puedes usar los ajustes del lienzo en la parte inferior para seguir refinando el aspecto general.

**Paso 6.** Haz clic en **Preview** para comprobar cómo se verá la página. Cuando estés satisfecho con el resultado, haz clic en **Apply** para enviarla a tu dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/131.png" style={{width:800, height:'auto'}}/></div>

---

<a id="my-widgets"></a>
## My Widgets

La sección **My Widgets** está pensada para tus componentes personalizados. Si utilizas una fuente de datos con frecuencia, puedes hacer clic en el botón **Add to My Widgets** en la esquina inferior derecha. Esto guarda el componente en tu biblioteca personal de widgets, lo que te permitirá arrastrarlo y soltarlo directamente la próxima vez sin volver a configurar la API.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_worksp_advance_2.png" style={{width:800, height:'auto'}}/></div>















