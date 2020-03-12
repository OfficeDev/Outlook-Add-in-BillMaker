---
page_type: sample
products:
- office-outlook
- office-365
languages:
- html
- javascript
extensions:
  contentType: samples
  technologies:
  - Add-ins
  createdDate: 12/15/2015 10:40:59 AM
---
# Microsoft Outlook-Add-in-BillMaker
En este complemento de Outlook, se muestra cómo implementar tres tipos de botones de comando: un botón con un menú desplegable (cada uno de ellos inicia un panel de tareas), un botón que inicia un panel de tareas y un botón que ejecuta una función que no usa ninguna interfaz de usuario del panel de tareas. La aplicación aparece cuando abre una reunión o una cita existente, y le permite crear y enviar facturas a clientes con los que se reunió. Actualmente, este ejemplo solo se ejecuta con el cliente para equipo de escritorio de Outlook 2016.

![Captura de pantalla de BillMaker](images/BillMaker.png)

El **botón Agregar un cargo** contiene un menú desplegable de tres opciones que le permite aplicar cargos a tres niveles diferentes de clientes. El botón **Hacer una factura** genera una factura con todos los cargos guardados y el botón **Borrar cargos** elimina todos los cargos del cliente actual.

## Requisitos previos
* [npm](https://www.npmjs.com/), el administrador de paquetes de nodos, es necesario para instalar las dependencias de desarrollo.
* [Bower](http://bower.io/) es necesario para instalar las dependencias front-end. 
* [Gulp](http://gulpjs.com/) se utiliza como ejecutor de tareas, incluyendo dar servicio a la aplicación en un servidor de desarrollo.
* Una cuenta de Office 365. Si tiene ninguna suscripción, [únase al programa para desarrolladores de Office 365 y obtenga una suscripción gratuita de 1 año a Office 365](https://aka.ms/devprogramsignup).

## Configurar el complemento
1. Clone este repositorio.
2. Ejecute `npm install` desde el repositorio local para instalar las dependencias npm y Bower.
3. Ejecute `gulp serve-static` desde el repositorio loca para iniciar el servidor de desarrollo.
4. Vaya a [mail.office365.com](http://mail.office365.com) e inicie sesión con su cuenta de Microsoft Office 365.
5. Haga clic en el icono de engranaje del menú configuración en la barra de navegación y, a continuación, elija *Administrar complementos*.
6. Haga clic en el icono de signo más (+) y, a continuación, elija *agregar desde un archivo*.
7. Vaya a esta carpeta del repositorio y elija *manifest.xml*.
8. Luego complete el asistente (*Siguiente*, *Instalar*, *Aceptar*) para que el complemento esté disponible en su cuenta de Office 365.
9. Por último, tendrá que abrir la [aplicación](https://localhost:8443/appread/home/home.html) en un explorador y confiar en el certificado para `localhost:8443`. El complemento no se ejecutará si su equipo no confía en el.

## Ejecutar el complemento
1. Después de instalar el complemento, abra la aplicación de escritorio de cliente de Outlook 2016. 
2. Elija una reunión del calendario.
3. Podrá agregar cargos y hacer facturas para la persona que creó la reunión.

## Preguntas y comentarios
Nos encantaría recibir sus comentarios sobre este ejemplo. Puede enviarnos sus preguntas y sugerencias a través de la sección [Problemas](https://github.com/OfficeDev/Outlook-Add-in-RepoReport/issues) de este repositorio.

## Recursos adicionales
* [Generador de Yeoman](https://github.com/OfficeDev/generator-office): generador de Yeoman para la creación de proyectos relacionados con Microsoft Office (incluidos complementos). Se usó para crear este proyecto.
* [Office UI Fabric](https://github.com/OfficeDev/Office-UI-Fabric/): el marco de trabajo front-end para crear experiencias para Office 365. Se ha usado en este proyecto para lograr la apariencia y el aspecto de Office. 
* [dev.office.com](http://dev.office.com): busque documentación, ejemplos y otra información útil relevante para el desarrollo de Office.


## Derechos de autor
Copyright (c) 2015 Microsoft. Todos los derechos reservados.



Este proyecto ha adoptado el [Código de conducta de código abierto de Microsoft](https://opensource.microsoft.com/codeofconduct/). Para obtener más información, vea [Preguntas frecuentes sobre el código de conducta](https://opensource.microsoft.com/codeofconduct/faq/) o póngase en contacto con [opencode@microsoft.com](mailto:opencode@microsoft.com) si tiene otras preguntas o comentarios.
