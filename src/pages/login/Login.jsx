import React, { useState} from 'react';
import './login.scss';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState('');// username
  const [password, setPassword] = useState(''); //user password
  const [error, setError] = useState(false); // error message

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault(); // prevent default behavior

    signInWithEmailAndPassword(auth, email, password)// sign in with email and password from firebase
      .then((userCredential) => { 
        // Signed in
        const user = userCredential.user;
        navigate('/');
      })
      .catch((error) => {
        setError(true);
        console.error(error);
      });
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <span>Wrong email or password!</span>}
      </form>
    </div>
  );
};

export default Login
