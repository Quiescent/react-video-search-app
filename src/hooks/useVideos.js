import { useState, useEffect } from 'react';
import { search } from '../apis/youtube';

export const useVideos = (initialSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    searchVideos(initialSearchTerm);
  }, [initialSearchTerm]);

  const searchVideos = async (term) => {
    const results = await search(term);
    setVideos(results.data.items);
  };

  return [videos, searchVideos];
};
