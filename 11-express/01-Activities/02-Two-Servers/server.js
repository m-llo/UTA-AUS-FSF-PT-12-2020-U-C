const http = require('http');

const PORTONE = 7000;
const PORTTWO = 7500;

const handleRequestOne = (request, response) => {
    // Send the below string to the client when the user visits the PORT URL
    response.end(`It Works!! Path Hit: ${request.url}`);
  };

  const handleRequestTwo = (request, response) => {
    // Send the below string to the client when the user visits the PORT URL
    response.end(`It Works!! Path Hit: ${request.url}`);
  };


  const serverOne = http.createServer(handleRequestOne);
  const serverTwo = http.createServer(handleRequestTwo);

  // Start our server so that it can begin listening to client requests.
  serverOne.listen(PORTONE, () => {
    // Log (server-side) when our server has started
    console.log(`Server listening on: http://localhost:${PORTONE}`);
  });

  serverTwo.listen(PORTTWO, () => {
    // Log (server-side) when our server has started
    console.log(`Server listening on: http://localhost:${PORTTWO}`);
  });

