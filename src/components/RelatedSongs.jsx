import SongBar from './SongBar';

const RelatedSongs = ({ data, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white">Related Songs:</h1>
    <div className="w-full flex flex-col mt-6">
      {data?.map((song, i) => (
        <SongBar
          key={`${song.id}.${artistId}`}
          song={song}
          i={i}
          activeSong={activeSong}
          artistId={artistId}
          isPlaying={isPlaying}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
      ))}
    </div>
  </div>
);

export default RelatedSongs;
