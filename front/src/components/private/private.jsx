import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Dashboard() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const response = await axios.get('/api/users/:userPseudo');
          setUser(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchUserData();
    }, []);
  
    const handleLogout = () => {
      localStorage.removeItem('token');
      navigate('/auth/login');
    };
  
    if (!user) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h1>Dashboard</h1>
        <p>Welcome, {user.username}!</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }
  
  export default Dashboard;

  
  
  
  