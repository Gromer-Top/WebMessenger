console.log("Start");
function sendMessage () {
  var chat = document.querySelector("#messenger");
  var message = document.createElement('DIV');
  let input = document.getElementById('input-message__input')
  if (input.value != '')
  {
    message.classList.add('user-message');
    message.innerHTML = input.value;
    chat.appendChild(message);
    input.value = '';
  }
  input.value = '';
}