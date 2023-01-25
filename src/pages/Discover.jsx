import React from 'react';

import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';

import { useGetSongByGenreQuery, useGetTopChartsQuery } from '../redux/services/shazamCore';
import { useDispatch, useSelector } from 'react-redux';
import { selectGenreListId } from '../redux/features/playerSlice';

const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying, genreListId } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongByGenreQuery(genreListId || 'POP');

  if (isFetching) return <Loader title="Loading songs ..." />;

  if (error) return <Error />;

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

  return (
    <div className="flex flex-col">
      <div className=" w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="text-white text-3xl font-bold text-left">Discover {genreTitle}</h2>
        <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || 'pop'}
          className=" bg-[#121212] outline-none text-gray-300 p-3 text-sm rounded-lg sm:mt-0 mt-5"
        >
          {genres.map((i) => (
            <option key={i.value} value={i.value}>
              {i.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            genreListId
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
