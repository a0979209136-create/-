# 國中生物會考複習系統部署說明

## 靜態展示部署

若只是展示原型，可將以下檔案放在同一個網站資料夾：

- `index.html`
- `teacher-dashboard.html`
- `admin-dashboard.html`
- `styles.css`
- `app.js`
- `dashboard.js`
- `data/`

可使用 GitHub Pages、Netlify、Firebase Hosting、Vercel 或學校網站空間。

## 重要警示

靜態版只能示範教師端畫面與假資料。

真正的學生進度紀錄、教師監控、意見信箱處理，需要後端資料庫。

建議正式版使用：

- Firebase。
- Supabase。
- Google Sheets + Apps Script。
- 學校伺服器。

不得把學生個資硬寫在公開前端程式碼中。

學生名冊若用於公開網站，必須放在受保護的後端或權限控管雲端資料源。

## 正式部署檢查

上線前請確認：

- 學生端公開網址可用。
- 教師端與教務端需要登入權限。
- 學生端無法開啟教師端與教務端資料。
- 學生名冊不在公開前端。
- learning logs 會寫入後端。
- feedback inbox 會寫入後端。
- 排行榜由後端每週結算。
- 題庫與詳解均有授權或來源聲明。
- Google 教育帳號驗證使用 OAuth 或校方 SSO。
