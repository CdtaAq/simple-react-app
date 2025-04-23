import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    const email = "johndoe@example.com";
    const session = "session123";
    navigate(`/profile/${email}/${session}`);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Home Page</h1>
      <button onClick={handleClick}>Go to Profile</button>
    </div>
  );
};

export default Home;
