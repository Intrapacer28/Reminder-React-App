// Login.js
import React, { useState } from 'react';
import './login.css';

const Login = ({ onLogin }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Check predefined credentials (replace with your actual credentials)
    if (userId === 'yourUserID' && password === 'yourPassword') {
      setError('');
      onLogin(); // Invoke callback to inform parent component about successful login
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2 style={{ textAlign: 'center' }}>Login</h2>
      <div className="label-input">
        <label>User ID:</label>
        <input type="text" className="input-field" value={userId} onChange={(e) => setUserId(e.target.value)} />
      </div>
      <div className="label-input">
        <label>Password:</label>
        <input type="password" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button className="login-btn" onClick={handleLogin}>
        Login
      </button>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
    </div>
  );
};

export default Login;
