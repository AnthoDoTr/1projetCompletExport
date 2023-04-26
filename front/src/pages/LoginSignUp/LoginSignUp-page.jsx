import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import style from './LoginSignUp.module.css';
import user from '../../assets/logo/user.png';
import lock from '../../assets/logo/lock.png';
import user3 from '../../assets/logo/user3.png';


function Login() {

  const navigate = useNavigate()


  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event) => {
    setPseudo(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        pseudo,
        password,
      });
      localStorage.setItem('token', response.data.access_token);
      navigate('HomePage');
    } catch (error) {
      console.log(error);
      setErrorMessage('Invalid credentials. Try Again.');
    }
  };


  const goToSignUp = async (event) => {
    event.preventDefault();

    try {
      navigate('SignUp')
    } catch (error) {
      console.log(error)
    }
  }




  return (
    <div>
      
      <form onSubmit={handleLoginSubmit}>
        <img src={user3} alt='User' className={style.user2}/>
        <h1>Login</h1>
        {errorMessage && <p className={style.error}>{errorMessage}</p>}
        <div className={style.input1}>
          <img src={user} alt='user' />
          <input
          type="text"
          placeholder="Username"
          value={pseudo}
          onChange={handleUsernameChange}
        />
        </div>
        <div className={style.input1}>
        <img src={lock} alt='lock' />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        </div>
        <button type="submit">Login</button>
        <button onClick={goToSignUp}>Sign Up</button>
      </form>

     
    </div>
  );
}

export default Login;