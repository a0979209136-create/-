const dataFiles = {
  chapters: "data/chapters.json",
  questions: "data/questions.json",
  news: "data/news_database.json",
  announcements: "data/announcements.json",
  mocks: "data/mock_exam_schedule.json",
  calendar: "data/exam_calendar.json",
  students: "data/demo_student_directory.json"
};

const state = {
  chapters: [],
  questions: [],
  news: [],
  announcements: [],
  mocks: [],
  calendar: null,
  students: [],
  currentTrack: "summer",
  weakChapterId: null
};

const $ = (selector) => document.querySelector(selector);

async function loadJson(path, fallback) {
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`${path} ${response.status}`);
    return await response.json();
  } catch (error) {
    console.warn(`BioQuest data fallback: ${error.message}`);
    return fallback;
  }
}

function daysUntil(dateText) {
  if (!dateText) return "--";
  const today = new Date();
  const target = new Date(`${dateText}T00:00:00+08:00`);
  return Math.max(0, Math.ceil((target.getTime() - today.getTime()) / 86400000));
}

function chapterName(chapterId) {
  return state.chapters.find((chapter) => chapter.chapter_id === chapterId)?.chapter_title || "核心概念";
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
  $("#titleTrack").textContent = student.track === "exam" ? "九年級會考模式已啟動。" : "八年級暑假保溫模式已啟動。";
  $("#titleXpBar").style.width = `${Math.min(100, Math.round((student.xp || 0) / 10))}%`;
  $("#titleMeta").textContent = `稱號 Lv.${student.title_level || 1}｜XP ${student.xp || 0}｜${student.achievement || "尚未解鎖成就"}`;
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

  if (!studentId && !nickname) return show("請輸入學習代號與稱號。範例：BQ901／滅世魔龍使。");
  if (!studentId) return show("請輸入學習代號。");
  if (!nickname) return show("請輸入稱號。");

  const student = state.students.find((item) =>
    item.student_id === studentId && item.nickname === nickname
  );
  if (!student) return show("查無此學習代號＋稱號。請確認大小寫與文字完全相同。");

  localStorage.setItem("bioquest_demo_student", JSON.stringify(student));
  setTrack(student.track);
  renderTitleCard(student);
  show(`歡迎回來，${student.nickname}。${student.grade === 9 ? "九年級會考模式已啟動。" : "八年級暑假保溫模式已啟動。"}`, true);
}

function renderCountdown() {
  const cap = state.calendar?.cap_exam;
  const nextMock = state.mocks.find((mock) => daysUntil(mock.exam_date) !== "--" && daysUntil(mock.exam_date) > 0) || state.mocks[0];
  $("#capCountdown").textContent = cap?.exam_date ? `${daysUntil(cap.exam_date)} 天` : "--";
  $("#capDateLabel").textContent = cap?.exam_date ? `${cap.title}：${cap.exam_date}` : "請在 exam_calendar.json 設定";
  $("#mockCountdown").textContent = nextMock?.exam_date ? `${daysUntil(nextMock.exam_date)} 天` : "--";
  $("#mockDateLabel").textContent = nextMock?.exam_date ? `${nextMock.title}：${nextMock.exam_date}` : "請在 mock_exam_schedule.json 設定";
}

function renderAnnouncements() {
  const active = state.announcements.filter((item) => item.is_active !== false).slice(0, 5);
  $("#announcementStrip").innerHTML = active.map((item) => `
    <article>
      <strong>${item.type || "公告"}</strong>
      <span>${item.title || item.content}</span>
    </article>
  `).join("") || "<article><strong>公告</strong><span>目前沒有公告。</span></article>";
}

function renderChapters() {
  $("#chapterGrid").innerHTML = state.chapters.map((chapter) => `
    <article class="module-card">
      <span class="path-badge">${chapter.semester || "國中生物"}</span>
      <h3>${chapter.chapter_title}</h3>
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
        <h3>${chapter.chapter_title}</h3>
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
  $("#quizForm").innerHTML = diagnosisQuestions().map((question, index) => `
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
  const wrong = [];
  let correct = 0;
  questions.forEach((question) => {
    const answer = new FormData(event.currentTarget).get(question.question_id);
    if (answer === question.answer) correct += 1;
    else wrong.push(question);
  });
  const weak = wrong[0] || questions[0];
  state.weakChapterId = weak?.chapter_id;
  const chapter = state.chapters.find((item) => item.chapter_id === state.weakChapterId) || state.chapters[0];
  $("#quizResult").hidden = false;
  $("#quizResult").innerHTML = `
    <h3>診斷完成：${correct} / ${questions.length}</h3>
    <p>目前最需要補強：<strong>${chapterName(state.weakChapterId)}</strong></p>
    <p>建議：先看圖像筆記，再做復仇檢核。</p>
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
  const ids = [...data.keys()];
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
  const active = state.news.filter((item) => item.is_active !== false).slice(0, 8);
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
}

function showNews(newsId) {
  const item = state.news.find((news) => news.news_id === newsId);
  if (!item) return;
  document.querySelectorAll("[data-news]").forEach((button) => button.classList.toggle("active", button.dataset.news === newsId));
  $("#newsDetail").innerHTML = `
    <span class="path-badge">${chapterName(item.chapter_id)}</span>
    <h3>${item.title}</h3>
    <p>${item.summary}</p>
    <p><strong>標籤：</strong>${(item.tags || []).join("、")}</p>
    <p><strong>出處：</strong>${item.source_url ? `<a href="${item.source_url}">${item.source_title}</a>` : item.source_title}</p>
    <h4>討論問題</h4>
    <ul>${(item.discussion_questions || []).map((question) => `<li>${question}</li>`).join("")}</ul>
  `;
}

async function init() {
  const [chapters, questions, news, announcements, mocks, calendar, students] = await Promise.all([
    loadJson(dataFiles.chapters, []),
    loadJson(dataFiles.questions, []),
    loadJson(dataFiles.news, []),
    loadJson(dataFiles.announcements, []),
    loadJson(dataFiles.mocks, []),
    loadJson(dataFiles.calendar, {}),
    loadJson(dataFiles.students, [])
  ]);
  Object.assign(state, { chapters, questions, news, announcements, mocks, calendar, students });
  renderCountdown();
  renderAnnouncements();
  renderChapters();
  renderQuiz();
  renderNews();
  setTrack("summer");
}

document.querySelectorAll("[data-track]").forEach((button) => {
  button.addEventListener("click", () => {
    setTrack(button.dataset.track);
    renderQuiz();
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
