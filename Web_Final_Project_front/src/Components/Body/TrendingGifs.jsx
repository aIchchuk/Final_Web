import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Gif.css"

function TrendingGifs() {
    const [gifs, setGifs] = useState([]);
    const API_KEY = 'k3iuKaMTDxU5iI1U2GNU6cvxZC5dpzdG'; // Replace with your Giphy API key

    useEffect(() => {
        const fetchTrendingGifs = async () => {
            try {
                const response = await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=100`);
                setGifs(response.data.data);
            } catch (error) {
                console.error('Error fetching trending GIFs:', error);
            }
        };

        fetchTrendingGifs();
    }, []);

    return (
        <div>
            <h2>Trending GIFs</h2>
            <div className="gif-container">
                {gifs.map((gif) => (
                    <img key={gif.id} src={gif.images.downsized_medium.url} alt={gif.title} />
                ))}
            </div>
        </div>
    );
}

export default TrendingGifs