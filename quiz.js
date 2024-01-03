import { dataQuiz } from "./dataQuiz.js";
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
  name: "",
  secondName: "",
  tel: null,
  question2: "",
  question3: "",
  question4: "",
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
  const allLength = dataQuiz.length
  allCountQuestion.textContent = allLength
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
      btns.forEach(btn => {
        btn.style.display = 'none'
      })
      btnSend.style.display = 'block'
    }
  });
}
// переключаем шаблон
function toggleTemplate(quiz) {
  nextBtn.addEventListener('click', () => {
    addData(quiz);
    nextBtn.classList.remove('active')
    indexBlock = indexBlock + 1;
    renderTemplate(indexBlock, quizBlock);
    
    indexBlock == 2 || indexBlock == 3
      ? prevBtn.classList.add("active")
      : false;
    indexBlock === 4 ? gameStart(quiz) : false;
    indexBlock > 3 ? document.querySelector('.quiz__bunner').style.display = 'none' : false
    currentCounter.textContent = indexBlock;
    indexBlock === 5 ? addDataToForm(quiz): false
  })
  
  prevBtn.addEventListener('click', () => {
    if (indexBlock > 1) {
      indexBlock = indexBlock - 1;
      renderTemplate(indexBlock, quizBlock);
      
    }
    indexBlock == 1 || indexBlock >= 3
      ? prevBtn.classList.remove("active")
      : false;
  })
}
// валидация
function validQuiz(quiz) {
  let isValid = false;
  quiz.addEventListener("change", (e) => {
    nextBtn.classList.add("active");
    switch (e.target.type) {
      case "checkbox":
        e.target.checked ? (isValid = true) : e.target.classList.add("error");
      case "radio":
        e.target.checked ? (isValid = true) : e.target.classList.add("error");
      case "text":
        e.target.value ? (isValid = true) : e.target.classList.add("error");
      case "tel":
        e.target.value ? (isValid = true) : e.target.classList.add("error");
    }

    return {
      isValid,
      answer
    };
    
  });
  
}
// добавляем собранные данные
function addData(quiz) {
  const questions = document.querySelectorAll("h3[data-question]");
  const inps = quiz.querySelectorAll('.input')
  questions.forEach(q => {
    if (q.dataset.question == "Що вас цікавить?") {
      inps.forEach(i => {
        i.checked ? answer.question2 = i.value : false
      })
    } else if (q.dataset.question == "Чому не звернулися раніше?") {
      inps.forEach((i) => {
        i.checked ? (answer.question3 = i.value) : false;
      });
    } else if (q.dataset.question == "Ваша знижка") {
      inps.forEach((i) => {
        i.value ? (answer.question4 = i.value) : false;
      });
    } else {
      const inps = document.querySelectorAll(".input");
      inps.forEach((i) => {
        switch (i.id) {
          case "name":
            answer.name = i.value;
          case "secondName":
            answer.secondName = i.value;
          case "tel":
            answer.tel = i.value;
        }
        return answer;
      });
    }
  })
}

function gameStart() {
  const wheel = document.querySelector(".wheel");
  const spinBtn = document.querySelector(".spinBtn");
  let spin = Math.ceil(Math.random() * 3600);

  spinBtn.addEventListener("click", () => {
    const discountInput = document.querySelector("input#discountInput");
    const discountText = document.querySelector("p#discountText span");

    spinBtn.classList.remove('active')
    spinBtn.style.opacity = '.85'
    spinBtn.style.pointerEvents = 'none';
    wheel.style.transform = "rotate(" + spin + "deg)";
    spin += Math.ceil(Math.random() * 3600);
    const numbers = document.querySelectorAll('.number')
    setTimeout(() => {
      let val = new Array();
      numbers.forEach(n => {
        val.push(n.getBoundingClientRect().top);
        
      })
      let min = Math.min.apply(null, val);
      
      numbers.forEach((n) => {
        
        n.getBoundingClientRect().top === min ? alert(`${n.id}%`) : false;
      //   discountText.textContent = "Вітаєм!!! Ваша знижка:";
      //   prevBtn.classList.remove("active");
      //   nextBtn.classList.add("active"); discountInput.value = `${n.id}%`
      });
    }, 5000);
  });
}

function addDataToForm(quiz) {
  const inps = quiz.querySelectorAll('.input')
  inps.forEach(inp => {
    for (let key in answer) {
      switch (key) {
        case "name":
          inp.id === "nameUser" ? (inp.value = answer[key]) : false;
        case "secondName":
          inp.id === "secondNameUser" ? (inp.value = answer[key]) : false;
        case "tel":
          inp.id === "telUser" ? (inp.value = answer[key]) : false;
        case "question2":
          inp.id === "q2" ? (inp.value = answer[key]) : false;
        case "question3":
          inp.id === "q3" ? (inp.value = answer[key]) : false;
        case "question4":
          inp.id === "q4" ? (inp.value = answer[key]) : false;
      }
      console.log(`key: ${answer[key]}`)
      console.log(`inp.id: ${inp.id}`);
    }
  })
}
