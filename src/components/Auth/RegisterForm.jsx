import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/slices/authSlice';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Fetch users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the user already exists
    const userExists = users.some((user) => user.username === username);

    if (userExists) {
      setError('User already exists. Please login or choose a different username.');
    } else {
      // Save the new user to localStorage
      users.push({ username, password });
      dispatch(login({ username }));
      localStorage.setItem('loggedInUser', username);
      localStorage.setItem('users', JSON.stringify(users));

      // Redirect to login page
      navigate('/tasks');
    }
  };

  return (
    <form onSubmit={handleRegister}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label>Username:</label>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
