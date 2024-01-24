
import '../../index.css';
import './Header.css';
import { Link } from "react-router-dom";

function Header(props)
{
    let connectText = "Connexion";
    if(props.account != null && props.account.id != null)
    {
        connectText = "Compte";
    }

    return(
    <header>
        <nav className='d-flex'>
            <ul>
                {/* <li><Link to='/test'>Services</Link></li> */}
                <li>Services</li>
                <dot/>
                <li>A propos</li>
            </ul>
            <div>
                <h1>Sandrine Coupart</h1>
                {/* <p>diététicienne-nutritionniste</p> */}
            </div>
            <ul>
                <li>Contact</li>
                <dot/>
                <li>{connectText}</li>
            </ul>
        </nav>
    </header>)
}

export default Header;