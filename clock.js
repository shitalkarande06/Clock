// function to set automate seconds
function display_sec() {
  // resfresh rate in milli seconds
  var refresh = 1000;
  myTime = setTimeout("newDay()", refresh);
}

function newDay() {
  // get current Date
  var day = new Date();

  var x = day.getHours() % 12;
  var HOURS = x.toString().length == 1 ? 0 + x.toString() : x;

  var y = day.getMinutes().toString();
  var MINUTES = y.length == 1 ? 0 + y : y;

  var z = day.getSeconds().toString();
  var SECONDS = z.length == 1 ? 0 + z : z;

  //  get current hour
  let hours = document.getElementById("heading1");
  hours.innerHTML = HOURS;

  // get current minute
  let minutes = document.getElementById("heading2");
  minutes.innerHTML = MINUTES;

  //  get current seconds
  let seconds = document.getElementById("heading3");
  seconds.innerHTML = SECONDS;

  display_sec();
}
newDay();   //function call


