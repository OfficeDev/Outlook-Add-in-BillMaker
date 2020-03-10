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
此 Outlook 外接程序演示了如何实现三种类型的命令按钮：带有下拉菜单（每一个选项均启动一个任务窗格）的按钮、启动任务窗格的按钮以及运行不使用任务窗格 UI 的函数的按钮。打开现有约会或会议时会显示该应用，并且可以通过它创建发票并将其发送给你已会晤过的客户。本示例当前仅通过 Outlook 2016 桌面客户端运行。

![BillMaker 屏幕截图](images/BillMaker.png)

“**添加费用**”按钮包含一个有三个选项的下拉菜单，可向三个不同层级的客户使用不同的收费。“**创建发票**”按钮从所有保存的费用生成发票，而“**清除费用**”按钮会清除当前客户的所有费用。

## 先决条件
* 需要使用 [npm](https://www.npmjs.com/)（节点包管理器）安装开发依赖项。
* 需要使用 [Bower](http://bower.io/) 安装前端依赖项。 
* [Gulp](http://gulpjs.com/) 用作任务运行程序，包括在开发服务器上为应用程序提供服务。
* Office 365 帐户。如果你没有帐户，可以[加入 Office 365 开发人员计划并获取为期 1 年的免费 Office 365 订阅](https://aka.ms/devprogramsignup)。

## 配置加载项
1. 克隆该存储库。
2. 从本地存储库运行 `npm install` 以安装 npm 和 Bower 依赖项。
3. 从本地存储库运行 `gulp serve-static` 以启动开发服务器。
4. 转到 [mail.office365.com](http://mail.office365.com) 并使用你的 Microsoft Office 365 帐户登录。
5. 单击导航栏上的“设置”菜单的齿轮图标，然后选择“*管理加载项*”。
6. 单击加号 (+) 图标，然后选择“*从文件添加*”。
7. 浏览到此存储库文件夹，然后选择 *manifest.xml*。
8. 随后完成向导（“*下一步*”、“*安装*”、“*确定*”），使该加载项在 Office 365 帐户上可用。
9. 最后，必须在浏览器中打开[应用](https://localhost:8443/appread/home/home.html)，并信任 `localhost:8443` 的证书。如果计算机不信任该证书，则加载项不会运行。

## 运行加载项
1. 安装加载项后，打开 Outlook 2016 客户端桌面应用程序。 
2. 选择一个日历会议。
3. 你将能够为会议的创建者添加费用并创建发票。

## 问题和意见
我们乐意倾听你对本示例的反馈。你可通过该存储库中的[问题](https://github.com/OfficeDev/Outlook-Add-in-RepoReport/issues)部分向我们发送问题和建议。

## 其他资源
* [Yeoman 生成器](https://github.com/OfficeDev/generator-office) \- 生成与 Microsoft Office 相关的项目（包括加载项）的 Yeoman 生成器。本项目是使用它生成的。
* [Office UI Fabric](https://github.com/OfficeDev/Office-UI-Fabric/) \- 用于生成 Office 365 体验的前端框架。本项目使用它来获取 Office 的外观。 
* [dev.office.com](http://dev.office.com) \- 查找与 Office 开发相关的文档、示例和其他有用信息。


## 版权信息
版权所有 (c) 2015 Microsoft。保留所有权利。



此项目已采用 [Microsoft 开放源代码行为准则](https://opensource.microsoft.com/codeofconduct/)。有关详细信息，请参阅[行为准则 FAQ](https://opensource.microsoft.com/codeofconduct/faq/)。如有其他任何问题或意见，也可联系 [opencode@microsoft.com](mailto:opencode@microsoft.com)。
