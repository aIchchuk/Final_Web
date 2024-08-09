import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Gif.css"

function GifSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [gifs, setGifs] = useState([]);
  const API_KEY = 'k3iuKaMTDxU5iI1U2GNU6cvxZC5dpzdG'; // Replace with your Giphy API key

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchQuery}&limit=100`);
    setGifs(response.data.data);
  };

  const getRandomSize = () => {
    const minWidth = 200;
    const maxWidth = 400;
    const minHeight = 150;
    const maxHeight = 300;

    return {
      width: Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth,
      height: Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight,
    };
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className="searchtext" type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <div className="gif-container">
        <div className="gif-grid">
          {gifs.map((gif) => (
            <img
              key={gif.id}
              src={gif.images.downsized_medium.url}
              alt={gif.title}
              style={{ width: getRandomSize().width + 'px', height: getRandomSize().height + 'px' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GifSearch;
