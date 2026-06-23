const students = [
  { id: "410319", name: "王小明", grade: 9, classId: "901", seat: "01", track: "八升九會考備戰", lastLogin: "2026-06-23 08:05", activeDays: 5, chaptersDone: ["cell", "nutrition", "genetics"], weakChapters: ["遺傳", "生態"], mastery: 72, diagnosisDone: true, noteDone: true, revengeDone: true, mockProgress: 68 },
  { id: "410602", name: "黃昱晴", grade: 9, classId: "901", seat: "17", track: "八升九會考備戰", lastLogin: "尚未登入", activeDays: 0, chaptersDone: [], weakChapters: ["細胞", "人體"], mastery: 0, diagnosisDone: false, noteDone: false, revengeDone: false, mockProgress: 0 },
  { id: "410522", name: "陳冠宇", grade: 9, classId: "902", seat: "08", track: "八升九會考備戰", lastLogin: "2026-06-22 16:20", activeDays: 3, chaptersDone: ["cell", "body"], weakChapters: ["植物", "遺傳"], mastery: 54, diagnosisDone: true, noteDone: false, revengeDone: false, mockProgress: 38 },
  { id: "410487", name: "林品妤", grade: 8, classId: "803", seat: "12", track: "七升八暑假保溫", lastLogin: "2026-06-23 09:10", activeDays: 4, chaptersDone: ["cell", "plants"], weakChapters: ["顯微鏡", "消化"], mastery: 61, diagnosisDone: true, noteDone: true, revengeDone: false, mockProgress: 45 },
  { id: "410718", name: "蔡宥真", grade: 8, classId: "805", seat: "21", track: "七升八暑假保溫", lastLogin: "尚未登入", activeDays: 0, chaptersDone: [], weakChapters: ["養分", "人體"], mastery: 0, diagnosisDone: false, noteDone: false, revengeDone: false, mockProgress: 0 }
];

const chapters = [
  ["cell", "生命世界、細胞與顯微鏡", 66],
  ["nutrition", "養分、酵素與光合作用", 58],
  ["plants", "植物的運輸與反應", 52],
  ["digestion", "人體的營養與消化", 61],
  ["body", "人體的運輸、呼吸與排泄", 55],
  ["coordination", "神經、內分泌與恆定", 49],
  ["reproduction", "生殖與發育", 64],
  ["genetics", "遺傳與生物技術", 43],
  ["evolution", "演化與生物分類", 57],
  ["ecology", "生物與環境", 46]
];

const conceptErrors = [
  ["孟德爾遺傳比例", "第 8 章", 72, "補棋盤格視覺小測驗"],
  ["氣孔與氣體交換", "第 3 章", 65, "用葉片開窗圖重新說明"],
  ["能量流動", "第 10 章", 61, "畫食物鏈箭頭與能量塔"],
  ["體溫調節與排汗", "第 6 章", 58, "補熱傷害素養題"],
  ["顯微鏡倍率與視野", "第 1 章", 54, "做倍率視野拖拉練習"]
];

const feedback = [
  { id: "fb-001", student: "王小明", classId: "901", type: "詳解看不懂", page: "錯題鍊成室", chapter: "genetics", question: "q10", message: "棋盤格比例希望有圖。", status: "待處理", note: "" },
  { id: "fb-002", student: "林品妤", classId: "803", type: "網站操作卡住", page: "復仇檢核", chapter: "cell", question: "", message: "看完筆記不知道下一步。", status: "處理中", note: "加大下一步按鈕。" },
  { id: "fb-003", student: "陳冠宇", classId: "902", type: "想增加某個功能", page: "十章冒險地圖", chapter: "ecology", question: "", message: "希望每章有懶人圖。", status: "待處理", note: "" },
  { id: "fb-004", student: "黃昱晴", classId: "901", type: "無法登入", page: "入場儀式", chapter: "", question: "", message: "名冊查無資料。", status: "已處理", note: "已修正罕用字。" }
];

const workflowDropOff = [
  ["登入後未開始診斷", 18],
  ["診斷送出後未看回饋", 9],
  ["看筆記後未按復仇檢核", 14],
  ["復仇檢核未送出", 7]
];

function $(selector) {
  return document.querySelector(selector);
}

function pct(done, total) {
  return total ? Math.round((done / total) * 100) : 0;
}

function filteredStudents() {
  const grade = $("#gradeFilter")?.value || "all";
  const classId = $("#classFilter")?.value || "all";
  return students.filter((student) =>
    (grade === "all" || String(student.grade) === grade) &&
    (classId === "all" || student.classId === classId)
  );
}

function barRows(rows, options = {}) {
  return rows.map(([label, sub, value, action]) => `
    <div class="dash-row">
      <div><strong>${label}</strong><small>${sub}</small></div>
      <div class="dash-track"><span style="width:${value}%"></span></div>
      <b>${value}%</b>
      ${action ? `<em>${action}</em>` : ""}
    </div>
  `).join("");
}

function renderTeacherDashboard() {
  if (!$("#teacherDashboard")) return;
  const list = filteredStudents();
  const total = list.length;
  const logged = list.filter((s) => s.lastLogin !== "尚未登入").length;
  const today = list.filter((s) => s.lastLogin.includes("2026-06-23")).length;
  const active = list.filter((s) => s.activeDays >= 3).length;
  const diagnosisRate = pct(list.filter((s) => s.diagnosisDone).length, total);
  const noteRate = pct(list.filter((s) => s.noteDone).length, total);
  const revengeRate = pct(list.filter((s) => s.revengeDone).length, total);
  const avgMastery = Math.round(list.reduce((sum, s) => sum + s.mastery, 0) / Math.max(1, total));
  $("#teacherDashboard").innerHTML = `
    <section class="dash-kpis">
      ${kpi("全班登入人數", `${logged}/${total}`, "已至少登入一次")}
      ${kpi("今日使用人數", today, "今天有操作紀錄")}
      ${kpi("本週活躍學生", active, "本週使用 3 天以上")}
      ${kpi("模考前完成進度", `${avgMastery}%`, "依診斷、筆記、檢核估算")}
      ${kpi("診斷題完成率", `${diagnosisRate}%`, "已送出診斷")}
      ${kpi("錯題筆記完成率", `${noteRate}%`, "已確認筆記")}
      ${kpi("復仇檢核完成率", `${revengeRate}%`, "已送出檢核")}
      ${kpi("八升九備戰進度", `${pct(list.filter((s) => s.grade === 9 && s.mockProgress >= 60).length, list.filter((s) => s.grade === 9).length)}%`, "九年級達預定進度")}
    </section>
    <section class="dash-grid">
      <article class="dash-card">
        <h2>未登入學生名單</h2>
        ${list.filter((s) => s.lastLogin === "尚未登入").map((s) => `<p class="student-chip">${s.classId} ${s.seat} ${s.name}</p>`).join("") || "<p>目前無未登入學生。</p>"}
      </article>
      <article class="dash-card">
        <h2>各章節平均熟練度</h2>
        ${barRows(chapters.map(([id, name, value]) => [name, id, value]))}
      </article>
      <article class="dash-card wide">
        <h2>各概念錯誤率排行</h2>
        ${barRows(conceptErrors)}
      </article>
      <article class="dash-card wide">
        <h2>個別學生學習進度</h2>
        ${studentTable(list)}
      </article>
    </section>
  `;
}

function kpi(label, value, note) {
  return `<article><span>${label}</span><strong>${value}</strong><p>${note}</p></article>`;
}

function studentTable(list) {
  return `
    <table class="dash-table">
      <thead><tr><th>學生</th><th>路線</th><th>完成章節</th><th>弱點章節</th><th>補強任務</th><th>模考進度</th></tr></thead>
      <tbody>
        ${list.map((s) => `<tr>
          <td><button class="link-button" data-student="${s.id}">${s.classId} ${s.seat} ${s.name}</button></td>
          <td>${s.track}</td>
          <td>${s.chaptersDone.length}/10</td>
          <td>${s.weakChapters.join("、") || "尚未診斷"}</td>
          <td>${nextTask(s)}</td>
          <td>${s.mockProgress}% ${s.mockProgress < 50 && s.grade === 9 ? "落後" : "正常"}</td>
        </tr>`).join("")}
      </tbody>
    </table>
  `;
}

function nextTask(student) {
  if (!student.diagnosisDone) return "完成弱點偵測器";
  if (!student.noteDone) return "生成並確認錯題筆記";
  if (!student.revengeDone) return "完成復仇檢核";
  if (student.mastery < 60) return `補強${student.weakChapters[0] || "弱章節"}基礎題`;
  return "挑戰跨章節素養題";
}

function renderStudentReport(studentId = students[0].id) {
  const student = students.find((s) => s.id === studentId) || students[0];
  if (!$("#studentReport")) return;
  const unfinished = chapters.filter(([id]) => !student.chaptersDone.includes(id)).map(([, name]) => name);
  $("#studentReport").innerHTML = `
    <article class="report-hero">
      <div>
        <p class="eyebrow">學生個人報告</p>
        <h2>${student.classId} ${student.seat} ${student.name}</h2>
        <p>${student.track}｜最近登入：${student.lastLogin}｜使用天數：${student.activeDays} 天</p>
      </div>
      <strong>${student.mastery}%</strong>
    </article>
    <section class="dash-grid">
      <article class="dash-card"><h3>已完成章節</h3><p>${student.chaptersDone.length ? student.chaptersDone.join("、") : "尚未完成章節"}</p></article>
      <article class="dash-card"><h3>未完成章節</h3><p>${unfinished.slice(0, 5).join("、")} ${unfinished.length > 5 ? "等" : ""}</p></article>
      <article class="dash-card"><h3>最弱三個概念</h3><p>${student.weakChapters.concat(["圖表判讀", "資料證據"]).slice(0, 3).join("、")}</p></article>
      <article class="dash-card"><h3>猜對但不穩</h3><p>顯微鏡倍率、能量流動、孟德爾比例</p></article>
      <article class="dash-card"><h3>進步最多章節</h3><p>${student.grade === 9 ? "遺傳與生物技術" : "細胞與顯微鏡"}</p></article>
      <article class="dash-card"><h3>建議下一步任務</h3><p>${nextTask(student)}</p></article>
      <article class="dash-card"><h3>適合補救小測驗</h3><p>${student.weakChapters[0] || "細胞"} 5 題圖像快問 + 1 題素養短題</p></article>
      <article class="dash-card"><h3>模考進度</h3><p>${student.mockProgress < 50 && student.grade === 9 ? "落後，建議本週完成診斷與復仇檢核。" : "目前可維持節奏。"}</p></article>
    </section>
  `;
}

function renderClassOverview() {
  if (!$("#classOverview")) return;
  const list = filteredStudents();
  const avgCorrect = Math.round(list.reduce((sum, s) => sum + Math.min(95, s.mastery + 8), 0) / Math.max(1, list.length));
  const avgMastery = Math.round(list.reduce((sum, s) => sum + s.mastery, 0) / Math.max(1, list.length));
  $("#classOverview").innerHTML = `
    <section class="dash-kpis">
      ${kpi("班級完成率", `${pct(list.filter((s) => s.chaptersDone.length >= 2).length, list.length)}%`, "完成至少兩章")}
      ${kpi("班級平均正確率", `${avgCorrect}%`, "依診斷與檢核估算")}
      ${kpi("班級平均熟練度", `${avgMastery}%`, "含未登入學生")}
      ${kpi("完成復仇檢核", `${list.filter((s) => s.revengeDone).length} 人`, "已完成閉環")}
    </section>
    <section class="dash-grid">
      <article class="dash-card"><h2>高錯誤率概念</h2>${barRows(conceptErrors.slice(0, 4))}</article>
      <article class="dash-card"><h2>需要補救教學章節</h2>${barRows(chapters.filter(([, , v]) => v < 58).map(([id, name, value]) => [name, id, 100 - value, "優先補救"]))}</article>
      <article class="dash-card"><h2>已完成復仇檢核學生</h2>${list.filter((s) => s.revengeDone).map((s) => `<p class="student-chip">${s.name}</p>`).join("") || "<p>尚無。</p>"}</article>
      <article class="dash-card"><h2>尚未完成復仇檢核學生</h2>${list.filter((s) => !s.revengeDone).map((s) => `<p class="student-chip">${s.name}</p>`).join("") || "<p>全部完成。</p>"}</article>
    </section>
  `;
}

function renderFeedbackInbox() {
  if (!$("#feedbackInbox")) return;
  const type = $("#feedbackTypeFilter")?.value || "all";
  const chapter = $("#feedbackChapterFilter")?.value || "all";
  const list = feedback.filter((item) =>
    (type === "all" || item.type === type) &&
    (chapter === "all" || item.chapter === chapter)
  );
  const topType = [...feedback].reduce((map, item) => {
    map[item.type] = (map[item.type] || 0) + 1;
    return map;
  }, {});
  $("#feedbackInbox").innerHTML = `
    <section class="dash-grid">
      <article class="dash-card">
        <h2>回饋統計</h2>
        ${Object.entries(topType).map(([key, value]) => `<p><strong>${key}</strong>：${value} 件</p>`).join("")}
      </article>
      <article class="dash-card">
        <h2>依回饋產生的優化建議</h2>
        <ol>
          <li>遺傳比例題加入棋盤格圖解。</li>
          <li>筆記頁底部固定下一步按鈕。</li>
          <li>每章新增一張懶人圖。</li>
        </ol>
      </article>
      <article class="dash-card wide">
        <h2>回饋列表</h2>
        <table class="dash-table">
          <thead><tr><th>學生</th><th>類型</th><th>頁面</th><th>內容</th><th>狀態</th><th>處理備註</th></tr></thead>
          <tbody>${list.map((item) => `<tr>
            <td>${item.classId} ${item.student}</td>
            <td>${item.type}</td>
            <td>${item.page}</td>
            <td>${item.message}</td>
            <td><select><option>${item.status}</option><option>待處理</option><option>處理中</option><option>已處理</option></select></td>
            <td><input value="${item.note}" placeholder="填寫處理備註"></td>
          </tr>`).join("")}</tbody>
        </table>
      </article>
    </section>
  `;
}

function renderOptimizationRadar() {
  if (!$("#optimizationRadar")) return;
  $("#optimizationRadar").innerHTML = `
    <section class="dash-grid">
      <article class="dash-card"><h2>最常卡住的頁面</h2>${barRows([["錯題鍊成室", "看不懂筆記", 68], ["復仇檢核", "不知道下一步", 52], ["入場儀式", "名冊比對失敗", 41]])}</article>
      <article class="dash-card"><h2>最難懂的題目</h2>${barRows([["q10 孟德爾比例", "詳解看不懂", 72], ["q03 顯微鏡倍率", "圖像判讀弱", 54], ["q16 能量流動", "箭頭方向混淆", 49]])}</article>
      <article class="dash-card"><h2>最常被回報的詳解</h2><p>孟德爾棋盤格、氣孔開閉、能量塔、生物累積。</p></article>
      <article class="dash-card"><h2>最常放棄的流程</h2>${barRows(workflowDropOff.map(([label, value]) => [label, "流程流失", value * 4]))}</article>
      <article class="dash-card"><h2>使用率最低的功能</h2><p>章節形成性評量、留言討論、列印複習單。</p></article>
      <article class="dash-card"><h2>學生最想增加</h2><p>懶人圖、短影片、每章快速小測驗、錯題收藏。</p></article>
      <article class="dash-card wide priority"><h2>建議優先修改項目</h2><ol><li>錯題筆記改成圖像卡與流程圖。</li><li>遺傳與生態詳解增加圖表。</li><li>復仇檢核下一步按鈕固定顯示。</li><li>登入失敗顯示更明確的回報路徑。</li></ol></article>
    </section>
  `;
}

function populateFilters() {
  if (!$("#classFilter")) return;
  const classes = [...new Set(students.map((s) => s.classId))].sort();
  $("#classFilter").innerHTML = `<option value="all">全部班級</option>${classes.map((c) => `<option value="${c}">${c}</option>`).join("")}`;
  $("#chapterFilter").innerHTML = `<option value="all">全部章節</option>${chapters.map(([id, name]) => `<option value="${id}">${name}</option>`).join("")}`;
  $("#statusFilter").innerHTML = `<option value="all">全部狀態</option><option>已完成診斷</option><option>已完成筆記</option><option>已完成復仇檢核</option><option>落後模考進度</option>`;
}

function populateFeedbackFilters() {
  if (!$("#feedbackTypeFilter")) return;
  $("#feedbackTypeFilter").innerHTML = `<option value="all">全部類型</option>${[...new Set(feedback.map((f) => f.type))].map((type) => `<option>${type}</option>`).join("")}`;
  $("#feedbackChapterFilter").innerHTML = `<option value="all">全部章節</option>${chapters.map(([id, name]) => `<option value="${id}">${name}</option>`).join("")}`;
}

function renderAll() {
  renderTeacherDashboard();
  renderClassOverview();
  renderFeedbackInbox();
  renderOptimizationRadar();
}

document.addEventListener("DOMContentLoaded", () => {
  populateFilters();
  populateFeedbackFilters();
  renderAll();
  renderStudentReport();
  document.body.addEventListener("click", (event) => {
    const button = event.target.closest("[data-student]");
    if (button) renderStudentReport(button.dataset.student);
  });
  ["gradeFilter", "classFilter", "chapterFilter", "mockFilter", "statusFilter", "feedbackTypeFilter", "feedbackChapterFilter"].forEach((id) => {
    const element = $(`#${id}`);
    if (element) element.addEventListener("change", renderAll);
  });
});
