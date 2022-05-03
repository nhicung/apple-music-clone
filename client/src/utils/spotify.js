import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();
spotify.setAccessToken(
    "BQBQazubleZ9hTheJhPMohraUzCrsIqdwOTRPXe2J4X2e5hSWNdQIeEdZr1HaaeV6NOx5h2Gfo59p3-ACkXC-ynfP73-J4AaCCnR69yfVZJzfznrHC0vr2Tm5r7PGOJBgtRiegaAID7xxFM"
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
        // console.log(res);
        return res.playlists.items;
    } catch (err) {
        console.error(err);
    }
};

export const getCategories = async (limit = 20) => {
    try {
        const res = await spotify.getCategories({ limit: limit });
        // console.log(res);
        return res.categories.items;
    } catch (err) {
        console.error(err);
    }
};
