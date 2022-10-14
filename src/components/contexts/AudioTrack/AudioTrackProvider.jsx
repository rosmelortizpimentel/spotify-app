import { useState } from 'react';

import { AudioTrackContext } from './AudioTrackContext';
import { PropTypes } from 'prop-types';
export const AudioTrackProvider = ({ children }) => {
  const [audioTrack, setAudioTrack] = useState();
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioPlayer, setAudioPlayer] = useState();
  // const { audioPlayer } = useRef();
  const value = {
    audioTrack,
    setAudioTrack,
    audioPlayer,
    setAudioPlayer,
    isAudioPlaying,
    setIsAudioPlaying,
  };
  return <AudioTrackContext.Provider value={value}>{children}</AudioTrackContext.Provider>;
};

AudioTrackProvider.propTypes = {
  children: PropTypes.node,
};
