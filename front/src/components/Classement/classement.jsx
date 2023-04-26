import style from './classement.module.css'
import { useState, useEffect } from 'react';
import axios from 'axios'

const Classement = () => {

    const [users, setUsers] = useState([]);
    const [showRanking, setShowRanking] = useState(false);

    const classementClick = async () => {
        try {

            if (!showRanking) {
                const response = await axios.get("http://localhost:3000/api/users/score/ranking");
                console.log(response.data);
                setUsers(response.data);
            }
            setShowRanking(!showRanking)
        } catch (error) {
            setUsers("Une erreur est survenue lors du chargement : " + error.message);
        }
        };

        
       


return (
    <div className={style.classement}>
        <button className={style.button} onClick={classementClick}>{showRanking ? "Hide classement" : "Classement"}</button>
                    { showRanking && (
                        <div className={style.users}>
                            {users.map((user) => (
                                <p key={user.id}>{user.pseudo} : {user.score}</p>
                            ))}
                        </div>
                    )}
                    
    </div>
)


};


export default Classement;