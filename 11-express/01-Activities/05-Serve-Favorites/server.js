const http = require('http');
const fs = require('fs');

const PORT = 7070;


const displayFood = (res) => {
    fs.readFile(`${__dirname}/favfood.html`, (err, data) => {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
  };
  const displayHome = (res) => {
    fs.readFile(`${__dirname}/home.html`, (err, data) => {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
  };
  const displayMovies = (res) => {
    fs.readFile(`${__dirname}/favmovies.html`, (err, data) => {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
  };
  const displayCss = (res) => {
    fs.readFile(`${__dirname}/favcss.html`, (err, data) => {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
  };

  const display404 = (url, res) => {
    const myHTML = `
    <html>
      <body>
        <h1>404 Not Found </h1>
        <p>The page you were looking for: ${url} can not be found</p>
      </body>
    </html>`;
  
    // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
    res.writeHead(404, { 'Content-Type': 'text/html' });
  
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
  };
  
const handleRequest = (req, res) => {
    // Here we use the fs package to read our index.html file
    const path = req.url;

  // Depending on the URL, display a different HTML file.
  switch (path) {
    case '/home':
      return displayHome(res);

    case '/favfood':
      return displayFood(res);
    
    case '/favmovie':
      return displayMovies(res);

    case '/favcss':
      return displayCss(res);

    default:
      return display404(path, res);
  }
  };


const server = http.createServer(handleRequest);

// Starts our server
server.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});