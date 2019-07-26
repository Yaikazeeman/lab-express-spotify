const SpotifyWebApi = require('spotify-web-api-node');

const clientId = 'cbd2df45c0bd45ba93eb7888d8832c7d',
    clientSecret = '5671d4c1668b4c7d86e683130d2ca944';

const spotifyApi = new SpotifyWebApi({
  clientId : clientId,
  clientSecret : clientSecret
});

// Retrieve an access token
spotifyApi.clientCredentialsGrant()
  .then( data => {
    spotifyApi.setAccessToken(data.body['access_token']);
  })
  .catch(error => {
    console.log('Something went wrong when retrieving an access token', error);
  })


module.exports = spotifyApi