const btn = document.querySelector(".btn");
const playLight = document.querySelector(".light");
const playNight = document.querySelector(".night");

const btnMoon = document.querySelector("#moon");
const btnSun = document.querySelector("#sun");

btn.addEventListener("click", function () {
  playLight.classList.toggle("hidden");
});

//label
const itBall = document.querySelector(".ball");

itBall.addEventListener("click", function () {
  document.transfrom = "translateY(-50px)";
});
