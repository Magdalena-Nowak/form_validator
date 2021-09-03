const userName = document.querySelector("#username");
const pass1 = document.querySelector("#password1");
const pass2 = document.querySelector("#password2");
const userEmail = document.querySelector("#email");
const clearBtn = document.querySelector(".form__btn-clear");
const submitBtn = document.querySelector(".form__btn-submit");
const confirmPopup = document.querySelector(".popup");
const confirmBtn = document.querySelector(".popup__btn");
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
  const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (passRegex.test(input.value)) {
    input.nextElementSibling.classList.remove("error");
    console.log(`Hasło pasuje: ${input.value}`);
  } else {
    console.log(`Hasło nie pasuje: ${input.value}`);
    showErr(
      input,
      "Hasło musi zawierać minimum 8 znaków w tym przynajmniej jedną: wielką literę, małą literę oraz cyfrę"
    );
  }
};

const checkPassword = (pass1, pass2) => {
  if (pass1.value !== pass2.value) {
    console.log(`Pass1: ${pass1.value}, pass2: ${pass2.value}`);
    showErr(pass2, "Hasła nie pasują do siebie");
  } else {
    pass2.nextElementSibling.classList.remove("error");
  }
};

const checkLength = (input, min) => {
  if (input.value.length < min) {
    const inputAttribute = input.getAttribute("data-type");
    errMessage = `${inputAttribute} składa się z min. ${min} znaków`;
    showErr(input, errMessage);
  } else {
    input.nextElementSibling.classList.remove("error");
  }
};

const checkEmail = (input) => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log(`Email: ${input.value}`);
  if (emailRegex.test(input.value)) {
    input.nextElementSibling.classList.remove("error");
  } else {
    showErr(input, "E-mail jest niepoprawny");
  }
};

const checkForm = (input) => {
  input.forEach((input) => {
    if (input.value === "") {
      showErr(input, input.placeholder);
    }
  });
};

const checkErrors = () => {
  const allInputs = document.querySelectorAll("input");
  let errorCount = 0;
  allInputs.forEach((input) => {
    if (input.nextElementSibling.classList.contains("error")) {
      errorCount++;
    }
  });
  if (errorCount === 0) {
    confirmPopup.classList.add("active");
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
  checkForm([userName, pass1, pass2, userEmail]);
  checkLength(userName, min);
  checkPassStrength(pass1);
  checkPassword(pass1, pass2);
  checkEmail(userEmail);
  checkErrors();
});

confirmBtn.addEventListener("click", () => {
  confirmPopup.classList.remove("active");
});
