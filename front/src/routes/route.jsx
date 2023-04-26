import App from "../App";
import Login from "../pages/LoginSignUp/LoginSignUp-page";
import HomePage from "../pages/Raid/homePage/homePage";
import { element } from 'prop-types';
import SignUp from "../pages/SignUp/SignUp-page";
import Raid1 from "../pages/Raid1/raid1-page";
import Raid2 from "../pages/Raid2/raid2-page";
import Raid3 from "../pages/Raid3/raid3-page";
import Raid4 from "../pages/Raid4/raid4-page";

const route = [
    {
        path: '',
        element: <Login />,
    },
    { 
        path: 'HomePage',
        element: <HomePage />
    },
    {
        path: 'SignUp',
        element: <SignUp />
    },
    {
        path: 'Raid1',
        element: <Raid1 />
    },
    {
        path: 'Raid2',
        element: <Raid2 />
    },
    {
        path: 'Raid3',
        element: <Raid3 />
    },
    {
        path: 'Raid4',
        element: <Raid4 />
    }
];

export default route;