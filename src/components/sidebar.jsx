import React, { useState } from 'react';
import './styles.css';

const Sidebar = ({ setData, setUploadedFile }) => {
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (event) => {
    setLoading(true); // Set loading to true when the upload starts

    const file = event.target.files[0];
    setUploadedFile(file);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://127.0.0.1:8000/process_file/', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        console.error('Upload failed');
        return;
      }

      const data = await response.json();
      setData(data.result);
      console.log(data.result);
    } catch (error) {
      console.error('Error occurred during upload:', error);
    } finally {
      setLoading(false); // Set loading to false after the upload completes (whether successful or not)
    }
  };

  return (
    <div className='sidebar'>
      <div className="sidebar-container">
        {loading && (
          <div className="overlay">
            <div className="loader"></div>
          </div>
        )}
        <label htmlFor="upload" className="upload">
          <span>Upload Invoice</span>   
          <input type="file" id="upload" name="upload" className="upload" style={{display: "none"}} onChange={handleFileUpload}/> 
        </label>
      </div>
    </div>
  );
}

export default Sidebar;
