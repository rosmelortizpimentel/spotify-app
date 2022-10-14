import { Avatar, Grid, Slider, ThemeProvider, Typography } from '@mui/material';
import { PlayArrow, Pause } from '@mui/icons-material';
import { theme } from '../../themes';
import { shadows } from '@mui/system';
import { useContext, useEffect } from 'react';
import { AudioTrackContext } from '../contexts/AudioTrack/AudioTrackContext';
import useAudioPlayer from '../../hooks/useAudioPlayer';

export const AudioPlayer = () => {
  const avatarStyles = {
    backgroudColor: 'common.white',
    cursor: 'pointer',
    boxShadow: shadows[1],
  };
  const iconStyles = {
    color: 'black',
    fontSize: theme.spacing(4),
  };

  const { audioTrack, audioPlayer, isAudioPlaying, setIsAudioPlaying, setAudioPlayer } =
    useContext(AudioTrackContext);

  const { play, pause, sliderValue, onTimelineChange, currentTime, onPlaying } = useAudioPlayer();

  useEffect(() => {
    if (audioTrack) {
      setAudioPlayer(audioTrack);
      setIsAudioPlaying(true);
    }
  }, [audioTrack]);

  if (!audioTrack) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        sx={{ backgroundColor: 'success.main', position: 'fixed', top: 0, padding: 2, zIndex: 1 }}>
        <Grid item xs={4} container wrap="nowrap" alignItems={'center'}>
          <img
            src={audioTrack ? audioTrack.album.images[0].url : ''}
            style={{
              width: '100%',
              maxWidth: theme.spacing(8),
              marginRight: theme.spacing(2),
            }}
          />
          <Typography variant="subtitle1">{audioTrack ? audioTrack.name : ''}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Grid container justifyContent="center" alignItems="center">
            {!isAudioPlaying && (
              <Avatar sx={avatarStyles}>
                <PlayArrow sx={iconStyles} onClick={play} />
              </Avatar>
            )}
            {isAudioPlaying && (
              <Avatar sx={avatarStyles}>
                <Pause sx={iconStyles} onClick={pause} />
              </Avatar>
            )}
          </Grid>
          <audio src={audioTrack.preview_url} ref={audioPlayer} onTimeUpdate={onPlaying} autoPlay>
            Your browser does not suppport the <code>video</code> element
          </audio>
          <Grid container wrap="nowrap">
            <Typography variant="subtitle1" align="center" sx={{ marginRight: theme.spacing(2) }}>
              {currentTime.toFixed(2)}
            </Typography>
            <Slider
              defaultValue={0}
              min={0}
              max={100}
              value={sliderValue}
              onChange={onTimelineChange}></Slider>
          </Grid>
        </Grid>
        <Grid></Grid>
      </Grid>
    </ThemeProvider>
  );
};
