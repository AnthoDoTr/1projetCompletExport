import style from './perso.module.css';
import { useSpring, animated } from 'react-spring';
import React from 'react';
import run from '../../assets/images/run.gif';
import idle from '../../assets/images/idle.gif'

const Personnage = () => {


    return(
    <>
        <div>
            <img className={style.images} src={run} alt='import'></img>
        </div>

    </>
    )

};

export default Personnage;