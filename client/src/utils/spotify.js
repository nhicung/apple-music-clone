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

export const getFeaturedPlaylists = async (offset = 0) => {
    try {
        await getAccessToken();
        const res = await spotify.getFeaturedPlaylists({ offset: offset });
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

export const getPlaylistTracks = async (playlistId) => {
    try {
        await getAccessToken();
        const res = await spotify.getPlaylistTracks(playlistId);
        console.log(res);
        return res;
    } catch (err) {
        console.error(err);
    }
};

export const getPlaylist = async (playlistId) => {
    try {
        await getAccessToken();
        const res = await spotify.getPlaylist(playlistId);
        console.log(res);
        return res;
    } catch (err) {
        console.error(err);
    }
};

export const search = async (query, types) => {
    try {
        await getAccessToken();
        const res = await spotify.search(query, types);
        console.log(res);
        return res;
    } catch (err) {
        console.error(err);
    }
};
