const express = require('express');
const router = express.Router();
const SpotifyWebApi = require('spotify-web-api-node')

router.post('/', (req, res) => {
    code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: "https://sheifunmi-spotify-clone.vercel.app",
        clientId: "cea15f2d1f164548b6042a367be00301",
        clientSecret: "760926660b534a54aea9cda6061ef41f"
    })

    spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
     // console.log(data)
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      })
    })
    .catch(err => {
     // console.log(err)
      res.sendStatus(400)
    })
})



module.exports = router;