const userName = document.querySelector("#username");
const pass1 = document.querySelector("#password1");
const pass2 = document.querySelector("#password2");
const clearBtn = document.querySelector(".form__btn-clear");
const submitBtn = document.querySelector(".form__btn-submit");
const confirmPopup = document.querySelector(".popup");
const confirmBtn = document.querySelector(".popup__btn");
let userEmail;
let min = 4;
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

const checkPassStrength = (input) => {
  const passRegex =
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})";
  if (passRegex.test(input)) {
    console.log("ok");
  } else {
    showErr(
      input,
      "Hasło musi zawierać minimum 8 znaków w tym przynajmniej jedną: wielką litere, małą litere, cyfre, znak specjalny"
    );
  }
};

const checkPassword = (pass1, pass2) => {
  if (pass1.value !== pass2.value) {
    showErr(pass2, "Hasła nie pasują do siebie");
  }
};

const checkLength = (input, min) => {
  if (input.value.length < min) {
    const inputAttribute = input.getAttribute("data-type");
    errMessage = `${inputAttribute} składa się z min. ${min} znaków`;
    showErr(input, errMessage);
  }
};

const checkMail = (email) => {
  const emailRegex =
    '/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';
  if (emailRegex.test(email.value)) {
    clearInput(email);
  } else {
    showErr(email, "E-mail jest niepoprawny");
  }
};

const checkForm = (input) => {
  if (input.value === "") {
    showErr(input, input.placeholder);
  } else {
    checkLength(userName, min);
    checkPassStrength(pass1);
    checkPassword(pass1, pass2);
    checkMail(userEmail);
    checkErrors();
    console.log(pass1, pass2);
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
