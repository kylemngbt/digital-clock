const hrs = document.querySelector("#hrs");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

setInterval(() => {
  let currentTime = new Date();

  hrs.textContent = currentTime.getHours();
  min.textContent = currentTime.getMinutes();
  sec.textContent = currentTime.getSeconds();
},1000)