import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaLink, FaShare } from 'react-icons/fa';
import './Gif.css';

function TrendingGifs() {
  const [gifs, setGifs] = useState([]);
  const [error, setError] = useState(null); // Added state for error handling
  const API_KEY = 'k3iuKaMTDxU5iI1U2GNU6cvxZC5dpzdG'; // Replace with your Giphy API key

  useEffect(() => {
    const fetchTrendingGifs = async () => {
      try {
        const response = await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=200`);
        setGifs(response.data.data);
        setError(null); // Clear previous errors
      } catch (error) {
        console.error('Error fetching trending GIFs:', error);
        setError('Failed to load GIFs. Please try again later.'); // Set error message
      }
    };

    fetchTrendingGifs();
  }, []);

  const getRandomSize = () => {
    const minWidth = 200;
    const maxWidth = 250;
    const minHeight = 200;
    const maxHeight = 300;

    return {
      width: Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth,
      height: Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight,
    };
  };

  const copyToClipboard = (url) => {
    navigator.clipboard.writeText(url).then(
      () => {
        alert('GIF URL copied to clipboard!');
      },
      (err) => {
        console.error('Failed to copy GIF URL: ', err);
      }
    );
  };

  return (
    <div className="gif-container">
      <h2>Trending GIFs</h2>
      {error ? (
        <p className="error-message">{error}</p> // Display error message
      ) : (
        <div className="gif-grid">
          {gifs.map((gif) => (
            <div
              key={gif.id}
              className="gif-item"
              style={{ width: getRandomSize().width + 'px', height: getRandomSize().height + 'px' }}
            >
              <img
                src={gif.images.downsized_medium.url}
                alt={gif.title}
                className="gif-image"
              />
              <div className="overlay">
                <button className="share-button">
                  <FaShare />
                </button>
                <button
                  className="copy-button"
                  onClick={() => copyToClipboard(gif.images.downsized_medium.url)}
                >
                  <FaLink />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TrendingGifs;
