---
title: RSS 機能
description: SenseCraft HMI プラットフォームの機能である RSS の使用方法を紹介します。
---

# SenseCraft HMI での RSS の使用

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/80.jpg" style={{width:800, height:'auto'}}/></div>

## はじめに

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) の RSS 機能を使用すると、画面ベースのデバイスをリアルタイム情報ディスプレイに変換できます。ニュースアウトレット、ブログ、気象サービスなどからの RSS フィードに接続することで、最新のコンテンツで自動的に更新される動的なディスプレイを作成できます。この機能は、ニュースティッカー、情報ボード、または手動操作なしで情報を提供し続ける個人用ダッシュボードの作成に最適です。

このチュートリアルでは、RSS フィードの理解と、デバイスにコンテンツを表示するための SenseCraft HMI での RSS 機能の使用について説明します。

この記事では、[reTerminal E1002](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1002/) を例として、SenseCraft HMI プラットフォームでこの機能を使用する方法を説明します。

## RSS について

### RSS とは？

RSS（Really Simple Syndication）は、以下のような頻繁に更新されるコンテンツを公開するために使用される標準化されたウェブフィード形式です：

- ニュース記事
- ブログ投稿
- ポッドキャスト
- ビデオ更新
- 天気予報
- 株式市場データ

RSS フィードを使用すると、ユーザーは各ウェブサイトを個別に訪問することなく、最新情報を入手できます。代わりに、新しいコンテンツが RSS リーダー、またはこの場合は SenseCraft HMI 対応デバイスに自動的に配信されます。

### RSS の仕組み

1. **コンテンツ発行者**（ウェブサイト、ブログ、ニュースアウトレット）は、最新のコンテンツを標準化された XML 形式で含む RSS フィードを作成
2. **フィードリーダー**（SenseCraft HMI の RSS 機能など）は、これらのフィードを定期的にチェックして更新を確認
3. 新しいコンテンツが公開されると、フィードリーダーが更新を**取得して表示**

### RSS を使用する利点

- **リアルタイム更新**：手動更新なしで最新情報を取得
- **コンテンツの集約**：1つのディスプレイで複数のソースを組み合わせ
- **フィルタリングされた情報**：興味のあるコンテンツのみを受信
- **帯域幅効率**：RSS フィードには必要不可欠なコンテンツのみが含まれ、完全なウェブページではありません
- **広告なし**：RSS は通常、広告なしのクリーンなコンテンツを配信

## はじめに

### RSS 機能へのアクセス

ステップ1：以下の SenseCraft HMI プラットフォームに移動<br>
[SenseCraft HMI](https://sensecraft.seeed.cc/hmi)<br>
ステップ2：デバイスを接続するか、すでにペアリングされているデバイスを選択して使用<br>
ステップ3：**RSS News** オプションをクリック
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/rss_start_1.png" style={{width:1000, height:'auto'}}/></div>

ステップ4：URL をインポート、例えば

```url
https://feeds.bbci.co.uk/news/world/rss.xml
```

### RSS インターフェースの理解

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/rss_start_2.png" style={{width:1000, height:'auto'}}/></div>

RSS インターフェースは、2つの主要なセクションで構成されています：

1. **構成パネル**：上部に配置され、RSS フィード URL を入力して検証できます<br>
2. **ディスプレイエリア**：構成後に RSS コンテンツが表示されるメインセクション<br>

## RSS フィードの構成

### RSS フィードの追加

ステップ1：画面上部の RSS 構成パネルを見つけ、**RSS URL** 入力フィールドを見つける<br>
ステップ2：フィールドに有効な RSS フィード URL を入力（例：https://news.google.com/rss）<br>
ステップ3：**Set** ボタンをクリックして RSS フィードを検証して適用、URL が有効な場合、システムはフィードからコンテンツの取得と表示を開始します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/rss_url_1.png" style={{width:1000, height:'auto'}}/></div>

### 表示設定とカスタマイズ

RSS フィードが構成されたら、コンテンツの表示方法を調整できます：
ステップ1：Gallery 機能と同じ間隔とディザーモード設定を使用：

- **Interval(min)**：新しいコンテンツでディスプレイが更新される頻度を設定
- **Dither Mode**：ディスプレイタイプに基づいて「Full Color」または「Black and White」を選択

ステップ2：**Save** をクリックして構成を保存<br>
ステップ3：**Preview** をクリックして、RSS コンテンツがデバイスにどのように表示されるかを確認<br>
ステップ4：**Deploy** をクリックして、接続されたデバイスに構成を送信<br>

## RSS フィードの検索と使用

### 人気の RSS フィードソース

SenseCraft HMI で使用できる人気で信頼性の高い RSS フィードをいくつか紹介します：

**ニュース：**

- BBC News: https://feeds.bbci.co.uk/news/world/rss.xml <br>
- Reuters: https://www.reutersagency.com/feed/ <br>
- CNN: https://rss.cnn.com/rss/edition.rss <br>
- The New York Times: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml

**テクノロジー：**

- Wired: https://www.wired.com/feed/rss <br>
- TechCrunch: https://techcrunch.com/feed/ <br>
- Ars Technica: https://feeds.arstechnica.com/arstechnica/index <br>
- Hackaday: https://hackaday.com/blog/feed/

**天気：**

- National Hurricane Center: https://www.nhc.noaa.gov/index-at.xml

**科学：**

- NASA Breaking News: https://www.nasa.gov/rss/dyn/breaking_news.rss <br>
- Science Daily: https://www.sciencedaily.com/rss/all.xml

### ウェブサイトの RSS フィードを見つける方法

多くのウェブサイトは RSS フィードを提供していますが、常に見つけやすいとは限りません。RSS フィードを見つける方法をいくつか紹介します：

- **方法1**：RSS アイコンを探す<br>
多くのウェブサイトは、フッターやサイドバーに RSS アイコン（通常はオレンジ色）または「RSS」、「Feed」、「Subscribe」というラベルの付いたリンクを表示しています。

- **方法2**：ブログ URL に「/feed」を追加<br>
多くの WordPress ベースのサイトでは、URL の末尾に「/feed」を追加することで機能することがよくあります：<br>
```
https://example.com/feed
```
- **方法3**：ブラウザ拡張機能を使用<br>
Chrome 用の「RSS Feed Reader」や Firefox 用の「Awesome RSS」などのブラウザ拡張機能は、訪問したウェブサイトで利用可能なフィードを検出できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/81.png" style={{width:1000, height:'auto'}}/></div>

- **方法4**：ソースコードを確認<br>
1. ウェブサイトにアクセス
2. 右クリックして「ページのソースを表示」を選択
3. 「rss」または「feed」を検索（Ctrl+F）
4. type 属性に「application/rss+xml」を含むリンクを探す

- **方法5**：RSS フィード検索ツールを使用<br>
次のようなサービス：<br>
- [Feed Finder](https://feedfinder.mackerron.com/)<br>
- [RSS.app](https://rss.app/rss-feed)<br>
これらは、RSS フィードを目立って宣伝していないウェブサイトの RSS フィードを発見するのに役立ちます。

## カスタム RSS フィードの作成

表示したいコンテンツの RSS フィードが見つからない場合は、さまざまなツールを使用して独自の RSS フィードを作成できます：

### RSS フィード作成サービス

1. **RSS.app**：https://rss.app/

- ウェブサイト、ソーシャルメディア、その他のソースから RSS フィードを作成
- コーディング不要
- 無料および有料オプションあり

2. **Feedly**：https://feedly.com/

- RSS としてエクスポートできるコンテンツボードを作成
- コンテンツキュレーションに適している

3. **Zapier**：https://zapier.com/

- さまざまなトリガーから RSS フィードを生成できる自動化ワークフローを作成
- 高度な機能には有料サブスクリプションが必要

### フィード集約ツール

集約ツールを使用して、複数の RSS フィードを1つのフィードに結合することもできます：

1. **FeedBlendr**：http://feedblendr.com/

- 複数のフィードを1つに結合
- 使いやすい

2. **RSSMix**：http://www.rssmix.com/

- 複数の RSS フィードをマージ
- 無料サービス

## 高度な RSS 表示のヒント

### ディスプレイ用の RSS コンテンツの最適化

SenseCraft HMI デバイスで RSS フィードを最適に体験するために：

1. **適切なコンテンツ長のフィードを選択**：

- 短いタイトルと説明を持つフィードは、小さなディスプレイに最適
- 完全な記事フィードは、電子ペーパーディスプレイには文字が多すぎる場合があります

2. **更新頻度を考慮**：

- 間隔設定をフィードの更新頻度に合わせる
- ニュースフィードは毎時更新される場合があり、ブログフィードは毎日更新される場合があります

3. **さまざまなディザーモードをテスト**：

- 「Black and White」モードは、電子ペーパーディスプレイのテキスト重視の RSS フィードに最適
- 「Full Color」は、LCD ディスプレイの画像を含むフィードに適しています

4. **画像コンテンツに注意**：

- 一部の RSS フィードには、すべてのデバイスでうまく表示されない画像が含まれている場合があります
- 大きな画像を含むフィードは読み込みが遅い場合があります

## トラブルシューティング

### 一般的な RSS 問題と解決策

1. **「Invalid RSS Feed」エラー**：

- URL が正しく、http:// または https:// プレフィックスを含むことを確認
- ブラウザに URL を貼り付けて、フィードがアクセス可能かどうかを確認
- 一部のフィードは認証が必要な場合や、アクセス制限がある場合があります

2. **フィードは読み込まれるがコンテンツが表示されない**：

- フィードが空であるか、現在コンテンツを公開していない可能性があります
- フィード形式が互換性がない可能性があります（代替フィードを試してください）
- 別のよりアクティブなフィードを試してください

3. **コンテンツが文字化けまたは正しくフォーマットされていない**：

- 別のディザーモードを試してください
- フィードに、サポートされていない特殊文字またはフォーマットが含まれている可能性があります
- フィードフィルタリングサービスを使用してコンテンツをクリーンアップすることを検討してください

4. **フィードの更新が停止**：

- ソースウェブサイトがフィード URL を変更した可能性があります
- 一時的なサーバーの問題がある可能性があります
- フィードを削除して再追加してみてください

5. **デプロイ失敗**：

- デバイスが SenseCraft HMI に正しく接続されていることを確認
- デバイスのインターネット接続を確認
- デバイスを再起動して、再度デプロイしてみてください

## まとめ

SenseCraft HMI の RSS 機能は、画面ベースのデバイスを動的な情報ディスプレイに変える強力な方法を提供します。RSS フィードに接続することで、ニュース、天気、技術的な更新、または RSS で利用可能なその他のコンテンツの自動更新ディスプレイを作成できます。

RSS ディスプレイの品質は、主に選択したフィードに依存することを覚えておいてください。さまざまなフィード、更新間隔、ディスプレイ設定を試して、ニーズに合った完璧な情報ディスプレイを作成してください。

