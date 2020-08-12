import React, { useState } from 'react';

import './SearchBar.scss';

import { withEventTargetValue } from '../lib/withEventTargetValue';

export const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(searchTerm);
  };

  return (
    <div className="ui segment search-bar">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="ui search">
          <div className="ui icon input">
            <input
              id="video-search-term"
              className="prompt"
              type="text"
              placeholder="Video search term"
              value={ searchTerm }
              onChange={ withEventTargetValue(setSearchTerm) }
            />
            <i className="search icon"></i>
          </div>
        </div>
      </form>
    </div>
  );
};
