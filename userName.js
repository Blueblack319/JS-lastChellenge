const userContainer = document.querySelector(".js-userContainer"),
  user = userContainer.querySelector(".js-userName"),
  userAnswer = userContainer.querySelector("input");

const USER = "userName";
const SHOWING = "showing";

function handleChange(event) {
  event.preventDefault();
  const userName = event.target.value;
  localStorage.setItem(USER, userName);
  user.innerText = `hi! ${userName}`;
  userAnswer.classList.remove(SHOWING);
}

function loadName() {
  const userName = localStorage.getItem(USER);
  if (userName !== null) {
    user.innerText = `hi! ${userName}`;
    userAnswer.classList.remove(SHOWING);
  }
}

function init() {
  userAnswer.addEventListener("change", handleChange);
  loadName();
}

init();
