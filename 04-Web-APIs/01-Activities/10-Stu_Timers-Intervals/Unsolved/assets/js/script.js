let poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
let words = poem.split(" ");

let mainEl = document.getElementById("main");
let timerEl = document.getElementById("countdown");

let i = 0;

let millisecondsPerWord = prompt("How many milliseconds between words would you like?");

function prepareRead() {
  let timeLeft = 3;

  let timeInterval = setInterval(function() {
    timerEl.textContent = timeLeft + " seconds remaining";
    timeLeft--;

    if (timeLeft === 0) {
      timerEl.textContent = "";
      speedRead();
      clearInterval(timeInterval);
    }

  }, 1000);
}

function speedRead() { 
  let textInterval = setInterval(function(){
    if(words === undefined){
      clearInterval(textInterval);
      mainEl.textContent = "";
    } else{
      mainEl.textContent = words[i]
      i++
    }
  }, millisecondsPerWord )
  
}

prepareRead();









