import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Send a logout request to the backend
      await axios.post('http://localhost:8000/logout');

      // Clear any user-related data or tokens from local storage, state, or cookies

      // Redirect to the login page or any desired page
      navigate('/Login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;


