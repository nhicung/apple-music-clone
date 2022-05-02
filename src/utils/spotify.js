import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();
spotify.setAccessToken(
    "BQAV_UXgP_FerLt4hHiwMZwuKcxDW5rY7jwDk5NeoJXREzwgECJFa9qRik6ejFydTif0PPFg8eKrhzn0PMhtfK-9lLqnJX6g-zh6DaGcIjD7kjUIe4dcTXj9Nu0pZ7d6cN5uh_OsWARv76s"
);

export const getNewRealeases = async (offset = 0) => {
    try {
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
        const res = await spotify.getFeaturedPlaylists({});
        console.log(res);
        return res.playlists.items;
    } catch (err) {
        console.error(err);
    }
};

export const getCategories = async () => {
    try {
        const res = await spotify.getCategories({});
        console.log(res);
        return res.categories.items;
    } catch (err) {
        console.error(err);
    }
};
