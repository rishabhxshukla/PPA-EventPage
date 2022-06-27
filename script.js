/* TIMER SCRIPT */

var countDownDate = new Date("July 26, 2022 00:00:00").getTime();
var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML = days + "  :  " + hours + "  :  "
  + minutes + "  :  " + seconds;
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


/*-----------------------------------------------------------------------------------------------------*/

/* MODAL WINDOW */

/*--------------------------------------------------------------------------*/

// let addEventBtn = document.getElementById('addEventBtn');
// let mc = document.getElementById('modal-container');
// let bg = document.getElementsByClassName('bg')[0];
// let ue = document.getElementsByClassName('upcoming-events-container')[0];
// let ss = document.getElementsByClassName('success-stories-container')[0];

// addEventBtn.addEventListener('click', ()=>{
//     scroll(0, 0);
//     mc.classList.add('showModal');
//     bg.style.display = "none";
//     ue.style.display = "none";
//     ss.style.display = "none";
// });

// closeEventBtn.addEventListener('click', ()=>{
//     mc.classList.remove('showModal');
//     bg.style.display = "block";
//     ue.style.display = "block";
//     ss.style.display = "block";
// });
/*--------------------------------------------------------------------------*/