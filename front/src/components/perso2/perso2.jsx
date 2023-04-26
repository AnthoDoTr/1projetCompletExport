import style from '../../components/perso2/perso2.module.css';
import React from 'react';
import walk from '../../assets/soldier/soldier.gif';


const Personnage2 = () => {


    return(
    <>
        <div>
            <img className={style.images} src={walk} alt='import'></img>
        </div>

    </>
    )

};

export default Personnage2;