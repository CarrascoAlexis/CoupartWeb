
import '../../index.css';
import './Header.css';
import React from "react";
import { 
    BrowserRouter as Router,
  Link
 } from "react-router-dom";

function Header(props)
{
    let connectText = "Connexion";
    const connectLink = connectText=="Connexion"? "/connect" : "/account"
    if(props.account != null && props.account.id != null)
    {
        connectText = "Compte";
    }

    return(
    <header>
            
        <nav className='d-flex'>
            <ul>
                {/* <li><Link to='/test'>Services</Link></li> */}
                <li><Link to="/services">Services</Link></li>
                <dot/>
                <li>A propos</li>
            </ul>
            <div>
                <h1>Sandrine Coupart</h1>
                {/* <p>diététicienne-nutritionniste</p> */}
            </div>
            <ul>
                <li><Link to="/contact">Contact</Link></li>
                <dot/>
                <li><Link to={connectText=="Connexion"? "/connect" : "/account"}>{connectText}</Link></li>
            </ul>
        </nav>
    </header>)
}

export default Header;