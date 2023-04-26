import style from '../LogOut/logOut.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const LogOut = () => {

    const navigate = useNavigate()

    const logOut = async (event) => {
    event.preventDefault();
    try {
  
        localStorage.removeItem("token")
        navigate('/');

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
        <button onClick={logOut} className={style.logOut}>Log Out</button>
    </div>
  )



};

export default LogOut;