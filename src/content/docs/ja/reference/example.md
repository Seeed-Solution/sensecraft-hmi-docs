---
title: API リファレンスサンプル
description: SenseCraft HMI API リファレンスドキュメントサンプル
---

# API リファレンスサンプル

これは SenseCraft HMI API リファレンスドキュメントのサンプルページです。

## コア API

### 初期化

```javascript
import { SenseCraftHMI } from 'sensecraft-hmi';

const hmi = new SenseCraftHMI({
  // 設定オプション
});
```

### メソッド

#### `init()`

HMI システムを初期化します。

**パラメータ：**
- `config` (Object): 設定オブジェクト

**戻り値：**
- `Promise<void>`

**例：**
```javascript
await hmi.init({
  theme: 'dark',
  language: 'ja'
});
```

#### `render()`

HMI インターフェースをレンダリングします。

**パラメータ：**
- `component` (Component): レンダリングするコンポーネント

**戻り値：**
- `HTMLElement`

## イベントシステム

### イベントリスニング

```javascript
hmi.on('userAction', (data) => {
  console.log('ユーザーアクション:', data);
});
```

### イベント発火

```javascript
hmi.emit('customEvent', {
  type: 'buttonClick',
  timestamp: Date.now()
});
```

## 設定オプション

| オプション | 型 | デフォルト値 | 説明 |
|------------|----|------------|----|
| `theme` | string | 'light' | テーマモード |
| `language` | string | 'en' | インターフェース言語 |
| `debug` | boolean | false | デバッグモード |

## 詳細情報

- [クイックスタートガイド](/ja/guides/example/)
- [GitHub リポジトリ](https://github.com/Seeed-Studio/sensecraft-hmi-docs)
