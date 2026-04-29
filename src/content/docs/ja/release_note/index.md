---
title: リリースノート
description: SenseCraft HMI プラットフォームの更新履歴とバージョン履歴
---

## SenseCraft HMI v1.4.0 リリースノート
リリース日：2026.04.10

> 今回のリリースは 2 週間に分けて実施されました（先週 + 今日）。前回は事前告知ができず申し訳ありません。今後は開発ロードマップを公開し、公開ドキュメントでフィードバックを集めていきます。

### デザイナー更新

#### Weather Widget
- 新しいパラメータを追加：日付、日平均気温、テキスト形式の天気コードなど多数
- 単位設定：温度 / 風速 / 降水量の表示単位を選択可能に
- 設定 UI を再設計：選択済みパラメータがグループ要素として表示され、数値パラメータにはチャートプレビューも表示。ただし従来どおり **Available Field** から選択することも可能
- 4 種類のプリセットウィジェットを追加：Current Weather、Compact Weather Card、7-Day Forecast、5-Day Forecast with Date

#### Calendar Widget
- **Week starts on** 設定を追加。日曜始まりまたは月曜始まりを選択可能

#### Timezone Optimization
- Date/Time/Clock/Calendar/Day Counter ウィジェットのタイムゾーン処理を UTC ベースから IANA ベースへ変更（サマータイムをネイティブ対応）

#### Other Improvements
- Draw Widget を上部ツールバーから Basic Widgets へ移動し、ストローク設定とパターン設定を追加
- Group 内の複数コンポーネントロジックを改善
- Inspector Panel を大幅に簡素化し、最も重要な設定のみを残して見通しを向上

### SenseCraft HMI Core
- サイドバーの 2 次メニューがホバーで展開するようになり、キャンバスデザイナーの作業領域を拡大
- サイドバー上部に SenseCraft HMI のアイコンロゴを追加
- ホームページに重要なお知らせと更新用のバナーセクションを追加

### [Workspace](https://sensecraft.seeed.cc/hmi/workspace/page)
- Workspace で Add New、My Page、My Playlist を 1 ページに集約し、入口を整理
- My Page にはすべての Designs とアップロード済み Images を表示。右上の編集アイコンから一括操作（Apply to Device、Delete）が可能
- **+New** をクリックすると、ゼロから Design を作成するか、写真をアップロードして Album を作るかの 2 つを選択可能
- **+Design from scratch** を選ぶと、デザイン名の設定と対象デバイスの画面サイズ選択へ誘導

### [Tools](https://sensecraft.seeed.cc/hmi/tools/firmware)
- Firmware Flasher と Image Dithering ツールの UI を刷新
- 各ツールに説明、利用シーン、役立つヒントを追加

### 新しいハードウェア対応
- [10.3" 16 階調グレースケール ePaper Display reTerminal E1003](https://www.seeedstudio.com/reTerminal-E1003-p-6731.html) の対応を追加

### ロードマップとフィードバック窓口
リリース管理とコミュニティフィードバック収集をより良く進めるため、公開 Google ドキュメント [SenseCraft HMI Open Roadmap](https://docs.google.com/document/d/18xcOUtQjN6NweaFFQ7ZZEqQ3Hoaqs0XX7PX74HbDv4s/edit?usp=sharing) で開発ロードマップを共有しています。

機能要望や問題報告がある場合は：
- Google ドキュメントに直接コメントする（定期的に確認します）
- または [SenseCraft HMI Discord channel](https://discord.com/invite/Jj2CBXCjtf) に参加する（こちらのフィードバックも取り込み、ドキュメントに反映します）

いつもご支援ありがとうございます！
SenseCraft HMI チーム

---

## SenseCraft HMI v1.3.2 リリースノート
更新日：2026.02.28

**🚀 新機能**
- **Component Widgets：** Calendar、Clock、List、Table、Data Chart を内包するコンポーネントウィジェットを追加
- **Data Chart Widgets：** 折れ線、棒、ローソク足、散布図、円グラフ、ゲージに対応した新しいチャートコンポーネントを追加。SenseCAP 履歴データ、株式市場、その他の任意データの可視化に最適化
- **HTML & RSS の再設計：** Canvas Editor の Data Widgets セクション内のウィジェットとして統合
  - HTML Widget は Web URL 埋め込みとローカル HTML ファイルのアップロード/描画に対応
  - RSS Widget は RSS フィードをキャンバス要素としてシームレスに埋め込み可能

**🐛 バグ修正と改善**
- **Calendar Widget：** テーブルスタイルと操作ロジックを最適化
- **Flip Clock Widget：**
  - Preview と Apply to Device がユーザーのタイムゾーン設定を正しく反映
  - リサイズ後にコンポーネントが消える問題を修正
- **Google Calendar Widget：** タイムゾーン表示の問題を修正（v1.3.1 で一部対応済み）
- **Auto-save Enhancement：** Apply、Preview、Publish、Private Share（Dev Tool 内）をクリックすると自動保存され、手動保存不要に
- **My Page Updates：** すべての Canvas Designs を標準表示（過去の Design、RSS、Web HTML ページも含む）。アップロード画像ページは右上のドロップダウンからアクセス可能
- **SenseCraft HMI Homepage Featured：**
  - Featured Banner に閲覧数、いいね数、Add to My Page 数のソーシャル指標を追加
  - 過去の注目デザインを一覧できる **Featured** カテゴリを追加
- **Device Support Updates：** ホームページとデバイス設定ページに 13.3'' EINK Spectra フルカラーの [reTerminal E1004](https://www.seeedstudio.com/reTerminal-E1004-p-6692.html) と [XIAO EE02 DIY ePaper Kit](https://www.seeedstudio.com/XIAO-ePaper-DIY-Kit-EE02-for-13-3-Spectratm-6-E-Ink.html) を追加

**🌟 参加しよう**
新リリースを試してフィードバックを共有してください。バグ報告や機能提案、ロードマップへの参加は Discord で受け付けています：[https://discord.com/invite/Jj2CBXCjtf](https://discord.com/invite/Jj2CBXCjtf)

---

## SenseCraft HMI v1.3.0 リリースノート
更新日：2026.01.30

**🚀 UI テンプレートコミュニティへ**
このリリースにより、SenseCraft HMI はより協調的なプラットフォームへ進化しました。コミュニティが作成した UI テンプレートを、より効率的に公開、発見、再利用できるようになりました。

- **ホームページ再設計**
  - Featured Templates で優れたデザインを特集
  - 新しい上部ナビゲーションバーでカテゴリ別にテンプレートを絞り込み可能
  - フッターに Change Logs、About、Support などのクイックリンクを追加

- **ページを公開テンプレートとして公開**
  - ページに **Publish** ボタンを追加
  - 画像、タイトル、カテゴリ、説明を添えて送信し、承認されると公開テンプレート化
  - 提出状況（Under Review、Published、Rejected）は User Profile Center で確認可能。サイドバーのユーザーアイコンからアクセス

- **強化されたユーザープロフィール**
  - 公開プロフィールのアバター、自己紹介、ソーシャルリンクをカスタマイズ可能

- **コミュニティフィードバックとワークフロー**
  - 公開テンプレートを閲覧、いいね、そして直接 **Add to My Pages** 可能
  - ユーザーのフィードバックがクリエイター支援とテンプレートエコシステム改善に貢献

**🐛 バグ修正と改善**
- 4 階調グレースケール対応更新：新ファームウェア V1.1.1 により、reTerminal E1001–E1004 の表示対応を修正
→ SenseCraft HMI の Tools Bar から直接ファームウェア更新可能
- Google Calendar タイムゾーン：異なるタイムゾーン間の同期問題を解決
- プラットフォームバージョン表示：サイドバーの Release Notes アイコン（Doc Center 上）またはフッターの Change Logs から現在バージョンを確認可能

**🌟 参加しよう**
- デザインを共有：ベストなページを公開テンプレートとして公開し、コミュニティにインスピレーションを与えましょう。優秀なテンプレートはホームページバナーに掲載される可能性があります。
- 会話に参加：バグ報告、フィードバック、製品づくりへの参加は [Discord ロードマップチャンネル](https://discord.com/invite/Jj2CBXCjtf) へ。

---

## SenseCraft HMI v1.2.6 リリースノート
更新日：2026.01.19

**Canvas Designer の改善**
- ショートカットと右クリックメニューで編集を高速化：
  - `Ctrl+C`：コピー
  - `Ctrl+V`：貼り付け
  - `Ctrl+X`：切り取り
  - `Ctrl+D`：複製
  - `Ctrl+Z`：元に戻す
  - `Ctrl+B`：太字切り替え
  - `Ctrl+I`：斜体切り替え
- 任意の要素を右クリックするとコンテキストメニュー（Copy、Duplicate、Layer、Group、Add to My Widgets）を表示
- 新しい基本要素を追加：Clock（Analog & Flip）、Calendar、List、Table
- データ連携を強化：
  - Google Calendar（認証済み、複数イベントタイプ対応）
  - Todoist、Reddit、HackerNews のレイアウトを最適化
  - UI デザインのキャンバス適用プロセスを更新
- Group 機能を強化：
  - グループ内すべてのコンポーネントを同期リサイズ可能に
  - 類似コンポーネントのプロパティを一括編集可能（文字色、サイズ、太さなど）
- Text Element を強化：
  - 背景色、パディング、シャドウを設定可能
  - ドラッグ＆ドロップ時に選択ボックスが自動調整され、自動改行にも対応
- キャンバスズームを最適化：
  - より細かなズーム制御が可能になり、詳細調整しやすく改善

**新しいハードウェア対応**
- reTerminal E1003（10.3″ モノクロ）近日発売
- reTerminal E1004（13.3″ Spectra フルカラー）近日発売
- [13.3″ Spectra フルカラーディスプレイ搭載 EE02 Dev Kit](https://www.seeedstudio.com/XIAO-ePaper-DIY-Kit-EE02-for-13-3-Spectratm-6-E-Ink.html)

**その他の更新**
- 高度な開発者ツールを復活し、UI 設定 JSON のインポート / エクスポートに対応
- My Pages にページ複製機能を追加
  
**参加しよう**
[Discord コミュニティ #sensecraft-hmi](https://discord.com/invite/Jj2CBXCjtf) に参加して、不具合報告やロードマップ改善にご協力ください！

---

## SenseCraft HMI v1.2.0 リリースノート 
更新日：2025.12.25

**ハイライト**
- 新しいホームページと豊富なテンプレート：天気、カレンダー、暗号資産、株価、名言など、すぐに使えるデザインを提供
- 新アーキテクチャ：ハードウェア到着前でも UI を先に設計可能。Workspace（設計）、Device（展開）、Tools、AI Gen（Beta）へ明確に分離
- データソース拡充：ZenQuotes、Google Calendar、CoinMarketCap、Todoist などのライブ統合を追加
- モダンな再設計：プラットフォーム全体の UI を刷新
- 新ハードウェア：TRMNL 7.5" (OG) DIY Kit 対応
- Always-On モード：応答速度を高めた常時表示モードを追加
- サードパーティ認証：従来の SenseCraft メールログインに加え、Google と GitHub ログインに対応

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/data2.jpg" style={{width:800, height:'auto'}}/></div>

**新しいプラットフォーム構成**
- Home：テンプレートを閲覧し、お気に入りをキャンバスへ適用
- Workspace：UI ページとプレイリストを設計
- Device：接続済みデバイスを管理
- Tools：Firmware Flasher、画像ディザリング
- AI Gen（Beta）：AI による画像・レイアウト生成

**改善点**
- 4 階調グレースケールのディザリングを改善（2.9" ディスプレイ）
- XIAO EE04 のペアリングコード問題を修正
- キャンバス回転をより滑らかに改善
- プレビュー描画品質を改善

**参加しよう**

Discord に参加して、テンプレート投票、バグ報告、ロードマップづくりにご協力ください。

Discord Channel: https://discord.com/invite/Jj2CBXCjtf

メリークリスマス！

SenseCraft HMI チーム

---

## SenseCraft HMI v1.1.0 リリースノート 
更新日：2025.11.20

**新対応：XIAO EE04 ePaper DIY Kit（ESP32-S3）**

新しくリリースされた EE04 DIY Kit をサポート対象に追加し、1.54" から 7.5" まで、より幅広い ePaper ディスプレイに対応しました。

対応ディスプレイタイプ：
• モノクロ（白黒）
• 4 色表示
• 6 色表示（E Ink Spectra 6 フルカラー）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/sensecraft_hmi/update1.png" style={{width:800, height:'auto'}}/></div>

---
## SenseCraft HMI v1.0 リリースノート 
更新日：2025.10.24

**より簡単に作成できるよう再設計されたレイアウトとページリスト**

- 新しい UI レイアウトでナビゲーションを簡素化
- pagelist 機能を追加し、Keynote スライドのように複数 UI を作成可能
- page library を追加し、すべての UI を保存可能

**強化された UI エディターとデータ連携**

- 横向き・縦向き両方のキャンバスレイアウトに対応
- UI テンプレートのインポート / エクスポートに対応
- アカウントから SenseCAP のライブデータを直接取得
- デバイスの最終オンライン時刻と次回更新時刻を追加

**拡張されたハードウェア対応**

- ePaper DIY Kit-EE04 をサポート、7.3'' および 7.5'' ディスプレイに対応
- TRMNL 7.5'' (OG) DIY Kit をサポート、7.5'' ディスプレイ対応

**ファームウェア書き込みと画像処理ツールページ**

- SenseCraft HMI ファームウェアと TRMNL ファームウェア両方の書き込みに対応
- 画像を処理して `.c` ファイルとして直接エクスポートできるディザリングツールを追加

---

## SenseCraft HMI v0.6 リリースノート 
更新日：2025.9.23

**初回リリース**

- **対応デバイス**：reTerminal E1001 および E1002
- **ページタイプ**：ギャラリー、キャンバス、RSS、Web ページに対応
- **ファームウェア管理**：オンライン書き込みと更新に対応

---

*各機能の詳細については、対応するガイドセクションを参照してください。*
