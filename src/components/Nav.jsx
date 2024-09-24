import { Link } from 'react-router-dom'
import { NavStyle } from "../css/NavStyle"
import {FaBars, FaTimes} from 'react-icons/fa'

const Nav = () => {
    return (
        <NavStyle>
            <nav>
                <input type="checkbox" id="check" />
                <label for="check" className="checkbtn">
                    <i><FaBars/></i>
                </label>
                <label className="logo">ElecCars</label>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/produtos">Produtos</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </NavStyle>
    )
}

export default Nav