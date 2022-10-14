import { Paper, Typography, Avatar } from '@mui/material';
import { PlayArrow, Pause } from '@mui/icons-material';
import shadows from '@mui/material/styles/shadows';
import { trackShape } from '../../proptypes';
import { theme } from '../../themes';
import { useContext } from 'react';
import { AudioTrackContext } from '../contexts/AudioTrack/AudioTrackContext';
import useAudioPlayer from '../../hooks/useAudioPlayer';

const Track = ({ track }) => {
  const paperStyles = {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'text.secondary',
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
    position: 'relative',
    '&:hover div': {
      opacity: 1,
    },
  };

  const avatarStyles = {
    backgroundColor: 'success.main',
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    cursor: 'pointer',
    opacity: 0,
    transition: 'opacity 0.5s',
    boxShadow: shadows[1],
  };

  const songTitleStyles = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  const iconStyles = { color: 'rgb(33, 33, 33)', fontSize: theme.spacing(4) };

  const { audioTrack, setAudioTrack, isAudioPlaying } = useContext(AudioTrackContext);

  const showPauseButton = isAudioPlaying && audioTrack.id === track.id;

  const { play, pause } = useAudioPlayer();
  const playAudio = () => {
    setAudioTrack(track);
    play();
  };

  return (
    <Paper sx={paperStyles}>
      <Typography variant="subtitle1" sx={songTitleStyles}>
        {track.name}
      </Typography>
      <img
        src={track.album.images[0].url}
        style={{
          width: '100%',
        }}
      />
      {!showPauseButton && (
        <Avatar sx={avatarStyles}>
          <PlayArrow sx={iconStyles} onClick={playAudio} />
        </Avatar>
      )}
      {showPauseButton && (
        <Avatar sx={avatarStyles}>
          <Pause sx={iconStyles} onClick={pause} />
        </Avatar>
      )}
    </Paper>
  );
};

Track.propTypes = {
  track: trackShape,
};
export default Track;
