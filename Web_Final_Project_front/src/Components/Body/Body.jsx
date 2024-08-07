import React from "react";
import "./Body.css"
import GifSearch from "./GifSearch";
import TrendingGifs from "./TrendingGifs";

function Body(){
  return(
    <div className="body">

      <div className = "lside">
        <h2><a href = "#">User Posts</a></h2>
        <h2><a href = "#">Trending Gifs</a></h2>
      </div>

      <div className = "midside"  style = {{position: "relative", overflow: 'scroll' }}>
        <h2>Recommended Channels</h2>
        <h2>Your Channels</h2>
        <TrendingGifs></TrendingGifs>
      </div>

      <div className = "rside">
        <h2>Recommended Channels</h2>
        <h2>Your Channels</h2>
        <GifSearch></GifSearch>
      </div>

    </div>
  );
}

export default Body;
