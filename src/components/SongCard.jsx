import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PlayPause from './PlayPause';
import { AiFillPlayCircle } from 'react-icons/ai';

import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, i, data, isPlaying, activeSong }) => {
  const dispatch = useDispatch();
  const handlePauseClick = () => {};

  const handlePlayClick = () => {};

  return (
    <div className=" flex flex-col w-[250px] p-4 bg-white group bg-opacity-5 hover:bg-opacity-20 transition-all ease-out duration-500 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className=" relative w-full h-56">
        <img src={song.images?.coverart} className=" card-sh rounded-lg object-cover" alt="playlist" />
        <div
          className={`absolute ${
            activeSong?.title === song.title ? `flex` : `hidden`
          } group-hover:flex right-3 bottom-5`}
        >
          <div className="group-hover:animate-slideup2 bg-[#000] rounded-full group-hover:duration-75 overflow-hidden">
            <PlayPause
              song={song}
              handlePause={handlePauseClick}
              handPlay={handlePlayClick}
              isPlaying={isPlaying}
              activeSong={activeSong}
            />
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col">
        <p className="text-white text-xl truncate font-bold">
          <Link>{song.title}</Link>
        </p>
        <p className="text-sm truncate text-white">
          <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : `/top-artists`}>{song.subtitle}</Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
