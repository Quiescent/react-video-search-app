import React from 'react';

import './VideoPlayer.scss';

export const VideoPlayer = ({ video }) => (
  <div className='video-player'>
    {video ?
     (
       <div>
         <iframe
           title="Youtube Video Player"
           id="player"
           type="text/html"
           height="390"
           width="100%"
           src={ `https://www.youtube.com/embed/${video.id.videoId}` }
           frameborder="0">
         </iframe>
         <h4>{ video.snippet.title }</h4>
         <div className="description">{ video.snippet.description }</div>
       </div>
     )
     : <div/>
    }
  </div>
);
