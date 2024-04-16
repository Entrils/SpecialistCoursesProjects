let controls = document.querySelector("#controls");

let inputLogin = document.querySelector("#input_login");
let inputMessage = document.querySelector("#input_message");

let submit = document.querySelector("#submit");

function sendMessage(){
    socket.emit("message", {
        login: inputLogin.value,
        text: inputMessage.value,
    });
    inputMessage.value = '';
    inputMessage.focus();
}

inputMessage.addEventListener("keyup", function (e){
    if(e.keyCode === 13){
        sendMessage(); 
    }
})
submit.addEventListener("click", function (e) {
    e.preventDefault();
    sendMessage(); 
});

let socket = io.connect("http://localhost:8080");
socket.on("message", (data) => {
  //controls.innerHTML += data + '<hr />';
  let div = document.createElement("div");
  div.className = 'row';
  div.innerHTML = `<b>${data['login']}</b>: ${data['text']}`;
  controls.appendChild(div);
  console.log(data);
});
