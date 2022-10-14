import { useContext, useState } from 'react';
import { AudioTrackContext } from '../components/contexts/AudioTrack/AudioTrackContext';

const useAudioPlayer = () => {
  const { audioPlayer, setIsAudioPlaying } = useContext(AudioTrackContext);
  const [currentTime, setCurrentTime] = useState(0);
  const [seekValue, setSeekValue] = useState(0);

  const play = () => {
    audioPlayer?.current?.play();
    setIsAudioPlaying(true);
  };

  const pause = () => {
    audioPlayer?.current?.pause();
    setIsAudioPlaying(false);
  };

  const onPlaying = () => {
    setCurrentTime(audioPlayer.current.currentTime);
    setSeekValue((audioPlayer.current.currentTime / audioPlayer.current.duration) * 100);
  };

  const onTimelineChange = (e, newValue) => {
    const newCurrentTime = audioPlayer.current.duration * (newValue / 100);
    audioPlayer.current.currentTime = newCurrentTime;
    setSeekValue(newValue);
  };

  return {
    play,
    pause,
    onPlaying,
    onTimelineChange,
    currentTime,
    setCurrentTime,
    seekValue,
    setSeekValue,
  };
};

export default useAudioPlayer;
