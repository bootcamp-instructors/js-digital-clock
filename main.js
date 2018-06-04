function setTime() {

  var now = new Date();

  var seconds = now.getSeconds();
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  var minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  var hours = now.getHours();
  if (hours < 10) {
    hours = '0' + hours;
  }

  clock = document.querySelector('#clock h2');
  clock.innerHTML = hours + ':' + minutes + ':' + seconds;

}

setInterval(setTime, 1000);

setTime();



