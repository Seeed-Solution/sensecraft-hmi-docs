---
title: Web 機能
description: SenseCraft HMI プラットフォームの機能である Web の使用方法を紹介します。
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/88.jpg" style={{width:800, height:'auto'}}/></div>

## はじめに

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) の Web 機能を使用すると、画面ベースのデバイスに直接ウェブコンテンツを表示できます。この強力な機能により、デバイスを専用のウェブディスプレイに変換し、ダッシュボード、監視システム、ドキュメント、または必要なあらゆるウェブコンテンツを表示できます。従来のブラウザとは異なり、SenseCraft HMI の Web 機能は組み込みディスプレイと IoT デバイス向けに最適化されており、情報キオスク、ステータスモニター、または専用ウェブインターフェースの作成に最適です。

このチュートリアルでは、SenseCraft HMI での Web 機能の使用、セットアップ、プレビュー、デバイスへのウェブコンテンツのデプロイについて説明します。

この記事では、[reTerminal E1002](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1002/) を例として、SenseCraft HMI プラットフォームでこの機能を使用する方法を説明します。

## Web 機能の使い始め

### Web 機能へのアクセス

ステップ1：以下の SenseCraft HMI プラットフォームに移動<br>
[SenseCraft HMI](https://sensecraft.seeed.cc/hmi)<br>
ステップ2：デバイスを接続するか、すでにペアリングされているデバイスを選択して使用<br>
ステップ3：左サイドバーの **Web Content** をクリック<br>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/web_start_1.png" style={{width:1000, height:'auto'}}/></div>

ステップ4：ウェブページの URL を入力、例えば

```url
https://www.windy.com/
```

### Web インターフェースの理解

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/web_start_2.png" style={{width:1000, height:'auto'}}/></div>

Web インターフェースは、3つの主要なセクションで構成されています：

1. **URL 構成パネル**：上部に配置され、ウェブアドレスを入力できます
2. **ディスプレイエリア**：プレビューまたはデプロイ後にウェブコンテンツが表示されるメインセクション
3. **コントロールボタン**：上部に配置され、Preview、Save、Deploy オプションを含みます

Web 機能に初めてアクセスすると、ウェブページを構成してプレビューするまで、ディスプレイエリアは空になります。

## ウェブコンテンツの構成

### ウェブページの追加

ステップ1：画面上部の Web 構成パネルを見つける<br>
ステップ2：**URL** 入力フィールドを見つける<br>
ステップ3：フィールドに有効なウェブアドレスを入力（例：https://www.windy.com/）<br>

:::tip
https:// または http:// プレフィックスを含む完全な URL を入力してください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/web_configurate_1.png" style={{width:1000, height:'auto'}}/></div>

ステップ4：**Set** ボタンをクリックして URL を検証

### ウェブコンテンツのプレビュー

SenseCraft HMI の他の機能とは異なり、Web 機能はコンテンツを表示するために明示的なプレビューステップが必要です：

ステップ1：URL を入力して設定した後、上部ツールバーの **Preview** ボタンをクリック

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/web_configurate_2.png" style={{width:1000, height:'auto'}}/></div>

ステップ2：ウェブページがディスプレイエリアに読み込まれるまで待つ<br>
ステップ3：ウェブコンテンツが正しく表示され、デバイスの画面サイズに適しているか確認

:::note
プレビューステップは重要です。デプロイ前にウェブコンテンツがデバイスで正しく表示されることを確認できます。
:::

### ウェブコンテンツの保存とデプロイ

ウェブコンテンツをプレビューして、見栄えが良いことを確認したら：

ステップ1：**Save** ボタンをクリックしてウェブ構成を保存<br>
ステップ2：**Deploy** をクリックして、接続されたデバイスに構成を送信<br>
ステップ3：デプロイ確認メッセージを待つ<br>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/web_configurate_3.png" style={{width:1000, height:'auto'}}/></div>

デプロイに成功すると、デバイスは構成されたウェブページを表示します。

## デバイス用のウェブコンテンツの最適化

すべてのウェブサイトが小さなディスプレイや組み込みデバイス向けに設計されているわけではありません。ウェブコンテンツの選択と最適化に関するヒントを紹介します：

### Web フレンドリーなコンテンツの選択

1. **モバイルレスポンシブウェブサイトを選択**：

- モバイルデバイス向けに設計されたサイトは、通常、小さな画面でより良く表示されます
- デバイスの解像度でうまく機能する適応型レイアウトを持つサイトを探してください

2. **シンプルで軽量なページを検討**：

- 複雑な JavaScript を多用するウェブサイトは、読み込みが遅いか、より多くのリソースを消費する可能性があります
- 静的ページは通常、動的ウェブアプリケーションよりもパフォーマンスが優れています

3. **認証が必要なサイトを避ける**：

- ログインセッションが期限切れになり、手動介入が必要になる場合があります
- 一部の認証方法は、組み込みデバイスでうまく機能しない場合があります

### 推奨されるウェブコンテンツタイプ

SenseCraft HMI の Web 機能で特にうまく機能するウェブコンテンツタイプをいくつか紹介します：

1. **天気ダッシュボード**：

- [Weather.gov](https://weather.gov)<br>
- [Windy.com](https://www.windy.com/)<br>
- [AccuWeather](https://www.accuweather.com/)<br>

2. **監視ダッシュボード**：

- Grafana ダッシュボード<br>
- ホームオートメーションコントロールパネル<br>
- システムステータスページ<br>

3. **情報ディスプレイ**：

- 交通スケジュール<br>
- フライト情報<br>
- 会議室の空き状況<br>

4. **ドキュメントまたはリファレンス**：

- ローカル Wiki<br>
- 手順ガイド<br>
- クイックリファレンス情報<br>

## カスタムウェブコンテンツの作成

最高のエクスペリエンスのために、デバイスのディスプレイ専用に設計されたカスタムウェブページを作成することを検討してください：

### シンプルな HTML ページ

デバイスの解像度に最適化された基本的な HTML ページを作成できます。簡単な例を次に示します：

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Device Dashboard</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            font-size: 18px;
        }
        .container {
            padding: 15px;
        }
        .title {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 15px;
        }
        .info-box {
            border: 1px solid #ccc;
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="title">Device Status</div>
        <div class="info-box">Temperature: 22.5°C</div>
        <div class="info-box">Humidity: 45%</div>
        <div class="info-box">Battery: 87%</div>
    </div>
</body>
</html>
```

### カスタムページのホスティングオプション

カスタムウェブコンテンツを表示するには、デバイスがアクセスできる場所にホストする必要があります：

1. **ローカルネットワークサーバー**：

- ローカルネットワーク上にシンプルなウェブサーバーをセットアップ
- XAMPP、NGINX、またはウェブサーバーを実行している Raspberry Pi などのツールを使用

2. **無料の静的ホスティングサービス**：

- [GitHub Pages](https://pages.github.com/)
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)

3. **無料枠のあるクラウドサービス**：

- [Firebase Hosting](https://firebase.google.com/products/hosting)
- [AWS S3 Static Website Hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)

## 特殊なユースケース

### ローカルネットワークリソースの表示

Web 機能を使用して、ローカルネットワーク上のリソースを表示できます：

1. **ホームオートメーションダッシュボード**：

- Home Assistant: `http://homeassistant.local:8123`
- OpenHAB: `http://openhab.local:8080`

2. **ネットワーク監視ツール**：

- ルーター管理パネル
- ネットワーク監視ダッシュボード

3. **ローカルメディアサーバー**：

- Plex ステータスページ
- NAS ウェブインターフェース

:::tip
セキュリティ上の理由から、公開されているデバイスに管理インターフェースを表示する際は注意してください。
:::

### 自動ページローテーション

複数のウェブページをローテーションで表示したい場合：

1. JavaScript を使用して URL をサイクルするシンプルな HTML ページを作成：

```html
<!DOCTYPE html>
<html>
<head>
    <title>Page Rotator</title>
    <style>
        body, html, iframe {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
            border: none;
            overflow: hidden;
        }
    </style>
    <script>
        // ローテーションする URL の配列
        const urls = [
            'https://weather.gov',
            'https://example.com/dashboard',
            'https://example.com/calendar'
        ];
        
        let currentIndex = 0;
        
        function rotatePages() {
            document.getElementById('display-frame').src = urls[currentIndex];
            currentIndex = (currentIndex + 1) % urls.length;
            setTimeout(rotatePages, 30000); // 30秒ごとにページを変更
        }
        
        window.onload = rotatePages;
    </script>
</head>
<body>
    <iframe id="display-frame" src="about:blank"></iframe>
</body>
</html>
```

2. 上記の方法のいずれかを使用してこのページをホスト

3. SenseCraft HMI の Web 機能にこのローテーターページの URL を入力

## トラブルシューティング

### 一般的なウェブ表示の問題と解決策

1. **ウェブページが読み込まれない**：

- URL が正しく、http:// または https:// プレフィックスを含むことを確認。明らかに正しい URL を入力してもプレビューできない場合は、URL の末尾に「/」を追加してみてください。奇跡的な効果があるかもしれません。
- 通常のブラウザでページがアクセス可能かどうかをテストして確認
- デバイスがインターネット接続を持っていることを確認
- 一部のウェブサイトは埋め込みをブロックしたり、セキュリティ制限がある場合があります

2. **コンテンツが正しく表示されない**：

- ウェブサイトがデバイスの画面サイズに最適化されていない可能性があります
- 利用可能な場合は、モバイル専用バージョンのサイトを試してください
- ディスプレイの寸法専用のカスタムページを作成することを検討してください

3. **パフォーマンスの問題**：

- アニメーションや複雑な JavaScript を含む複雑なウェブサイトは、動作が遅い場合があります
- よりシンプルなページまたはカスタムビルドの代替を試してください
- 一部のウェブサイトは、デバイスが処理できる以上のメモリを使用する場合があります

4. **デプロイ失敗**：

- デバイスが SenseCraft HMI に正しく接続されていることを確認
- デバイスのインターネット接続を確認
- デバイスを再起動して、再度デプロイしてみてください

5. **コンテンツを頻繁に更新する必要がある**：

- 一部の動的コンテンツは自動更新されない場合があります
- カスタムページで更新間隔を設定するか、
- 定期的に構成を再デプロイすることを検討してください

## ベストプラクティス

### セキュリティの考慮事項

Web 機能を使用する際は、これらのセキュリティの考慮事項を念頭に置いてください：

1. **機密情報を避ける**：

- 公開されているデバイスに個人情報または機密情報を含むページを表示しないでください
- 管理パネルまたはコントロールインターフェースには注意してください

2. **可能な限り HTTPS を使用**：

- 非セキュア（http://）URL よりもセキュア（https://）URL を優先してください
- これにより、デバイスに送信されるデータの保護に役立ちます

3. **ネットワーク分離を検討**：

- 内部リソースを表示するディスプレイの場合、別のネットワークを使用することを検討してください
- ファイアウォールルールを使用して、デバイスがアクセスできるものを制限してください

### メンテナンスのヒント

ウェブディスプレイをスムーズに実行し続けるために：

1. **定期的な確認**：

- 表示されているコンテンツが正しく機能していることを定期的に確認
- ウェブサイトは予告なしにレイアウトや URL を変更する可能性があります

2. **ブックマークを更新**：

- ディスプレイ用の便利な URL のリストを保持
- 優先サイトが変更された場合に備えて、代替をテスト

3. **バックアップを作成**：

- 重要なディスプレイの場合、すぐにデプロイできるバックアップページを作成してホスト
- これにより、主要なウェブリソースが利用できなくなった場合でも継続性が保証されます

## まとめ

SenseCraft HMI の Web 機能は、画面ベースのデバイスにウェブコンテンツを表示するための柔軟な方法を提供します。このガイドに従うことで、ニーズに合わせた情報ディスプレイ、ダッシュボード、またはリファレンス画面を作成するために、ウェブページを構成、プレビュー、デプロイできます。

すべてのウェブコンテンツが小さなディスプレイや組み込みデバイスに適しているわけではないことを覚えておいてください。最高のエクスペリエンスのために、モバイルレスポンシブウェブサイトを使用するか、デバイスの寸法と機能専用に設計されたカスタムウェブページを作成することを検討してください。

