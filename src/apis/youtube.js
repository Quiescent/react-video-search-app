import axios from 'axios';

const KEY = '$YOUTUBE_KEY';

const YouTubeClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
});

export const search = (term) => YouTubeClient
  .get(
    '/search',
    {
      params: {
        q: term,
        part: 'snippet',
        order: 'viewCount',
        maxResults: 5,
        type: 'video',
        videoDefinition: 'high',
        key: KEY
      }
    }
  );
