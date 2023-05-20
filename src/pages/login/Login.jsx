import React, {useState} from 'react';
import '../register/register.css';
import { Link, useNavigate } from 'react-router-dom';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';


const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      setErr(true)
    }
  };

  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Olumide Chat</span>
            <span className="title">Login</span>
            <form onClick={handleSubmit}>
                <input placeholder='email' type="email" onChange={(e) => setEmail(e.target.value)}/>
                <input placeholder='password' type="password" onChange={(e) => setPassword(e.target.value)}/>
                <button>Sign in</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p>You don't have an account? <Link to='/register'>Register</Link></p>
        </div>
    </div>
  )
}

export default Login