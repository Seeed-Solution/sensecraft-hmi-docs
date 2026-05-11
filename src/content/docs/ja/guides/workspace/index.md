---
description: SenseCraft HMI のワークスペースの使い方を学びます。基本描画、高度なコンポーネント、データ連携、カスタムウィジェットを含みます。
title: Canvas Designer
last_update:
  date: 11/05/2026
  author:dimo
---

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/weather.jpg" style={{width:800, height:'auto'}}/></div> -->

<a id="overview"></a>

このセクションでは、Canvas Designer を使ってデザインを作成する方法を学びます。まず画面レイアウトに慣れ、その後は最初のデザインを一つずつ作成しながら、最後に各コンポーネントの機能を紹介して、よりスムーズにデザインを始められるようにします。

<a id="workspace-layout"></a>
## Canvas Designer を理解する

Canvas Designer を初めて開いたら、まずは 5 つの主要なエリアとして捉えるとわかりやすくなります。Sidebar、Top Toolbar、Inspector Panel、キャンバス操作、キャンバス設定の 5 つです。先にそれぞれの役割を把握しておくと、その後のデザイン作成がぐっと進めやすくなります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/140.png" style={{width:800, height:'auto'}}/></div>

1. Sidebar：左側には **Data Widgets**、**Basic Widgets**、**Component Widgets**、**My Widgets** の 4 つの主要セクションがあります。デザインを作るときに最もよく使うエリアです。
- **Data Widgets** では、天気、カレンダー、センサー情報などをすばやく表示できる、データ連携済みのウィジェットを利用できます。
- **Basic Widgets** では、テキスト、画像、日付、基本図形、バーコード、QR コードなどの基本的なデザイン要素を利用できます。
- **Component Widgets** では、チャート、ダッシュボード、カレンダー、時計など、より表現力の高いウィジェットを利用できます。
- **My Widgets** では、自分でよく使うカスタムウィジェットを保存・管理でき、あとで再利用しやすくなります。

2. Top Toolbar：キャンバス上部には、コピー、回転、削除、レイヤーの前後移動、グループ化、書式コピーなど、よく使う編集ツールが並んでいます。レイアウト調整をより効率よく行えます。
これらのツールの多くは、キャンバス上で右クリックしてすばやく呼び出すこともできます。

3. Inspector Panel：キャンバス上のウィジェットを選択すると、右側にそのウィジェットの設定パネルが表示されます。ここでは、テキスト、スタイル、データ項目、そのほかの設定を調整できます。

4. キャンバス操作：右上には主要な操作ボタンがあります。ここからデザインのプレビュー、変更の適用、コミュニティへの公開を行えます。

5. キャンバス設定：キャンバス下部では、ディザリングカラー、縦向き・横向き表示、キャンバスのピクセルサイズ、ズーム倍率などの表示関連設定を調整できます。対象デバイスでの見え方を確認しやすくなります。

---

Canvas Designer に慣れてきたところで、次は最初のデザインを作ってみましょう。

---
<a id="build-your-page"></a>
## デザインの作成方法
Canvas Designer のレイアウトを理解したところで、次はシンプルな時計デザインを例に、手順に沿ってデザインを作成していきましょう。

次の例では reTerminal E1002 を使って、シンプルな天気と時計のデザインを作成します。お使いのデバイスモデルに合わせて同じ流れで操作できます。

### ステップ 1：新しいデザインを作成

**1.** はじめに、新しいプロジェクトを作成します。Sidebar の **Canvas Designer** をクリックしてデザイン一覧ページを開くと、これまでに作成したデザインが一覧表示されます。

**2.** 左上の **+ New** ボタンをクリックして新しいキャンバスを作成します。あるいは Sidebar 内の **Canvas Designer** にマウスを重ねると、クイック追加ボタンが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/136.png" style={{width:800, height:'auto'}}/></div>

**3.** ポップアップウィンドウで **New Design** を選択すると新規プロジェクトを開始できます。下部の **Import Image** を使えば、既存画像を取り込むこともできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/137.png" style={{width:800, height:'auto'}}/></div>

**4.** **New Design** を選択したら、プロジェクト名を入力し、デバイス一覧から対象デバイスを選び、**Confirm** をクリックします。空白のキャンバスが表示され、カスタムインターフェースの設計を開始できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/138.png" style={{width:800, height:'auto'}}/></div>

### ステップ 2：デザインを編集

**1.** **Data Widgets** セクションをクリックし、**Weather** コンポーネントを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/118.png" style={{width:800, height:'auto'}}/></div>

**2.** **Location** 入力欄にお住まいの都市名を入力し、下部でクイックレイアウトを選択します。

**3.** **Load Data** をクリックします。右側にプレビューが表示されるので、右下の **Confirm** をクリックしてキャンバスに配置します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/119.png" style={{width:800, height:'auto'}}/></div>

**4.** **Basic Widgets** セクションをクリックし、**Date/Time** コンポーネントを選択します。キャンバスに日付表示ボックスが自動的に追加されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/120.png" style={{width:800, height:'auto'}}/></div>

**5.** **Component Widgets** セクションをクリックし、**Clock** コンポーネントを選択します。キャンバスに円形の時計が自動的に追加されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/121.png" style={{width:800, height:'auto'}}/></div>

**6.** 各コンポーネントのレイアウトを少し調整して、デザイン全体をより整った見た目にします。右上の **Preview** をクリックすると結果を確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/122.png" style={{width:800, height:'auto'}}/></div>

**7.** 右上の **Apply** をクリックして、デザインをプロジェクトに保存します。

**8.** 仕上がりに満足し、他のユーザーにも見てもらいたい場合は、右上の **Publish** をクリックしてコミュニティに公開できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/123.png" style={{width:800, height:'auto'}}/></div>

---

ここまでで自分のデザインを作成し、デバイスに適用する流れをひと通り体験できました。次のセクションでは、各主要ウィジェットカテゴリの使い方を順番に説明します。紹介する順序は **Basic**、**Component**、**My Widgets**、**Data Widgets** です。まずは最も基本となる **Basic Widgets** から見ていきましょう。

---

<a id="data"></a>
## Data Widgets

**Data Widgets** セクションでは、外部データを接続してデザイン内に表示できます。組み込みデータコネクタでもカスタムデータソースでも、動的な可視化ダッシュボードを構築できます。

--- 

### Device Sensors Widget
**Device Sensors** 機能では、デバイスセンサーのデータを読み取り、そのまま画面に表示できます。

**ステップ 1.** **New Design** キャンバス内で左側の **Data Widgets** タブをクリックし、**Device Sensors** コンポーネントを探します。

**ステップ 2.** 監視したいデバイスを選択し、**Load Sensor Data** ボタンをクリックします。右側に **Available Fields** が表示されます。

**ステップ 3.** 表示したいセンサーデータやテキスト内容をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_9.png" style={{width:800, height:'auto'}}/></div>

**ステップ 4.** ツリー構造内で表示したいデータフィールドにチェックを入れると、選択内容が自動的に右側のキャンバスへ表示されます。

**ステップ 5.** キャンバス右上の **Apply** ボタンをクリックし、データをデバイスへ反映します。
---

### SenseCAP Widget
**SenseCAP** 機能を使うと、SenseCAP アカウントに接続して、紐付けられたセンサーのリアルタイムデータを取得できます。

**ステップ 1.** **New Design** キャンバス内で左側の **Data Widgets** タブをクリックし、**SenseCAP** コンポーネントを探します。

**ステップ 2.** 対応する入力欄に SenseCAP の **Access ID** を入力します。

**ステップ 3.** 対応する入力欄に SenseCAP の **Access Key** を入力します。

**ステップ 4.** **Devices** リストから監視したいデバイスを選択すると、右側に対応するセンサーデータが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_sensecap.png" style={{width:800, height:'auto'}}/></div>

**ステップ 5.** キャンバス右上の **Apply** ボタンをクリックし、データをデバイスへ反映します。

--- 

### Weather Widget
**Weather** 機能では、指定した都市のライブ天気表示を作成できます。プリセットフィールドを使った既成レイアウトをすばやく生成することも、表示データや単位を細かく調整することもできます。

**ステップ 1.** **New Design** キャンバス内で左側の **Data Widgets** タブをクリックし、**Weather** コンポーネントを探します。

**ステップ 2.** 最初の入力欄に調べたい都市名を入力します。

**ステップ 3.** **Quick presets** で既定の天気レイアウトとフィールド構成を選びます。**Units** セクションで表示単位を選択し、必要に応じて **Advanced** に切り替えて詳細設定します。

**ステップ 4.** **Load Data** をクリックして右側にプレビューを生成し、問題なければ **Confirm** をクリックして天気レイアウトをキャンバスに配置します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_weather.png" style={{width:800, height:'auto'}}/></div>

**ステップ 5.** キャンバス右上の **Apply** ボタンをクリックし、データをデバイスへ反映します。

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
**Stock** 機能では、ページ上にリアルタイム株価情報を表示できます。銘柄コードを検索し、現在価格または K 線チャートを表示するか選択できます。

**ステップ 1.** **New Design** キャンバス内で左側の **Data Widgets** タブをクリックし、**Stock** コンポーネントを探します。

**ステップ 2.** 最初の入力欄に Stock API キーを入力します。まだ持っていない場合は、画面内のリンクから取得方法を確認できます。

**ステップ 3.** **Stock Symbol** 欄に追跡したい銘柄コードを入力し、**Display** セクションで **Current Price** や **K-line Chart** などの表示タイプを選択します。

**ステップ 4.** **Search** をクリックして右側にプレビューを生成し、確認後 **Confirm** をクリックして株価レイアウトをキャンバスへ追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_stock.png" style={{width:800, height:'auto'}}/></div>

**ステップ 5.** キャンバス右上の **Apply** ボタンをクリックし、データをデバイスへ反映します。

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
**CoinMarketCap** 機能では、暗号資産の市場データをデザインに表示できます。シンボルを入力するだけで、対象資産のライブデータウィジェットを素早く生成できます。

**ステップ 1.** **New Design** キャンバス内で左側の **Data Widgets** タブをクリックし、**CoinMarketCap** コンポーネントを探します。

**ステップ 2.** 最初の入力欄に CoinMarketCap API キーを入力します。まだ持っていない場合は、画面内リンクから取得方法を確認してください。

**ステップ 3.** **Cryptocurrency Symbol** 欄に監視したい暗号資産シンボルを入力します。

**ステップ 4.** **Search** をクリックして右側にプレビューを生成し、確認後 **Confirm** をクリックして暗号資産レイアウトをキャンバスに配置します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_coinmarketmap.png" style={{width:800, height:'auto'}}/></div>

**ステップ 5.** キャンバス右上の **Apply** ボタンをクリックし、データをデバイスへ反映します。

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
**GitHub** 機能では、ユーザー情報やリポジトリ情報をレイアウト上に直接表示できます。プロフィール統計、リポジトリメタデータ、関連アクティビティ項目などが対象です。

**ステップ 1.** **New Design** キャンバス内で左側の **Data Widgets** タブをクリックし、**GitHub** コンポーネントを探します。

**ステップ 2.** 最初の入力欄に GitHub API キーを入力します。まだ持っていない場合は、画面内リンクから取得方法を確認してください。

**ステップ 3.** **GitHub User** 欄に監視したい GitHub ユーザー名を入力します。

**ステップ 4.** **User Info** を選ぶと、プロフィール関連データを表示できます。ユーザー名を入力すると、右側に選択可能なフィールドが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_github1.png" style={{width:800, height:'auto'}}/></div>

**ステップ 5.** **Repository Info** を選ぶこともできます。リポジトリ名を入力して **Search** をクリックし、結果から対象リポジトリを選択すると、右側に利用可能なフィールドが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_github2.png" style={{width:800, height:'auto'}}/></div>

**ステップ 6.** キャンバス右上の **Apply** ボタンをクリックし、データをデバイスへ反映します。
---

### YouTube Widget
**YouTube** 機能では、チャンネル名、登録者数指標、そのほか公開フィールドなど、チャンネルレベルのデータを表示できます。

**ステップ 1.** **New Design** キャンバス内で左側の **Data Widgets** タブをクリックし、**YouTube** コンポーネントを探します。

**ステップ 2.** 最初の入力欄に YouTube API キーを入力します。まだ持っていない場合は、画面内リンクから取得方法を確認してください。

**ステップ 3.** 下の入力欄に **Channel ID** または **Handle** を入力します。

**ステップ 4.** **Search** をクリックしてチャンネルデータを読み込みます。右側のプレビューを確認後、**Confirm** をクリックしてチャンネル情報レイアウトをキャンバスに配置します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_youtube.png" style={{width:800, height:'auto'}}/></div>

**ステップ 5.** キャンバス右上の **Apply** ボタンをクリックし、データをデバイスへ反映します。

--- 

### ZenQuotes Widget
**ZenQuotes** 機能では、インスピレーションを与える名言をデザインに追加でき、種類、著者、キーワードでの絞り込みにも対応しています。

**ステップ 1.** **New Design** キャンバス内で左側の **Data Widgets** タブをクリックし、**ZenQuotes** コンポーネントを探します。

**ステップ 2.** API キーを持っている場合は最初の入力欄に入力してください。API キーがなくても基本モードで利用できます。

**ステップ 3.** API キーを入力した場合は、**Quote Type**、**Filter by Author**、**Keyword** を使ってさらに絞り込みできます。

**ステップ 4.** **Load Quotes** をクリックして右側にプレビューを生成し、確認後 **Confirm** をクリックして名言レイアウトをキャンバスに配置します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_zenquotes.png" style={{width:800, height:'auto'}}/></div>

**ステップ 5.** キャンバス右上の **Apply** ボタンをクリックし、データをデバイスへ反映します。

--- 

### Todoist Widget
**Todoist** 機能では、Todoist アカウントのタスクデータを表示でき、ePaper 画面で生産性ダッシュボードを構築するのに適しています。

**ステップ 1.** **New Design** キャンバス内で左側の **Data Widgets** タブをクリックし、**Todoist** コンポーネントを探します。

**ステップ 2.** 最初の入力欄に Todoist API キーを入力します。まだ持っていない場合は、画面内リンクから取得方法を確認してください。

**ステップ 3.** 用途に応じて、タスクタイプやクエリ項目などの利用可能なフィルタ条件を任意で設定します。

**ステップ 4.** **Load All Tasks** をクリックして右側にタスクプレビューを生成し、確認後 **Confirm** をクリックしてタスクレイアウトをキャンバスに配置します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_todolist.png" style={{width:800, height:'auto'}}/></div>

**ステップ 5.** キャンバス右上の **Apply** ボタンをクリックし、データをデバイスへ反映します。

--- 

### Google Calendar Widget
**Google Calendar** 機能では、Google アカウントのカレンダーイベントを表示し、イベントタイプや期間で絞り込むことができます。

**ステップ 1.** **New Design** キャンバス内で左側の **Data Widgets** タブをクリックし、**Google Calendar** コンポーネントを探します。

**ステップ 2.** Google でサインインしている場合、カレンダーがすでに連携済みのことがあります。**Re-authorize with Google** をクリックして再認証したり、**Revoke Authorization** でアクセス権を解除することもできます。

**ステップ 3.** **Event Type** や **Time Range** などのフィルタを設定し、表示するイベントを絞り込みます。

:::tip
**Event Type** で **Today** または **Specific Day** を選択しても、その期間に該当するイベントが Google Calendar に設定されていない場合、**Load Data** をクリックしたあと右側のプレビューが空になることがあります。
その場合は、まず **Week** または **Weekdays** を試してください。これらのオプションは通常どおり読み込まれ、内容が表示されます。
:::

**ステップ 4.** **Load Data** をクリックして右側にプレビューを生成し、確認後 **Confirm** をクリックしてカレンダーレイアウトをキャンバスに配置します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_caelndar.png" style={{width:800, height:'auto'}}/></div>

**ステップ 5.** キャンバス右上の **Apply** ボタンをクリックし、データをデバイスへ反映します。

--- 

### RSS Widget
RSS Widget は、ニュースサイトやブログ、告知ページなどの RSS フィード更新を画面に表示できます。
最新の見出しを手動更新なしで自動反映したい場合に、このウィジェットが適しています。

**ステップ 1.** **New Design** キャンバス内で左側の **Data Widgets** タブをクリックし、**RSS Feed** コンポーネントを探します。

**ステップ 2.** Inspector Panel欄に、取得したいデータの API アドレス（URL）を入力します。例：

:::note[URL 例]
[https://feeds.bbci.co.uk/news/world/rss.xml](https://feeds.bbci.co.uk/news/world/rss.xml)
:::

**ステップ 3.** システムが返されたデータを自動解析し、下部に **Tree Structure** として展開します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_6.png" style={{width:800, height:'auto'}}/></div>

**ステップ 4.** ツリー構造で表示したいデータフィールドにチェックを入れると、選択内容が自動的に右側キャンバスへ表示されます。

**ステップ 5.** キャンバス右上の **Apply** ボタンをクリックし、データをデバイスへ反映します。

---
### HTML Widget
HTML Widget は、Web ページやアップロードした HTML コンテンツをデバイス上に直接表示できます。
既に作成済みの HTML レイアウト（ダッシュボード、社内ページ、カスタム画面など）をそのまま表示したい場合に適しています。

**ステップ 1.** **New Design** キャンバス内で左側の **Data Widgets** タブをクリックし、**HTML** コンポーネントを探します。

**ステップ 2.** Inspector Panel欄に、取得したい内容の API アドレス（URL）を入力します。例：

:::note[URL 例]
[https://www.windy.com/](https://www.windy.com/)
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_7.png" style={{width:800, height:'auto'}}/></div>

また、**File Upload** をクリックして独自の HTML ファイルをアップロードすることもできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_8.png" style={{width:800, height:'auto'}}/></div>

**ステップ 3.** システムが API から返されたデータを自動解析し、下部に **Tree Structure** として展開します。

**ステップ 4.** ツリー構造で表示したいデータフィールドにチェックを入れると、選択内容が自動的に右側キャンバスへ表示されます。

**ステップ 5.** キャンバス右上の **Apply** ボタンをクリックし、データをデバイスへ反映します。

---

### HackerNews Widget
HackerNews Widget は、Hacker News の Top、New、Best、Ask、Show、Jobs などの一覧を取得できます。
コミュニティで注目されている技術トピックを定期的に表示したい軽量ニュースパネルに適しています。

**ステップ 1.** **New Design** キャンバス内で左側の **Data Widgets** タブをクリックし、**HackerNews** コンポーネントを探します。

**ステップ 2.** **Data Source** のドロップダウンで、**Top Stories**、**Newest**、**Best**、**Ask HN**、**Show HN**、**Job** などのソースを選択します。

**ステップ 3.** **Number of Stories** で読み込む件数を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_HackerNews.png" style={{width:800, height:'auto'}}/></div>

**ステップ 4.** 下部の **Load Data** ボタンをクリックすると、右側にプレビューが生成されます。内容を確認したら **Confirm** をクリックしてページへ追加します。

**ステップ 5.** キャンバス右上の **Apply** ボタンをクリックし、データをデバイスへ反映します。

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
Reddit Widget は、指定した subreddit の投稿を任意の並び順で表示できます。
gadgets や AI、ローカルコミュニティなど、特定テーマの更新を自動反映したい場合に適しています。

**ステップ 1.** **New Design** キャンバス内で左側の **Data Widgets** タブをクリックし、**Reddit** コンポーネントを探します。

**ステップ 2.** **Subreddit** 入力欄に、`r/` を付けずに対象コミュニティ名を入力します。例：**gadgets**。

**ステップ 3.** **Sort** セクションで、**Hot**、**New**、**Top**、**Rising** などの並び順を選択します。

**ステップ 4.** **Number of Stories** で読み込む投稿数を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_Reddit.png" style={{width:800, height:'auto'}}/></div>

**ステップ 5.** 下部の **Load Data** ボタンをクリックすると、右側にプレビューが生成されます。内容を確認したら **Confirm** をクリックしてページへ追加します。

**ステップ 6.** キャンバス右上の **Apply** ボタンをクリックし、データをデバイスへ反映します。

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

**External Data Source** コンポーネントでは、API を使って外部データを取得し、ダッシュボード上に可視化できます。

**ステップ 1.** **New Design** キャンバス内で左側の **Data Widgets** タブをクリックし、下部にある **External Data Source** コンポーネントを探します。

**ステップ 2.** Inspector Panel欄に、取得したいデータの API アドレス（URL）を入力します。

**ステップ 3.** システムが返されたデータを自動解析し、下部に **Tree Structure** として展開します。

**ステップ 4.** ツリー構造で表示したいデータフィールドにチェックを入れると、選択内容が自動的に右側キャンバスへ表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/w4.jpg" style={{width:800, height:'auto'}}/></div>

**ステップ 5.** キャンバス右上の **Apply** ボタンをクリックし、データをデバイスへ反映します。

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

外部データの取得に加えて、**Push to SenseCraft** コンポーネントも用意されています。これにより、Arduino や ESP32 コードなどのハードウェアプログラムから、プラットフォームへ能動的にデータを送信できます。

**ステップ 1.** デバイスが SenseCraft プラットフォームに接続され、データを送信していることを確認します。

**ステップ 2.** **Data Widgets** タブから **Push to SenseCraft** コンポーネントを選択します。

**ステップ 3.** サンプルコードを使ってテストすると、データがすぐにキャンバスへ表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/w8.jpg" style={{width:800, height:'auto'}}/></div>

**ステップ 4.** 基本テキスト機能を使って、データへラベルや説明を追加します。

**ステップ 5.** キャンバス右上の **Apply** ボタンをクリックし、データをデバイスへ反映します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/w9.jpg" style={{width:800, height:'auto'}}/></div>

この機能は、温度、湿度、照度などのセンサーデータをリアルタイム監視する用途に特に有効です。

---

<a id="basic"></a>
## Basic Widgets

**Basic Widgets** セクションでは、テキスト、画像、日付、単純な図形、さらにはバーコードや QR コードなど、基本的なデザイン要素を扱えます。

以下の表は、Basic セクションのコンポーネントをカテゴリ別にまとめたものです：

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
次に、以下の手順に沿って Basic セクションのコンポーネントを使い、シンプルな時計ページを作成してみましょう。

**ステップ 1.** Basic タブ内の **Date/Time** コンポーネントをクリックすると、自動的にキャンバスへ追加されます。

**ステップ 2.** コンポーネントをクリックすると、右側サイドバーにプロパティが表示され、日付/時刻フォーマット、フォントサイズ、色などを調整できます。

**ステップ 3.** プロパティバーでフォーマットを `YYYY-MM-DD HH:mm:ss` などに変更します。

**ステップ 4.** コンポーネントの選択を外すかキャンバスをクリックすると、指定した形式で日時表示が更新されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/124.png" style={{width:800, height:'auto'}}/></div>

**ステップ 5.** **Text** コンポーネントを選択し、表示したいテキストを入力します。右側のプロパティパネルでフォントサイズや文字色などを調整できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/125.png" style={{width:800, height:'auto'}}/></div>

**ステップ 6.** **Rectangle** コンポーネントを選択して背景図形として使用します。右側のプロパティパネルでサイズや色を調整できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/126.png" style={{width:800, height:'auto'}}/></div>

**ステップ 7.** **Image** コンポーネントを選択します。右側のプロパティパネルで画像 URL や Base64 データを入力できます。使いたい画像がない場合は、**Icon Library** から適したアイコンを探すこともできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/127.png" style={{width:800, height:'auto'}}/></div>

**ステップ 8.** 各コンポーネントの位置を調整し、全体のレイアウトを整えます。必要に応じて、画面下部のキャンバス設定を使って外観をさらに調整できます。

**ステップ 9.** **Preview** をクリックしてページの見え方を確認します。問題なければ **Apply** をクリックしてページをデバイスに送信します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/128.png" style={{width:800, height:'auto'}}/></div>

---

<a id="component"></a>
## Component Widgets

**Component Widgets** セクションには、チャート、ダッシュボード、カレンダー、時計など、より複雑なウィジェットが含まれます。Basic タブの強化版と考えると分かりやすいです。

以下の表は、Component セクションのウィジェットをカテゴリ別にまとめたものです：

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
次に、前の Basic セクションの例を引き続き使い、Component ウィジェットで時計ページをさらに仕上げていきます。

**ステップ 1.** Component タブ内の **Calendar** コンポーネントをクリックしてキャンバスへ追加します。

**ステップ 2.** コンポーネントをクリックし、表示日付や配色などのプロパティを設定します。

**ステップ 3.** キャンバスをクリックすると、選択した設定に合わせてカレンダーが更新されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/129.png" style={{width:800, height:'auto'}}/></div>

**ステップ 4.** **Clock** コンポーネントをキャンバスに追加し、右側のプロパティパネルでスタイル、サイズ、色などを調整します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/130.png" style={{width:800, height:'auto'}}/></div>

**ステップ 5.** 各コンポーネントの位置を調整して、より見やすいレイアウトに整えます。必要に応じて、画面下部のキャンバス設定で全体の見た目も調整できます。

**ステップ 6.** **Preview** をクリックしてページの見え方を確認します。問題なければ **Apply** をクリックしてページをデバイスに送信します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/131.png" style={{width:800, height:'auto'}}/></div>

---

<a id="my-widgets"></a>
## My Widgets

**My Widgets** セクションはカスタムコンポーネント用です。頻繁に使うデータソースがある場合は、右下の **Add to My Widgets** ボタンをクリックして個人ウィジェットライブラリへ保存できます。次回からは API を再設定せずに、そのままドラッグ＆ドロップで利用できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_worksp_advance_2.png" style={{width:800, height:'auto'}}/></div>














