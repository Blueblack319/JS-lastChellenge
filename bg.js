const body = document.querySelector("body");

function init() {
  const number = Math.floor(Math.random() * 11) + 1;
  const bg = new Image();
  bg.src = `src/${number}.jpg`;
  bg.classList.add("bgImage");
  body.appendChild(bg);
}

init();
