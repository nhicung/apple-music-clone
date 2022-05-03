var express = require("express");
var router = express.Router();
var SpotifyWebApi = require("spotify-web-api-node");

var spotifyApi = new SpotifyWebApi({
    clientId: process.env["CLIENT_ID"],
    clientSecret: process.env["CLIENT_SECRET"],
});

/* GET users listing. */
router.get("/token", async (req, res, next) => {
    // Retrieve an access token.
    const apiRes = await spotifyApi.clientCredentialsGrant().then(
        function (data) {
            console.log(
                "The access token expires in " + data.body["expires_in"]
            );
            console.log("The access token is " + data.body["access_token"]);

            // Save the access token so that it's used in future calls
            spotifyApi.setAccessToken(data.body["access_token"]);
            return data;
        },
        function (err) {
            console.log(
                "Something went wrong when retrieving an access token",
                err
            );
            return err;
        }
    );

    res.json({
        ...apiRes,
    });
});

module.exports = router;
