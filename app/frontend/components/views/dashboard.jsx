import React, { useState } from 'react';

export default function Friend() {
  const [data, setData] = useState(null);

  const handleFetchData = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/friend');
      if (response.ok) {
        const responseData = await response.json(); // or response.json() if returning JSON data
        setData(responseData);
      } else {
        console.error("Failed to fetch data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    
  };

  return (
    <div>
      <form onSubmit={handleFetchData}>
        <button type="submit" className="btn btn-primary">Friend</button>
      </form>

      {data && data.map((friend, index) => (
        <div key={index}>
          <h3>{friend.first_name} {friend.last_name}</h3>
          <p>Email: {friend.email}</p>
          <p>Residence: {friend.residence}</p>
        </div>
      ))}
    </div>
  );
}
