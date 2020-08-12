import React, { useEffect, useState } from 'react';

import { useVideos } from '../hooks/useVideos';

import { SearchBar } from './SearchBar';
import { VideoList } from './VideoList';
import { VideoPlayer } from './VideoPlayer';

export const App = () => {
  const [videos, onSearchBarSubmit] = useVideos('forests');
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onSubmit={ onSearchBarSubmit } />
      <div className="ui segment">
        <VideoPlayer video={selectedVideo} />
        <VideoList videos={videos} onSelectVideo={ setSelectedVideo } />
      </div>
    </div>
  );
};
