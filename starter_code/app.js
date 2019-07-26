const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser')
// const SpotifyWebApi = require('spotify-web-api-node');


const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

// setting the spotify-api goes here:

// const clientId = 'cbd2df45c0bd45ba93eb7888d8832c7d',
//     clientSecret = '5671d4c1668b4c7d86e683130d2ca944';

// const spotifyApi = new SpotifyWebApi({
//   clientId : clientId,
//   clientSecret : clientSecret
// });

// // Retrieve an access token
// spotifyApi.clientCredentialsGrant()
//   .then( data => {
//     spotifyApi.setAccessToken(data.body['access_token']);
//   })
//   .catch(error => {
//     console.log('Something went wrong when retrieving an access token', error);
//   })


// the routes go here:

const index = require('./routes/index')
app.use('/', index);
const artist = require('./routes/artists')
app.use('/', artist);
const albums = require('./routes/albums')
app.use('/', albums);
const tracks = require('./routes/tracks')
app.use('/', tracks);



app.listen(3000, () => console.log("My Spotify project running on port 3000 🎧 🥁 🎸 🔊"));
