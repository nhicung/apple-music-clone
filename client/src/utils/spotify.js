import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();
spotify.setAccessToken(
    "BQBCkDVJnRocOKn7mVpXHVuxnTlt_sAjNGDjjQBJQk7b2xNzfQDPltMCDbUTerTZPmYY1Mo90LaQJDp7QJDqJ8oaMu67rl3syvLhd7FAzVURWcWk4locwkalygzFKnBnQGlyG1dJkA2ZCpQ"
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
