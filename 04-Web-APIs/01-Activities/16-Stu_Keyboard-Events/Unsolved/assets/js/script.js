var eventType = document.querySelector("#event-type"); 
var keyEventsEl = document.getElementById("key-events");

console.log(window);
function keydownAction(event) {
  // TODO: Complete keydown function
  console.log(event);
  // document.querySelector("#status").innerHTML= "KEYDOWN Event";
  document.getElementById("key").textContent = event.key;
  document.querySelector("#code").textContent = event.code;
}

function keyupAction() {
  if(event.keyboardEvent === true) {
  document.querySelector("#status").innerHTML = "KEYUP Event";
} }

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);
