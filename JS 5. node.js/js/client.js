let controls = document.querySelector("#controls");
let submit = document.querySelector("#submit");
let input = document.querySelector("#input");

function messageHandler(e) {
  e.preventDefault();
  socket.emit("message", input.value);
}

submit.addEventListener("click", messageHandler);
//submit.onclick = messageHandler

// setTimeout( ()=> {

let socket = io.connect("http://localhost:8080");
socket.on("message", (data) => {
  //controls.innerHTML += data + '<hr />';
  let div = document.createElement("div");
  div.innerHTML = data;
  controls.appendChild(div);
  console.log(data);
});
// }, 200);
