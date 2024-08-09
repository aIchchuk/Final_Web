import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Gif.css';

function TrendingGifs() {
  const [gifs, setGifs] = useState([]);
  const API_KEY = 'k3iuKaMTDxU5iI1U2GNU6cvxZC5dpzdG'; // Replace with your Giphy API key

  useEffect(() => {
    const fetchTrendingGifs = async () => {
      try {
        const response = await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=50`);
        setGifs(response.data.data);
      } catch (error) {
        console.error('Error fetching trending GIFs:', error);
      }
    };

    fetchTrendingGifs();
  }, []);

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
    <div className="gif-container">
      <h2>Trending GIFs</h2>
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
  );
}

export default TrendingGifs;
