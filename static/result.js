<<<<<<< HEAD
// GET DATA
let result = JSON.parse(localStorage.getItem("quizResult"));

// ❌ Agar data nahi hai to dashboard pe bhejo
if (!result) {
  window.location.href = "/dashboard";
}

// DATA
let attempted = result.attempted;
let correct = result.correct;

// ✅ FIXED TOTAL
let total = 10;

let remaining = total - attempted;
let incorrect = attempted - correct;

// SHOW DATA
document.getElementById("attempted").innerText = attempted;
document.getElementById("remaining").innerText = remaining;
document.getElementById("correct").innerText = correct;
document.getElementById("incorrect").innerText = incorrect;

// PROGRESS
let percent = (correct / total) * 100;
document.getElementById("progress-bar").style.width = percent + "%";

// MESSAGE
let message = "";

if (percent >= 80) {
  message = "🔥 Excellent! You're a quiz master!";
} else if (percent >= 50) {
  message = "👍 Good job! Keep improving!";
} else {
  message = "💪 Don't give up! Practice more!";
}

document.getElementById("message").innerText = message;

// 🔥 SEND RESULT TO MONGODB
fetch("/save_result", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    subject: result.subject || "Java", // dynamic subject
    score: correct,
    total: 10, // ✅ FIXED HERE ALSO
  }),
})
  .then((res) => res.json())
  .then((data) => console.log("Saved:", data))
  .catch((err) => console.log("Error:", err));

// 🔙 BACK TO DASHBOARD
function goDashboard() {
  window.location.href = "/dashboard";
}
=======
// GET DATA
let result = JSON.parse(localStorage.getItem("quizResult"));

// ❌ Agar data nahi hai to dashboard pe bhejo
if (!result) {
  window.location.href = "/dashboard";
}

// DATA
let attempted = result.attempted;
let correct = result.correct;

// ✅ FIXED TOTAL
let total = 10;

let remaining = total - attempted;
let incorrect = attempted - correct;

// SHOW DATA
document.getElementById("attempted").innerText = attempted;
document.getElementById("remaining").innerText = remaining;
document.getElementById("correct").innerText = correct;
document.getElementById("incorrect").innerText = incorrect;

// PROGRESS
let percent = (correct / total) * 100;
document.getElementById("progress-bar").style.width = percent + "%";

// MESSAGE
let message = "";

if (percent >= 80) {
  message = "🔥 Excellent! You're a quiz master!";
} else if (percent >= 50) {
  message = "👍 Good job! Keep improving!";
} else {
  message = "💪 Don't give up! Practice more!";
}

document.getElementById("message").innerText = message;

// 🔥 SEND RESULT TO MONGODB
fetch("/save_result", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    subject: result.subject || "Java", // dynamic subject
    score: correct,
    total: 10, // ✅ FIXED HERE ALSO
  }),
})
  .then((res) => res.json())
  .then((data) => console.log("Saved:", data))
  .catch((err) => console.log("Error:", err));

// 🔙 BACK TO DASHBOARD
function goDashboard() {
  window.location.href = "/dashboard";
}
>>>>>>> 3a39c4d1873c2773db9f7b2e8130d39d9a113d91
