let randomNumber = 0;
const btnGuess = document.querySelector(".btn-guess");
const btnStart = document.querySelector(".btn-start");
const btnTekrar = document.querySelector(".btn-tekrar");
const numEl = document.querySelector("#txtNumber");
const labelResultEl = document.querySelector("#lblResult");
const labelHakEl = document.querySelector("#lblHak");

const minRandomNumber = 1;
const maxRAndomNumber = 100;
let life = 5;
let heartLife = (life) => {
  switch (true) {
    case life == 5:
      return "❤️❤️❤️❤️❤️";
    case life == 4:
      return "🖤❤️❤️❤️❤️";
    case life == 3:
      return "🖤🖤❤️❤️❤️";
    case life == 2:
      return "🖤🖤🖤❤️❤️";
    case life == 1:
      return "🖤🖤🖤🖤❤️";
    case life == 0:
      return "🖤🖤🖤🖤🖤";
  }
};
const start = () => {
  randomNumber = generateRandomNumber(minRandomNumber, maxRAndomNumber);
  btnGuess.classList.add("d-inline");
  btnStart.classList.add("d-none");
  labelResultEl.innerHTML = "";
  numEl.removeAttribute("disabled");
  numEl.focus();
};

const reset = () => {
  btnGuess.classList.remove("d-inline");
  btnStart.classList.remove("d-none");
  btnTekrar.classList.remove("d-inline");
  numEl.setAttribute("disabled", "true");
  life = 5;
  labelResultEl.innerHTML = "";
  labelHakEl.innerHTML = "";
};
numEl.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    guess();
  }
});
const guess = () => {
  labelHakEl.classList.add("d-inline");
  let num = Number(numEl.value);
  num = num || 0;
  if (num === randomNumber) {
    labelResultEl.innerHTML = "Congrats! You guessed the number";
    reset();
  } else if (num > randomNumber) {
    labelResultEl.innerHTML = `${num} sayisi büyük, küçük sayi giriniz`;
    life--;
    labelHakEl.innerHTML = heartLife(life);
  } else {
    labelResultEl.innerHTML = `${num} sayisi küçük, büyük sayi giriniz`;
    life--;
    labelHakEl.innerHTML = heartLife(life);
  }
  if (life === 0) {
    labelResultEl.innerHTML = "Oyunu kaybettin";
    labelHakEl.innerHTML = `Tahmin edilecek sayi = ${randomNumber}`;
    btnGuess.classList.remove("d-inline");
    btnTekrar.classList.add("d-inline");
    numEl.setAttribute("disabled", "true");
  }
  numEl.value = "";
  numEl.focus();
};

const tekrar = () => {
  reset();
};
const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
