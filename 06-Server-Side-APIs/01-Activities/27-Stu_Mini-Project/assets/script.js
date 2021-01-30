var requestUrl =  "https://www.loc.gov";


function getData (endpoint, search){
//   template literal 
    var url = `${requestUrl}/${endpoint}/?fo=json&q=${search}`


fetch (url)
.then(function (response) {
    if (response.ok) {
      console.log(response);
      response.json().then(function (data) {
        console.log(data);
        return data.results;
      });
    } else {
      console.log('Error: ' + response.statusText);
    }
  })
  .catch(function (error) {
   console.log(error)
  });
};

document.querySelector("#search").addEventListener("click", function(){
    var userInput = document.querySelector("#userInput").value;
    var category = document.querySelector("#categories").value;
    console.log(category, userInput);
  const data = getData(category, userInput); 


})

// make a funciton called get results and make it take data as a 