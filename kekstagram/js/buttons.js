// theme toggle

let toggleButton = document.getElementById('toggle-button');
let body = document.querySelector('body');

toggleButton.onclick = function() {
  body.classList.toggle('light-active');
}
