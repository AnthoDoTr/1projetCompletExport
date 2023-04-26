import style from '../Raid1/raid1.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Modale from '../Modale/modale';

const Raid2 = () => {

    const [loading, setLoading] = useState(true);
    const [raidLoot2, setRaidLoot2] = useState(null);
    const navigate = useNavigate();

    const endOfRaid = () => {
        navigate('/HomePage');
    };


    useEffect( () => {
        const timer = setTimeout(() => setLoading(false), 3100);
        raid()
            
    }, []);

    const raid = async () => {

            try {     

            let token = localStorage.getItem('token');

            const response = await axios.patch("http://localhost:3000/api/users/raid/raid2", {}, { 
                headers: {
                    Authorization: `Bearer ${token}` 
                }
            });
            console.log(response.data);
            setRaidLoot2(response.data);
            } catch (error) {
                console.log(error)
            setRaidLoot2("Une erreur est survenue lors du raid : " + error.message);
        }
        };

        return (
            <>
            <div>

            {loading && <Modale message="Chargement en cours..." />}

            {!loading && (
            <><div className={style.loot}>
                <h1>Raid result</h1>
                {raidLoot2 !== null && (
                        <>
                            <ul>
                                {raidLoot2.randomObjects.map((item, i) => (
                                    <li key={i}>{item.name} : {item.value}</li>
                                ))}
                            </ul>
                            <p className={style.pRaid}>Total value : {raidLoot2.score}</p>
                        </>
                        )}
            </div>
            <button onClick={endOfRaid} className={style.endRaid}>End of Raid</button>
            </>
            )}
    </div>
            </>
        )
    };

export default Raid2;