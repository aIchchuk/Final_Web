import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Gif.css';

function UploadGifs() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    setUploadStatus('uploading'); // Indicate upload in progress
    try {
      const formData = new FormData();
      formData.append('gif', selectedFile);

      // Replace with your backend API endpoint URL
      const response = await axios.post('/api/upload-gif', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setUploadStatus('success'); // Upload successful
      console.log(response.data); // Handle successful response
    } catch (error) {
      setUploadStatus('failed'); // Upload failed
      console.error('Error uploading GIF:', error);
    }
  };

  return (
    <div>
      <h2>Upload GIF</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!selectedFile}>
        {uploadStatus === 'uploading' ? 'Uploading...' : 'Upload'}
      </button>
      {uploadStatus === 'success' && <p>Upload successful!</p>}
      {uploadStatus === 'failed' && <p>Upload failed. Please try again.</p>}
    </div>
  );
}

export default UploadGifs;
