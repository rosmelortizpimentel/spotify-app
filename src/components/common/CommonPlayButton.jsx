import { PlayArrow } from '@mui/icons-material';
// import { Avatar } from '@mui/material';
// import { shadows } from '@mui/system';
// import { any } from 'prop-types';
import React from 'react';
import { theme } from '../../themes';

export const CommonPlayButton = () => {
  return <PlayArrow sx={{ color: 'rgb(33, 33, 33)', fontSize: theme.spacing(4) }} />;
};

// CommonPlayButton.propTypes = {
//   playAudio: any,
// };
