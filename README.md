# Outlook-Add-in-BillMaker
This Outlook add-in demonstrates how to implement three kinds of command buttons: drop-down, launch task pane, and run function without UI

![BillMaker screenshot](BillMaker.PNG)

## Prerequisites
* [npm](https://www.npmjs.com/), Node Package Manager, is required to install dev dependencies.
* [Bower](http://bower.io/) is required to install frontend dependencies. 
* [Gulp](http://gulpjs.com/) is used as a task runner, including serving the application on a development server.

## Configure the add-in
1. Clone this repository.
2. Run `npm install` from your local repository to install both npm and Bower dependencies.
3. Run `gulp serve-static` from your local repository to start development server.
4. Go to [mail.office365.com](http://mail.office365.com) and sign in with your Office 365 account.
5. Click the gear icon on the upper right, then choose *Manage add-ins*.
6. Click the plus icon, then choose *Add from a file*.
7. Browse to this repository folder and choose *manifest.xml*.
8. Then complete the wizard (*Next*, *Install*, *OK*) to make the add-in available on your Office 365 account.
9. Finally, you'll have to open the [app](https://localhost:8443/appread/index.html) in a browser and trust the certificate for `localhost:8443`. The add-in won't run if your computer doesn't trust it.

## Run the add-in
1. After installing the add-in, open the Outlook 2016 client desktop application. 
2. Choose a calendar appointment.

## Questions and comments
We'd love to get your feedback about this sample. You can send your questions and suggestions to us in the [Issues](https://github.com/OfficeDev/Outlook-Add-in-RepoReport/issues) section of this repository.

## Additional resources
* [Yeoman generator](https://github.com/OfficeDev/generator-office) - Yeoman generator for building Microsoft Office related projects (including add-ins). This project was built using it.
* [Office UI Fabric](https://github.com/OfficeDev/Office-UI-Fabric/) - The front-end framework for building experiences for Office 365. This project uses it to get an Office "look and feel". 
* [dev.office.com](http://dev.office.com) - Find documentation, samples, and other helpful information relevant to Office development.


## Copyright
Copyright (c) 2015 Microsoft. All rights reserved.

