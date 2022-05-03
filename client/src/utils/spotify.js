import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

const getAccessToken = async () => {
    try {
        const res = await fetch("/spotify/token");
        const data = await res.json();
        spotify.setAccessToken(data.body.access_token);
    } catch (err) {
        console.error(err);
    }
};

export const getNewRealeases = async (offset = 0) => {
    try {
        await getAccessToken();
        const res = await spotify.getNewReleases({
            offset: offset,
        });
        return res.albums.items;
    } catch (err) {
        console.error(err);
    }
};

export const getFeaturedPlaylists = async () => {
    try {
        await getAccessToken();
        const res = await spotify.getFeaturedPlaylists({});
        // console.log(res);
        return res.playlists.items;
    } catch (err) {
        console.error(err);
    }
};

export const getCategories = async (limit = 20) => {
    try {
        await getAccessToken();
        const res = await spotify.getCategories({ limit: limit });
        // console.log(res);
        return res.categories.items;
    } catch (err) {
        console.error(err);
    }
};
