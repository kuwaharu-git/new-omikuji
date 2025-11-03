# new-omikuji

おみくじWebサイト - Fortune Telling Website

## 概要 (Overview)

このプロジェクトは、日本の伝統的なおみくじ（運勢占い）をWebサイトとして実装したものです。
ユーザーは複数のおみくじの種類から一つを選び、ランダムに運勢の結果を得ることができます。

This project is a web implementation of traditional Japanese omikuji (fortune-telling).
Users can select from multiple types of omikuji and receive random fortune results.

## 機能 (Features)

- **5種類のおみくじ** (5 types of omikuji):
  - 💕 恋愛運 (Love Fortune)
  - 🏥 健康運 (Health Fortune)
  - 💼 仕事運 (Career Fortune)
  - 💰 金運 (Money Fortune)
  - 🌟 総合運 (General Fortune)

- **5段階の運勢レベル** (5 fortune levels):
  - 大吉 (Great Fortune)
  - 吉 (Good Fortune)
  - 中吉 (Medium Fortune)
  - 小吉 (Small Fortune)
  - 凶 (Bad Fortune)

- レスポンシブデザイン (Responsive design for mobile and desktop)
- 美しいグラデーションUI (Beautiful gradient UI)
- アニメーション効果 (Animation effects)

## 使い方 (How to Use)

1. Webブラウザで `index.html` を開く (Open `index.html` in a web browser)
2. 占いたい運勢の種類をクリック (Click the fortune type you want to draw)
3. ランダムに表示される結果を確認 (View the randomly displayed result)
4. 「もう一度引く」ボタンで最初の画面に戻る (Click "Draw Again" to return to the selection screen)

## ローカルでの起動方法 (How to Run Locally)

### 方法1: ファイルを直接開く (Method 1: Direct File Open)
```bash
# ブラウザで直接 index.html を開く
# Open index.html directly in your browser
```

### 方法2: ローカルサーバーを使用 (Method 2: Using Local Server)
```bash
# Python 3を使用する場合
python3 -m http.server 8000

# その後、ブラウザで http://localhost:8000 にアクセス
# Then access http://localhost:8000 in your browser
```

## ファイル構成 (File Structure)

```
new-omikuji/
├── index.html    # メインHTMLファイル (Main HTML file)
├── style.css     # スタイルシート (Stylesheet)
├── script.js     # JavaScript実装 (JavaScript implementation)
└── README.md     # このファイル (This file)
```

## 技術スタック (Technology Stack)

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript (ES6+)

## スクリーンショット (Screenshots)

### 選択画面 (Selection Screen)
![Selection Screen](https://github.com/user-attachments/assets/09c9dd80-4df1-45ca-a9ec-d4753010a8e6)

### 結果画面 - 凶 (Result Screen - Bad Fortune)
![Result Screen - Kyo](https://github.com/user-attachments/assets/2df1bfe5-78cf-4352-a4a3-7abb0b5a6ac6)

### 結果画面 - 大吉 (Result Screen - Great Fortune)
![Result Screen - Daikichi](https://github.com/user-attachments/assets/0e472f20-5c0f-4bdb-a24f-f5cd67409454)

### モバイル表示 (Mobile View)
![Mobile View](https://github.com/user-attachments/assets/c8f1d58c-20d4-4780-adab-3a49b07991d1)

## ライセンス (License)

MIT License