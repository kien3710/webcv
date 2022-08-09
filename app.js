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
  itBall.classList.toggle("turn-on");
  playLight.classList.toggle("hidden");
});

// itBall.addEventListener("click", function () {
//   if (itBall == "on") {
//     itBall.classList.toggle("turn-on");
//   } else {
//     itBall.style.right = "0";
//   }
// });
