import '../App.css';
import {Link} from 'react-router-dom';

function Nav(){
    return(
        <nav>
        <h3>MOOL FIT</h3>
        <ul>
        <li className="active"><a href="/">Home</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/adminlogin">Admin</a></li>
        <li><a href="/myaccount">My Account</a></li>
        </ul>
        </nav>
    );

}


export default Nav;