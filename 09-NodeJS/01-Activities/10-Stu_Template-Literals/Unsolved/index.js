// music should be an object with title, artist, and album properties
const music = {
  // code here
  title: "Meet The Parents ",
  artist: "Jay-Z",
  album: "The Blueprint 2", 
};

// Write code between the <div> tags to output the data from the music object above.
// Use an h2 element for the title and a p element for artist and title
let keys = Object.keys(music);
const songSnippet = `
  <div class="song">
  <h2>${keys[0]}: ${music.title}</h2>
  <p>${keys[1]}: ${music.artist}</p>
  <p>${keys[2]}: ${music.album}</p>
  </div>

`;

const element = document.getElementById("music");
element.innerHTML = songSnippet;

