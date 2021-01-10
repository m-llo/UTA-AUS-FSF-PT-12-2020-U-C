let count = 0;
let incrementEl = document.querySelector("#increment");
let decrementEl = document.querySelector("#decrement");
let countEl = document.querySelector("#count");

function setCounterText(){
countEl.textContent = count;

}


// TODO: Add event listener to increment button
incrementEl.addEventListener("click", function ()  {
count ++;
setCounterText()
});

// TODO: Add event listener to decrement button 
decrementEl.addEventListener("click", function ()  {
if (count > 0){
count --;
setCounterText()}

else{
  alert("Count can't be less than 0")
}
});




