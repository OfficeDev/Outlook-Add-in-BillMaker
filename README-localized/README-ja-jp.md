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
この Outlook アドインは、ドロップダウン メニュー付きのボタン (各メニューで作業ウィンドウを起動するボタン)、作業ウィンドウを起動するボタン、作業ウィンドウ UI を使用しないで関数を実行するボタンという 3 種類のボタンを実装する方法を示します。このアプリは、既存の予定や会議を開くときに表示され、会合したクライアントへの送り状の作成と送信ができます。このサンプルは現在、Outlook 2016 デスクトップ クライアントのみで動作します。

![BillMaker のスクリーンショット](images/BillMaker.png)

\[**Add a charge button**] (料金の追加ボタン) には、3 つのオプションを持つドロップダウン メニューが含まれています。これにより 、3 つの異なる顧客層に課金することができます。\[**Make an invoice**] (請求書の作成) ボタンで保存されているすべての料金の請求書が生成され、\[**Clear changes**] (変更をクリア) ボタンで現在の顧客のすべての料金がクリアされます。

## 前提条件
* [npm](https://www.npmjs.com/) (ノード パッケージ マネージャー) は、開発の依存関係をインストールするのに必要です。
* [Bower](http://bower.io/) は、フロントエンドの依存関係をインストールするのに必要です。 
* [Gulp](http://gulpjs.com/) は、開発サーバーにアプリケーションをサービスするなど、タスク ランナーとして使用されます。
* Office 365 アカウント。お持ちでない場合は、[Office 365 Developer プログラムに参加して、Office 365 の 1 年間無料のサブスクリプションを取得します](https://aka.ms/devprogramsignup)。

## アドインを構成する
1. このリポジトリの複製を作成します。
2. ローカル リポジトリから `npm install` を実行し、npm と Bower の両方の依存関係をインストールします。
3. ローカル リポジトリから `gulp serve-static` を実行し、開発サーバーを起動します。
4. [mail.office365.com](http://mail.office365.com) に移動して、Microsoft Office 365 アカウントでサインインします。
5. ナビゲーション バーの \[設定] メニューの歯車アイコンをクリックし、\[*アドインの管理*] を選択します。
6. \[+] アイコンをクリックし、\[*ファイルから追加*] を選択します。
7. このリポジトリ フォルダーを参照し、\[*manifest.xml*] を選択します。
8. \[*次へ*]、\[*インストール*]、\[*OK*] でウィザードを最後まで実行すると、アドインが Office 365 アカウントで使用できるようになります。
9. 最後に、[アプリ](https://localhost:8443/appread/home/home.html)をブラウザーで開き、`localhost:8443` の証明書を信頼する必要があります。信頼していない場合、アドインは実行されません。

## アドインを実行する
1. アドインをインストールしたら、Outlook 2016 クライアントのデスクトップ アプリケーションを開きます。 
2. 予定表の会議を選択します。
3. 会議を作成したユーザーの料金を加算したり、請求書を作成したりできます。

## 質問とコメント
このサンプルに関するフィードバックをお寄せください。質問や提案につきましては、このリポジトリの「[問題](https://github.com/OfficeDev/Outlook-Add-in-RepoReport/issues)」セクションで送信できます。

## その他のリソース
* [Yeoman ジェネレーター](https://github.com/OfficeDev/generator-office) \- Microsoft Office 関連のプロジェクトを構築するための Yeoman ジェネレーターです。このプロジェクトは、Yeoman ジェネレーターを使って構築されました。
* [Office UI Fabric](https://github.com/OfficeDev/Office-UI-Fabric/) \- Office 365 のエクスペリエンスを構築するためのフロント エンドのフレームワークです。このプロジェクトは、Office の "外観" を使用しています。 
* [dev.office.com](http://dev.office.com) \- Office 開発に関連するドキュメント、サンプル、およびその他の役に立つ情報が見つかります。


## Copyright
Copyright (c) 2015 Microsoft.All rights reserved.



このプロジェクトでは、[Microsoft オープン ソース倫理規定](https://opensource.microsoft.com/codeofconduct/)が採用されています。詳細については、「[倫理規定の FAQ](https://opensource.microsoft.com/codeofconduct/faq/)」を参照してください。また、その他の質問やコメントがあれば、[opencode@microsoft.com](mailto:opencode@microsoft.com) までお問い合わせください。
