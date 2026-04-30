---
description: SenseCraft HMI のワークスペースの使い方を学びます。基本描画、高度なコンポーネント、データ連携、カスタムウィジェットを含みます。
title: Workspace ガイド
---

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/weather.jpg" style={{width:800, height:'auto'}}/></div> -->

Workspace は主に **Data**、**Basic**、**Component**、**My widgets** の 4 つのセクションで構成されています。各セクションにはさまざまな組み込みコンポーネントが含まれており、インターフェースを設計・カスタマイズできます。Google Calendar、YouTube、GitHub などの標準データソースとのシームレスな連携を標準で提供するだけでなく、より広範なカスタムデータ接続にも対応しています。

---

## 新しいデザインを作成

**ステップ 1.** 左側サイドバーの **Workspace** をクリックしてワークスペースキャンバスに入ります。以前に作成したデザインがここに表示されます。

**ステップ 2.** 左上の **+ New** ボタンをクリックして新しいキャンバスを作成します。あるいは、マウスを "Workspace" に重ねるとクイック追加ボタンが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_1.png" style={{width:800, height:'auto'}}/></div>

**ステップ 3.** ポップアップウィンドウで **New Design** を選ぶと新規プロジェクトを開始できます。下の **Import Image** を使えば既存画像を取り込むこともできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_2.png" style={{width:800, height:'auto'}}/></div>

**ステップ 4.** **New Design** を選択した後、プロジェクト名を入力し、デバイス一覧から対象デバイスを選び、**Confirm** をクリックします。空のキャンバスが表示され、カスタムインターフェースの設計を開始できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_3.png" style={{width:800, height:'auto'}}/></div>

---

## Data

これは SenseCraft の最も特長的な機能のひとつで、外部データを簡単に接続できます。組み込みデータコネクタでもカスタムデータソースでも、強力な可視化ダッシュボードを素早く構築できます。

--- 

### Device Sensors Function

**Device Sensors** 機能では、デバイスセンサーのデータを読み取り、そのまま画面に表示できます。

**ステップ 1.** **New Design** キャンバス内で左側の **Data** タブをクリックし、**Device Sensors** コンポーネントを探します。

**ステップ 2.** 監視したいデバイスを選択し、**Load Sensor Data** ボタンをクリックします。右側に **Available Fields** が表示されます。

**ステップ 3.** 表示したいセンサーデータやテキスト内容をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_9.png" style={{width:800, height:'auto'}}/></div>

**ステップ 4.** ツリー構造内で表示したいデータフィールドにチェックを入れると、選択内容が自動的に右側のキャンバスへ表示されます。

**ステップ 5.** キャンバス右上の **Apply** ボタンをクリックし、データをデバイスへ反映します。

--- 

### SenseCAP Function

**SenseCAP** 機能を使うと、SenseCAP アカウントに接続して、紐付けられたセンサーのリアルタイムデータを取得できます。

**ステップ 1.** **New Design** キャンバス内で左側の **Data** タブをクリックし、**SenseCAP** コンポーネントを探します。

**ステップ 2.** 対応する入力欄に SenseCAP の **Access ID** を入力します。

**ステップ 3.** 対応する入力欄に SenseCAP の **Access Key** を入力します。

**ステップ 4.** **Devices** リストから監視したいデバイスを選択すると、右側に対応するセンサーデータが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_sensecap.png" style={{width:800, height:'auto'}}/></div>

**ステップ 5.** キャンバス右上の **Apply** ボタンをクリックし、データをデバイスへ反映します。

--- 

### Weather Function

**Weather** 機能では、指定した都市のライブ天気表示を作成できます。プリセットフィールドを使った既成レイアウトをすばやく生成することも、表示データや単位を細かく調整することもできます。

**ステップ 1.** **New Design** キャンバス内で左側の **Data** タブをクリックし、**Weather** コンポーネントを探します。

**ステップ 2.** 最初の入力欄に調べたい都市名を入力します。

**ステップ 3.** **Quick presets** で既定の天気レイアウトとフィールド構成を選びます。**Units** セクションで表示単位を選択し、必要に応じて **Advanced** に切り替えて詳細設定します。

**ステップ 4.** **Load Data** をクリックして右側にプレビューを生成し、問題なければ **Confirm** をクリックして天気レイアウトをキャンバスに配置します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_weather.png" style={{width:800, height:'auto'}}/></div>

**ステップ 5.** キャンバス右上の **Apply** ボタンをクリックし、データをデバイスへ反映します。

--- 

### Stock Function

**Stock** 機能では、ページ上にリアルタイム株価情報を表示できます。銘柄コードを検索し、現在価格または K 線チャートを表示するか選択できます。

**ステップ 1.** **New Design** キャンバス内で左側の **Data** タブをクリックし、**Stock** コンポーネントを探します。

**ステップ 2.** 最初の入力欄に Stock API キーを入力します。まだ持っていない場合は、画面内のリンクから取得方法を確認できます。

**ステップ 3.** **Stock Symbol** 欄に追跡したい銘柄コードを入力し、**Display** セクションで **Current Price** や **K-line Chart** などの表示タイプを選択します。

**ステップ 4.** **Search** をクリックして右側にプレビューを生成し、確認後 **Confirm** をクリックして株価レイアウトをキャンバスへ追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_stock.png" style={{width:800, height:'auto'}}/></div>

**ステップ 5.** キャンバス右上の **Apply** ボタンをクリックし、データをデバイスへ反映します。

--- 

### CoinMarketCap Function

**CoinMarketCap** 機能では、暗号資産の市場データをデザインに表示できます。シンボルを入力するだけで、対象資産のライブデータウィジェットを素早く生成できます。

**ステップ 1.** **New Design** キャンバス内で左側の **Data** タブをクリックし、**CoinMarketCap** コンポーネントを探します。

**ステップ 2.** 最初の入力欄に CoinMarketCap API キーを入力します。まだ持っていない場合は、画面内リンクから取得方法を確認してください。

**ステップ 3.** **Cryptocurrency Symbol** 欄に監視したい暗号資産シンボルを入力します。

**ステップ 4.** **Search** をクリックして右側にプレビューを生成し、確認後 **Confirm** をクリックして暗号資産レイアウトをキャンバスに配置します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_coinmarketmap.png" style={{width:800, height:'auto'}}/></div>

**ステップ 5.** キャンバス右上の **Apply** ボタンをクリックし、データをデバイスへ反映します。

--- 

### GitHub Function

**GitHub** 機能では、ユーザー情報やリポジトリ情報をレイアウト上に直接表示できます。プロフィール統計、リポジトリメタデータ、関連アクティビティ項目などが対象です。

**ステップ 1.** **New Design** キャンバス内で左側の **Data** タブをクリックし、**GitHub** コンポーネントを探します。

**ステップ 2.** 最初の入力欄に GitHub API キーを入力します。まだ持っていない場合は、画面内リンクから取得方法を確認してください。

**ステップ 3.** **GitHub User** 欄に監視したい GitHub ユーザー名を入力します。

**ステップ 4.** **User Info** を選ぶと、プロフィール関連データを表示できます。ユーザー名を入力すると、右側に選択可能なフィールドが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_github1.png" style={{width:800, height:'auto'}}/></div>

**ステップ 5.** **Repository Info** を選ぶこともできます。リポジトリ名を入力して **Search** をクリックし、結果から対象リポジトリを選択すると、右側に利用可能なフィールドが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_github2.png" style={{width:800, height:'auto'}}/></div>

**ステップ 6.** キャンバス右上の **Apply** ボタンをクリックし、データをデバイスへ反映します。

--- 

### YouTube Function

**YouTube** 機能では、チャンネル名、登録者数指標、そのほか公開フィールドなど、チャンネルレベルのデータを表示できます。

**ステップ 1.** **New Design** キャンバス内で左側の **Data** タブをクリックし、**YouTube** コンポーネントを探します。

**ステップ 2.** 最初の入力欄に YouTube API キーを入力します。まだ持っていない場合は、画面内リンクから取得方法を確認してください。

**ステップ 3.** 下の入力欄に **Channel ID** または **Handle** を入力します。

**ステップ 4.** **Search** をクリックしてチャンネルデータを読み込みます。右側のプレビューを確認後、**Confirm** をクリックしてチャンネル情報レイアウトをキャンバスに配置します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_youtube.png" style={{width:800, height:'auto'}}/></div>

**ステップ 5.** キャンバス右上の **Apply** ボタンをクリックし、データをデバイスへ反映します。

--- 

### ZenQuotes Function

**ZenQuotes** 機能では、インスピレーションを与える名言をデザインに追加でき、種類、著者、キーワードでの絞り込みにも対応しています。

**ステップ 1.** **New Design** キャンバス内で左側の **Data** タブをクリックし、**ZenQuotes** コンポーネントを探します。

**ステップ 2.** API キーを持っている場合は最初の入力欄に入力してください。API キーがなくても基本モードで利用できます。

**ステップ 3.** API キーを入力した場合は、**Quote Type**、**Filter by Author**、**Keyword** を使ってさらに絞り込みできます。

**ステップ 4.** **Load Quotes** をクリックして右側にプレビューを生成し、確認後 **Confirm** をクリックして名言レイアウトをキャンバスに配置します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_zenquotes.png" style={{width:800, height:'auto'}}/></div>

**ステップ 5.** キャンバス右上の **Apply** ボタンをクリックし、データをデバイスへ反映します。

--- 

### Todoist Function

**Todoist** 機能では、Todoist アカウントのタスクデータを表示でき、ePaper 画面で生産性ダッシュボードを構築するのに適しています。

**ステップ 1.** **New Design** キャンバス内で左側の **Data** タブをクリックし、**Todoist** コンポーネントを探します。

**ステップ 2.** 最初の入力欄に Todoist API キーを入力します。まだ持っていない場合は、画面内リンクから取得方法を確認してください。

**ステップ 3.** 用途に応じて、タスクタイプやクエリ項目などの利用可能なフィルタ条件を任意で設定します。

**ステップ 4.** **Load All Tasks** をクリックして右側にタスクプレビューを生成し、確認後 **Confirm** をクリックしてタスクレイアウトをキャンバスに配置します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_todolist.png" style={{width:800, height:'auto'}}/></div>

**ステップ 5.** キャンバス右上の **Apply** ボタンをクリックし、データをデバイスへ反映します。

--- 

### Google Calendar Function

**Google Calendar** 機能では、Google アカウントのカレンダーイベントを表示し、イベントタイプや期間で絞り込むことができます。

**ステップ 1.** **New Design** キャンバス内で左側の **Data** タブをクリックし、**Google Calendar** コンポーネントを探します。

**ステップ 2.** Google でサインインしている場合、カレンダーがすでに連携済みのことがあります。**Re-authorize with Google** をクリックして再認証したり、**Revoke Authorization** でアクセス権を解除することもできます。

**ステップ 3.** **Event Type** や **Time Range** などのフィルタを設定し、表示するイベントを絞り込みます。

**ステップ 4.** **Load Data** をクリックして右側にプレビューを生成し、確認後 **Confirm** をクリックしてカレンダーレイアウトをキャンバスに配置します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_caelndar.png" style={{width:800, height:'auto'}}/></div>

**ステップ 5.** キャンバス右上の **Apply** ボタンをクリックし、データをデバイスへ反映します。

--- 

### RSS Function

RSS 機能を使うと、デバイスをリアルタイム情報表示端末へ変えることができます。ニュース、ブログ、天気サービスなどの RSS フィードに接続することで、最新コンテンツを自動更新する動的表示を作成できます。

**ステップ 1.** **New Design** キャンバス内で左側の **Data** タブをクリックし、**RSS Feed** コンポーネントを探します。

**ステップ 2.** コンポーネント設定欄に、取得したいデータの API アドレス（URL）を入力します。例：

:::note[URL 例]
[https://feeds.bbci.co.uk/news/world/rss.xml](https://feeds.bbci.co.uk/news/world/rss.xml)
:::

**ステップ 3.** システムが返されたデータを自動解析し、下部に **Tree Structure** として展開します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_6.png" style={{width:800, height:'auto'}}/></div>

**ステップ 4.** ツリー構造で表示したいデータフィールドにチェックを入れると、選択内容が自動的に右側キャンバスへ表示されます。

**ステップ 5.** キャンバス右上の **Apply** ボタンをクリックし、データをデバイスへ反映します。

---
### HTML Function

**HTML** 機能では、Web コンテンツを ePaper ディスプレイデバイス上に直接表示できます。この強力な機能により、ダッシュボード、監視システム、ドキュメント、その他任意の Web コンテンツを表示する専用端末としてデバイスを活用できます。

**ステップ 1.** **New Design** キャンバス内で左側の **Data** タブをクリックし、**HTML** コンポーネントを探します。

**ステップ 2.** コンポーネント設定欄に、取得したい内容の API アドレス（URL）を入力します。例：

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

### HackerNews Function

**HackerNews** 機能を使うと、Hacker News の注目コンテンツをすばやくデザインに取り込めます。コンテンツソースを選び、読み込む件数も調整できるため、技術ニュース系の情報ボードに適しています。

**ステップ 1.** **New Design** キャンバス内で左側の **Data** タブをクリックし、**HackerNews** コンポーネントを探します。

**ステップ 2.** **Data Source** のドロップダウンで、**Top Stories**、**Newest**、**Best**、**Ask HN**、**Show HN**、**Job** などのソースを選択します。

**ステップ 3.** **Number of Stories** で読み込む件数を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_HackerNews.png" style={{width:800, height:'auto'}}/></div>

**ステップ 4.** 下部の **Load Data** ボタンをクリックすると、右側にプレビューが生成されます。内容を確認したら **Confirm** をクリックしてページへ追加します。

**ステップ 5.** キャンバス右上の **Apply** ボタンをクリックし、データをデバイスへ反映します。

---

### Reddit Function

**Reddit** 機能を使うと、指定したコミュニティの投稿をページ上に表示できます。対象の Subreddit、並び順、読み込む投稿数を選べるため、コミュニティ表示、情報集約、トピック更新ページに向いています。

**ステップ 1.** **New Design** キャンバス内で左側の **Data** タブをクリックし、**Reddit** コンポーネントを探します。

**ステップ 2.** **Subreddit** 入力欄に、`r/` を付けずに対象コミュニティ名を入力します。例：**gadgets**。

**ステップ 3.** **Sort** セクションで、**Hot**、**New**、**Top**、**Rising** などの並び順を選択します。

**ステップ 4.** **Number of Stories** で読み込む投稿数を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_Reddit.png" style={{width:800, height:'auto'}}/></div>

**ステップ 5.** 下部の **Load Data** ボタンをクリックすると、右側にプレビューが生成されます。内容を確認したら **Confirm** をクリックしてページへ追加します。

**ステップ 6.** キャンバス右上の **Apply** ボタンをクリックし、データをデバイスへ反映します。

---
### External Data Source 

**External Data Source** コンポーネントでは、API を使って外部データを取得し、ダッシュボード上に可視化できます。

**ステップ 1.** **New Design** キャンバス内で左側の **Data** タブをクリックし、下部にある **External Data Source** コンポーネントを探します。

**ステップ 2.** コンポーネント設定欄に、取得したいデータの API アドレス（URL）を入力します。

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

**ステップ 2.** **Data** タブから **Push to SenseCraft** コンポーネントを選択します。

**ステップ 3.** サンプルコードを使ってテストすると、データがすぐにキャンバスへ表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/w8.jpg" style={{width:800, height:'auto'}}/></div>

**ステップ 4.** 基本テキスト機能を使って、データへラベルや説明を追加します。

**ステップ 5.** キャンバス右上の **Apply** ボタンをクリックし、データをデバイスへ反映します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/w9.jpg" style={{width:800, height:'auto'}}/></div>

この機能は、温度、湿度、照度などのセンサーデータをリアルタイム監視する用途に特に有効です。

---

## Basic

**Basic** セクションでは、テキスト、画像、日付、単純な図形、さらにはバーコードや QR コードなど、基本的なデザイン要素を扱えます。

ここでは **Date/Time** コンポーネントを例に説明します：

**ステップ 1.** Basic タブ内の **Date/Time** コンポーネントをクリックすると、自動的にキャンバスへ追加されます。

**ステップ 2.** コンポーネントをクリックすると、右側サイドバーにプロパティが表示され、日付/時刻フォーマット、フォントサイズ、色などを調整できます。

**ステップ 3.** プロパティバーでフォーマットを `YYYY-MM-DD HH:mm:ss` などに変更します。

**ステップ 4.** コンポーネントの選択を外すかキャンバスをクリックすると、指定した形式で日時表示が更新されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_4.png" style={{width:800, height:'auto'}}/></div>

---

## Component

**Component** セクションには、チャート、ダッシュボード、カレンダー、時計など、より複雑なウィジェットが含まれます。Basic タブの強化版と考えると分かりやすいです。

ここでは **Calendar** コンポーネントを例に説明します：

**ステップ 1.** Component タブ内の **Calendar** コンポーネントをクリックしてキャンバスへ追加します。

**ステップ 2.** コンポーネントをクリックし、表示日付や配色などのプロパティを設定します。

**ステップ 3.** プロパティバーで日付を `2026-04-20` のように変更します。

**ステップ 4.** キャンバスをクリックすると、設定内容に合わせてカレンダーが更新されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_workspace_5.png" style={{width:800, height:'auto'}}/></div>

---

## My widgets

**My widgets** セクションはカスタムコンポーネント用です。頻繁に使うデータソースがある場合は、右下の **Add to My Widgets** ボタンをクリックして個人ウィジェットライブラリへ保存できます。次回からは API を再設定せずに、そのままドラッグ＆ドロップで利用できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_worksp_advance_2.png" style={{width:800, height:'auto'}}/></div>
