import React, { useState } from 'react';

export default function exportFile() {
  const [file, setFile] = useState('');
  const [message, setMessage] = useState('Dowloading');

  const handleCSVFile = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/export');
      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setFile(url);
        setMessage('Ready to Download');
      } else {
        console.error("Failed to export File:", response.statusText);
      }
    } catch (error) {
      console.error("Error exporting File:", error);
    }
  }

  return (
    <div className='exportFile-container'>
      <form onSubmit={handleCSVFile}>
        <button type="submit" className="btn btn-danger custom-button">Export CSV File</button>
      </form>

      {file && <button className="btn btn-primary"><a href={file} download="user_profile.csv" >{message}</a></button>}
    </div>
  )
}
