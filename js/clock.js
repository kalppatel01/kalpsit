var secondhand = document.getElementById('second-hand'),
  minutehand = document.getElementById('minute-hand'),
  hourhand = document.getElementById('hour-hand'),
  readabletime = document.getElementById('readable-time');

function alwaysTwoDigits(digits) {
  if (digits < 10) {
    digits = "0" + digits;
  }

  return digits;
}

function twoDigitTime(hour, minute, second) {
  var minutes = alwaysTwoDigits(minute);
  var seconds = alwaysTwoDigits(second);

  return hour + ":" + minutes + ":" + seconds;
}

function moveHands(time) {
  var time = new Date(),
    seconds = (360 / 60) * time.getSeconds(),
    minutes = (360 / 60) * time.getMinutes(),
    hours = ((360 / 12) * time.getHours()) + (minutes / 60);


  secondhand.style.transform = "rotate(" + seconds + "deg)";
  minutehand.style.transform = "rotate(" + minutes + "deg)";
  hourhand.style.transform = "rotate(" + hours + "deg)";

  readabletime.innerHTML = "Clock Time: " + twoDigitTime(time.getHours(), time.getMinutes(), time.getSeconds());

}

var clockItUp = setInterval('moveHands()', 1000);
