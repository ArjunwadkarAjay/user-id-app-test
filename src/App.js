import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api?results=10');
        const data = await response.json();
        setUsers(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>User ID Cards</h1>
      <div className="user-list">
        {users.map(user => (
          <div key={user.login.uuid} className="user-card">
            <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} className="user-image" />
            <div className="user-details">
              <h2>{`${user.name.first} ${user.name.last}`}</h2>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Location:</strong> {`${user.location.city}, ${user.location.country}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;