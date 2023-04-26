import Button from '../../../components/button/raid-button';
import Personnage from '../../../components/perso/perso';
import Classement from '../../../components/Classement/classement';
import style from '../homePage/homePage.module.css'
import LogOut from '../../../components/LogOut/logOut';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Weather from '../../../components/Weather/weather';


const HomePage = () => {

    const navigate = useNavigate()
    useEffect( () => {
        let token = localStorage.getItem('token');

        if (!token) {
            navigate('/')
        }
    }) 
    

    return (            
        <div className={style.bloc}>
            <div>
                <Weather />
                <Personnage />
                <Button />
            </div>
            <div>
                <Classement />
                <LogOut />
            </div>
        </div>

    )
};

export default HomePage;