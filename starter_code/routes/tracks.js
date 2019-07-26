const express = require('express');
const router = express.Router();
const spotifyApi = require('../models/spotifyApi')

router.get('/tracks/:id', (req, res) => {
    debugger
    var queryAlbum = req.params.id
    spotifyApi.getAlbumTracks(queryAlbum)
    .then(showTracks => {
      // console.log(`track ${JSON.stringify(showTracks)}`)
      debugger
      res.render('tracks', {tracks: showTracks})
    })
    .catch(err => {
      console.log('err' + err)
    })
})

module.exports = router;