import React from 'react';

import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';

const PlayPause = ({ isPlaying, song, activeSong, handlePause, handlePlay }) =>
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle size={55} className="text-green-600 shadow-md" onClick={handlePause} />
  ) : (
    <FaPlayCircle size={55} className="text-green-600  shadow-md" onClick={handlePlay} />
  );

export default PlayPause;
