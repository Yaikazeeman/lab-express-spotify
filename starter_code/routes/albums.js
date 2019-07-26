const express = require('express');
const router = express.Router();
const spotifyApi = require('../models/spotifyApi')

router.get('/albums/:id', (req, res) => {
    debugger
    var queryArtist = req.params.id
    spotifyApi.getArtistAlbums(queryArtist)
    .then(showAlbums => {
      debugger
      res.render('albums', {albums: showAlbums})
    })
    .catch(err => {
      console.log('err' + err)
    })
})

module.exports = router;