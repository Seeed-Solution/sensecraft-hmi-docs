---
title: AI 生成機能
description: SenseCraft HMI プラットフォームの機能である AI 生成の使用方法を紹介します。
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/65.jpg" style={{width:700, height:'auto'}}/></div>

## はじめに

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) は、画面ベースの製品専用に作成された Seeed Studio のインタラクティブインターフェース設計プラットフォームです。その最も強力な機能の1つは AI 生成機能で、自然言語で欲しいものを説明するだけで、美しいディスプレイレイアウトと画像を作成できます。

このチュートリアルでは、[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) の Gallery と Canvas セクションの両方で AI 生成機能を使用する方法を説明し、以下を可能にします：

- テキストの説明に基づいてカスタム画像を生成
- 適切に配置されたコンポーネントを使用して完全なインターフェースレイアウトを作成
- 会話を通じて AI 生成コンテンツを洗練および調整
- ワンクリックでデザインをデバイスに直接デプロイ

この記事では、[reTerminal E1002]((https://wiki.seeedstudio.com/getting_started_with_reterminal_e1002/)) を例として、SenseCraft HMI プラットフォームでこの機能を使用する方法を説明します。

## はじめに

AI 生成機能は、SenseCraft HMI の Gallery と Canvas の両方のセクションで利用できます。各実装は異なる目的を果たします：

AI 生成機能は、SenseCraft HMI の画像とレイアウトの両方のセクションで使用できます。各実装方法には、独自の特定のアプリケーションがあります：

- **AI 画像ジェネレーター**：説明に基づいて独立した画像を作成します。
- **AI レイアウトジェネレーター**：機能的なコンポーネント（ボタン、テキストフィールド、データディスプレイなど）を使用して完全なレイアウトを設計します。

これらの各機能を効果的に使用する方法を探りましょう。

### AI プロジェクトの開始

- SenseCraft プラットフォームを開く

    [SenseCraft HMI](https://sensecraft.seeed.cc/hmi)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/ai_generate_1.png" style={{width:800, height:'auto'}}/></div>

- **UI Designer** を選択

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/ai_generate_2.png" style={{width:800, height:'auto'}}/></div>

- 右側の AI ボタンをクリックし、実際のニーズに応じて **AI Image Generator** または **AI Layout Generator** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/ai_generate_3.png" style={{width:800, height:'auto'}}/></div>

## AI 画像ジェネレーター

AI 画像ジェネレーターを使用すると、デザインスキルや外部ツールを必要とせずに、ディスプレイ用のカスタム画像を作成できます。

### AI で画像を作成

ステップ1：右側の AI ボタンをクリックし、AI Image Generator を選択すると、次の画面が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/ai_image_1.png" style={{width:800, height:'auto'}}/></div>

ステップ2：作成したい画像の詳細な説明を入力します。例：

- 日の出と松の木のある美しい山の風景
- 温度と湿度アイコンを示すミニマリストダッシュボード
- 中央に Seeed Studio ロゴのある回路基板パターン

ステップ3：**Generate** ボタン（魔法の杖アイコン）をクリックして画像生成プロセスを開始

ステップ4：AI がリクエストを処理する間待ちます。これは通常、説明の複雑さに応じて10〜30秒かかります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/ai_image_2.png" style={{width:800, height:'auto'}}/></div>

ステップ5：完了したら、**Add to Pagelist** ボタンをクリックすると、AI 生成画像がギャラリーに表示されます

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/ai_image_3.png" style={{width:800, height:'auto'}}/></div>

### 生成された画像の最適化

画像を生成した後、AI との会話を通じて洗練できます：

ステップ1：結果に満足できない場合は、AI Generator パネルに直接フィードバックを提供できます。例：

- 色をより鮮やかにする
- いくつかの動物と色を追加
- 背景を青に変更

ステップ2：フィードバックに基づいて新しいバージョンを作成するために、再度 **Generate** をクリック

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/ai_image_4.png" style={{width:800, height:'auto'}}/></div>

ステップ3：結果に満足するまで、この反復プロセスを続けます

### 効果のデモンストレーション

画像をプレビューしてアップロード

- Preview をクリックすると、プレビュー画像を表示できます。

:::tip
デフォルトのプレビュー色は白黒です。Dither Mode をクリックして Six Colors を選択すると、色が表示されます。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/ai_image_5.png" style={{width:800, height:'auto'}}/></div>

- Deploy ボタンをクリックして画像をアップロードします。

効果のデモンストレーション：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/ai_image_6.png" style={{width:800, height:'auto'}}/></div>

## AI レイアウトジェネレーター

AI レイアウトジェネレーターはより強力で、機能的なコンポーネントを使用して完全なインタラクティブインターフェースを作成できます。

### AI でレイアウトを作成

ステップ1：右側の AI ボタンをクリックし、AI Layout Generator を選択すると、次の画面が表示されます。

ステップ2：画面の右側に AI Generator パネルがあることに注意してください（画像内のものと同様）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/ai_layout_1.png" style={{width:800, height:'auto'}}/></div>

### レイアウトで AI を使用してインターフェースを作成

ステップ1：AI Generator パネルで、作成したいインターフェースの説明を入力します。必要なコンポーネントについて具体的に記述してください。例：

- 温度表示、湿度ゲージ、予報アイコンを備えた天気ダッシュボードを作成
- 照明、サーモスタット、セキュリティのボタンを備えたスマートホームコントロールパネルを設計
- 歩数カウンター、心拍数表示、アクティビティ履歴を備えたフィットネストラッカーインターフェースを作成

ステップ2：**Generate** ボタンをクリックしてインターフェース生成プロセスを開始

ステップ3：AI がリクエストを処理してインターフェースレイアウトを作成する間待ちます

ステップ4：完了すると、AI は説明に従ってキャンバス上にさまざまなコンポーネントを配置します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/ai_layout_2.png" style={{width:800, height:'auto'}}/></div>

### 生成されたキャンバスの最適化

AI は反復的な改善のために設計されています：

ステップ1：生成されたインターフェースを確認し、変更したい点を特定

ステップ2：AI Generator パネルに具体的なフィードバックを提供できます。例：

- 温度表示を右上に移動
- ボタンを大きくし、その下にラベルを追加
- 色スキームをダークモードに変更
- 上中央に時計を追加

ステップ3：フィードバックに基づいてインターフェースを更新するために、再度 **Generate** をクリック

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/ai_layout_3.png" style={{width:800, height:'auto'}}/></div>

ステップ4：AI コンポーネントが期待する結果に合わない場合は、キャンバス上のコンポーネントを指定した位置に手動でドラッグできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/ai_layout_4.png" style={{width:800, height:'auto'}}/></div>

### コンポーネントで編集

レイアウト AI は、さまざまなコンポーネントを作成して配置できます：

**基本コンポーネント：**

- テキスト
- データ
- 図形（長方形、円、線など）
- QR コード
- 描画

**デバイスデータコンポーネント：**

- 温度
- 湿度
- バッテリー
- SenseCAP

**データ：**

- 天気
- 天気アイコン
- Github
- Github Repo
- 株式
- YouTube

インターフェースを生成するときは、プロンプトでこれらのコンポーネントを具体的に要求できます。

### アップロード

- Six Colors を選択し、Save をクリックしてから Deploy をクリックしてアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/ai_layout_5.png" style={{width:800, height:'auto'}}/></div>

- 効果のデモンストレーション：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/ai_layout_6.png" style={{width:800, height:'auto'}}/></div>

## AI 生成のベストプラクティス

AI 生成機能を最大限に活用するために、これらのヒントに従ってください：

### 効果的なプロンプトのヒント

1. **具体的に**：「ダッシュボードを作成」ではなく、「中央に温度表示、右側に湿度、上部に時計のあるダッシュボードを作成」を試してください
2. **色とスタイルに言及**：「すべての要素に丸い角を持つ青と白の配色を使用」
3. **馴染みのあるデザインを参照**：「スマートサーモスタットインターフェースのように見せる」または「フィットネストラッカーディスプレイに似たデザイン」

### 反復的な洗練

最も成功したデザインは、多くの場合、複数回のフィードバックから生まれます：

1. 一般的な説明から始める
2. 初期デザインを生成
3. 変更内容について具体的なフィードバックを提供
4. 更新されたバージョンを生成
5. 満足するまで繰り返す

### AI と手動編集の融合

最高の結果を得るために：

1. AI を使用して、基本的なレイアウトとコンポーネントをすばやく作成
2. 個々の要素の配置、サイズ、プロパティを手動で微調整
3. カスタム機能またはデータバインディングを手動で追加
4. 新しいセクションを追加したり、大きな変更を加えたい場合は、再度 AI を使用

## まとめ

SenseCraft HMI の AI 生成で、数分で魅力的なインターフェースを作成できます。AI とシームレスなデプロイにより、デザイン経験がなくても、プロフェッショナルでインタラクティブな画面をデザインできます。

Gallery の画像から Canvas の完全なインターフェースまで、AI 生成は想像力を迅速かつ簡単に実現します。

