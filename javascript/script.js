const hrs = document.querySelector("#hrs");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

setInterval(() => {
  let currentTime = new Date();

  hrs.textContent = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  min.textContent = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  sec.textContent = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
},1000)