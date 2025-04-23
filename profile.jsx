import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { email, session } = useParams();

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Hello, {email}</h2>
      <p>Your next session is: {session}</p>
    </div>
  );
};

export default Profile;
