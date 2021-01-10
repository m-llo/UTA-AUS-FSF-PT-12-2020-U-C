// Access element using id
var articlesDiv = document.getElementById("articles");
var mainDiv = document.getElementById("main");
console.log(mainDiv);
console.log(articlesDiv);
// Change style by accessing style object's properties
articlesDiv.children[0].style.fontSize = "50px";
mainDiv.children[0].style.color = "white";
