import style from './notFound.module.css'
import error from '../../assets/images/errorAntho2.gif';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

    
    const navigate = useNavigate()

    const loginReturn = async (event) => {
    event.preventDefault();
    try {
  
        localStorage.removeItem("token")
        navigate('/');

    } catch (error) {
      console.log(error);
    }
  };


    return (
        <>
            <div>
                <button className={style.errorButton} onClick={loginReturn}>Login</button>
                <img src={error}  className={style.error404}/>
            </div>
        </>
    )
};

export default NotFound;