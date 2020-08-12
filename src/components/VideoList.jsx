import React from 'react';

import './VideoList.scss';

const renderVideo = (onClick) => (video) => (
  <div className="item" key={ video.id.videoId }>
    <img className="ui image"
         src={ video.snippet.thumbnails.default.url }
         alt={ video.snippet.description }
         onClick={ () => onClick(video) }
    />
    <div className="text">
      <div className="content">
        <div onClick={ () => onClick(video) } className="header">{video.snippet.title}</div>
        <div className="description">{ video.snippet.description }</div>
      </div>
    </div>
  </div>
);

export const VideoList = ({ videos, onSelectVideo }) => (
  <div className="video-list">
    <div className="ui relaxed divided list">
      { videos.map(renderVideo(onSelectVideo)) }
    </div>
  </div>
);
