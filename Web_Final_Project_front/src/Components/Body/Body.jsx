import React, { useState } from "react";
import "./Body.css";
import GifSearch from "./GifSearch";
import TrendingGifs from "./TrendingGifs";
import UserPosts from "./UserPosts";

function Body() {
  const [activeTab, setActiveTab] = useState('trending'); 

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="body">
      <div className="lside">
        <h2 className={`head ${activeTab === 'userposts' ? 'active' : ''}`} onClick={() => handleTabClick('userposts')}>
          <button>User Posts</button>
        </h2>
        <h2 className={`head ${activeTab === 'trending' ? 'active' : ''}`} onClick={() => handleTabClick('trending')}>
          <button>Trending Gifs</button>
        </h2>
        <h2 className={`head ${activeTab === 'search' ? 'active' : ''}`} onClick={() => handleTabClick('search')}>
          <button>Search Gifs</button>
        </h2>
      </div>

      <div className="midside" style={{ position: "relative", overflow: 'scroll' }}>
        {activeTab === 'userposts' ? <UserPosts /> :
         activeTab === 'trending' ? <TrendingGifs /> : <GifSearch />}
      </div>
    </div>
  );
}

export default Body;
