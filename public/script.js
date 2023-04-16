var socket = io();

// consuming event from server "message"

// socket.on("message", () => {
//   // dom API's

//   const div = document.createElement("div");
//   div.innerText = "Welcome to socket.io";
//   document.body.appendChild(div);
// });

// emitting or creating event from client "fromClient"

// const btn = document.getElementById("btnSend");
// btn.onclick = () => {
//   socket.emit("fromClient");
// };

const btn = document.getElementById("btnSend");
const msgInput = document.getElementById("msgInput");
const msgList = document.getElementById("msgList");

//emitting or creating an event from client "msg_client" and printing message from input box

btn.onclick = function click() {
  socket.emit("msg_client", {
    msg: msgInput.value,
  });
};

//consuming or listening an event from the server and sending message to all "msg_rcvd"

socket.on("msg_rcvd", (data) => {
  const li = document.createElement("li");
  li.innerText = data.msg;
  msgList.appendChild(li);
});
