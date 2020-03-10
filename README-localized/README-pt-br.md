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
# Suplemento do Microsoft Outlook -BillMaker
Este suplemento do Outlook demonstra como implementar três tipos de botões de comando: um botão com um menu suspenso (cada um dos quais inicia um painel de tarefas), um botão que inicia um painel de tarefas e um botão que executa uma função que não usa uma interface do usuário do painel de tarefas. O aplicativo é mostrado quando você abre um compromisso ou uma reunião existente e permite criar e enviar faturas a clientes que você já encontrou. Atualmente, este exemplo é executado somente com o cliente de desktop do Outlook 2016.

![Captura de tela BillMaker](images/BillMaker.png)

**o botão Adicionar um encargo** contém um menu suspenso de três opções que permite que você aplique cobranças de três níveis diferentes de clientes. O **criar um botão fatura** gera uma fatura de todas as cobranças salvas e o botão **limpar alterações** limpa todos os encargos para o cliente atual.

## Pré-requisitos
* [NPM](https://www.npmjs.com/), Gerenciador de pacotes de nó, é necessário para instalar dependências do desenvolvedor.
* [Bower](http://bower.io/) é necessário para instalar as dependências de frontend. 
* o [Gulp](http://gulpjs.com/) é usado como um executor de tarefas, incluindo a disponibilização do aplicativo em um servidor de desenvolvimento.
* Uma conta do Office 365. Caso não tenha uma, [ingresse no Programa para Desenvolvedores do Office 365 e obtenha uma assinatura gratuita de um ano do Office 365](https://aka.ms/devprogramsignup).

## Configurar o suplemento
1. Clone este repositório.
2. Execute `NPM instalar` do seu repositório para instalar as dependências do NPM e do Bower.
3. Execute `gulpum` estática do seu repositório local para iniciar o servidor de desenvolvimento.
4. Vá para [mail.office365.com](http://mail.office365.com) e entre com sua conta do Microsoft Office 365.
5. Clique no ícone de engrenagem para o menu configurações na barra de navegação e escolha *gerenciar suplementos*.
6. Clique no ícone de adição e, em seguida, escolha *adicionar de um arquivo*.
7. Navegue até essa pasta do repositório e escolha *manifest. xml*.
8. Em seguida, conclua o assistente (*próximo*, *instalar*, *OK*) para disponibilizar o suplemento em sua conta do Office 365.
9. Por fim, você precisará abrir o [aplicativo](https://localhost:8443/appread/home/home.html) em um navegador e confiar no certificado para `localhost: 8443`. O suplemento não será executado se o seu computador não confiar.

## Execute o suplemento
1. Depois de instalar o suplemento, abra o aplicativo da área de trabalho do cliente Outlook 2016. 
2. Escolha uma reunião do calendário.
3. Você poderá adicionar encargos e fazer faturas para a pessoa que criou a reunião.

## Perguntas e comentários
Gostaríamos de saber sua opinião sobre este exemplo. Você pode enviar perguntas e sugestões na seção [Problemas](https://github.com/OfficeDev/Outlook-Add-in-RepoReport/issues) deste repositório.

## Recursos adicionais
* [Gerador do Yeoman](https://github.com/OfficeDev/generator-office) \- Gerador do Yeoman para compilar projetos relacionados do Microsoft Office (incluindo suplementos). Esse projeto foi criado usando-o.
* [Office UI Fabric](https://github.com/OfficeDev/Office-UI-Fabric/) \- A estrutura de front-end para criar experiências para o Office 365. Esse projeto usa esse recurso para obter uma aparência do Office. 
* [dev.office.com](http://dev.office.com)-encontre a documentação, os exemplos e outras informações úteis relevantes para o desenvolvimento do Office.


## Direitos autorais
Copyright © 2015 Microsoft. Todos os direitos reservados.



Este projeto adotou o [Código de Conduta do Código Aberto da Microsoft](https://opensource.microsoft.com/codeofconduct/). Para saber mais, confira [Perguntas frequentes sobre o Código de Conduta](https://opensource.microsoft.com/codeofconduct/faq/) ou contate [opencode@microsoft.com](mailto:opencode@microsoft.com) se tiver outras dúvidas ou comentários.
