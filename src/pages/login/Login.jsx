import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'seller' && password === 'seller1234') {
      // Token o‘rniga localStorage orqali oddiy "authenticated" flag
      localStorage.setItem('isSellerAuthenticated', 'true');
      navigate('/dashboard');
    } else {
      setError('Login yoki parol noto‘g‘ri');
    }
  };

  return (
    <div className='login-container'>
      <form className='login-form' onSubmit={handleLogin}>
        <h2>Seller Login</h2>
        {error && <p className='error-msg'>{error}</p>}

        <input
          type='text'
          placeholder='Login'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type='password'
          placeholder='Parol'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type='submit'>Kirish</button>
      </form>
    </div>
  );
};

export default Login;
