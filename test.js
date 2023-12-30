import { dataQuiz } from "./dataQuiz.js";
document.addEventListener("DOMContentLoaded", function () {
  //DATAQUIZ START

  //DATAQUIZ END
  //QUIZ START
  let quiz_form = document.querySelector(".quiz__form");
  if (quiz_form) {
    let PrevBtn = quiz_form.querySelector(".btnPrev");
    let nextBtn = quiz_form.querySelector(".btnNext");
    let quizAll = quiz_form.querySelectorAll(".quiz__block");
    let currentQ = quiz_form.querySelector(".current-item");
    let progressQ = quiz_form.querySelector(".progress");
    let progress = 0;
    let count = 0;
    let progressPercent = 100 / (quizAll.length - 1);
    let quizCurrent = quiz_form.querySelector(".quiz__block.active");
    const quizBlock = quiz_form.querySelector(".quiz__block");

    initProgress();
    removeBtn();
    initQuiz();

    quiz_form.querySelector(".all-items").textContent = `${quizAll.length}`;

    nextBtn.addEventListener("click", function () {
      currentQ.textContent++;
      count++;
      progress += Number(progressPercent.toFixed(3));
      initQuiz();
      initProgress();
      removeBtn();
    });
    PrevBtn.addEventListener("click", function () {
      count--;
      currentQ.textContent--;
      progress -= Number(progressPercent.toFixed(3));
      initQuiz();
      initProgress();
      removeBtn();
    });

    function initQuiz() {
      quizAll.forEach((element, i) => {
        element.classList.remove("active");

        if (i === count) {
          element.classList.add("active");
        }
      });
    }

    function initProgress() {
      progressQ.style.width = `${progress}%`;
    }

    function removeBtn() {
      if (count === 0) {
        PrevBtn.style.display = "none";
      } else if (count !== 0) {
        PrevBtn.style.display = "block";
      }
      if (count === quizAll.length - 1) {
        nextBtn.style.display = "none";
      } else if (count !== quizAll.length) {
        nextBtn.style.display = "block";
      }
    }
    function valid() {
      let isValid = false;

      let elements = quizCurrent.querySelectorAll("input");
      elements.forEach((el) => {
        switch (el.type) {
          case "text":
            el.value ? (isValid = true) : el.classList.add("error");
          case "tel":
            el.value ? (isValid = true) : el.classList.add("error");
          case "checkbox":
            el.checked ? (isValid = true) : el.classList.add("error");
          case "radio":
            el.checked ? (isValid = true) : el.classList.add("error");
        }
      });

      return isValid;
    }
  }
  // QUIZ THE END
});
