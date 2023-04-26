import style from './button.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Button = () =>  {



        const [raidStatus, setRaidStatus] = useState(null);
        const [userStatus, setUserStatus] = useState(null);
        const navigate = useNavigate();

        const handleRaidClick = async () => {
        try {
        const response = await axios.get("http://localhost:3000/api/users");
        console.log(JSON.stringify(response.data[0]));
        setRaidStatus(response.data);
        } catch (error) {
        setRaidStatus("Une erreur est survenue lors du raid : " + error.message);
        }
        };


        useEffect( () => {
            
            showUser();
                
        }, []);

        const showLoot = () => {
            console.log(raidLoot)
        }


        const handleRaidClickRaid = async () => {
           

                try {
            
                    navigate('/Raid1');

                } catch (error) {
                console.log(error);
                }
  
        }


        const handleRaidClickRaid2 = async () => {


                try {
            
                    navigate('/Raid2');

                } catch (error) {
                console.log(error);
                }

        };


        const handleRaidClickRaid3 = async () => {

            try {
            
                navigate('/Raid3');

            } catch (error) {
            console.log(error);
            }

        };


        const handleRaidClickRaid4 = async () => {
            try {
            
                navigate('/Raid4');

            } catch (error) {
            console.log(error);
            }
        
    
        };


        const showUser = async () => {
            try {

                const token = localStorage.getItem('token')
                const response = await axios.get("http://localhost:3000/api/users/pseudo", { 
                    headers: {
                        Authorization: `Bearer ${token}` 
                    }
                });
            console.log(response.data);
            setUserStatus(response.data);
            } catch (error) {
            setUserStatus("Une erreur est survenue lors du raid : " + error.message);
            }
            };



        return  (
        <div className={style.divbutton}>
            <div className={style.userDetails}>
                <p className={style.p1}>
                   {userStatus?.pseudo}
                </p>
                <p className={style.p2}>
                    {userStatus?.score}
                </p>
            </div>
            <div className={style.ligne1}>
                <div className={style.over}>
                    
                    <button className={style.button} onClick={handleRaidClickRaid}>Raid 1</button>
                        
                    <div className={style.texte}>
                        <h2>Raid 1 :</h2>
                        <p>
                            This raid is free, you can drop :
                        </p>
                        <p>
                            1 to 3 items worth up to 70 points each
                        </p>
                    </div>
                </div>
                <div className={style.over}>
                    <button className={style.button} onClick={handleRaidClickRaid4}>Raid 4</button>

                    <div className={style.texte}>
                        <h2>Raid 4 :</h2>
                        <p>
                            This raid costs 1500 points to enter, you can drop :
                        </p>
                        <p>
                            3 to 9 items worth up to 1500 points each
                        </p>
                    </div>
                </div>
            </div>

            <div className={style.ligne2}>
            <div className={style.over}>
                    <button className={style.button} onClick={handleRaidClickRaid2}>Raid 2</button>
                        
                    <div className={style.texte}>
                        <div>
                            <h2>Raid 2 :</h2>
                            <p>
                                This raid costs 50 points to enter, you can drop :
                            </p>
                            <p>
                                1 to 4 items worth up to 150 points each
                            </p>
                        </div>
                    </div>
                </div>
                <div className={style.over}>
                    <button className={style.button} onClick={handleRaidClickRaid3}>Raid 3</button>

                    <div className={style.texte}>
                        <h2>Raid 3 :</h2>
                        <p>
                            This raid costs 900 points to enter, you can drop :   
                        </p>
                        <p>
                            2 to 6 items worth up to 700 points each
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
    
};

export default Button;