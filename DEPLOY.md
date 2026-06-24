# 生物複習網站公開版部署說明

這個資料夾是可公開給學生使用的靜態網站版本。

## 內含檔案

- `index.html`
- `teacher-dashboard.html`
- `admin-dashboard.html`
- `styles.css`
- `app.js`
- `dashboard.js`
- `data/learning_logs.json`
- `data/feedback_inbox.json`
- `data/student_directory.json`

把這些檔案放在同一個網站資料夾即可展示原型。

## 最快公開方式

1. 使用 GitHub Pages、Netlify、Vercel 或學校網站空間。
2. 上傳整個 `bio-cap-review-public` 資料夾內容。
3. 將公開網址提供給學生。

## 建議做法：Netlify Drop

1. 開啟 Netlify Drop。
2. 將 `bio-cap-review-public` 資料夾拖曳上傳。
3. Netlify 會產生一個 `https://...netlify.app` 網址。
4. 把這個網址貼給學生即可使用。

## 建議做法：GitHub Pages

1. 建立一個 GitHub repository。
2. 上傳 `index.html`、`styles.css`、`app.js`。
3. 到 repository 的 Settings > Pages。
4. 選擇從 main branch 部署。
5. 取得 `https://帳號.github.io/repository/` 公開網址。

## 雲端資料夾用途

Google Drive 資料夾適合放：

- 網站備份檔案。
- 題庫 CSV。
- 章節與素養議題表格。
- 排行榜示範資料。
- 每週時事閱讀資料。

但 Google Drive 資料夾本身不是正式網站伺服器；學生通常不應直接從 Drive 開 `index.html`。建議 Drive 作為資料保存與共同編輯位置，真正給學生的網址仍使用 GitHub Pages、Netlify、Firebase Hosting 或校方伺服器。

## 重要限制

目前是靜態公開版：

- 學生進度只存在該學生自己的瀏覽器。
- 教師端 dashboard 與教務端後台目前使用假資料展示。
- 學號姓名驗證在靜態版只是展示流程，不是真正身分驗證。
- 排行榜與進步榜目前是示範資料；正式版需由後端每週一結算並刷新。
- 真正的學生進度紀錄、教師監控、意見信箱處理，需要後端資料庫。
- 建議正式版使用 Firebase、Supabase、Google Sheets + Apps Script 或學校伺服器。
- 不得把學生個資硬寫在公開前端程式碼中。
- 學生名冊若用於公開網站，必須放在受保護的後端或權限控管雲端資料源。
- 若要正式收集學生表現、綁定教育局 Google 帳號、區分教師與教務端權限，需要後端、資料庫與 OAuth 登入。

## 題目與版權

題庫為自製仿題，參考會考與段考常見命題方向，不重製官方或各校考古題原文。若未來匯入正式題庫，請確認題目授權或僅使用官方允許公開的連結。
