var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;
  if (element.matches(".box")) {
    var state = element.getAttribute("data-state");

    if (state === "hidden") {
      element.dataset.state = "display";
      element.textContent = element.dataset.number;

    } 
    else {
      element.dataset.state = "hidden";
      element.textContent = "";
    }

  
}
});
