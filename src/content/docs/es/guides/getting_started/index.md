---
title: Primeros pasos
description: Una guía práctica para emparejar tu primer dispositivo, comprobar su estado y actualizar el firmware en SenseCraft HMI cuando sea necesario.
last_update:
  data:11/05/2026
  author:dimo
---

<a id="overview"></a>

Esta guía te lleva por el flujo principal de primer uso en SenseCraft HMI, incluyendo cómo conectar un dispositivo compatible, emparejarlo con tu cuenta, comprobar su estado y actualizar el firmware cuando sea necesario.

Si eres nuevo en la plataforma, te recomendamos leer primero la [Descripción general](/es/overview/) para conocer la plataforma, el registro de cuenta y las funciones principales.

El siguiente recorrido usa **reTerminal E1002** como ejemplo para demostrar el flujo básico de SenseCraft HMI.

Si estás usando otro dispositivo, puedes seguir el mismo flujo general. Puedes visitar [Hardware compatible](/es/supported_hardware/) para encontrar la página correspondiente de tu dispositivo, o usar los enlaces de abajo para ir directamente a la guía wiki adecuada.

* **[reTerminal E1001](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1001)**
* **[reTerminal E1002](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1002)**
* **[reTerminal E1003](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1003/)**
* **[reTerminal E1004](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1004/)**
* **[TRMNL 7.5" (OG) DIY Kit](https://wiki.seeedstudio.com/trmnl_7inch5_diy_kit_main_page/)**
* **[XIAO ePaper DIY Kit EE02](https://wiki.seeedstudio.com/getting_started_with_ee02/)**
* **[XIAO ePaper DIY Kit EE03](https://wiki.seeedstudio.com/getting_started_with_ee03/)**
* **[XIAO ePaper DIY Kit EE04](https://wiki.seeedstudio.com/epaper_ee04/)**
* **[XIAO ePaper DIY Kit EE05](https://wiki.seeedstudio.com/epaper_ee05/)**

---

<a id="firmware-update"></a>
## Actualiza el firmware de tu dispositivo

:::tip
Antes de emparejar un dispositivo, recomendamos actualizarlo a la versión más reciente del firmware para obtener la mejor compatibilidad, correcciones de errores y soporte de funciones.

Si prefieres empezar a explorar SenseCraft HMI de inmediato, también puedes saltarte esta sección por ahora.
:::

Antes de comenzar, asegúrate de tener:
* **Un cable USB** para conectar el dispositivo a tu computadora
* **Una conexión estable a Internet** para descargar los archivos de firmware
* **Un navegador compatible** como Chrome, Firefox, Safari o Edge
* **Suficiente energía en el dispositivo** para completar el proceso de flasheo de forma segura
* **Una cuenta registrada de SenseCraft HMI** con acceso a la plataforma

### Paso 1: Conecta el dispositivo por USB
Conecta el dispositivo a tu computadora mediante un cable USB.

### Paso 2: Selecciona el dispositivo
Haz clic en **Select**. En la ventana emergente, elige tu dispositivo de la lista de hardware compatible.

Si seleccionas **ePaper DIY Kit - EE04**, también debes elegir el tipo y tamaño correctos de pantalla para incluir el controlador de visualización adecuado.

### Paso 3: Actualiza el dispositivo
Haz clic en **Flash** para iniciar el proceso de actualización. No desconectes el dispositivo ni cierres la pestaña del navegador hasta que el progreso llegue al 100%.

:::tip
Elige el modo de flasheo según tus necesidades:

**Standard Flash (sin marcar)**: actualiza el firmware manteniendo las credenciales Wi-Fi y la configuración existente. Recomendado para actualizaciones rutinarias.

**Full Flash (marcado)**: borra por completo la memoria del dispositivo, incluyendo credenciales Wi-Fi y ajustes guardados. Recomendado para solución de problemas, recuperación o reinicio limpio.

En la mayoría de los casos, no necesitas usar el botón **Connect Serial Monitor**. Si tu dispositivo presenta un problema difícil de diagnosticar, puedes usarlo para conectarte al puerto del dispositivo y ver los registros de depuración. Compartir esos registros con el soporte de Seeed puede ayudar a resolver el problema con mayor eficiencia.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_getting_started_1.png" style={{width:600, height:'auto'}}/></div><br />

### Después del flasheo
Espera a que el dispositivo se reinicie automáticamente. Esto puede tardar un momento.

Si realizaste un **Full Flash**, el dispositivo tendrá que configurarse de nuevo después del reinicio porque sus ajustes guardados se borraron durante el flasheo. Tras reiniciarse, volverá al modo de configuración. Vuelve a conectarlo al Wi-Fi y, a continuación, empareja de nuevo con SenseCraft HMI siguiendo los pasos de la siguiente sección.

Por ejemplo, si estás usando un reTerminal E1002, la pantalla se verá así después de un **Full Flash**:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/155.png" style={{width:600, height:'auto'}}/></div><br />

---

<a id="connect-device"></a>
## Conecta tu dispositivo
### Paso 1: Entra en modo de configuración y conéctate al Wi-Fi del dispositivo
De forma predeterminada, los dispositivos nuevos, o los dispositivos después de un **Full Flash**, entran automáticamente en modo de configuración tras arrancar. En este modo, usa tu teléfono o computadora para conectarte al punto de acceso Wi-Fi que aparece en la pantalla ePaper.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/5.png" style={{width:400, height:'auto'}}/></div><br />

### Paso 2: Abre la página de configuración y configura el Wi-Fi
En tu navegador, abre `http://192.168.4.1/`. Luego selecciona tu red Wi-Fi local, introduce la contraseña y haz clic en **Connect**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/6.png" style={{width:700, height:'auto'}}/></div><br />

### Paso 3: Obtén el código de emparejamiento
Después de que el dispositivo se conecte correctamente al Wi-Fi, aparecerá automáticamente en pantalla un **código de emparejamiento de 6 dígitos**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/136.png" style={{width:600, height:'auto'}}/></div>

### Paso 4: Añade el dispositivo en SenseCraft HMI
En la página **Device**, haz clic en **+ Add NEW Device**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_getting_started_4.png" style={{width:600, height:'auto'}}/></div><br />

### Paso 5: Completa el emparejamiento
Introduce un nombre personalizado para el dispositivo y el código de emparejamiento de 6 dígitos, luego haz clic en **Create**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/8.png" style={{width:600, height:'auto'}}/></div>

---

<a id="device-information"></a>
## Gestiona tu dispositivo
Después del emparejamiento, podrás ver tu dispositivo en la página **Device**. En la parte superior se muestra el nombre que le asignaste, seguido de detalles como el modelo del dispositivo, el tamaño de pantalla compatible, el modo de color, la dirección MAC o el número SN, el estado en línea, el nivel de batería y la versión del firmware.

Por ejemplo, un dispositivo E1002 puede mostrar un nombre personalizado como `test`, el modelo `reTerminal E1002`, un tamaño de pantalla compatible de `7.3"`, el modo de color `Full color`, un número SN como `1049****0040`, estado `Offline`, batería al `0%` y firmware `1.1.2`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_getting_started_5.png" style={{width:600, height:'auto'}}/></div><br />

Haz clic en la tarjeta del dispositivo para abrir la vista **Details**. Desde allí puedes revisar y gestionar:
* **Low Power Mode**: activar o desactivar el comportamiento de ahorro de energía
* **Refresh Interval**: controlar con qué frecuencia se actualiza la pantalla
* **Online Status**: comprobar si el dispositivo está conectado actualmente
* **Battery Status**: supervisar el porcentaje actual de batería
* **Active Page**: ver y gestionar la página que se muestra actualmente en el dispositivo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_getting_started_6.png" style={{width:600, height:'auto'}}/></div><br />

---

<a id="quick-deployment"></a>
## Despliega rápidamente plantillas de la comunidad
A continuación, vamos a desplegar rápidamente una plantilla de la comunidad en tu dispositivo.

**Paso 1.** Haz clic en **Home** para volver a la página principal.

**Paso 2.** Abre cualquier plantilla compartida por otro usuario para ver sus detalles.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/114.png" style={{width:600, height:'auto'}}/></div><br />

**Paso 3.** En el lado derecho de la página de detalles, haz clic en **Add to My Page** para añadir la plantilla a tu biblioteca de páginas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/115.png" style={{width:600, height:'auto'}}/></div><br />

**Paso 4.** En la página que se abre a continuación, haz clic en **Apply** en la esquina superior derecha para enviar la plantilla a tu dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/116.png" style={{width:600, height:'auto'}}/></div><br />

**Paso 5.** Espera un momento mientras el contenido se envía al dispositivo.

---

## ¿Qué sigue?
Una vez que tu dispositivo esté en línea, puedes continuar con el resto del flujo de la plataforma:

* Explora [Workspace](/es/guides/workspace/) para diseñar y desplegar tus propias páginas.
* Visita [AI Gen](/es/guides/ai_gen/) para crear contenido con ayuda de IA.
* Consulta [Hardware compatible](/es/supported_hardware/) para ver más dispositivos compatibles.
