<<<<<<< HEAD
// 🚀 SUBJECT REDIRECT (Flask routes use karega)
function openSubject(subject) {
  window.location.href = "/subject/" + subject;
}
// 🔐 LOGOUT
function logout() {
  window.location.href = "/logout";
}

// 🔙 BACK BUTTON
function goBack() {
  window.location.href = "/dashboard";
}

// ▶ START QUIZ (🔥 FIXED)
function startQuiz() {
  // ✅ सही selector use किया
  const subjectElement = document.querySelector(".subject-header span");

  if (!subjectElement) {
    alert("Subject not found!");
    return;
  }

  const subject = subjectElement.innerText.trim();

  console.log("Starting quiz for:", subject); // debug

  window.location.href = "/quiz/" + subject;
}
/* NUMBER COUNTER ANIMATION */

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;

    const increment = target / 60;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 60);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

/* PERCENT COUNTER */

const percentCounters = document.querySelectorAll(".counter-percent");

percentCounters.forEach((counter) => {
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");

    const current = parseInt(counter.innerText);

    const increment = target / 60;

    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}%`;

      setTimeout(updateCounter, 60);
    } else {
      counter.innerText = `${target}%`;
    }
  };

  updateCounter();
});

/* RANK COUNTER */

const rankCounters = document.querySelectorAll(".counter-rank");

rankCounters.forEach((counter) => {
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");

    const current = parseInt(counter.innerText.replace("#", ""));

    const increment = target / 60;

    if (current < target) {
      counter.innerText = `#${Math.ceil(current + increment)}`;

      setTimeout(updateCounter, 60);
    } else {
      counter.innerText = `#${target}`;
    }
  };

  updateCounter();
=======
// 🚀 SUBJECT REDIRECT (Flask routes use karega)
function openSubject(subject) {
  window.location.href = "/subject/" + subject;
}
// 🔐 LOGOUT
function logout() {
  window.location.href = "/logout";
}

// 🔙 BACK BUTTON
function goBack() {
  window.location.href = "/dashboard";
}

// ▶ START QUIZ (🔥 FIXED)
function startQuiz() {
  // ✅ सही selector use किया
  const subjectElement = document.querySelector(".subject-header span");

  if (!subjectElement) {
    alert("Subject not found!");
    return;
  }

  const subject = subjectElement.innerText.trim();

  console.log("Starting quiz for:", subject); // debug

  window.location.href = "/quiz/" + subject;
}
/* NUMBER COUNTER ANIMATION */

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;

    const increment = target / 60;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 60);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

/* PERCENT COUNTER */

const percentCounters = document.querySelectorAll(".counter-percent");

percentCounters.forEach((counter) => {
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");

    const current = parseInt(counter.innerText);

    const increment = target / 60;

    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}%`;

      setTimeout(updateCounter, 60);
    } else {
      counter.innerText = `${target}%`;
    }
  };

  updateCounter();
});

/* RANK COUNTER */

const rankCounters = document.querySelectorAll(".counter-rank");

rankCounters.forEach((counter) => {
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");

    const current = parseInt(counter.innerText.replace("#", ""));

    const increment = target / 60;

    if (current < target) {
      counter.innerText = `#${Math.ceil(current + increment)}`;

      setTimeout(updateCounter, 60);
    } else {
      counter.innerText = `#${target}`;
    }
  };

  updateCounter();
>>>>>>> 3a39c4d1873c2773db9f7b2e8130d39d9a113d91
});