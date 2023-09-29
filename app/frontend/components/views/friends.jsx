import React, {useState} from 'react';

export default function Friends () {
  const [data, setData] = useState(null);

  const handleFetchData = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/friend');
      if (response.ok) {
        const responseData = await response.json();
        setData(responseData);
      } else {
        console.error("Failed to fetch data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }

  };

  return (
    <div className='friends-container'>
      <form onSubmit={handleFetchData}>
        <button type="submit" className="btn btn-primary"> Find Friend</button>
      </form>

      {data && data.map((friend, index) => (
        <div key={index} className='content-container'>
          <h3>{friend.first_name} {friend.last_name}</h3>
          <p>Email: {friend.email}</p>
          <p>Residence: {friend.residence}</p>
        </div>
      ))}
    </div>
  )
}
