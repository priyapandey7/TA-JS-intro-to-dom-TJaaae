let hourHand = document.querySelector(".hour");
let minuteHand = document.querySelector(".minute");
let secondHand = document.querySelector(".second");

setInterval(setDate, 1000);
function setDate() {
  let now = new Date();

  let seconds = now.getSeconds();

  let secondsDegree = (seconds / 60) * 360;

  secondHand.style.transform = `rotate(${secondsDegree}deg)`;

  let minutes = now.getMinutes();

  let minuteDegree = (minutes / 60) * 360;

  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

  let hour = now.getHours();

  let hourDegree = (hour / 12) * 360;

  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}
