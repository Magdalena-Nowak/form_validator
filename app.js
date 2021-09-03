const userName = document.querySelector("#username");
const pass1 = document.querySelector("#password1");
const pass2 = document.querySelector("#password2");
const userEmail = document.querySelector("#email");

const clearBtn = document.querySelector(".form__btn-clear");
const submitBtn = document.querySelector(".form__btn-submit");
const confirmPopup = document.querySelector(".popup");
const confirmBtn = document.querySelector(".popup__btn");
let allInputs;

const showErr = (input, message) => {
  input.classList.add("alert-warning");
  input.nextElementSibling.classList.add("error");
  input.nextElementSibling.textContent = message;
};

const clearInput = (input) => {
  input.value = "";
  input.nextElementSibling.classList.remove("error");
  input.classList.remove("alert-warning");
};

const confirmSending = () => {
  confirmPopup.classList.add("active");
};

const checkForm = (input) => {
  if (input.value === "") {
    showErr(input, input.placeholder);
  } else {
    clearInput(input);
    confirmSending();
  }
};

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  allInputs = document.querySelectorAll("input");
  allInputs.forEach((input) => {
    clearInput(input);
  });
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  allInputs = document.querySelectorAll("input");
  allInputs.forEach((input) => {
    checkForm(input);
  });
});

confirmBtn.addEventListener('click', () => {
  confirmPopup.classList.remove("active");
})