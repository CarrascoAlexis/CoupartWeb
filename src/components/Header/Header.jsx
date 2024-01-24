
import '../../index.css';
import './Header.css';

function Header()
{

    return(
    <header>
        <nav className='d-flex'>
            <ul>
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
                <li>Connexion</li>
            </ul>
        </nav>
    </header>)
}

export default Header;