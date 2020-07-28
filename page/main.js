// DOM Elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  gora = document.getElementById('gora')


// Options
const showAmPm = false;

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12hr Format
  hour = hour % 12 || 12;

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span></span> ${showAmPm ? amPm : ''}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();


    if (hour < 4) {
      // Morning
      gora.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')";
      greeting.textContent = 'Spokojnej nocy, ';
    } else if (hour < 12) {
    // Morning
    gora.style.backgroundImage = "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2013%2F02%2Fsunrise-via-thinkstock.jpg&f=1&nofb=1')";
    greeting.textContent = 'Dzień dobry, ';
  } else if (hour < 18) {
    // Afternoon
    gora.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
    greeting.textContent = 'Miłego popołudnia, ';
  } else if (hour < 21) {
    // Evening
    gora.style.backgroundImage = "url('https://www.nordicvisitor.com/images/blogs/2015-05-lapland-midnight-sun-1.jpg')";
    greeting.textContent = 'Dobry Wieczór, ';
  } else {
    // Evening
    gora.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')";
    greeting.textContent = 'Spokojnej nocy, ';
  }



}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '(Wpisz swoje imie)';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}




name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);


// Run
showTime();
setBgGreet();
getName();
