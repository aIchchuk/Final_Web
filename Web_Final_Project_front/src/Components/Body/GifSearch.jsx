import React, { useState, useEffect } from 'react';
import axios from 'axios';


function GifSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [gifs, setGifs] = useState([]);
  const API_KEY = 'k3iuKaMTDxU5iI1U2GNU6cvxZC5dpzdG'; // Replace with your Giphy API key

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchQuery}&limit=10`);
    setGifs(response.data.data);

  };

  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <div className="gif-container">
        {gifs.map((gif) => (
          <img key={gif.id} src={gif.images.downsized_medium.url} alt={gif.title} />
        ))}
      </div>
    </div>
  );
}

export default GifSearch;
