import { Box, Stack } from "@mui/material/";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";
import ShuffleRoundedIcon from "@mui/icons-material/ShuffleRounded";

export const MusicPlayer = () => {
  return (
    <Box
      sx={{
        width: 200,
        color: "black",
        opacity: 0.5,
      }}
    >
      <Stack spacing={1} direction="row" alignItems="center">
        <ShuffleRoundedIcon sx={{ fontSize: "15px" }} />
        <SkipPreviousIcon sx={{ fontSize: "32px" }} />
        <PlayArrowIcon sx={{ fontSize: "32px" }} />
        <SkipNextIcon sx={{ fontSize: "32px" }} />
        <RepeatRoundedIcon sx={{ fontSize: "15px" }} />
      </Stack>
    </Box>
  );};

export default MusicPlayer;
