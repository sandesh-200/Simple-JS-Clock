const control_clock = () => {
  let a = new Date();
  let h = a.getHours();
  let AorP = h >= 12 ? "PM" : "AM";
  let formatted_hour = h % 12 || 12;
  let m = a.getMinutes();
  let s = a.getSeconds();
  let day = a.getDate();
  let mon = a.getMonth();
  yearo = a.getFullYear();
  if (day < 10) {
    day = "0" + day;
  }
  if (mon < 10) {
    mon = "0" + mon;
  }
  document.getElementById(
    "main_time"
  ).innerHTML = `${formatted_hour} : ${m} : ${s}     ${AorP}`;
  document.getElementById("date_text").innerHTML = `${day} / ${mon} / ${yearo}`;
};

setInterval(control_clock, 1000);
const audiop = () => {
  var audio = new Audio("tick.mp3");
  audio.play();
};

const audiofunc = () => {
  sound_click = document.getElementById("flexSwitchCheckDefault");
  sound_click.classList.toggle("sound_on");
  if (sound_click.classList.contains("sound_on")) {
    a = setInterval(audiop, 1000);
  } else {
    clearInterval(a);
  }
};
