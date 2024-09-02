import '../css/Login.css'
import  { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='login-container'>
      <h2 className='title'>Login</h2>
      <p className='subtitle'>Please login using account detail below.</p>
      <form onSubmit={handleSubmit} className='form'>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='input'
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
           className='input'
          required
        />
        <button type="submit" className='button'>Sign In</button>
      </form>
      <div className='footer'>
        <a href="#" className='link'>Forgot your password?</a>
        <a href="#" className='link'>Create account</a>
      </div>
    </div>
  );
};
export default Login;
