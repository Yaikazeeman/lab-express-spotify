const express = require('express');
const router = express.Router();

const spotifyApi = require('../models/spotifyApi')
// const SpotifyWebApi = require('spotify-web-api-node');



router.get('/artists', (req, res) => {
    var queryArtists = req.query.artist
    spotifyApi.searchArtists(queryArtists)
    .then(showArtists => {
      res.render('artists', {artists: showArtists.body.artists})
    })
    .catch(err => {
      console.log('err' + err)
    })
})


// router.post('/artists', (req, res) => {
//   debugger
//   spotifyApi.searchArtists(req.body.artist)
//   .then(data => {
//     debugger
//     res.render('artists', {showDataArtists: data.body.artists.items})
//   })
//   .catch(err => {
//     console.log('err' + err)
//   })
// })


module.exports = router;