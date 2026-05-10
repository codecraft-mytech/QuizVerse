// 🔥 SUBJECT FROM FLASK
const subject =
  typeof subjectFromFlask !== "undefined" ? subjectFromFlask : null;

// QUESTIONS
let lockedQuestions = {};
let questions = [];
let currentIndex = 0;
let answers = {};
let notAnsweredQuestions = {};
let timer;

const QUIZ_TIME = 30;

let timeLeft = QUIZ_TIME;

// ================= LOAD QUESTIONS =================
function loadQuestions() {
  if (!subject) {
    alert("Subject not found!");
    window.location.href = "/dashboard";
    return;
  }

  // 🔥 SUBJECT QUESTIONS
  let subjectQuestions = questionBank[subject];

  if (!subjectQuestions || subjectQuestions.length === 0) {
    alert("No questions found!");
    return;
  }

  // 🔥 RANDOMIZE
  questions = [...subjectQuestions]
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);

  // TOTAL
  document.getElementById("total").innerText = questions.length;

  // SHOW
  showQuestion();
}

// ================= SHOW QUESTION =================
function showQuestion() {
  resetTimer();

  let q = questions[currentIndex];

  document.getElementById("question").innerText = q.question;

  // OPTIONS RANDOM
  let options = [...q.incorrect_answers, q.correct_answer];

  options.sort(() => Math.random() - 0.5);

  document.querySelectorAll(".option").forEach((btn, i) => {
    // 🔒 LOCKED QUESTION
    if (lockedQuestions[currentIndex]) {
      btn.style.pointerEvents = "none";
      btn.style.opacity = "0.7";
    } else {
      btn.style.pointerEvents = "auto";
      btn.style.opacity = "1";
    }

    btn.innerText = options[i];

    btn.classList.remove("selected");

    if (answers[currentIndex] === options[i]) {
      btn.classList.add("selected");
    }

    btn.onclick = () => selectAnswer(btn, options[i]);
  });

  updateStats();

  // 🔥 QUESTION ANIMATION
  animateQuestion();
}

// ================= SELECT ANSWER =================
function selectAnswer(btn, value) {
  // 🔒 LOCKED
  if (lockedQuestions[currentIndex]) return;

  // REMOVE NOT ANSWERED
  if (notAnsweredQuestions[currentIndex]) {
    delete notAnsweredQuestions[currentIndex];
  }

  answers[currentIndex] = value;

  document.querySelectorAll(".option").forEach((b) => {
    b.classList.remove("selected");
  });

  btn.classList.add("selected");

  updateStats();
}

// ================= UPDATE STATS =================
function updateStats() {
  let answered = Object.keys(answers).length;

  let notAnswered = Object.keys(notAnsweredQuestions).length;

  let attempted = answered + notAnswered;

  document.getElementById("answered").innerText = answered;

  document.getElementById("notAnswered").innerText = notAnswered;

  document.getElementById("remaining").innerText = questions.length - attempted;
}

// ================= NEXT =================
function nextQuestion() {
  // ❌ NO ANSWER
  if (!answers[currentIndex] && !notAnsweredQuestions[currentIndex]) {
    notAnsweredQuestions[currentIndex] = true;
  }

  // 🔒 LOCK ANSWER
  if (answers[currentIndex]) {
    lockedQuestions[currentIndex] = true;
  }

  updateStats();

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    showQuestion();
  } else {
    finishQuiz();
  }

  animateQuestion();
}

// ================= PREV =================
function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    showQuestion();
  }
}

// ================= TIMER =================
function startTimer() {
  timer = setInterval(() => {
    timeLeft--;

    document.getElementById("timer").innerText = timeLeft;

    // ⏰ TIME OUT
    if (timeLeft <= 0) {
      clearInterval(timer);

      // NOT ANSWERED
      if (!answers[currentIndex] && !notAnsweredQuestions[currentIndex]) {
        notAnsweredQuestions[currentIndex] = true;
      }

      updateStats();

      // AUTO NEXT
      nextQuestion();
    }
  }, 1000);
}

// ================= RESET TIMER =================
function resetTimer() {
  clearInterval(timer);

  timeLeft = QUIZ_TIME;

  document.getElementById("timer").innerText = timeLeft;

  startTimer();
}

// ================= FINISH QUIZ =================
function finishQuiz() {
  clearInterval(timer);

  let correct = 0;

  questions.forEach((q, i) => {
    if (answers[i] === q.correct_answer) {
      correct++;
    }
  });

  let attempted = Object.keys(answers).length;

  let incorrect = attempted - correct;

  let remaining = questions.length - attempted;
  let result = {
    attempted: attempted,
    correct: correct,
    incorrect: incorrect,
    remaining: remaining,
    subject: subject,
  };
  // SAVE LOCAL RESULT
  localStorage.setItem("quizResult", JSON.stringify(result));

  // SAVE DATABASE
  fetch("/save_result", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      subject: subject,
      score: correct,
      total: questions.length,
    }),
  })
    .then((res) => res.json())

    .then((data) => {
      // REDIRECT
      window.location.href = "/result";
    })

    .catch((err) => {
      console.log(err);

      alert("Error saving result");
    });
}

// ================= START =================
loadQuestions();

// ================= QUESTION ANIMATION =================
function animateQuestion() {
  const questionBox = document.querySelector(".question-box");

  const options = document.querySelectorAll(".option");

  // RESET
  questionBox.style.animation = "none";

  options.forEach((option) => {
    option.style.animation = "none";
  });

  // RESTART
  setTimeout(() => {
    questionBox.style.animation = "slideQuestion 0.45s ease";

    options.forEach((option, index) => {
      option.style.animation = `optionFade 0.5s ease ${index * 0.1}s`;
    });
  }, 10);
}
