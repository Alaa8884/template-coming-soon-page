let countDownDate = new Date("Oct 24, 2023 00:00:00").getTime()

let time = setInterval(function () {
  let now = new Date().getTime();
  let difference = countDownDate - now;

  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);
  document.querySelector('.days').innerHTML = days
  document.querySelector('.hours').innerHTML = hours
  document.querySelector('.minutes').innerHTML = minutes
  document.querySelector('.seconds').innerHTML = seconds
  
  if (difference < 0) {
      clearInterval(time)
      document.querySelector('.days').innerHTML = "00"
      document.querySelector('.hours').innerHTML = "00"
      document.querySelector('.minutes').innerHTML = "00"
      document.querySelector('.seconds').innerHTML = "00"
  
  }
}, 1000);

