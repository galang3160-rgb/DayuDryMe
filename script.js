/* =========================================================================
   KOTOBA APP — script.js
   ========================================================================= */

/* ============================== 1. DATA ============================== */

const vocabData = [
  { id: 1,  kanji: "食べます",     kana: "たべます",     romaji: "tabemasu",    meaning: "Makan",                              category: "Kata Kerja" },
  { id: 2,  kanji: "寝ます",       kana: "ねます",       romaji: "nemasu",      meaning: "Tidur",                              category: "Kata Kerja" },
  { id: 3,  kanji: "働きます",     kana: "はたらきます", romaji: "hatarakimasu",meaning: "Bekerja",                            category: "Kata Kerja" },
  { id: 4,  kanji: "休みます",     kana: "やすみます",   romaji: "yasumimasu",  meaning: "Beristirahat / Libur",               category: "Kata Kerja" },
  { id: 5,  kanji: "終わります",   kana: "おわります",   romaji: "owarimasu",   meaning: "Selesai",                            category: "Kata Kerja" },
  { id: 6,  kanji: "拾います",     kana: "ひろいます",   romaji: "hiroimasu",   meaning: "Memungut",                           category: "Kata Kerja" },
  { id: 7,  kanji: "捨てます",     kana: "すてます",     romaji: "sutemasu",    meaning: "Membuang",                           category: "Kata Kerja" },
  { id: 8,  kanji: "取ります",     kana: "とります",     romaji: "torimasu",    meaning: "Mengambil",                          category: "Kata Kerja" },
  { id: 9,  kanji: "落とします",   kana: "おとします",   romaji: "otoshimasu",  meaning: "Menjatuhkan",                        category: "Kata Kerja" },
  { id: 10, kanji: "書きます",     kana: "かきます",     romaji: "kakimasu",    meaning: "Menulis",                            category: "Kata Kerja" },
  { id: 11, kanji: "口",           kana: "くち",         romaji: "kuchi",       meaning: "Mulut",                              category: "Bagian Tubuh" },
  { id: 12, kanji: "目",           kana: "め",           romaji: "me",          meaning: "Mata",                               category: "Bagian Tubuh" },
  { id: 13, kanji: "耳",           kana: "みみ",         romaji: "mimi",        meaning: "Telinga",                            category: "Bagian Tubuh" },
  { id: 14, kanji: "足",           kana: "あし",         romaji: "ashi",        meaning: "Kaki",                               category: "Bagian Tubuh" },
  { id: 15, kanji: "叱られます",   kana: "しかられます", romaji: "shikararemasu", meaning: "Dimarahi",                         category: "Kata Kerja" },
  { id: 16, kanji: "怒ります",     kana: "おこります",   romaji: "okorimasu",   meaning: "Marah",                              category: "Kata Kerja" },
  { id: 17, kanji: "泳がない",     kana: "およがない",   romaji: "oyoganai",    meaning: "Tidak berenang",                     category: "Kata Kerja" },
  { id: 18, kanji: "朝",           kana: "あさ",         romaji: "asa",         meaning: "Pagi",                               category: "Waktu" },
  { id: 19, kanji: "昼",           kana: "ひる",         romaji: "hiru",        meaning: "Siang",                              category: "Waktu" },
  { id: 20, kanji: "夜",           kana: "よる",         romaji: "yoru",        meaning: "Malam",                              category: "Waktu" },
  { id: 21, kanji: "聞かない",     kana: "きかない",     romaji: "kikanai",     meaning: "Tidak mendengar / Tidak bertanya",   category: "Kata Kerja" },
  { id: 22, kanji: "動かない",     kana: "うごかない",   romaji: "ugokanai",    meaning: "Tidak bergerak",                     category: "Kata Kerja" },
  { id: 23, kanji: "笑います",     kana: "わらいます",   romaji: "waraimasu",   meaning: "Tertawa",                            category: "Kata Kerja" },
  { id: 24, kanji: "並べます",     kana: "ならべます",   romaji: "narabemasu",  meaning: "Menyusun / Menata",                  category: "Kata Kerja" },
  { id: 25, kanji: "助けます",     kana: "たすけます",   romaji: "tasukemasu",  meaning: "Membantu",                           category: "Kata Kerja" },
  { id: 26, kanji: "試験",         kana: "しけん",       romaji: "shiken",      meaning: "Ujian",                              category: "Lainnya" },
  { id: 27, kanji: "会議",         kana: "かいぎ",       romaji: "kaigi",       meaning: "Rapat",                              category: "Lainnya" },
  { id: 28, kanji: "公園",         kana: "こうえん",     romaji: "kouen",       meaning: "Taman",                              category: "Tempat" },
  { id: 29, kanji: "近く",         kana: "ちかく",       romaji: "chikaku",     meaning: "Dekat",                              category: "Lainnya" },
  { id: 30, kanji: "外国",         kana: "がいこく",     romaji: "gaikoku",     meaning: "Luar negeri",                        category: "Tempat" },
  { id: 31, kanji: "入ります",     kana: "はいります",   romaji: "hairimasu",   meaning: "Masuk",                              category: "Kata Kerja" },
  { id: 32, kanji: "遠い",         kana: "とおい",       romaji: "tooi",        meaning: "Jauh",                               category: "Lainnya" },
  { id: 33, kanji: "円",           kana: "えん",         romaji: "en",          meaning: "Yen",                                category: "Lainnya" },
  { id: 34, kanji: "花火",         kana: "はなび",       romaji: "hanabi",      meaning: "Kembang api",                        category: "Lainnya" },
  { id: 35, kanji: "昨日",         kana: "きのう",       romaji: "kinou",       meaning: "Kemarin",                            category: "Waktu" },
  { id: 36, kanji: "無くします",   kana: "なくします",   romaji: "nakushimasu", meaning: "Kehilangan",                         category: "Kata Kerja" },
  { id: 37, kanji: "買います",     kana: "かいます",     romaji: "kaimasu",     meaning: "Membeli",                            category: "Kata Kerja" },
  { id: 38, kanji: "売ります",     kana: "うります",     romaji: "urimasu",     meaning: "Menjual",                            category: "Kata Kerja" },
  { id: 39, kanji: "使います",     kana: "つかいます",   romaji: "tsukaimasu",  meaning: "Menggunakan",                        category: "Kata Kerja" },
  { id: 40, kanji: "作ります",     kana: "つくります",   romaji: "tsukurimasu", meaning: "Membuat",                            category: "Kata Kerja" }
];

const CATEGORIES = ["Semua", "Kata Kerja", "Bagian Tubuh", "Waktu", "Tempat", "Lainnya"];

/* ============================== 2. STATE ============================== */

const state = {
  currentView: "home",
  savedIds: new Set(),
  activeCategory: "Semua",
  flashcard: { list: [], index: 0, flipped: false },
  quiz: { list: [], index: 0, score: 0, answered: false }
};

const PAGE_META = {
  home:    { title: "Home",             sub: "Selamat datang kembali!" },
  search:  { title: "Cari Kotoba",      sub: "Temukan kosakata dengan cepat" },
  kotoba:  { title: "Kotoba",           sub: "Semua kosakata yang tersedia" },
  hafalan: { title: "Hafalan Sementara",sub: "Kata-kata yang sedang kamu hafalkan" },
  quiz:    { title: "Latihan Soal",     sub: "Uji pemahamanmu dengan mengetik jawaban" }
};

/* ============================ 3. ELEMEN DOM ============================ */

const el = {
  navItems: document.querySelectorAll(".nav-item"),
  views: document.querySelectorAll(".view"),
  pageTitle: document.getElementById("pageTitle"),
  pageSub: document.getElementById("pageSub"),
  sidebarTotal: document.getElementById("sidebarTotal"),

  // Home
  statTotal: document.getElementById("statTotal"),
  statSaved: document.getElementById("statSaved"),
  wordOfDayKanji: document.getElementById("wordOfDayKanji"),
  wordOfDayDetail: document.getElementById("wordOfDayDetail"),
  menuCards: document.querySelectorAll(".menu-card"),

  // Search
  searchInput: document.getElementById("searchInput"),
  searchResults: document.getElementById("searchResults"),
  searchEmpty: document.getElementById("searchEmpty"),
  searchHint: document.getElementById("searchHint"),

  // Kotoba
  categoryChips: document.getElementById("categoryChips"),
  kotobaGrid: document.getElementById("kotobaGrid"),
  startAllFlashcard: document.getElementById("startAllFlashcard"),

  // Hafalan
  hafalanCount: document.getElementById("hafalanCount"),
  hafalanList: document.getElementById("hafalanList"),
  hafalanEmpty: document.getElementById("hafalanEmpty"),
  startHafalanFlashcard: document.getElementById("startHafalanFlashcard"),

  // Flashcard overlay
  fcOverlay: document.getElementById("flashcardOverlay"),
  fcCard: document.getElementById("fcCard"),
  fcCardInner: document.getElementById("fcCardInner"),
  fcKanji: document.getElementById("fcKanji"),
  fcKana: document.getElementById("fcKana"),
  fcRomaji: document.getElementById("fcRomaji"),
  fcMeaning: document.getElementById("fcMeaning"),
  fcProgress: document.getElementById("fcProgress"),
  fcToggleBtn: document.getElementById("fcToggleBtn"),
  fcPrev: document.getElementById("fcPrev"),
  fcNext: document.getElementById("fcNext"),
  fcClose: document.getElementById("closeFlashcard"),

  // Quiz
  quizIntro: document.getElementById("quizIntro"),
  quizQuestion: document.getElementById("quizQuestion"),
  quizResult: document.getElementById("quizResult"),
  quizCountOptions: document.getElementById("quizCountOptions"),
  startQuizBtn: document.getElementById("startQuizBtn"),
  quizProgress: document.getElementById("quizProgress"),
  quizPromptTag: document.getElementById("quizPromptTag"),
  quizKanji: document.getElementById("quizKanji"),
  quizInstruction: document.getElementById("quizInstruction"),
  quizInput: document.getElementById("quizInput"),
  quizFeedback: document.getElementById("quizFeedback"),
  checkAnswerBtn: document.getElementById("checkAnswerBtn"),
  nextQuestionBtn: document.getElementById("nextQuestionBtn"),
  quizScoreLive: document.getElementById("quizScoreLive"),
  quizTotalLive: document.getElementById("quizTotalLive"),
  quizFinalScore: document.getElementById("quizFinalScore"),
  quizFinalMsg: document.getElementById("quizFinalMsg"),
  retryQuizBtn: document.getElementById("retryQuizBtn"),
  quizHomeBtn: document.getElementById("quizHomeBtn")
};

let selectedQuizCount = 10;

/* ========================= 4. UTIL / HELPER ========================= */

function normalize(str) {
  return String(str).trim().toLowerCase();
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickWordOfDay() {
  const dayIndex = Math.floor(Date.now() / 86400000) % vocabData.length;
  return vocabData[dayIndex];
}

function vocabCardHTML(item) {
  const isSaved = state.savedIds.has(item.id);
  return `
    <div class="vocab-card">
      <span class="vocab-category">${item.category}</span>
      <p class="vocab-kanji">${item.kanji}</p>
      <p class="vocab-kana">${item.kana} <span class="vocab-romaji">(${item.romaji})</span></p>
      <p class="vocab-meaning">${item.meaning}</p>
      <button class="save-btn ${isSaved ? "is-saved" : ""}" data-id="${item.id}">
        ${isSaved ? "✓ Disimpan" : "＋ Hafalkan"}
      </button>
    </div>`;
}

/* ============================ 5. NAVIGASI ============================ */

function setActiveView(viewName) {
  state.currentView = viewName;

  el.views.forEach(v => {
    v.hidden = v.dataset.view !== viewName;
  });

  el.navItems.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.view === viewName);
  });

  const meta = PAGE_META[viewName] || PAGE_META.home;
  el.pageTitle.textContent = meta.title;
  el.pageSub.textContent = meta.sub;

  const contentArea = document.getElementById("content");
  if (contentArea) contentArea.scrollTo({ top: 0, behavior: "auto" });

  if (viewName === "home") renderHome();
  if (viewName === "search") renderSearch();
  if (viewName === "kotoba") {
    renderCategoryChips();
    renderKotobaGrid();
  }
  if (viewName === "hafalan") renderHafalan();
  if (viewName === "quiz") resetQuizToIntro();
}

document.querySelectorAll(".nav-item").forEach(btn => {
  btn.addEventListener("click", () => setActiveView(btn.dataset.view));
});

document.querySelectorAll(".menu-card").forEach(btn => {
  btn.addEventListener("click", () => setActiveView(btn.dataset.goto));
});

/* ========================== 6. HALAMAN HOME ========================== */

function renderHome() {
  el.statTotal.textContent = vocabData.length;
  el.sidebarTotal.textContent = vocabData.length;
  el.statSaved.textContent = state.savedIds.size;

  const wod = pickWordOfDay();
  el.wordOfDayKanji.textContent = wod.kanji;
  el.wordOfDayDetail.textContent = `${wod.kana} ・ ${wod.meaning}`;
}

/* ========================= 7. CARI KOTOBA ========================= */

function renderSearch() {
  const query = normalize(el.searchInput.value);

  if (query === "") {
    el.searchResults.innerHTML = "";
    el.searchEmpty.hidden = true;
    el.searchHint.hidden = false;
    return;
  }

  el.searchHint.hidden = true;

  const results = vocabData.filter(item =>
    normalize(item.kanji).includes(query) ||
    normalize(item.kana).includes(query) ||
    normalize(item.romaji).includes(query) ||
    normalize(item.meaning).includes(query)
  );

  if (results.length === 0) {
    el.searchResults.innerHTML = "";
    el.searchEmpty.hidden = false;
    return;
  }

  el.searchEmpty.hidden = true;
  el.searchResults.innerHTML = results.map(vocabCardHTML).join("");
}

el.searchInput.addEventListener("input", renderSearch);

/* ============================ 8. KOTOBA ============================ */

function renderCategoryChips() {
  el.categoryChips.innerHTML = CATEGORIES.map(cat => `
    <button class="chip ${state.activeCategory === cat ? "active" : ""}" data-cat="${cat}">${cat}</button>
  `).join("");

  el.categoryChips.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      state.activeCategory = chip.dataset.cat;
      renderCategoryChips();
      renderKotobaGrid();
    });
  });
}

function renderKotobaGrid() {
  const filtered = state.activeCategory === "Semua"
    ? vocabData
    : vocabData.filter(item => item.category === state.activeCategory);

  el.kotobaGrid.innerHTML = filtered.map(vocabCardHTML).join("");
}

el.startAllFlashcard.addEventListener("click", () => {
  const filtered = state.activeCategory === "Semua"
    ? vocabData
    : vocabData.filter(item => item.category === state.activeCategory);
  openFlashcard(filtered);
});

/* ======================= 9. HAFALAN SEMENTARA ======================= */

function renderHafalan() {
  const savedItems = vocabData.filter(item => state.savedIds.has(item.id));

  el.hafalanCount.textContent = `${savedItems.length} Kotoba`;
  el.startHafalanFlashcard.disabled = savedItems.length === 0;

  if (savedItems.length === 0) {
    el.hafalanList.innerHTML = "";
    el.hafalanEmpty.hidden = false;
    return;
  }

  el.hafalanEmpty.hidden = true;
  el.hafalanList.innerHTML = savedItems.map(vocabCardHTML).join("");
}

el.startHafalanFlashcard.addEventListener("click", () => {
  const savedItems = vocabData.filter(item => state.savedIds.has(item.id));
  if (savedItems.length > 0) openFlashcard(savedItems);
});

/* Toggle simpan/hapus hafalan */
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".save-btn");
  if (!btn) return;

  const id = Number(btn.dataset.id);
  if (state.savedIds.has(id)) {
    state.savedIds.delete(id);
  } else {
    state.savedIds.add(id);
  }

  if (state.currentView === "search") renderSearch();
  if (state.currentView === "kotoba") renderKotobaGrid();
  if (state.currentView === "hafalan") renderHafalan();
  if (state.currentView === "home") renderHome();
});

/* ============================ 10. FLASHCARD ============================ */

function openFlashcard(list) {
  if (!list || list.length === 0) return;
  state.flashcard.list = list;
  state.flashcard.index = 0;
  state.flashcard.flipped = false;
  el.fcOverlay.hidden = false;
  document.body.style.overflow = "hidden";
  renderFlashcard();
}

function closeFlashcard() {
  el.fcOverlay.hidden = true;
  document.body.style.overflow = "";
}

function renderFlashcard() {
  const item = state.flashcard.list[state.flashcard.index];
  el.fcKanji.textContent = item.kanji;
  el.fcKana.textContent = item.kana;
  el.fcRomaji.textContent = item.romaji;
  el.fcMeaning.textContent = item.meaning;
  el.fcProgress.textContent = `${state.flashcard.index + 1} / ${state.flashcard.list.length}`;

  state.flashcard.flipped = false;
  el.fcCard.classList.remove("is-flipped");
  el.fcToggleBtn.textContent = "Tampilkan";
}

function flipFlashcard() {
  state.flashcard.flipped = !state.flashcard.flipped;
  el.fcCard.classList.toggle("is-flipped", state.flashcard.flipped);
  el.fcToggleBtn.textContent = state.flashcard.flipped ? "Sembunyikan" : "Tampilkan";
}

function fcGoNext() {
  state.flashcard.index = (state.flashcard.index + 1) % state.flashcard.list.length;
  renderFlashcard();
}
function fcGoPrev() {
  state.flashcard.index = (state.flashcard.index - 1 + state.flashcard.list.length) % state.flashcard.list.length;
  renderFlashcard();
}

el.fcCard.addEventListener("click", flipFlashcard);
el.fcToggleBtn.addEventListener("click", (e) => { e.stopPropagation(); flipFlashcard(); });
el.fcNext.addEventListener("click", fcGoNext);
el.fcPrev.addEventListener("click", fcGoPrev);
el.fcClose.addEventListener("click", closeFlashcard);

document.addEventListener("keydown", (e) => {
  if (el.fcOverlay.hidden) return;
  if (e.key === "Escape") closeFlashcard();
  if (e.key === "ArrowRight") fcGoNext();
  if (e.key === "ArrowLeft") fcGoPrev();
  if (e.key === " " || e.key === "Enter") {
    if (document.activeElement === el.fcCard || document.activeElement === el.fcToggleBtn) {
      e.preventDefault();
      flipFlashcard();
    }
  }
});

/* ============================ 11. LATIHAN SOAL ============================ */

el.quizCountOptions.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    el.quizCountOptions.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    selectedQuizCount = chip.dataset.count === "all" ? vocabData.length : Number(chip.dataset.count);
  });
});

function resetQuizToIntro() {
  el.quizIntro.hidden = false;
  el.quizQuestion.hidden = true;
  el.quizResult.hidden = true;
}

el.startQuizBtn.addEventListener("click", () => {
  const shuffled = shuffle(vocabData).slice(0, selectedQuizCount);
  state.quiz.list = shuffled.map(item => ({
    vocab: item,
    mode: Math.random() < 0.5 ? "reading" : "meaning"
  }));
  state.quiz.index = 0;
  state.quiz.score = 0;

  el.quizIntro.hidden = true;
  el.quizResult.hidden = true;
  el.quizQuestion.hidden = false;
  renderQuizQuestion();
});

function renderQuizQuestion() {
  const q = state.quiz.list[state.quiz.index];
  state.quiz.answered = false;

  el.quizKanji.textContent = q.vocab.kanji;

  if (q.mode === "reading") {
    el.quizPromptTag.textContent = "Cara Baca";
    el.quizInstruction.textContent = "Tulis cara baca kata di atas (hiragana atau romaji).";
  } else {
    el.quizPromptTag.textContent = "Arti";
    el.quizInstruction.textContent = "Tulis arti kata di atas dalam Bahasa Indonesia.";
  }

  el.quizInput.value = "";
  el.quizInput.readOnly = false;
  setTimeout(() => el.quizInput.focus(), 50);

  el.quizFeedback.hidden = true;
  el.quizFeedback.className = "quiz-feedback";
  el.checkAnswerBtn.hidden = false;
  el.nextQuestionBtn.hidden = true;

  el.quizProgress.textContent = `Soal ${state.quiz.index + 1} dari ${state.quiz.list.length}`;
  el.quizScoreLive.textContent = state.quiz.score;
  el.quizTotalLive.textContent = state.quiz.list.length;
}

function checkQuizAnswer() {
  if (state.quiz.answered) return;
  const userAnswer = normalize(el.quizInput.value);
  if (userAnswer === "") return;

  const q = state.quiz.list[state.quiz.index];
  let correct = false;
  let correctDisplay = "";

  if (q.mode === "reading") {
    correct = userAnswer === normalize(q.vocab.kana) || userAnswer === normalize(q.vocab.romaji);
    correctDisplay = `${q.vocab.kana} (${q.vocab.romaji})`;
  } else {
    const alternatives = q.vocab.meaning.split("/").map(s => normalize(s));
    correct = alternatives.some(alt => userAnswer.includes(alt) || alt.includes(userAnswer));
    correctDisplay = q.vocab.meaning;
  }

  state.quiz.answered = true;
  el.quizInput.readOnly = true;

  el.quizFeedback.hidden = false;
  if (correct) {
    state.quiz.score++;
    el.quizFeedback.className = "quiz-feedback is-correct";
    el.quizFeedback.textContent = "✓ Benar!";
  } else {
    el.quizFeedback.className = "quiz-feedback is-wrong";
    el.quizFeedback.innerHTML = `✗ Kurang tepat. Jawaban yang benar: <strong>${correctDisplay}</strong>`;
  }

  el.quizScoreLive.textContent = state.quiz.score;
  el.checkAnswerBtn.hidden = true;
  el.nextQuestionBtn.hidden = false;
  el.nextQuestionBtn.textContent = (state.quiz.index === state.quiz.list.length - 1) ? "Lihat Hasil ›" : "Lanjut ›";
  el.nextQuestionBtn.focus();
}

function nextQuizQuestion() {
  state.quiz.index++;
  if (state.quiz.index >= state.quiz.list.length) {
    endQuiz();
  } else {
    renderQuizQuestion();
  }
}

function endQuiz() {
  el.quizQuestion.hidden = true;
  el.quizResult.hidden = false;

  const total = state.quiz.list.length;
  const score = state.quiz.score;
  const pct = (score / total) * 100;

  el.quizFinalScore.textContent = `Skor kamu: ${score} / ${total}`;

  if (pct >= 80) {
    el.quizFinalMsg.textContent = "Luar biasa! Kamu sudah menguasai kotoba ini. 🎉";
  } else if (pct >= 50) {
    el.quizFinalMsg.textContent = "Bagus! Terus berlatih supaya makin lancar.";
  } else {
    el.quizFinalMsg.textContent = "Jangan menyerah, ulangi lagi supaya makin hafal.";
  }
}

el.checkAnswerBtn.addEventListener("click", checkQuizAnswer);
el.nextQuestionBtn.addEventListener("click", nextQuizQuestion);
el.retryQuizBtn.addEventListener("click", resetQuizToIntro);
el.quizHomeBtn.addEventListener("click", () => setActiveView("home"));

el.quizInput.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  if (!el.checkAnswerBtn.hidden) checkQuizAnswer();
  else if (!el.nextQuestionBtn.hidden) nextQuizQuestion();
});

/* ============================== 12. INIT ============================== */

function init() {
  renderCategoryChips();
  setActiveView("home");
}

init();