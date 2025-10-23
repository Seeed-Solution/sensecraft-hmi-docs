---
title: UI 設計機能
description: SenseCraft HMI プラットフォームの機能である UI 設計の使用方法を紹介します。
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/141.jpg" style={{width:800, height:'auto'}}/></div>

## はじめに

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) の UI 設計機能は、プラットフォームで最も強力で柔軟な機能であり、カスタムインターフェース、ダッシュボード、データ可視化を作成できます。Canvas を使用すると、デバイスセンサー、天気情報、株式データなど、さまざまなソースからの動的データと静的要素を組み合わせた美しいディスプレイを設計できます。

この包括的なガイドでは、Seeed デバイス用のプロフェッショナルなディスプレイを作成するための UI 設計機能の使用方法を説明します。基本的な図形やテキストから、リアルタイムデータウィジェットや既製のテンプレートまで、特定のニーズに合わせたカスタムインターフェースを構築するために必要なすべてを学びます。

この記事では、[reTerminal E1002](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1002/) を例として、SenseCraft HMI プラットフォームでこの機能を使用する方法を説明します。

## Canvas の使い始め

### Canvas 機能へのアクセス

ステップ1：以下の **[SenseCraft HMI](https://sensecraft.seeed.cc/hmi)** プラットフォームに移動します。

ステップ2：デバイスを接続するか、すでにペアリングされているデバイスを選択して使用します。

ステップ3：ページをまだ作成していない場合は、最初に新しい UI デザインページを作成する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_1.png" style={{width:1000, height:'auto'}}/></div>

### Canvas インターフェースの理解

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_2.png" style={{width:1000, height:'auto'}}/></div>

Canvas インターフェースは、いくつかの主要なセクションで構成されています：

1. **コンポーネントサイドバー**：左側のパネルで、基本、デバイス、データ、テンプレートに分類されたすべての利用可能な要素を含みます

2. **UI デザインエリア**：インターフェースを設計する中央のワークスペース

3. **ツールバー**：デザインツール、設定、フォーマットオプションを含む上部のバー

4. **プロパティパネル**：要素が選択されたときに表示され、外観と動作のカスタマイズが可能

5. **アクションボタン**：デザインのテストと適用のための保存、プレビュー、デプロイボタン

## 基本コンポーネント

基本セクションは、インターフェースレイアウトを作成するための基本的な要素を提供します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_3.png" style={{width:1000, height:'auto'}}/></div>

### テキスト

テキストコンポーネントを使用すると、キャンバスにラベル、タイトル、その他のテキストコンテンツを追加できます。

ステップ1：基本セクションの「テキスト」コンポーネントをクリックします。テキストは自動的にキャンバスの中央に配置されます

ステップ2：テキストを配置したい領域にドラッグします

ステップ3：「テキスト」という単語のデフォルトテキストボックスが表示されます

ステップ4：プロパティパネルを使用してカスタマイズします：

- フォントサイズ（デフォルトは 30px）

- テキストスタイル（太字、斜体、下線）

- 配置（左、中央、右）

- 色

- フォントファミリー

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_4.png" style={{width:1000, height:'auto'}}/></div>

### データ

データコンポーネントは、外部 API から取得した動的情報をキャンバスに直接表示するための強力なツールです。これにより、天気、株価、または Web API を通じて利用可能なその他の情報などのリアルタイムデータを統合できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_5.png" style={{width:1000, height:'auto'}}/></div>

ステップ1：基本セクションの「データ」コンポーネントをクリックします。キャンバスに「データ」という単語のプレースホルダーテキストボックスが表示されます。

ステップ2：「データ」コンポーネントを目的の位置にドラッグします。

ステップ3：コンポーネントが選択されている状態で、ツールバーの **データ設定** アイコン（チェーンリンクのように見える）をクリックして、構成パネルを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_6.png" style={{width:1000, height:'auto'}}/></div>

ステップ4：**データ設定** パネルで、外部データソースを構成します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_7.png" style={{width:400, height:'auto'}}/></div>

**4.1. 接続の確立**

これは、コンポーネントが情報を見つける場所を指示する場所です。

* **リモートデータ URL：** ここに完全な API エンドポイント URL を入力します。たとえば、株価ティッカーを構築している場合、金融データ API によって提供される URL を入力します。
* **リクエストヘッダー（オプション）：** 一部の API では、ヘッダーを介した認証が必要です。**+ カスタムヘッダーを追加** ボタンを使用して、`Authorization` トークンなどの必要なキーと値を追加します。
* **テストボタン：** URL を入力した後、常に **テスト** ボタンを使用してください。これにより、エンドポイントがすぐにクエリされ、生の JSON レスポンスが表示されます。これは、接続を検証し、使用するデータ構造を理解するために不可欠です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_8.png" style={{width:400, height:'auto'}}/></div>

テストボタンをクリックした後、URL が正しく入力されている場合、コンソールはテスト結果のすべての戻り値をすぐに表示します。この時点で、マウスで目的のエントリをクリックして、特定の値を直接取得できます。

**4.2. 特定の値の抽出**

API レスポンスには多くのデータが含まれていることがよくありますが、通常は一部だけが必要です。

* **データキー：** ドット表記を使用して、表示したいデータへの正確なパスを指定します。API が `{"stock":{"price": 150.75}}` を返す場合、データキーは価格を抽出するために `stock.price` になります。配列内のデータの場合、`forecast[0].temperature` のように括弧表記を使用します。
* **精度：** 数値データの場合、この設定は表示する小数点以下の桁数を制御します。`2` に設定すると、`150.7531` が `150.75` としてフォーマットされます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_9.png" style={{width:400, height:'auto'}}/></div>

**4.3. 表示用にデータを変換**

このセクションは実際には独立したモジュールです。セクション 4.1 および 4.2 とは本質的につながっていません。頻繁に使用される可能性のある事前定義されたデータ値のセットを提供し、ユーザーが自分で API を見つける必要なく、直接適用できるようにします。

選択できる組み込みトランスフォーマーは次のとおりです：

* **なし - 変換なし：** 生の抽出値を表示します。
* **日付フォーマット：** コンピュータのタイムスタンプ（例：`1678886400`）を人間が読める日付（例：「2023-03-15」）に変換します。
* **カスタム関数：** 柔軟性のための究極のツール。独自の JavaScript を記述して値を操作します。たとえば、`return '$' + value;` は株価の前にドル記号を付けます。
* **天気コードから説明へ：** API からの数値天気コードを「晴れ」や「雨」などの説明テキストに変換する専用関数。
* **バッテリーレベルステータス：** パーセンテージ（0-100）を「高」、「中」、「低」などのステータスにインテリジェントに変換します。
* **大きな数値フォーマット：** 読みやすさのために大きな数値を自動的に短縮します（例：`1250000` が「1.25M」になります）。
* **相対時間：** タイムスタンプを「5分前に更新」などの相対表現に変換し、データをより即時的に感じさせます。

これらの設定を組み合わせることで、外部データの取得、解釈、表示方法を正確に制御でき、真に動的で情報豊富なディスプレイを作成できます。

ステップ5：プロパティパネルを使用して、表示されるデータの外観をカスタマイズすることもできます：
- フォントサイズとスタイル
- 配置
- 色
- フォントファミリー

### 画像

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_10.png" style={{width:400, height:'auto'}}/></div>

画像コンポーネントを使用すると、キャンバスに画像を追加できます。ローカルアップロードまたは画像リンクを使用することを選択できます。

ステップ1：「画像」コンポーネントをクリック

ステップ2：プロパティパネルで、「アップロード」をクリックして画像を追加するか、画像 URL を入力

ステップ3：必要に応じてサイズと位置を調整

### 日付

日付コンポーネントは、さまざまな形式で構成できる日付、時刻、またはタイムスタンプを表示します。

ステップ1：データセクションの「日付」コンポーネントをクリック

ステップ2：コンポーネントは、デフォルトの日付形式（通常は MM/DD/YYYY）でキャンバスの中央に自動的に配置されます

ステップ3：ツールバーのカレンダーアイコンをクリックして、日付設定パネルを開く

ステップ4：日付設定パネルで：

- 日付ピッカーまたは入力フィールドを使用して特定の日付を設定

- ドロップダウンメニューから日付形式を選択（例：MM/DD/YYYY、DD/MM/YYYY、YYYY-MM-DD）

- タイムゾーンセクションでタイムゾーンを選択

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_11.png" style={{width:400, height:'auto'}}/></div>

ステップ5：プロパティパネルを使用してさらにカスタマイズ：

- フォントサイズとスタイル

- テキストの色

- 配置

- 背景（必要な場合）

:::note
データ設定内に、現在時刻を使用するスイッチがあります。デフォルトでは、スイッチはオフを表示し、デバイスが実際の時刻に基づいてこのコンポーネントの時刻を自動的に更新することを示します。オフボタンを押すと、この機能が無効になり、時刻は自動的に更新されず、代わりに固定値が表示されます。
:::

### 図形

SenseCraft HMI Canvas は、さまざまな図形コンポーネントを提供します：

- **長方形**：標準の長方形または正方形を作成

- **角丸長方形**：角が丸い長方形を作成

- **円**：完全な円を作成

- **楕円**：楕円形を作成

- **三角形**：三角形を作成

- **多角形**：多角形を作成

- **線**：直線を作成

- **描画**：フリーハンド描画を有効化

各図形について：

ステップ1：目的の図形コンポーネントをクリック

ステップ2：キャンバス上でクリックしてドラッグし、最終的な配置を決定

ステップ3：プロパティパネルを使用してカスタマイズ：

- 塗りつぶしの色

- 境界線の色と幅

- 不透明度

- 角の半径（長方形の場合）

- その他の図形固有のプロパティ

### QR コード

QR コードコンポーネントは、提供されたテキストまたは URL からスキャン可能な QR（Quick Response）コードを生成します。

ステップ1：コンポーネントリストの描画セクションの「QR コード」コンポーネントをクリック

ステップ2：コンポーネントがキャンバスにデフォルトの QR コードで配置されます

ステップ3：コンポーネントのツールバーの QR アイコンをクリックして、QR コードコンテンツパネルを開く

ステップ4：コンテンツパネルで、「QR コードコンテンツ」入力フィールドにエンコードしたいテキストまたは URL を入力します。キャンバス上の QR コードは入力に応じて自動的に更新されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_26.png" style={{width:400, height:'auto'}}/></div>

ステップ5：プロパティパネルを使用して、キャンバス上のコンポーネントのサイズと位置をさらにカスタマイズ

### バーコード

バーコードコンポーネントは、テキストまたは数字から標準のスキャン可能なバーコードを生成します。

ステップ1：コンポーネントリストの描画セクションの「バーコード」コンポーネントをクリック

ステップ2：コンポーネントがキャンバスにデフォルトのバーコードとその下に対応する数字が表示されて配置されます

ステップ3：コンポーネントのツールバーのバーアイコンをクリックして、バーコードコンテンツパネルを開く

ステップ4：コンテンツパネルで、「バーコードコンテンツ」入力フィールドにエンコードしたいテキストまたは数字を入力します。バーコードとその下のテキストは自動的に更新されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_27.png" style={{width:400, height:'auto'}}/></div>

ステップ5：プロパティパネルを使用して、キャンバス上のコンポーネントのサイズと位置をさらにカスタマイズ

## デバイスコンポーネント

デバイスセクションには、接続された Seeed reTerminal E シリーズ ePaper Display デバイスのセンサーデータを自動的に表示するコンポーネントが含まれています：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_12.png" style={{width:400, height:'auto'}}/></div>

### バッテリーコンポーネント

バッテリーコンポーネントは、接続されたデバイスの現在のバッテリーレベルを表示します。

ステップ1：「バッテリー」コンポーネントをクリック

ステップ2：コンポーネントは自動的にデバイスのバッテリーパーセンテージを表示します

ステップ3：プロパティパネルを使用してカスタマイズ：

- フォントサイズ（デフォルトは 30px）

- テキストスタイル（太字、斜体、下線）

- 配置（左、中央、右）

- 色

- フォントファミリー

### 温度コンポーネント

温度コンポーネントは、デバイスのセンサーからの現在の温度読み取り値を表示します。

ステップ1：「温度」コンポーネントをクリック

ステップ2：コンポーネントは自動的にデバイスからの温度読み取り値を表示します

ステップ3：プロパティパネルを使用してカスタマイズ：

- フォントサイズ（デフォルトは 30px）

- テキストスタイル（太字、斜体、下線）

- 配置（左、中央、右）

- 色

- フォントファミリー

### 湿度コンポーネント

湿度コンポーネントは、デバイスのセンサーからの現在の湿度読み取り値を表示します。

ステップ1：「湿度」コンポーネントをクリック

ステップ2：コンポーネントは自動的にデバイスからの湿度パーセンテージを表示します

ステップ3：プロパティパネルを使用してカスタマイズ：

- フォントサイズ（デフォルトは 30px）

- テキストスタイル（太字、斜体、下線）

- 配置（左、中央、右）

- 色

- フォントファミリー

### SenseCAP コンポーネント

以前に SenseCAP センサーを購入したことがある場合、SenseCraft-HMI はアカウント下の SenseCAP ノードからセンサー読み取り値を直接取得することをサポートしています。

ステップ1：「SenseCAP」コンポーネントをクリック

ステップ2：コンポーネントは自動的にキャンバスの中央に配置されます

ステップ3：プロパティペインで表示したいセンサー値を選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_13.png" style={{width:400, height:'auto'}}/></div>

ステップ4：プロパティパネルを使用してカスタマイズ：

- フォントサイズ（デフォルトは 30px）

- テキストスタイル（太字、斜体、下線）

- 配置（左、中央、右）

- 色

- フォントファミリー

## データコンポーネント

データセクションには、天気、株式などの情報を表示するために外部データソースに接続するコンポーネントが含まれています：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/96.png" style={{width:400, height:'auto'}}/></div>

### 天気

天気コンポーネントは、指定された場所の現在の天気情報を表示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_14.png" style={{width:400, height:'auto'}}/></div>

ステップ1：データセクションの「天気」コンポーネントをクリック

ステップ2：コンポーネントは、デフォルトの温度でキャンバスの中央に自動的に配置されます

ステップ3：上部のツールバーを使用して、天気表示オプションを構成：

- 位置フィールドから位置を選択（例：「New York」）

- ドロップダウンメニューから表示する天気データを選択：

  * 現在の天気（温度、状況）

  * 今日（今日の予報）

  * 2日目から7日目（将来の予報）

ステップ4：プロパティパネルを使用して外観をさらにカスタマイズ

### 天気アイコン

天気アイコンコンポーネントは、現在の天気状況の視覚的表現を表示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_15.png" style={{width:400, height:'auto'}}/></div>

ステップ1：データセクションの「天気アイコン」コンポーネントをクリック

ステップ2：コンポーネントは自動的にキャンバスの中央に配置されます

ステップ3：上部のツールバーを使用して、位置フィールドから位置を選択（例：「New York」）

ステップ4：プロパティパネルを使用してカスタマイズ：
- サイズと位置
- アイコンスタイル

### GitHub

GitHub コンポーネントは、GitHub ユーザープロフィールに関する情報を表示します。

ステップ1：データセクションの「GitHub」コンポーネントをクリック

ステップ2：コンポーネントは、「Seeed Studio」を表示するデフォルトテキストでキャンバスの中央に自動的に配置されます

ステップ3：ツールバーに、GitHub ユーザー名フィールド（例：「seeed-studio」）とドロップダウンメニューが表示されます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_16.png" style={{width:400, height:'auto'}}/></div>

ステップ4：ここで、[GitHub アカウントからトークンをリクエスト](https://github.com/settings/tokens)する必要があります。SenseCraft HMI は、このトークンを使用して、表示用に提供した GitHub 名に関連する情報を取得します。次に、フィールドに有効な GitHub ユーザー名を入力し、表示される GitHub ユーザー構成パネルで「検証」をクリックします。

ステップ5：「表示名」（または類似）というラベルの付いたドロップダウンメニューから、表示する GitHub ユーザー情報を選択：

- 表示名（ユーザーの表示名を表示）

- ユーザー名（ユーザーの GitHub ハンドルを表示）

- フォロワー（フォロワー数を表示）

- フォロー中（フォロー中のユーザー数を表示）

- 公開リポジトリ（公開リポジトリ数を表示）

- 公開 Gist（公開 gist 数を表示）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_18.png" style={{width:400, height:'auto'}}/></div>

ステップ6：プロパティパネルを使用して GitHub コンポーネントの外観をカスタマイズ

:::note
- GitHub コンポーネントは、リアルタイム GitHub データを取得するために、デバイスがインターネットアクセスを持っている必要があります。

- GitHub API にはレート制限があるため、過度の更新によりコンポーネントが一時的に無効になる可能性があります。
:::

:::tip
テスト用にこれらの GitHub ユーザー名を試してください：

- seeed-studio（Seeed Studio の公式 GitHub）

- torvalds（Linus Torvalds、Linux の作成者）

- microsoft（Microsoft の公式 GitHub）

- google（Google の公式 GitHub）
:::

### GitHub リポジトリ

GitHub リポジトリコンポーネントは、特定の GitHub リポジトリに関する情報を表示します。

ステップ1：データセクションの「GitHub リポジトリ」コンポーネントをクリック

ステップ2：コンポーネントは、「wiki-documents」を表示するデフォルトテキストでキャンバスの中央に自動的に配置されます

ステップ3：表示される GitHub リポジトリ構成パネルで：

- 現在のユーザーとリポジトリのステータスを確認できます

- キーワードを入力してリポジトリを検索するか、フィールドを空のままにしてユーザーのすべてのリポジトリを表示

- 「ユーザー名/リポジトリ」形式で特定のリポジトリを手動で入力（例：「Seeed-Studio/wiki-documents」）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_17.png" style={{width:400, height:'auto'}}/></div>

ステップ4：「検索」をクリックしてリポジトリを見つけて検証

ステップ5：ツールバーのドロップダウンメニューから、表示するリポジトリ情報を選択：

- 名前（リポジトリ名を表示）

- フルネーム（ユーザー名/リポジトリ形式を表示）

- スター（スター数を表示）

- フォーク（フォーク数を表示）

- ウォッチャー（ウォッチャー数を表示）

- 説明（リポジトリの説明を表示）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_20.png" style={{width:400, height:'auto'}}/></div>

ステップ6：プロパティパネルを使用して GitHub リポジトリコンポーネントの外観をカスタマイズ

:::note
- GitHub ユーザーコンポーネントと同様に、GitHub リポジトリコンポーネントは、データを取得するために、デバイスがインターネットアクセスを持っている必要があります。

- GitHub API にはレート制限があり、データの更新頻度に影響を与える可能性があります。
:::

### 株式

株式コンポーネントは、指定されたシンボルのリアルタイム株式市場情報を表示します。

ステップ1：データセクションの「株式」コンポーネントをクリック

ステップ2：コンポーネントは、デフォルトテキスト「AAPL」（Apple の株式シンボル）でキャンバスの中央に自動的に配置されます

ステップ3：ツールバーの「構成」ボタンをクリックして、株式構成パネルを開く

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_19.png" style={{width:400, height:'auto'}}/></div>

ステップ4：株式構成パネルで：

- 株式シンボルフィールドに株式シンボルを入力（例：「AAPL」、「MSFT」、「GOOGL」）

- 「検索」をクリックしてシンボルを検証

- 提供されたフィールドに Twelve Data API キーを入力（[以下](#twelve-data-api-キーの取得)のチュートリアルを参照して、API の取得方法を学べます）

ステップ5：ツールバーの「シンボル」ドロップダウンメニューから、表示する株式データを選択：

- シンボル（株式ティッカーシンボルのみを表示）

- 現在価格（最新の株価を表示）

- 変化（前回終値からの価格変化を表示）

- 変化率（パーセンテージ変化を表示）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_21.png" style={{width:400, height:'auto'}}/></div>

ステップ6：プロパティパネルを使用して株式コンポーネントの外観をカスタマイズ

#### Twelve Data API キーの取得

株式コンポーネントを使用するには、Twelve Data から無料の API キーが必要です：

ステップ1：[twelvedata.com](https://twelvedata.com/)にアクセス

ステップ2：「無料で開始」または「サインアップ」をクリック

ステップ3：メールアドレスとパスワードでアカウントを作成

ステップ4：登録してログインしたら、ダッシュボードに移動

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/103.png" style={{width:1000, height:'auto'}}/></div>

ステップ5：API キーを見つけてコピー

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/104.png" style={{width:800, height:'auto'}}/></div>

ステップ6：この API キーを株式構成パネルの「Twelve Data API キー」フィールドに貼り付け

:::note
- Twelve Data の無料層では、1分あたりおよび1日あたりの API 呼び出し数が制限されています。

- Canvas に表示される株式データは表示目的のみです。リアルタイムの株式情報は、デザインをデバイスにデプロイした後にのみ表示され、デバイスは Twelve Data のサーバーから現在のデータを取得します。

- 最も信頼性の高いエクスペリエンスを得るには、頻繁な株式更新が必要な場合は、有料の Twelve Data プランへのアップグレードを検討してください。
:::

:::tip
テスト目的で使用できる一般的な株式シンボル：

- AAPL（Apple）

- MSFT（Microsoft）

- GOOGL（Alphabet/Google）

- AMZN（Amazon）

- TSLA（Tesla）
:::

### YouTube

YouTube コンポーネントは、YouTube チャンネルに関する情報と統計を表示します。

ステップ1：データセクションの「YouTube」コンポーネントをクリック

ステップ2：コンポーネントは、「SeeedStudio」を表示するデフォルトテキストでキャンバスの中央に自動的に配置されます

ステップ3：表示される YouTube 構成パネルで：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_22.png" style={{width:400, height:'auto'}}/></div>

- YouTube チャンネルフィールドに YouTube チャンネル ID を入力（例：「UC_x5XG1OV2P6uZZ5FSM9Ttw」）

- 「検索」をクリックしてチャンネルを検証

- 提供されたフィールドに YouTube Data API キーを入力

- 「Google Cloud Console」リンクをクリックして[無料 API キーを取得](#youtube-data-api-キーの取得)（まだ持っていない場合）

ステップ4：ツールバーのドロップダウンメニューから、表示するチャンネル情報を選択：

- チャンネル名（YouTube チャンネル名を表示）

- チャンネル ID（YouTube チャンネル ID を表示）

- 説明（チャンネルの説明を表示）

- 購読者（購読者数を表示）

- 視聴回数（合計視聴回数を表示）

- 動画（アップロードされた動画の数を表示）

- 公開日（チャンネル作成日を表示）

- カスタム URL（利用可能な場合、カスタム URL を表示）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_23.png" style={{width:400, height:'auto'}}/></div>

ステップ5：プロパティパネルを使用して YouTube コンポーネントの外観をカスタマイズ

#### YouTube Data API キーの取得

:::note
API キーの取得方法がわからない場合は、[Google の公式ドキュメント](https://developers.google.com/youtube/v3/getting-started)も読むことができます。
:::

YouTube コンポーネントを使用するには、Google Cloud Console から無料の API キーが必要です：

ステップ1：[Google Cloud Console](https://console.cloud.google.com/)にアクセス

ステップ2：新しいプロジェクトを作成するか、既存のプロジェクトを選択

ステップ3：「API とサービス」>「ライブラリ」に移動

ステップ4：「YouTube Data API v3」を検索して有効化

ステップ5：「API とサービス」>「認証情報」に移動

ステップ6：「認証情報を作成」>「API キー」をクリック

ステップ7：新しい API キーをコピー

ステップ8：この API キーを YouTube 構成パネルの「YouTube Data API キー」フィールドに貼り付け

:::note
- YouTube コンポーネントは、チャンネルデータを取得するために、デバイスがインターネットアクセスを持っている必要があります。

- Canvas には、有効な API キーとチャンネル ID を提供するまで「API キーが構成されていません」と表示されます。

- Google の YouTube Data API には、使用に影響を与える可能性のあるクォータとレート制限があります。

- 一部の統計（正確な購読者数など）は、YouTube のポリシーに基づいて四捨五入または概算される場合があります。
:::

### AI レイアウトジェネレーター

SenseCraft HMI Canvas には、AI 駆動のレイアウトジェネレーターが含まれています：

ステップ1：右上の「AI ジェネレーター」ボタンをクリック

ステップ2：作成したいレイアウトの説明を入力

ステップ3：「生成」をクリックして、説明に基づいてレイアウトを AI に作成させる

ステップ4：生成されたレイアウトを必要に応じてカスタマイズ

この機能は、最初から始めることなくレイアウトをすばやく作成するのに最適です。

:::tip
このセクションの使用に関する詳細な手順については、**[SenseCraft HMI での AI 生成の使用](https://sensecraft-hmi-docs.seeed.cc/ja/guides/sensecraft-hmi-ai-generator/)**を参照してください。
:::

## デバイスへのデプロイ

Canvas デザインを作成したら、Seeed デバイスにデプロイしたいでしょう：

### デプロイ前のプレビュー

ステップ1：上部ツールバーの「プレビュー」ボタンをクリック

ステップ2：レイアウトがデバイスにどのように表示されるかを確認

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_24.png" style={{width:400, height:'auto'}}/></div>

ステップ3：必要な調整を行う

### レイアウトの保存

ステップ1：「保存」ボタンをクリックして現在のレイアウトを保存

ステップ2：レイアウトは SenseCraft HMI クラウドに保存されます

### デバイスへのデプロイ

ステップ1：デバイスが接続され、「オンライン」ステータスが表示されていることを確認

ステップ2：「デプロイ」ボタンをクリック

ステップ3：デプロイプロセスが完了するまで待つ

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/canvas_25.png" style={{width:400, height:'auto'}}/></div>

ステップ4：レイアウトが接続されたデバイスに表示されます

### デプロイに関する考慮事項

Seeed デバイスへの正常なデプロイのために：

1. **デバイスの互換性**：レイアウトが特定のデバイスの画面解像度に最適化されていることを確認

2. **接続ステータス**：デプロイ前にデバイスが「オンライン」ステータスを表示していることを確認

3. **データコンポーネント**：データコンポーネント（天気、株式など）を使用する場合、デバイスがインターネット接続を持っていることを確認

4. **デバイスセンサー**：バッテリー、温度、湿度などのコンポーネントは、適切なセンサーを持つ互換性のある Seeed reTerminal E シリーズ ePaper Display デバイスでのみ機能します

5. **更新率**：データの更新頻度とデバイスの機能に基づいて適切な間隔時間を設定

## トラブルシューティング

### 一般的な Canvas の問題と解決策

1. **コンポーネントがデータを表示しない**：
   - デバイスのインターネット接続を確認
   - データソースが利用可能であることを確認
   - 動的コンポーネントのデータキーパスが正しいことを確認
   - Canvas を更新するか、再デプロイを試みる

2. **デバイス上のレイアウトの問題**：
   - デプロイ前にプレビュー機能を使用してテスト
   - 要素をキャンバスの端に近すぎる位置に配置しないようにする

3. **デプロイ失敗**：
   - デバイスが SenseCraft HMI に正しく接続されていることを確認
   - デバイスのインターネット接続を確認
   - レイアウトを保存してから再度デプロイを試みる
   - デバイスを再起動して再度デプロイを試みる

4. **デバイスセンサーデータが表示されない**：
   - デバイスに必要なセンサーがあることを確認
   - デバイスのファームウェアが最新であることを確認
   - デバイスが SenseCraft HMI に正しく接続されていることを確認

5. **テキストまたは画像が歪んで表示される**：
   - コンポーネントのサイズと位置を調整
   - テキストコンポーネントのフォント設定を確認
   - 画像の場合、ディスプレイに適した解像度があることを確認

## まとめ

SenseCraft HMI の Canvas 機能は、Seeed デバイス用のカスタムインターフェースとダッシュボードを作成するための強力なプラットフォームを提供します。基本的なデザイン要素と動的データコンポーネント、既製のテンプレートを組み合わせることで、幅広い目的に対応するプロフェッショナルなディスプレイを作成できます。

天気ステーション、デバイスモニター、情報ディスプレイ、コントロールパネルのいずれを構築する場合でも、Canvas はビジョンを実現するためのツールを提供します。直感的なドラッグアンドドロップインターフェースと、動的データバインディングやデバッグツールなどの高度な機能を組み合わせることで、初心者にとってアクセスしやすく、経験豊富なユーザーにとっても必要な深さを提供します。

