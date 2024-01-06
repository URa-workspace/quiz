import { dataQuiz } from "./dataQuiz.js";
// import { dataClients, addClient } from "./dataClients.js";


const quiz = document.getElementById("quizForm");
const quizFooter = document.querySelector(".quiz__footer");
const nextBtn = quiz.querySelector(".btnNext");
const prevBtn = quiz.querySelector(".btnPrev");
const quizBlock = quiz.querySelector(".quiz__block");
const allCountQuestion = document.querySelector(".all-items");
const btns = document.querySelectorAll(".btn");
const btnSend = document.querySelector(".btn__submit");
let currentCounter = document.querySelector(".current-item");
let indexBlock = 1;
let answer = {
  firstName: "",
  lastName: "",
  tel: null,
  q2: "",
  q3: "",
  q4: "",
};

document.addEventListener("DOMContentLoaded", function () {
  const quizOpenBtns = document.querySelectorAll(".quiz-open");

  if (quizOpenBtns.length >= 0) {
    quizOpenBtns.forEach((item) => {
      item.addEventListener("click", () => {
        initQuiz();
        validQuiz(quiz);
        toggleTemplate(quiz);
      });
    });
  }
});
// инициализируем квиз
function initQuiz(params) {
  renderTemplate(indexBlock, quizBlock);
  const allLength = dataQuiz.length;
  allCountQuestion.textContent = allLength;
}
// создаем шаблон
function renderTemplate(index, container) {
  dataQuiz.forEach((t) => {
    let num = t.id;
    let content = t.template;
    if (num === index) {
      container.innerHTML = content;
      quizFooter.style.display = "flex";
    }
    if (dataQuiz.length === index) {
      btns.forEach((btn) => {
        btn.style.display = "none";
      });
      btnSend.style.display = "block";
    }
  });
}
// переключаем шаблон
function toggleTemplate(quiz) {
  nextBtn.addEventListener("click", () => {
    addData(quiz);
    nextBtn.classList.remove("active");
    indexBlock = indexBlock + 1;
    renderTemplate(indexBlock, quizBlock);

    indexBlock == 2 || indexBlock == 3
      ? prevBtn.classList.add("active")
      : false;
    indexBlock === 4 ? gameStart(quiz) : false;
    indexBlock > 3
      ? (document.querySelector(".quiz__bunner").style.display = "none")
      : false;
    currentCounter.textContent = indexBlock;
    indexBlock === 5 ? addDataToForm(quiz) : false;
  });

  prevBtn.addEventListener("click", () => {
    if (indexBlock > 1) {
      indexBlock = indexBlock - 1;
      renderTemplate(indexBlock, quizBlock);
    }
    indexBlock == 1 || indexBlock >= 3
      ? prevBtn.classList.remove("active")
      : false;
  });
}
// валидация
function validQuiz(quiz) {
  let isValid = false;
  quiz.addEventListener("change", (e) => {
    nextBtn.classList.add("active");
    switch (e.target.type) {
      case "checkbox":
        e.target.checked ? (isValid = true) : e.target.classList.add("error");
        break;
      case "radio":
        e.target.checked ? (isValid = true) : e.target.classList.add("error");
        break;
      case "text":
        e.target.value ? (isValid = true) : e.target.classList.add("error");
        break;
      case "tel":
        e.target.value ? (isValid = true) : e.target.classList.add("error");
        break;
    }

    return {
      isValid,
      answer,
    };
  });
}
// добавляем собранные данные
function addData(quiz) {
  const questions = document.querySelectorAll("h3[data-question]");
  const inps = quiz.querySelectorAll(".input");
  questions.forEach((q) => {
    if (q.dataset.question == "Що вас цікавить?") {
      inps.forEach((i) => {
        i.checked ? (answer.q2 = i.value) : false;
      });
    } else if (q.dataset.question == "Чому не звернулися раніше?") {
      inps.forEach((i) => {
        i.checked ? (answer.q3 = i.value) : false;
      });
    } else if (q.dataset.question == "Ваша знижка") {
      inps.forEach((i) => {
        i.value ? (answer.q4 = i.value) : false;
      });
    } else {
      const inps = document.querySelectorAll(".input");
      inps.forEach((i) => {
        switch (i.id) {
          case "firstName":
            answer.firstName = i.value;
            break;
          case "lastName":
            answer.lastName = i.value;
            break;
          case "tel":
            answer.tel = i.value;
            break;
        }
        return answer;
      });
    }
  });
}

function gameStart() {
  const wheel = document.querySelector(".wheel");
  const spinBtn = document.querySelector(".spinBtn");
  let spin = Math.ceil(Math.random() * 3600);

  spinBtn.addEventListener("click", () => {
    const discountInput = document.querySelector("input#discountInput");
    const discountText = document.querySelector("p#discountText span");

    spinBtn.classList.remove("active");
    spinBtn.style.opacity = ".85";
    spinBtn.style.pointerEvents = "none";
    wheel.style.transform = "rotate(" + spin + "deg)";
    spin += Math.ceil(Math.random() * 3600);
    const numbers = document.querySelectorAll(".number");
    setTimeout(() => {
      let val = [];
      numbers.forEach((n) => {
        val.push(n.getBoundingClientRect().top);
      });
      let min = Math.min.apply(null, val);
      numbers.forEach((n) => {
        n.getBoundingClientRect().top === min
          ? (discountInput.value = `${n.id}%`)
          : false;
        // discountText.textContent = "Вітаєм!!! Ваша знижка:";
        prevBtn.classList.remove("active");
        nextBtn.classList.add("active");
      });
    }, 5000);
  });
}

function addDataToForm(quiz) {
  const inps = quiz.querySelectorAll(".input");
  inps.forEach((inp) => {
    for (let key in answer) {
      switch (key) {
        case "firstName":
          inp.id === "firstName" ? (inp.value = answer[key]) : false;
          break;
        case "lastName":
          inp.id === "lastName" ? (inp.value = answer[key]) : false;
          break;
        case "tel":
          inp.id === "tel" ? (inp.value = answer[key]) : false;
          break;
        case "q2":
          inp.id === "q2" ? (inp.value = answer[key]) : false;
          break;
        case "q3":
          inp.id === "q3" ? (inp.value = answer[key]) : false;
          break;
        case "q4":
          inp.id === "q4" ? (inp.value = answer[key]) : false;
          break;
      }
      // console.log(`key: ${answer[key]}`);
      // console.log(`inp.id: ${inp.id}`);
    }
  });
}

btnSend ? sendForm() : false;

function sendForm() {
  btnSend.addEventListener("click", (e) => {
    e.preventDefault();
    formSend();
  });
}

async function formSend() {
  let error = formValidate(quiz);

  let formData = new FormData(quiz);

  if (error === 0) {
    const hideAfterSend = document.querySelectorAll(".hide-after-send");
    hideAfterSend.forEach((item) => {
      item.classList.add("hide");
    });

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();
    let ou = today.getHours();
    let min = today.getMinutes();
    let sec = String(today.getSeconds()).padStart(2, "0");
    today = dd + "." + mm + "." + yyyy + " " + ou + ":" + min + ":" + sec;
    formData.append("id", today);
    localStorage.setItem(today, JSON.stringify(answer));

    const values = Object.fromEntries(formData.entries());

    document.querySelector(".quiz__response").classList.remove("hide");
    setTimeout(() => {
      document.getElementById("pQuiz").classList.remove("open");
      console.log(values);
    }, 5000);

    // document.getElementById("popupBody").classList.add("_sending"); 

    // let response = await fetch("./dataClients.js", {
    //   method: "POST",
    //   body: formData,
    // });
    // if (response.ok) {
    //   let result = await response.json();
    //   alert(result.message);
    //   form.reset();
    //   document.getElementById("popupBody").classList.remove("_sending");
    // } else {
    //   alert("Помилка при відправці!");
    //   form.reset();
    //   document.getElementById("popupBody").classList.remove("_sending");
    // }
  } else {
    alert("Уважно заповніть обов'язкові поля!");
  }
}

function formValidate(quiz) {
  let error = 0;
  let formReq = quiz.querySelectorAll("._req");
  for (let index = 0; index < formReq.length; index++) {
    const input = formReq[index];
    formRemoveError(input);
    if (input.classList.contains("_tel")) {
      if (telTest(input)) {
        formAddError(input);
        error++;
      }
    } else if (input.value === "") {
      formAddError(input);
      error++;
    }
  }
  return error;
}

function formAddError(input) {
  input.parentElement.classList.add("_error");
  // input.classList.add("_error");
}
function formRemoveError(input) {
  input.parentElement.classList.remove("_error");
  // input.classList.remove("_error");
}
function telTest(input) {
  const validValue = /^\+\d[\d\(\)\ -]{10,19}\d$/;
  return !validValue.test(input.value);
}
// const elements = document.querySelectorAll("._tel");
// if (elements.length > 0) {
//   for (let i = 0; i < elements.length; i++) {
//     var element = elements[i];
//     var maskOptions = {
//       mask: "+{38}(000)000-00-00",
//       lazy: false,
//     };
//     var mask = new IMask(element, maskOptions);
//   }
// }
