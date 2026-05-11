---
title: Notas de versión
description: Historial de iteraciones y versiones de la plataforma SenseCraft HMI
last_update:
  date: 11/05/2026
  author:dimo
---

<a id="latest-update"></a>

## Notas de la versión SenseCraft HMI v1.4.0
Fecha de lanzamiento: 2026.04.10

> Esta versión se dividió en dos semanas (la semana pasada + hoy). Perdón por no haber avisado antes la vez pasada. A partir de ahora abriremos nuestra hoja de ruta de desarrollo y recopilaremos comentarios en un documento público.

### Actualizaciones del diseñador

#### Weather Widget
- Nuevos parámetros: fecha, temperatura media diaria, código meteorológico en texto y muchos más
- Configuración de unidades: ahora puedes elegir qué unidades mostrar para temperatura / velocidad del viento / suma de lluvia
- Rediseño de la interfaz de configuración: los parámetros seleccionados ahora aparecen como elementos agrupados, con vistas previas de gráfico para los parámetros numéricos. Aun así, puedes seguir usando el modo original **Available Field** para seleccionarlos
- Se añadieron 4 widgets predefinidos: Current Weather, Compact Weather Card, 7-Day Forecast y 5-Day Forecast with Date

#### Calendar Widget
- Se añadió la opción **Week starts on**, para elegir si la semana comienza en domingo o lunes

#### Timezone Optimization
- La gestión de zona horaria en los widgets Date/Time/Clock/Calendar/Day Counter cambió de UTC a un sistema basado en IANA (incluye horario de verano de forma nativa)

#### Other Improvements
- Draw Widget se movió de la barra superior a Basic Widgets y ahora admite configuraciones de trazo y patrón
- Se mejoró la lógica de múltiples componentes dentro de Groups
- El Inspector Panel se simplificó considerablemente: solo se mantienen los ajustes esenciales, con una interfaz más limpia y menos abrumadora

### Núcleo de SenseCraft HMI
- Los menús secundarios de la barra lateral ahora se expanden al pasar el cursor, dejando más espacio para el diseñador de lienzo
- La barra lateral ahora incluye el logotipo de SenseCraft HMI en la parte superior
- La página de inicio incorpora una sección de banner para noticias y actualizaciones importantes

### [Workspace](https://sensecraft.seeed.cc/hmi/workspace/page)
- Workspace ahora muestra Add New, My Page y My Playlist en una sola página, con puntos de entrada más claros
- My Page agrupa todos los Designs y las Images subidas. El icono de edición en la esquina superior derecha permite acciones por lotes (Apply to Device, Delete)
- Al hacer clic en **+New**, puedes elegir entre crear un Design desde cero o subir fotos para crear un Album
- Al elegir **+Design from scratch**, se te guía para asignar un nombre al diseño y seleccionar el tamaño de pantalla del dispositivo objetivo

### [Tools](https://sensecraft.seeed.cc/hmi/tools/firmware)
- Firmware Flasher e Image Dithering recibieron una actualización de interfaz
- Cada herramienta ahora incluye descripción, cuándo usarla y consejos útiles

### Nuevo soporte de hardware
- Se añadió compatibilidad para [reTerminal E1003, pantalla ePaper de 10.3" y 16 niveles de grises](https://www.seeedstudio.com/reTerminal-E1003-p-6731.html)

### Hoja de ruta y canales de feedback
Para gestionar mejor los lanzamientos y recoger comentarios de la comunidad, ahora compartimos nuestra hoja de ruta de desarrollo en un [documento público de Google llamado SenseCraft HMI Open Roadmap](https://docs.google.com/document/d/18xcOUtQjN6NweaFFQ7ZZEqQ3Hoaqs0XX7PX74HbDv4s/edit?usp=sharing).

Si tienes solicitudes de funciones o encuentras problemas, puedes:
- Dejar un comentario directamente en el documento de Google (lo revisaremos con regularidad)
- O unirte al [canal de Discord de SenseCraft HMI](https://discord.com/invite/Jj2CBXCjtf), ya que también recopilamos feedback allí y actualizamos el documento

¡Gracias, como siempre, por vuestro apoyo!
Equipo de SenseCraft HMI

---

## Notas de la versión SenseCraft HMI v1.3.2
Fecha de actualización: 2026.02.28

**🚀 Nuevas funciones**
- **Component Widgets:** alojan widgets de Calendar, Clock, List, Table y Data Chart
- **Data Chart Widgets:** nuevos componentes de gráficos compatibles con líneas, barras, velas, dispersión, tarta y medidores, optimizados para visualizar datos históricos de SenseCAP, mercado bursátil y cualquier otro dato
- **HTML & RSS Redesign:** ahora integrados como widgets dentro de la sección Data Widgets del Canvas Editor
  - HTML Widget admite tanto la incrustación de URL web como la carga/renderizado de archivos HTML locales
  - RSS Widget permite incrustar feeds RSS de forma fluida como elemento en tu lienzo

**🐛 Correcciones y mejoras**
- **Calendar Widget:** optimización del estilo de tabla y la lógica de interacción
- **Flip Clock Widget:**
  - Preview y Apply to Device ahora reflejan correctamente las personalizaciones de zona horaria del usuario
  - Se corrigió la desaparición del componente tras redimensionarlo
- **Google Calendar Widget:** se corrigió el problema de visualización de zona horaria (abordado parcialmente en v1.3.1)
- **Auto-save Enhancement:** ahora los diseños se guardan automáticamente al pulsar Apply, Preview, Publish o Private Share (ubicado en Dev Tool), sin necesidad de guardar manualmente
- **My Page Updates:** ahora muestra todos los Canvas Designs por defecto (incluidos los antiguos Design, RSS y páginas Web HTML). Las páginas de imágenes subidas por el usuario pueden accederse desde el menú desplegable superior derecho
- **SenseCraft HMI Homepage Featured:**
  - Featured Banner añade métricas sociales (visitas, likes, número de add-to-my page)
  - Nueva categoría **Featured** para mostrar todos los diseños destacados anteriormente
- **Device Support Updates:** se añadieron las pantallas a color 13.3'' EINK Spectra [reTerminal E1004](https://www.seeedstudio.com/reTerminal-E1004-p-6692.html) y [XIAO EE02 DIY ePaper Kit](https://www.seeedstudio.com/XIAO-ePaper-DIY-Kit-EE02-for-13-3-Spectratm-6-E-Ink.html) en la página de inicio y en las páginas de configuración de dispositivos con información y enlaces de producto

**🌟 Participa**
Prueba la nueva versión y comparte tu feedback. Informa de errores, sugiere funciones nuevas y ayuda a dar forma a la hoja de ruta en Discord: [https://discord.com/invite/Jj2CBXCjtf](https://discord.com/invite/Jj2CBXCjtf)

---

## Notas de la versión SenseCraft HMI v1.3.0
Fecha de actualización: 2026.01.30

**🚀 Hacia una comunidad de plantillas UI**
Esta versión transforma SenseCraft HMI en una plataforma colaborativa. Ahora puedes publicar, descubrir y reutilizar plantillas UI creadas por la comunidad de una forma más colaborativa.

- **Homepage rediseñada**
  - Featured Templates destaca los mejores diseños.
  - Filtra plantillas por categoría usando la nueva barra de navegación superior.
  - El pie de página actualizado incluye accesos rápidos a Change Logs, About, Support y más.

- **Publica páginas como plantillas públicas**
  - Se añadió un nuevo botón **Publish** a las páginas.
  - Envía tu página con una imagen, título, categoría y descripción; una vez aprobada, se convierte en plantilla pública.
  - Haz seguimiento del estado del envío (Under Review, Published o Rejected) en tu User Profile Center (haz clic en el avatar de usuario de la barra lateral para acceder).

- **Perfiles de usuario mejorados**
  - Personaliza tu perfil público con avatar, biografía y enlaces sociales.

- **Feedback de la comunidad y flujo colaborativo**
  - Navega, da like y **Add to My Pages** directamente a cualquier plantilla publicada.
  - Tus comentarios ayudan a los creadores y mejoran el ecosistema de plantillas.

**🐛 Correcciones y mejoras**
- Actualización del soporte para 4 niveles de escala de grises: corregido para reTerminal E1001–E1004 con el nuevo firmware V1.1.1
→ Actualiza el firmware directamente desde la Tools Bar de SenseCraft HMI.
- Zona horaria de Google Calendar: resueltos los problemas de sincronización entre distintas zonas horarias.
- Visibilidad de la versión de la plataforma: ahora puedes encontrar la versión actual en el icono Release Notes (sobre Doc Center en la barra lateral) o en Change Logs (pie de página).

**🌟 Participa**
- Comparte tus diseños: publica tus mejores páginas como plantillas públicas e inspira a la comunidad. ¡Las mejores plantillas podrán destacarse en el banner de la página principal!
- Únete a la conversación: informa errores, comparte comentarios y ayuda a dar forma a nuestra [hoja de ruta en Discord](https://discord.com/invite/Jj2CBXCjtf).

---

## Notas de la versión SenseCraft HMI v1.2.6
Fecha de actualización: 2026.01.19

**Mejoras del Canvas Designer**
- Atajos de teclado y menú contextual para una edición más rápida:
  - `Ctrl+C`: copiar
  - `Ctrl+V`: pegar
  - `Ctrl+X`: cortar
  - `Ctrl+D`: duplicar
  - `Ctrl+Z`: deshacer
  - `Ctrl+B`: alternar negrita
  - `Ctrl+I`: alternar cursiva
- Haz clic derecho sobre cualquier elemento para abrir un menú contextual (Copy, Duplicate, Layer, Group, Add to My Widgets)
- Nuevos elementos básicos: Clock (Analog & Flip), Calendar, List y Table
- Integración de datos mejorada:
  - Google Calendar (verificado, compatible con múltiples tipos de eventos)
  - Mejoras de diseño para Todoist, Reddit y HackerNews
  - Actualización del flujo de aplicación de diseños UI en el lienzo
- Mejora de la función Group:
  - Redimensionado sincronizado para todos los componentes dentro de un grupo
  - Edición por lotes de propiedades de componentes similares (por ejemplo, color, tamaño y peso de texto)
- Mejoras del Text Element:
  - Color de fondo, padding y sombras personalizables
  - Caja de selección adaptativa y ajuste automático de línea durante el arrastre
- Optimización del zoom del lienzo:
  - Control de zoom más fino para ajustes detallados

**Nuevo soporte de hardware**
- reTerminal E1003 (10.3″ monocromo), lanzamiento próximo
- reTerminal E1004 (13.3″ Spectra Full Color), lanzamiento próximo
- [EE02 Dev Kit con pantalla Spectra Full Color de 13.3″](https://www.seeedstudio.com/XIAO-ePaper-DIY-Kit-EE02-for-13-3-Spectratm-6-E-Ink.html)

**Otras actualizaciones**
- Se restauraron las herramientas avanzadas para desarrolladores, con importación/exportación de JSON de configuración UI
- Se añadió la función de duplicar página en My Pages
  
**Participa**
Únete a nuestra [comunidad de Discord #sensecraft-hmi](https://discord.com/invite/Jj2CBXCjtf) para informar errores y ayudar a definir nuestra hoja de ruta.

---

## Notas de la versión SenseCraft HMI v1.2.0 
Fecha de actualización: 2025.12.25

**Aspectos destacados**
- Nueva Homepage con plantillas ricas: diseños listos para usar para clima, calendarios, criptomonedas, acciones, citas y más.
- Nueva arquitectura: diseña tu UI incluso antes de que llegue el hardware. La plataforma ahora separa claramente Workspace (diseño), Device (despliegue), Tools y AI Gen (Beta).
- Fuentes de datos ampliadas: nueva integración en vivo con ZenQuotes, Google Calendar, CoinMarketCap, Todoist y otras.
- Rediseño moderno: renovación visual en toda la plataforma.
- Nuevo hardware: soporte para TRMNL 7.5" (OG) DIY Kit.
- Modo Always-On: nuevo modo de visualización permanente con respuesta más rápida.
- Autenticación de terceros: soporte para Google y GitHub además del inicio de sesión original por correo de SenseCraft.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/data2.jpg" style={{width:800, height:'auto'}}/></div>

**Nuevo diseño de la plataforma**
- Home: navega plantillas y aplica tus favoritas al lienzo
- Workspace: diseña páginas UI y playlists
- Device: gestiona los dispositivos conectados
- Tools: Firmware Flasher, image dithering
- AI Gen (Beta): generación de imágenes y diseños con IA

**Mejoras**
- Mejorado el dithering de 4 niveles de grises (pantallas de 2.9")
- Corregido el problema del código de emparejamiento en XIAO EE04
- Rotación del lienzo más fluida
- Mejor renderizado en la vista previa

**Participa**

Únete a nuestro Discord para votar plantillas, informar errores y ayudar a definir nuestra hoja de ruta.

Discord Channel: https://discord.com/invite/Jj2CBXCjtf

¡Feliz Navidad!

Equipo de SenseCraft HMI

---

## Notas de la versión SenseCraft HMI v1.1.0 
Fecha de actualización: 2025.11.20

**Nuevo soporte: XIAO EE04 ePaper DIY Kit (ESP32-S3)**

Hemos ampliado la compatibilidad para admitir el recién lanzado EE04 DIY Kit, ofreciendo una mayor variedad de pantallas ePaper (de 1.54" a 7.5") para tus proyectos creativos.

Tipos de pantalla compatibles:
• Monocromas (blanco y negro)
• Pantallas de 4 colores
• Pantallas de 6 colores (E Ink Spectra 6 Full-color)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/update1.png" style={{width:800, height:'auto'}}/></div>

---
## Notas de la versión SenseCraft HMI v1.0 
Fecha de actualización: 2025.10.24

**Diseño y lista de páginas rediseñados para facilitar la creación**

- Nuevo diseño UI para una navegación más sencilla
- Nueva función de pagelist para crear múltiples UIs como si fueran diapositivas
- Nueva page library para guardar todas tus UIs

**Editor UI mejorado e integración de datos**

- Soporte para diseños de lienzo tanto horizontales como verticales
- Soporte para importación y exportación de plantillas UI
- Obtención directa de datos SenseCAP en vivo desde tu cuenta
- Añadidos hora de última conexión y próxima actualización del dispositivo

**Soporte de hardware ampliado**

- Compatibilidad con ePaper DIY Kit-EE04, compatible con pantallas de 7.3'' y 7.5''
- Compatibilidad con TRMNL 7.5'' (OG) DIY Kit con pantalla de 7.5''

**Página de herramientas de flasheo de firmware y procesamiento de imágenes**

- Soporte para flashear tanto firmware de SenseCraft HMI como firmware de TRMNL
- Se añadió la herramienta de dithering para procesar imágenes y exportarlas directamente a archivos `.c`

---

## Notas de la versión SenseCraft HMI v0.6 
Fecha de actualización: 2025.9.23

**Lanzamiento inicial**

- **Soporte de dispositivos**: reTerminal E1001 y E1002
- **Tipos de página**: compatibilidad con páginas de galería individual, canvas, RSS y web
- **Gestión de firmware**: flasheo y actualización de firmware en línea

---

*Para información más detallada sobre cada función, consulta las secciones de guía correspondientes.*
