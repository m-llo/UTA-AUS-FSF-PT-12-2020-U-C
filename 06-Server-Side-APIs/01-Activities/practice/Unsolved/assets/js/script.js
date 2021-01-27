var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://edamam-recipe-search.p.rapidapi.com/search';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      // TODO: Loop through the data and generate your HTML
      for (var i = 0; i < data.length; i++) {
        var issueTitle = document.createElement('h2');
        var issueBody = document.createElement('a');
        issueTitle.textContent = data[i].login;
        issueBody.textContent = data[i].url;
        issueBody.href = data[i].html_url;
        userContainer.append(issueTitle);
        userContainer.append(issueBody);
      }
    });
}

req.query({
	"q": "chicken"
});

req.headers({
	"x-rapidapi-key": "cf073050d4msh8adf846d0bc1c24p104398jsn6a02db9bedab",
	"x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});


fetchButton.addEventListener('click', getApi);
