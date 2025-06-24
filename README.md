# AI 智能客服
## 專案開發環境與目錄結構介紹
### 主題
《拾光堂》二手攝影器材電商平台的 智能客服

### 創作緣由
- 快速與用戶互動，降低跳出率
- 減少客服人力負擔
- 即時收集客戶提問熱點

### 平台網址
前台：[https://lightpickers.github.io/Frontend-Dev-React/#/](https://lightpickers.github.io/Frontend-Dev-React/#/

---

## 專案技術
- **後端語言**：Node.js
- **後端框架**：Express
- **資料庫**：PostgreSQL
- **AI客服**：openAI
  - [npm express-rate-limit](https://docs.google.com/document/d/1ULpoUhgw3VtFKVKErIKAc6BKihg6OLgujegPdwrhnBg/edit?usp=drive_link) 阻擋異常過多的請求次數
  - [npm @dqbd/tiktoken](https://docs.google.com/document/d/1Z4yAnHxsTsvMfv9UJu_FWcKPXr6FqupQMgDWIKB69xw/edit?usp=drive_link) 計算 token 數 進行成本控制
- **Log 工具**：Pino（搭配 pino-pretty，方便開發時格式化 log）

---

## 功能
- 於拾光堂平台測試
帳號密碼
```bash
帳號：example1223@gmail.com
密碼：ASSffff8972
```
- [x] 使用 AI 智能客服 詢問問題(平台相關、器材推薦)

- 於本地端測試
```bash
依照下方步驟完成本地安裝
```
 
---

## 安裝
以下將會引導你如何安裝此專案到你的電腦上。
#### 取得專案
```bash
git clone https://github.com/TauHsu/AI-Customer-Service.git
```
#### 移動到專案內
```bash
cd AI-Customer-Service
```
#### 安裝套件
```bash
npm install
```
#### 環境變數設定
請在終端機輸入 cp .env.example .env 來複製 .env.example 檔案，並依據 .env 內容調整相關欄位。
#### 運行專案
```bash
node bin/www.js
```
#### 瀏覽器測試
```bash
網址輸入：http://localhost:3000/
```

---

## 環境變數說明
```bash
# Server
PORT=3000

# Logging
LOG_LEVEL=debug                  # 可選: error, warn, info, debug, verbose

# Database Config
DB_HOST=your_host
DB_PORT=5432
DB_USERNAME=your_user
DB_PASSWORD=your_password
DB_DATABASE=your_database
DB_SYNCHRONIZE=true              # true 僅建議開發環境使用
DB_ENABLE_SSL=true               # 若部署於 Render、Heroku 等通常需設為 true

# OpenAI Config
OPENAI_API_KEY=your_openaiApiKey
```

---

---

## 第三方服務
- openai API

---

## 關於作者

姓名: Tau 
Email: jason850629@gmail.com
GitHub: https://github.com/TauHsu

如果您有任何問題或建議，歡迎與我聯繫。感謝閱讀！
