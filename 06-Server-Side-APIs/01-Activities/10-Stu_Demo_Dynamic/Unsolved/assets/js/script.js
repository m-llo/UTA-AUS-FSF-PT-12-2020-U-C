var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

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
fetchButton.addEventListener('click', getApi);
