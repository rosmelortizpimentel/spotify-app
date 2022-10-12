import { Paper, Typography, Avatar } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import PlayArrow from '@mui/icons-material/PlayArrow';
import shadows from '@mui/material/styles/shadows';
import { trackShape } from '../../proptypes';
import { theme } from '../../themes';

const Track = ({ track }) => {
  const playAudio = () => {};

  return (
    <ThemeProvider theme={theme}>
      <Paper
        sx={{
          padding: theme.spacing(1),
          textAlign: 'center',
          color: 'text.secondary',
          whiteSpace: 'nowrap',
          marginBottom: theme.spacing(1),
          position: 'relative',
          '&:hover div': {
            opacity: 1,
          },
        }}>
        <Typography
          variant="subtitle1"
          sx={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}>
          {track.name}
        </Typography>
        <img
          src={track.album.images[0].url}
          style={{
            width: '100%',
          }}
        />
        <Avatar
          sx={{
            backgroundColor: 'success.main',
            position: 'absolute',
            bottom: theme.spacing(2),
            right: theme.spacing(2),
            cursor: 'pointer',
            opacity: 0,
            transition: 'opacity 0.5s',
            boxShadow: shadows[1],
          }}>
          <PlayArrow
            sx={{ color: 'rgb(33, 33, 33)', fontSize: theme.spacing(4) }}
            onClick={playAudio}
          />
        </Avatar>
      </Paper>
    </ThemeProvider>
  );
};

Track.propTypes = {
  track: trackShape,
};
export default Track;
