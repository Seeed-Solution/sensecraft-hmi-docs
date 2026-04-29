---
title: Primeros pasos
description: Una guía práctica para emparejar tu primer dispositivo, comprobar su estado y actualizar el firmware en SenseCraft HMI cuando sea necesario.
---

Esta guía te lleva por el flujo principal de primer uso en SenseCraft HMI, incluyendo cómo conectar un dispositivo compatible, emparejarlo con tu cuenta, comprobar su estado y actualizar el firmware cuando sea necesario.

Si eres nuevo en la plataforma, te recomendamos leer primero la [Descripción general](/es/overview/) para conocer la plataforma, el registro de cuenta y las funciones principales.

El siguiente recorrido usa **reTerminal E1002** como ejemplo para demostrar el flujo básico de SenseCraft HMI.

---

## Guías de dispositivos
Si quieres aprender más sobre un dispositivo específico, haz clic en su nombre a continuación para ver la guía detallada.

También puedes seguir directamente el flujo paso a paso de abajo para comenzar rápidamente.

* **[reTerminal E1001](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1001)**
* **[reTerminal E1002](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1002)**
* **[reTerminal E1003](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1003/)**
* **[reTerminal E1004](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1004/)**
* **[TRMNL 7.5" (OG) DIY Kit](https://wiki.seeedstudio.com/trmnl_7inch5_diy_kit_main_page/)**
* **[XIAO EE02 ePaper DIY Kit](https://wiki.seeedstudio.com/getting_started_with_ee02/)**
* **[XIAO EE03 ePaper DIY Kit](https://wiki.seeedstudio.com/getting_started_with_ee03/)**
* **[XIAO ePaper DIY Kit EE04](https://wiki.seeedstudio.com/epaper_ee04/)**

---

## Actualización de firmware

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

Normalmente, el botón **Connect Serial Monitor** no es necesario. Si tu dispositivo presenta un problema difícil de diagnosticar, puedes usarlo para conectarte al puerto del dispositivo y ver los registros de depuración. Compartir esos registros con el soporte de Seeed puede ayudar a resolver el problema con mayor eficiencia.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_getting_started_1.png" style={{width:600, height:'auto'}}/></div><br />

### Después del flasheo
Espera a que el dispositivo se reinicie automáticamente.

Si realizaste un **Full Flash**, vuelve a configurar el Wi-Fi del dispositivo y empareja de nuevo con SenseCraft HMI.

---

## Conectar el dispositivo
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

## Información del dispositivo
Después del emparejamiento, podrás ver tu dispositivo en la página **Device**, incluyendo información básica como **Device Name** y **Battery Level**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_getting_started_5.png" style={{width:600, height:'auto'}}/></div><br />

### Gestión detallada
Haz clic sobre un dispositivo para abrir la vista **Details**. Desde allí puedes revisar y gestionar:
* **Low Power Mode**: activar o desactivar el comportamiento de ahorro de energía
* **Refresh Interval**: controlar con qué frecuencia se actualiza la pantalla
* **Online Status**: comprobar si el dispositivo está conectado actualmente
* **Battery Status**: supervisar el porcentaje actual de batería
* **Active Page**: ver y gestionar la página que se muestra actualmente en el dispositivo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_getting_started_6.png" style={{width:600, height:'auto'}}/></div><br />

---

## Siguientes pasos
Una vez que tu dispositivo esté en línea, puedes continuar con el resto del flujo de la plataforma:

* Visita [AI Gen](/es/guides/ai_gen/) para crear contenido con ayuda de IA.
* Explora [Workspace](/es/guides/workspace/) para diseñar y desplegar tus propias páginas.
* Consulta [Hardware compatible](/es/supported_hardware/) para ver más dispositivos compatibles.
