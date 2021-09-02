const userName = document.querySelector("#username");
const pass1 = document.querySelector("#password1");
const pass2 = document.querySelector("#password2");
const userEmail = document.querySelector("#email");

const clearBtn = document.querySelector(".form__btn-clear");
const submitBtn = document.querySelector(".form__btn-submit");
const confirmPopup = document.querySelector(".popup");
const confirmBtn = document.querySelector(".popup__btn");
const allInputs = document.querySelectorAll("input");

const clearInput = (input) => {
  input.value = "";
};

clearBtn.addEventListener("click", (e) => {
  allInputs.forEach((input) => {
    clearInput(input);
  });
});

