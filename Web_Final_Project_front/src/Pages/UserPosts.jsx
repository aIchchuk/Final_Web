import React from 'react';
import './PostGrid.css'; // Import CSS for styling

function UserPosts({ post }) {
    // Destructure the post object to extract properties
    const { imageUrl, title, description } = post;

    return (
        <div className="post-card">
            {/* Display the post image */}
            <img src={imageUrl} alt={title} className="post-image" />
            
            {/* Content section */}
            <div className="post-content">
                {/* Post title */}
                <h2 className="post-title">{title}</h2>
                
                {/* Post description */}
                <p className="post-description">{description}</p>
            </div>
        </div>
    );
}

export default UserPosts;
