---
title: はじめに
description: SenseCraft HMI で最初のデバイスをペアリングし、デバイス状態を確認し、必要に応じてファームウェアを更新するための実践ガイド。
last_update:
  date: 11/05/2026
  author: dimo
---

<a id="overview"></a>

このガイドでは、SenseCraft HMI の初回利用における主要な流れとして、対応デバイスの接続、アカウントとのペアリング、デバイス状態の確認、必要に応じたファームウェア更新を順に説明します。

プラットフォームを初めて利用する場合は、まず [概要](/ja/overview/) を読んで、プラットフォーム紹介、アカウント登録方法、主な機能を把握することをおすすめします。

以下では、**reTerminal E1002** を例に、SenseCraft HMI の基本的なワークフローを説明します。

別のデバイスを使っている場合でも、同じ基本的な流れで進められます。[対応ハードウェア](/ja/supported_hardware/) から該当デバイスのページを確認するか、以下のリンクから対応する wiki ガイドへ直接移動できます。

* **[reTerminal E1001](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1001)**
* **[reTerminal E1002](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1002)**
* **[reTerminal E1003](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1003/)**
* **[reTerminal E1004](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1004/)**
* **[TRMNL 7.5" (OG) DIY Kit](https://wiki.seeedstudio.com/trmnl_7inch5_diy_kit_main_page/)**
* **[XIAO ePaper DIY Kit EE02](https://wiki.seeedstudio.com/getting_started_with_ee02/)**
* **[XIAO ePaper DIY Kit EE03](https://wiki.seeedstudio.com/getting_started_with_ee03/)**
* **[XIAO ePaper DIY Kit EE04](https://wiki.seeedstudio.com/epaper_ee04/)**
* **[XIAO ePaper DIY Kit EE05](https://wiki.seeedstudio.com/epaper_ee05/)**

---

<a id="firmware-update"></a>
## デバイスのファームウェアを更新

:::tip
デバイスをペアリングする前に、最新のファームウェアへ更新しておくことをおすすめします。これにより、互換性の向上、不具合修正、新機能のサポートを最適な状態で利用できます。

すぐに SenseCraft HMI を試したい場合は、この更新セクションを後回しにしても構いません。
:::

開始前に、以下を準備してください：
* **USB ケーブル**：デバイスをコンピューターに接続するため
* **安定したインターネット接続**：ファームウェアファイルをダウンロードするため
* **対応ブラウザー**：Chrome、Firefox、Safari、Edge など
* **十分なデバイス電源**：安全に書き込みを完了するため
* **登録済みの SenseCraft HMI アカウント**：プラットフォームにアクセスできる状態

### ステップ 1：USB でデバイスを接続
USB ケーブルを使ってデバイスをコンピューターに接続します。

### ステップ 2：デバイスを選択
**Select** をクリックします。ポップアップウィンドウで、対応ハードウェア一覧から使用するデバイスを選択します。

**ePaper DIY Kit - EE04** を選択した場合は、正しい画面タイプとサイズも選択して、適切なディスプレイドライバーを含める必要があります。

### ステップ 3：デバイスを更新
**Flash** をクリックして更新を開始します。進行状況が 100% に達するまでは、デバイスを取り外したりブラウザータブを閉じたりしないでください。

:::tip
用途に応じて書き込みモードを選んでください：

**Standard Flash（未チェック）**：既存の Wi-Fi 認証情報や設定を保持したままファームウェアを更新します。通常のアップデートに推奨されます。

**Full Flash（チェック）**：Wi-Fi 認証情報や保存済み設定を含む、デバイスメモリ全体を消去します。トラブルシューティング、復旧、初期化に推奨されます。

ほとんどの場合、**Connect Serial Monitor** ボタンを使う必要はありません。原因が分かりにくい問題が発生した場合は、この機能でデバイスポートに接続してデバッグログを確認できます。そのログを Seeed サポートへ共有すると、より効率的に問題解決が進みます。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_getting_started_1.png" style={{width:600, height:'auto'}}/></div><br />

### 書き込み後
デバイスが自動的に再起動するまで待ちます。これには少し時間がかかる場合があります。

**Full Flash** を実行した場合は、書き込み中に保存済み設定が消去されるため、再起動後にもう一度セットアップが必要です。再起動後、デバイスは設定モードに戻ります。まず Wi-Fi に再接続し、その後、次のセクションの手順に従って SenseCraft HMI と再度ペアリングしてください。

たとえば reTerminal E1002 を使用している場合、**Full Flash** のあと、デバイス画面には次のように表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/155.png" style={{width:600, height:'auto'}}/></div><br />

---

<a id="connect-device"></a>
## デバイスを接続する
### ステップ 1：設定モードに入り、デバイス Wi-Fi に接続
新しいデバイス、または **Full Flash** 後のデバイスは、通常、起動後に自動で設定モードに入ります。このモードでは、スマートフォンまたはコンピューターで ePaper 画面に表示される Wi-Fi ホットスポットへ接続してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/5.png" style={{width:400, height:'auto'}}/></div><br />

### ステップ 2：設定ページを開き、Wi-Fi を設定
ブラウザーで `http://192.168.4.1/` を開きます。ローカル Wi-Fi ネットワークを選択し、パスワードを入力して **Connect** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/6.png" style={{width:700, height:'auto'}}/></div><br />

### ステップ 3：ペアリングコードを取得
デバイスが Wi-Fi に正常接続すると、画面に **6 桁のペアリングコード** が自動表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/136.png" style={{width:600, height:'auto'}}/></div>

### ステップ 4：SenseCraft HMI でデバイスを追加
**Device** ページで **+ Add NEW Device** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_getting_started_4.png" style={{width:600, height:'auto'}}/></div><br />

### ステップ 5：ペアリングを完了
任意のデバイス名と 6 桁のペアリングコードを入力し、**Create** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/8.png" style={{width:600, height:'auto'}}/></div>

---

<a id="device-information"></a>
## デバイスを管理する
ペアリング後は、**Device** ページでデバイスの情報を確認できます。上部には設定したデバイス名が表示され、その下にデバイスモデル、対応画面サイズ、カラーモード、MAC アドレスまたは SN 番号、オンライン状態、バッテリー残量、ファームウェアバージョンなどが並びます。

たとえば E1002 デバイスでは、カスタム名 `test`、モデル `reTerminal E1002`、対応画面サイズ `7.3"`、カラーモード `フルカラー`、SN 番号 `1049****0040`、`Offline` 状態、`0%` のバッテリー、`1.1.2` のファームウェアバージョンが表示される場合があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_getting_started_5.png" style={{width:600, height:'auto'}}/></div><br />

デバイスカードをクリックすると **Details** ビューが開き、以下を確認・管理できます：
* **Low Power Mode**：省電力動作の有効 / 無効
* **Refresh Interval**：画面の更新頻度を制御
* **Online Status**：デバイスが現在オンラインか確認
* **Battery Status**：現在のバッテリー残量を確認
* **Active Page**：現在デバイスに表示されているページを確認・管理

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/hmi_getting_started_6.png" style={{width:600, height:'auto'}}/></div><br />

---

<a id="quick-deployment"></a>
## コミュニティテンプレートをすばやくデプロイ
次に、コミュニティテンプレートをデバイスへすばやくデプロイしてみましょう。

**ステップ 1.** **Home** をクリックしてメインページに戻ります。

**ステップ 2.** 他のユーザーが共有した任意のテンプレートを開き、詳細を確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/114.png" style={{width:600, height:'auto'}}/></div><br />

**ステップ 3.** 詳細ページ右側の **Add to My Page** をクリックし、そのテンプレートをページライブラリへ追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/115.png" style={{width:600, height:'auto'}}/></div><br />

**ステップ 4.** 次に開いたページで、右上の **Apply** をクリックしてテンプレートをデバイスへ送信します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/hmi/img/116.png" style={{width:600, height:'auto'}}/></div><br />

**ステップ 5.** しばらく待つと、コンテンツがデバイスに反映されます。

---

## 次にすること
デバイスがオンラインになったら、以下の機能も試してみてください：

* [Workspace](/ja/guides/workspace/) で独自のページを設計・デプロイする。
* [AI Gen](/ja/guides/ai_gen/) で AI を使ってコンテンツを生成する。
* [対応ハードウェア](/ja/supported_hardware/) で対応デバイスを確認する。
