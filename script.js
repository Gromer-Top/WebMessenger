console.log("Hello");
function sendMessage () {
  var chat = document.querySelector("#messenger");
  var message = document.createElement('DIV');
  message.classList.add('user-message');
  message.innerHTML = document.getElementById('input-message__input').value;
  chat.appendChild(message);
}