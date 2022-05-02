import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();
spotify.setAccessToken(
    "BQC-fC_VlncVriNsneW_Quq1ZEUyC9jMxA3DtjUDdrcdz_MY9gldlattVhSaCNl_D1L_EKHJHOAtXdHCSpjPFb8co8PPH6v3E2jp9OcYgQmQRmcAjuJQyXEEq77hSf2WgHZKuPbQCi2_SOw"
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
