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
Ce complément Outlook illustre comment implémenter trois types de boutons de commande : un bouton avec un menu déroulant (chacun d’entre eux lance un volet des tâches), un bouton qui lance un volet de tâches et un bouton qui exécute une fonction qui n’utilise aucune interface utilisateur du volet des tâches. L’application s’affiche lorsque vous ouvrez une réunion ou un rendez-vous existant, et vous permet de créer et d’envoyer des factures aux clients que vous avez rencontrés. Cet exemple s’exécute actuellement uniquement avec le client de bureau Outlook 2016.

![Capture d’écran BillMaker](images/BillMaker.png)

Le **bouton Ajouter des frais** contient un menu déroulant à trois options qui vous permet d’appliquer des frais pour trois niveaux de clients différents. Le bouton **Préparer une facture** génère une facture en dehors de l’ensemble des frais enregistrés et le bouton **Effacer les modifications** efface tous les frais du client actuel.

## Conditions préalables
* [npm](https://www.npmjs.com/), Node Package Manager, est nécessaire pour installer des dépendances de développement.
* [Bower](http://bower.io/) est nécessaire pour installer des dépendances frontales. 
* [Gulp](http://gulpjs.com/) est utilisée en tant qu'exécuteur de tâches, y compris l'utilisation de l’application sur un serveur de développement.
* Un compte Office 365. [Participez au programme pour les développeurs Office 365 et obtenez un abonnement gratuit d’un an à Office 365](https://aka.ms/devprogramsignup), si vous n’en avez pas.

## Configurer le complément
1. Clonez ce référentiel.
2. Exécutez `npm install` à partir de votre référentiel local pour installer les dépendances npm et Bower.
3. Exécutez `gulp serve-static` à partir de votre référentiel local pour démarrer le serveur de développement.
4. Accédez à [mail.office365.com](http://mail.office365.com) et connectez-vous avec votre compte Microsoft Office 365.
5. Cliquez sur l’icône d’engrenage du menu Paramètres dans la barre de navigation, puis sélectionnez *Gérer des compléments*.
6. Cliquez sur l’icône plus (+), puis sélectionnez *Ajouter à partir d’un fichier*.
7. Parcourez ce dossier de référentiel et sélectionnez *manifest.xml*.
8. Terminez l’Assistant (*Suivant*, *Installer*, *OK*) pour rendre le complément disponible sur votre compte Office 365.
9. Enfin, vous devez ouvrir l'[application](https://localhost:8443/appread/home/home.html) dans un navigateur et faire confiance au certificat pour `localhost:8443`. Le complément ne s’exécute pas si votre ordinateur ne l’approuve pas.

## Exécution du complément
1. Une fois le complément installé, ouvrez l’application de bureau client Outlook 2016. 
2. Sélectionnez une réunion du calendrier.
3. Vous pouvez ajouter des frais et préparer des factures pour la personne qui a créé la réunion.

## Questions et commentaires
Nous aimerions connaître votre opinion sur cet exemple. Vous pouvez nous faire part de vos questions et suggestions dans la rubrique [Problèmes](https://github.com/OfficeDev/Outlook-Add-in-RepoReport/issues) de ce référentiel.

## Ressources supplémentaires
* [Générateur Yeoman](https://github.com/OfficeDev/generator-office) : Générateur Yeoman pour la création de projets relatifs à Microsoft Office (y compris les compléments). Ce projet a été créé à l’aide de celui-ci.
* [Office UI Fabric](https://github.com/OfficeDev/Office-UI-Fabric/) : Infrastructure frontale permettant de créer des expériences pour Office 365. Ce projet l’utilise pour obtenir « l’apparence » d’Office. 
* [dev.office.com](http://dev.office.com) : trouvez de la documentation, des exemples et d’autres informations utiles relatives au développement d’Office.


## Copyright
Copyright (c) 2015 Microsoft. Tous droits réservés.



Ce projet a adopté le [code de conduite Open Source de Microsoft](https://opensource.microsoft.com/codeofconduct/). Pour en savoir plus, reportez-vous à la [FAQ relative au code de conduite](https://opensource.microsoft.com/codeofconduct/faq/) ou contactez [opencode@microsoft.com](mailto:opencode@microsoft.com) pour toute question ou tout commentaire.
