const dataFiles = {
  chapters: "data/chapters.json",
  questions: "data/questions.json",
  news: "data/news_database.json",
  announcements: "data/announcements.json",
  mocks: "data/mock_exam_schedule.json",
  calendar: "data/exam_calendar.json",
  students: "data/demo_student_directory.json"
};

const sheetRoster = {
  csvUrl: "https://docs.google.com/spreadsheets/d/1RVZeKYN8_FJsgNfNqfNlXzFEWc-I8bx9b_lyEgyOI2I/gviz/tq?tqx=out:csv&sheet=%E6%B8%AC%E8%A9%A6%E5%AD%B8%E7%94%9F%E5%90%8D%E5%86%8A"
};

const state = {
  chapters: [],
  questions: [],
  news: [],
  announcements: [],
  mocks: [],
  calendar: null,
  students: [],
  dataErrors: {},
  currentStudent: null,
  currentTrack: "summer",
  weakChapterId: null
};

const fallbackData = {
  students: [
    { student_id: "80101", nickname: "滅世黑炎龍帝", grade: 8, track: "summer", faction: "終焉魔宮", title_level: "SSR", xp: 0, achievement: ["試用勇者"] },
    { student_id: "80202", nickname: "千年眼魔導師", grade: 8, track: "summer", faction: "深淵神域", title_level: "SR", xp: 0, achievement: ["題感覺醒"] },
    { student_id: "80509", nickname: "戀柱候補生物使", grade: 8, track: "summer", faction: "花曜同盟", title_level: "SR", xp: 0, achievement: ["圖像筆記見習"] }
  ],
  chapters: [
    ["C01", "生命世界與細胞", "細胞＝城市工廠", ["細胞", "顯微鏡", "胞器"], ["細胞是生命基本單位", "細胞膜控制物質進出", "細胞核控制生命活動"]],
    ["C02", "養分與光合作用", "葉綠體＝太陽廚房", ["養分", "酵素", "光合作用"], ["澱粉可用碘液檢驗", "光合作用需要光、水、二氧化碳", "呼吸作用釋放能量"]],
    ["C03", "植物運輸與反應", "植物＝水管電梯大樓", ["木質部", "韌皮部", "蒸散作用"], ["木質部運水", "韌皮部運養分", "蒸散作用幫助水分上升"]],
    ["C04", "人體營養與消化", "消化系統＝食物拆解工廠", ["消化道", "酵素", "吸收"], ["小腸是主要吸收場所", "膽汁乳化脂肪", "酵素具有專一性"]],
    ["C05", "運輸呼吸排泄", "身體＝物流與清潔城市", ["循環", "呼吸", "排泄"], ["肺泡利於氣體交換", "腎臟形成尿液", "血紅素運送氧氣"]],
    ["C06", "神經內分泌與恆定", "神經＝指揮中心", ["神經", "內分泌", "恆定"], ["反射可快速保護身體", "激素由血液運送", "負回饋維持恆定"]],
    ["C07", "生殖與發育", "生殖＝生命接力站", ["有性生殖", "無性生殖", "受精"], ["有性生殖增加變異", "無性生殖子代相似", "受精卵由精卵結合形成"]],
    ["C08", "遺傳與生物科技", "遺傳＝密碼局", ["DNA", "基因", "生物科技"], ["基因位於染色體上", "DNA攜帶遺傳訊息", "生物科技需考量倫理"]],
    ["C09", "演化與分類", "演化＝生命長河", ["天擇", "化石", "分類"], ["天擇作用在族群", "化石可作演化證據", "分類階層越小越相近"]],
    ["C10", "生態與永續", "生態＝生命網路", ["族群", "食物網", "永續"], ["能量沿食物鏈遞減", "生物多樣性提高穩定性", "外來種可能破壞平衡"]]
  ].map(([chapter_id, chapter_name, visual_metaphor, key_concepts, common_exam_points]) => ({
    chapter_id,
    chapter_name,
    grade: 8,
    semester: "國中生物",
    key_concepts,
    learning_map: key_concepts,
    visual_metaphor,
    common_exam_points,
    common_misconceptions: ["把名詞背起來但不會連到情境題。"],
    image_note_template: { one_sentence_memory: visual_metaphor },
    study_tips: ["先看圖像比喻", "再做診斷題", "錯題回章節補強"]
  })),
  questions: [],
  news: [
    { news_id: "N01", title: "登革熱防治：病媒蚊如何影響傳染病擴散", url: "https://www.cdc.gov.tw/", source_name: "衛生福利部疾病管制署", publish_date: "2026-06-01", chapter_id: "C10", concept_tags: ["病媒蚊", "族群"], issue_tags: ["疾病", "環境"], student_summary: "登革熱和蚊子族群、積水環境、人類活動有關。讀這則時事時，請把病媒蚊當成生態系中的族群來分析。", science_literacy_questions: ["清除積水為什麼能降低傳染風險？"], discussion_prompts: ["學校可以做哪些防蚊行動？"], is_active: true },
    { news_id: "N02", title: "疫苗如何訓練免疫系統", url: "https://www.who.int/health-topics/vaccines-and-immunization", source_name: "WHO", publish_date: "2026-05-20", chapter_id: "C06", concept_tags: ["免疫", "恆定"], issue_tags: ["疫苗", "健康"], student_summary: "疫苗讓免疫系統先認識病原特徵，未來遇到真正病原時能更快反應。", science_literacy_questions: ["疫苗和抗生素有何不同？"], discussion_prompts: ["如何判斷疫苗資訊是否可信？"], is_active: true },
    { news_id: "N03", title: "基因編輯技術與倫理討論", url: "https://www.nature.com/subjects/crispr-cas9", source_name: "Nature", publish_date: "2026-05-12", chapter_id: "C08", concept_tags: ["DNA", "基因編輯"], issue_tags: ["遺傳", "生物倫理"], student_summary: "CRISPR 像分子剪刀，可修改 DNA，但醫療應用需要考慮安全、公平與倫理。", science_literacy_questions: ["基因編輯和傳統育種有何不同？"], discussion_prompts: ["疾病治療與外貌改造界線在哪？"], is_active: true },
    { news_id: "N04", title: "塑膠微粒進入食物鏈的路徑", url: "https://www.unep.org/plastic-pollution", source_name: "UNEP", publish_date: "2026-04-01", chapter_id: "C10", concept_tags: ["食物鏈", "污染"], issue_tags: ["塑膠微粒", "海洋污染"], student_summary: "塑膠微粒可能被小型生物攝入，再沿食物鏈影響其他生物。", science_literacy_questions: ["食物鏈中污染物可能如何累積？"], discussion_prompts: ["校園可如何減少一次性塑膠？"], is_active: true }
  ],
  announcements: [
    { type: "系統公告", title: "BioQuest 學生試用版已開放，請先登入再照今日任務前進。", is_active: true },
    { type: "學習提醒", title: "做完診斷後，請先看圖像筆記，再進入復仇檢核。", is_active: true }
  ],
  mocks: [{ title: "雙北一模範本", exam_date: "2026-09-10" }],
  calendar: {
    cap_exam: { title: "國中教育會考範本日期", exam_date: "2027-05-15" },
    review_phase: "暑假基礎期",
    weekly_mission: "完成診斷、圖像筆記、復仇檢核。",
    monthly_goal: "完成兩章補強。"
  }
};

fallbackData.questions = fallbackData.chapters.map((chapter, index) => ({
  question_id: `FQ${String(index + 1).padStart(3, "0")}`,
  chapter_id: chapter.chapter_id,
  concept_tags: chapter.key_concepts.slice(0, 2),
  difficulty: index % 3 === 0 ? "easy" : index % 3 === 1 ? "medium" : "hard",
  question_text: `關於「${chapter.chapter_name}」，下列哪一個敘述最符合常考重點？`,
  options: [
    chapter.common_exam_points[0],
    "這個章節只需要背名詞，不需要理解情境。",
    "所有生物概念都和環境無關。",
    "只要選最長的選項就一定正確。"
  ],
  answer: "A",
  explanation: `本題考 ${chapter.key_concepts[0]}。${chapter.common_exam_points[0]} 是本章核心概念。`,
  why_correct: "A 直接對應本章常考重點。",
  why_others_wrong: "B/C/D 都是常見錯誤作答策略或錯誤觀念。",
  common_misconception: "只背名詞，沒有把概念連回情境。",
  source_type: "fallback_demo",
  source_reference: "Netlify 資料載入失敗時的內建保底題",
  is_active: true
}));

const $ = (selector) => document.querySelector(selector);

async function loadJson(path, fallback) {
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`${path} ${response.status}`);
    return await response.json();
  } catch (error) {
    console.warn(`BioQuest data fallback: ${error.message}`);
    state.dataErrors[path] = error.message;
    return fallback;
  }
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];
    if (char === '"' && quoted && next === '"') {
      cell += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(cell);
      cell = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (cell || row.length) rows.push([...row, cell]);
      row = [];
      cell = "";
      if (char === "\r" && next === "\n") index += 1;
    } else {
      cell += char;
    }
  }
  if (cell || row.length) rows.push([...row, cell]);
  return rows;
}

async function loadStudents() {
  try {
    const response = await fetch(sheetRoster.csvUrl, { cache: "no-store" });
    if (!response.ok) throw new Error(`Google Sheet ${response.status}`);
    const rows = parseCsv(await response.text()).filter((row) => row.some(Boolean));
    const headers = rows.shift().map((header) => header.trim());
    const students = rows.map((row) => Object.fromEntries(headers.map((header, index) => [header, row[index] || ""])))
      .filter((item) => item.learning_id && item.nickname)
      .map((item) => ({
        student_id: item.learning_id,
        nickname: item.nickname,
        grade: Number(item.grade || 8),
        class_id: item.class_id || "",
        faction: item.faction || "未分派系",
        track: item.track || (String(item.grade) === "9" ? "exam" : "summer"),
        title_level: item.title_level || "N",
        xp: Number(item.xp || 0),
        achievement: item.achievement ? [item.achievement] : []
      }));
    if (students.length) return students;
    throw new Error("Google Sheet roster empty");
  } catch (error) {
    console.warn(`BioQuest roster fallback: ${error.message}`);
    return loadJson(dataFiles.students, fallbackData.students);
  }
}

function daysUntil(dateText) {
  if (!dateText) return "--";
  const today = new Date();
  const target = new Date(`${dateText}T00:00:00+08:00`);
  return Math.max(0, Math.ceil((target.getTime() - today.getTime()) / 86400000));
}

function chapterName(chapterId) {
  const chapter = state.chapters.find((item) => item.chapter_id === chapterId);
  return chapter?.chapter_name || chapter?.chapter_title || "核心概念";
}

function testNotice(label = "此功能") {
  return `<article class="empty-card"><strong>${label}</strong><span>此功能為測試版，資料建置中。</span></article>`;
}

function unlockStudentFeatures(student) {
  state.currentStudent = student;
  document.body.classList.add("is-logged-in");
  document.querySelectorAll(".student-gated").forEach((section) => {
    section.hidden = false;
  });
  document.querySelectorAll(".learning-nav").forEach((nav) => {
    nav.hidden = false;
  });
  renderTodayTasks(student);
  renderQuiz();
}

function renderTodayTasks(student = state.currentStudent) {
  const trackLabel = student?.track === "exam" ? "會考備戰" : "暑假保溫";
  const tasks = [
    ["①", "診斷挑戰", "先做題找弱點", "#diagnosis"],
    ["②", "圖像筆記", "看一張卡記重點", "#notes"],
    ["③", "復仇檢核", "再戰不熟概念", "#recheck"]
  ];
  const target = $("#todayTasks");
  if (!target) return;
  target.innerHTML = tasks.map(([icon, title, text, href]) => `
    <a class="task-card" href="${href}">
      <span>${icon}</span>
      <strong>${title}</strong>
      <small>${trackLabel}｜${text}</small>
    </a>
  `).join("");
}

function setTrack(track) {
  state.currentTrack = track;
  document.querySelectorAll("[data-track]").forEach((button) => {
    button.classList.toggle("active", button.dataset.track === track);
  });
  const isExam = track === "exam";
  $("#trackLabel").textContent = isExam ? "目前模式：八升九" : "目前模式：七升八";
  $("#trackTitle").textContent = isExam ? "會考備戰模式" : "暑假保溫模式";
  $("#trackGoal").textContent = isExam
    ? "先用診斷題找弱點，再看圖像筆記，最後用復仇檢核確認是否真的會。"
    : "每天完成一個短任務，維持細胞、人體、植物與生態概念的熟悉感。";
  $("#singleNextTask").textContent = isExam ? "下一步：完成 8 題診斷挑戰。" : "下一步：完成 5 題暖身診斷。";
}

function renderTitleCard(student) {
  $("#titleNickname").textContent = student.nickname;
  $("#titleTrack").textContent = `所屬派系：${student.faction || "未分派系"}｜模式：${student.track === "exam" ? "九年級會考模式" : "八年級暑假模式"}`;
  $("#titleXpBar").style.width = `${Math.min(100, Math.round((student.xp || 0) / 10))}%`;
  $("#titleMeta").textContent = `稀有度 ${student.title_level || "N"}｜XP ${student.xp || 0}｜${(student.achievement || []).join("、") || "尚未解鎖成就"}`;
}

function verifyStudent() {
  const studentId = $("#loginStudentId").value.trim();
  const nickname = $("#loginNickname").value.trim();
  const status = $("#studentVerifyStatus");
  const show = (message, ok = false) => {
    status.textContent = message;
    status.classList.toggle("verified", ok);
    status.classList.toggle("error", !ok);
  };

  if (!studentId && !nickname) return show("請輸入學習代號與稱號。範例：80101／滅世黑炎龍帝。");
  if (!studentId) return show("請輸入學習代號。");
  if (!nickname) return show("請輸入稱號。");

  const student = state.students.find((item) =>
    item.student_id === studentId && item.nickname === nickname
  );
  if (!student) return show("查無此學習代號＋稱號。請確認大小寫與文字完全相同。");

  localStorage.setItem("bioquest_demo_student", JSON.stringify(student));
  setTrack(student.track);
  renderTitleCard(student);
  unlockStudentFeatures(student);
  show(`歡迎回來，${student.nickname}。所屬派系：${student.faction || "未分派系"}。模式：${student.track === "exam" ? "九年級會考模式" : "八年級暑假模式"}。稀有度：${student.title_level || "N"}。`, true);
  $("#today")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderCountdown() {
  const cap = state.calendar?.cap_exam;
  const nextMock = state.mocks.find((mock) => daysUntil(mock.exam_date) !== "--" && daysUntil(mock.exam_date) > 0) || state.mocks[0];
  $("#capCountdown").textContent = cap?.exam_date ? `${daysUntil(cap.exam_date)} 天` : "--";
  $("#capDateLabel").textContent = cap?.exam_date ? `${cap.title}：${cap.exam_date}` : "請在 exam_calendar.json 設定";
  $("#mockCountdown").textContent = nextMock?.exam_date ? `${daysUntil(nextMock.exam_date)} 天` : "--";
  $("#mockDateLabel").textContent = nextMock?.exam_date ? `${nextMock.title}：${nextMock.exam_date}` : "請在 mock_exam_schedule.json 設定";
  const mission = state.calendar?.weekly_mission || "完成診斷、筆記與復仇檢核。";
  const goal = state.calendar?.monthly_goal || "完成兩章補強。";
  const phase = state.calendar?.review_phase || "複習期";
  document.querySelector(".countdown-grid article:nth-child(3) p").textContent = `${phase}｜${mission}｜${goal}`;
}

function renderAnnouncements() {
  const active = state.announcements.filter((item) => item.is_active !== false).slice(0, 5);
  $("#announcementStrip").innerHTML = active.map((item) => `
    <article>
      <strong>${item.type || "公告"}</strong>
      <span>${item.title || item.content}</span>
    </article>
  `).join("") || testNotice("重要公告");
}

function renderChapters() {
  if (!state.chapters.length) {
    $("#chapterGrid").innerHTML = testNotice("章節地圖");
    return;
  }
  $("#chapterGrid").innerHTML = state.chapters.map((chapter) => `
    <article class="module-card">
      <span class="path-badge">${chapter.semester || "國中生物"}</span>
      <h3>${chapter.chapter_name || chapter.chapter_title}</h3>
      <p>${chapter.image_note_template?.one_sentence_memory || chapter.visual_metaphor || "先看核心概念，再練題。"}</p>
      <div class="tag-row">${(chapter.key_concepts || []).slice(0, 4).map((tag) => `<span>${tag}</span>`).join("")}</div>
      <button class="secondary-button" type="button" data-chapter="${chapter.chapter_id}">看圖像筆記</button>
    </article>
  `).join("");
  document.querySelectorAll("[data-chapter]").forEach((button) => {
    button.addEventListener("click", () => showChapterNote(button.dataset.chapter));
  });
}

function showChapterNote(chapterId) {
  const chapter = state.chapters.find((item) => item.chapter_id === chapterId);
  if (!chapter) return;
  $("#notes").hidden = false;
  $("#notesContent").innerHTML = noteCard(chapter);
  $("#notes").scrollIntoView({ behavior: "smooth", block: "start" });
}

function noteCard(chapter) {
  const template = chapter.image_note_template || {};
  const points = (chapter.common_exam_points || []).slice(0, 3);
  return `
    <article class="visual-note-card">
      <div class="note-visual">${chapter.visual_metaphor || template.visual_metaphor || "圖像記憶"}</div>
      <div>
        <h3>${chapter.chapter_name || chapter.chapter_title}</h3>
        <p>${template.one_sentence_memory || "用一張圖抓核心概念。"}</p>
        <h4>常考重點</h4>
        <ul>${points.map((point) => `<li>${point}</li>`).join("")}</ul>
      </div>
    </article>
  `;
}

function diagnosisQuestions() {
  const active = state.questions.filter((question) => question.is_active !== false);
  return active.slice(0, state.currentTrack === "exam" ? 8 : 5);
}

function renderQuiz() {
  const questions = diagnosisQuestions();
  if (!questions.length) {
    $("#quizForm").innerHTML = testNotice("診斷挑戰");
    return;
  }
  $("#quizForm").innerHTML = questions.map((question, index) => `
    <fieldset class="quiz-item">
      <legend>${index + 1}. ${question.question_text}</legend>
      ${(question.options || []).map((option, optionIndex) => {
        const letter = String.fromCharCode(65 + optionIndex);
        return `<label><input type="radio" name="${question.question_id}" value="${letter}"> ${letter}. ${option}</label>`;
      }).join("")}
    </fieldset>
  `).join("") + '<button class="primary-button" type="submit">送出診斷</button>';
}

function submitQuiz(event) {
  event.preventDefault();
  const questions = diagnosisQuestions();
  if (!questions.length) return;
  const wrong = [];
  let correct = 0;
  questions.forEach((question) => {
    const answer = new FormData(event.currentTarget).get(question.question_id);
    if (answer === question.answer) correct += 1;
    else wrong.push({ ...question, student_answer: answer || "未作答" });
  });
  const weak = wrong[0] || questions[0];
  state.weakChapterId = weak?.chapter_id;
  const chapter = state.chapters.find((item) => item.chapter_id === state.weakChapterId) || state.chapters[0];
  $("#quizResult").hidden = false;
  $("#quizResult").innerHTML = `
    <h3>診斷完成：${correct} / ${questions.length}</h3>
    <p>目前最需要補強：<strong>${chapterName(state.weakChapterId)}</strong></p>
    <div class="ability-bar"><span style="width:${Math.round((correct / questions.length) * 100)}%"></span></div>
    <p>建議：先看圖像筆記，再做復仇檢核。</p>
    <div class="wrong-list">
      ${(wrong.length ? wrong : questions.slice(0, 1)).slice(0, 3).map((question) => `
        <article>
          <strong>${question.question_id}｜${chapterName(question.chapter_id)}</strong>
          <span>你的答案：${question.student_answer || "答對"}｜正解：${question.answer}</span>
          <p>${question.explanation || question.why_correct || "這題解析資料建置中。"}</p>
          <small>迷思提醒：${question.common_misconception || "先抓題目關鍵字，再回章節地圖確認概念。"}</small>
        </article>
      `).join("")}
    </div>
  `;
  if (chapter) {
    $("#notes").hidden = false;
    $("#notesContent").innerHTML = noteCard(chapter);
  }
  $("#quizResult").scrollIntoView({ behavior: "smooth", block: "center" });
}

function renderRecheck() {
  const chapterQuestions = state.questions
    .filter((question) => !state.weakChapterId || question.chapter_id === state.weakChapterId)
    .slice(0, 3);
  if (!chapterQuestions.length) {
    $("#recheckForm").innerHTML = testNotice("復仇檢核");
    return;
  }
  $("#recheckForm").innerHTML = chapterQuestions.map((question, index) => `
    <fieldset class="quiz-item">
      <legend>${index + 1}. ${question.question_text}</legend>
      ${(question.options || []).map((option, optionIndex) => {
        const letter = String.fromCharCode(65 + optionIndex);
        return `<label><input type="radio" name="${question.question_id}" value="${letter}"> ${letter}. ${option}</label>`;
      }).join("")}
    </fieldset>
  `).join("") + '<button class="primary-button" type="submit">送出復仇檢核</button>';
}

function submitRecheck(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const ids = [...new Set([...event.currentTarget.querySelectorAll("input[type='radio']")].map((input) => input.name))];
  const correct = ids.filter((id) => {
    const question = state.questions.find((item) => item.question_id === id);
    return question && data.get(id) === question.answer;
  }).length;
  $("#recheckResult").hidden = false;
  $("#recheckResult").innerHTML = `
    <h3>復仇檢核完成：${correct} / ${ids.length}</h3>
    <p>${correct === ids.length ? "這一輪掌握度不錯，可以前往下一章。" : "還有不穩的地方，請回到圖像筆記再看一次常考重點。"}</p>
  `;
}

function renderNews() {
  const chapterFilter = $("#newsChapterFilter")?.value || "all";
  const tagFilter = $("#newsTagFilter")?.value || "all";
  const active = state.news.filter((item) => {
    const tags = [...(item.concept_tags || []), ...(item.issue_tags || item.tags || [])];
    return item.is_active !== false &&
      (chapterFilter === "all" || item.chapter_id === chapterFilter) &&
      (tagFilter === "all" || tags.includes(tagFilter));
  }).slice(0, 12);
  $("#newsList").innerHTML = active.map((item, index) => `
    <button class="${index === 0 ? "active" : ""}" type="button" data-news="${item.news_id}">
      <strong>${item.title}</strong>
      <span>${chapterName(item.chapter_id)}</span>
    </button>
  `).join("");
  document.querySelectorAll("[data-news]").forEach((button) => {
    button.addEventListener("click", () => showNews(button.dataset.news));
  });
  if (active[0]) showNews(active[0].news_id);
  else $("#newsDetail").innerHTML = testNotice("素養時事");
}

function renderNewsFilters() {
  const chapterSelect = $("#newsChapterFilter");
  const tagSelect = $("#newsTagFilter");
  if (!chapterSelect || !tagSelect) return;
  chapterSelect.innerHTML = '<option value="all">全部章節</option>' + state.chapters
    .map((chapter) => `<option value="${chapter.chapter_id}">${chapter.chapter_name || chapter.chapter_title}</option>`)
    .join("");
  const tags = [...new Set(state.news.flatMap((item) => [...(item.concept_tags || []), ...(item.issue_tags || item.tags || [])]))].sort();
  tagSelect.innerHTML = '<option value="all">全部標籤</option>' + tags.map((tag) => `<option value="${tag}">${tag}</option>`).join("");
  chapterSelect.addEventListener("change", renderNews);
  tagSelect.addEventListener("change", renderNews);
}

function showNews(newsId) {
  const item = state.news.find((news) => news.news_id === newsId);
  if (!item) return;
  document.querySelectorAll("[data-news]").forEach((button) => button.classList.toggle("active", button.dataset.news === newsId));
  $("#newsDetail").innerHTML = `
    <span class="path-badge">${chapterName(item.chapter_id)}</span>
    <h3>${item.title}</h3>
    <p>${item.student_summary || item.summary}</p>
    <p><strong>標籤：</strong>${[...(item.concept_tags || []), ...(item.issue_tags || item.tags || [])].join("、")}</p>
    <p><strong>出處：</strong>${item.url ? `<a href="${item.url}">${item.source_name || "來源"}</a>` : item.source_name || item.source_title}</p>
    <h4>討論問題</h4>
    <ul>${[...(item.science_literacy_questions || []), ...(item.discussion_prompts || item.discussion_questions || [])].slice(0, 4).map((question) => `<li>${question}</li>`).join("")}</ul>
  `;
}

async function init() {
  const [chapters, questions, news, announcements, mocks, calendar, students] = await Promise.all([
    loadJson(dataFiles.chapters, fallbackData.chapters),
    loadJson(dataFiles.questions, fallbackData.questions),
    loadJson(dataFiles.news, fallbackData.news),
    loadJson(dataFiles.announcements, fallbackData.announcements),
    loadJson(dataFiles.mocks, fallbackData.mocks),
    loadJson(dataFiles.calendar, fallbackData.calendar),
    loadStudents()
  ]);
  Object.assign(state, { chapters, questions, news, announcements, mocks, calendar, students });
  renderCountdown();
  renderAnnouncements();
  renderChapters();
  renderQuiz();
  renderNewsFilters();
  renderNews();
  setTrack("summer");
  let storedStudent = null;
  try {
    storedStudent = JSON.parse(localStorage.getItem("bioquest_demo_student") || "null");
  } catch (error) {
    localStorage.removeItem("bioquest_demo_student");
  }
  if (storedStudent?.student_id && storedStudent?.nickname) {
    const freshStudent = students.find((item) => item.student_id === storedStudent.student_id && item.nickname === storedStudent.nickname) || storedStudent;
    setTrack(freshStudent.track || "summer");
    renderTitleCard(freshStudent);
    unlockStudentFeatures(freshStudent);
    $("#studentVerifyStatus").textContent = `歡迎回來，${freshStudent.nickname}。`;
    $("#studentVerifyStatus").classList.add("verified");
  }
}

document.querySelectorAll("[data-track]").forEach((button) => {
  button.addEventListener("click", () => {
    setTrack(button.dataset.track);
    renderQuiz();
  });
});

document.querySelectorAll("[data-demo-login]").forEach((button) => {
  button.addEventListener("click", () => {
    const [studentId, nickname] = button.dataset.demoLogin.split("|");
    $("#loginStudentId").value = studentId;
    $("#loginNickname").value = nickname;
    verifyStudent();
  });
});

$("#verifyStudent").addEventListener("click", verifyStudent);
$("#quizForm").addEventListener("submit", submitQuiz);
$("#startRecheck").addEventListener("click", () => {
  $("#recheck").hidden = false;
  renderRecheck();
  $("#recheck").scrollIntoView({ behavior: "smooth", block: "start" });
});
$("#recheckForm").addEventListener("submit", submitRecheck);

init();