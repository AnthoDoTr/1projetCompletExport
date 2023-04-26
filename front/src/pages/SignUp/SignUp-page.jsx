import style from '../SignUp/SignUp.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import userPlus from '../../assets/logo/user-add2.png';
import user from '../../assets/logo/user.png';
import lock from '../../assets/logo/lock.png';

const SignUp = () => {

    const navigate = useNavigate()

    const [pseudo, setPseudo] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setPseudo(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSignupSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post('http://localhost:3000/api/users', {
            pseudo,
            password,
          });
          localStorage.setItem('token', response.data.access_token);
          navigate('../');
        } catch (error) {
          console.log(error);
        }
      };


      return (
        <div>
            
      <form onSubmit={handleSignupSubmit}>
        <img src={userPlus} alt='User' className={style.user2}/>
        <h1>Signup</h1>
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
        <button type="submit">Signup</button>
      </form>
        </div>
      )
}

export default SignUp;