import Home from "../../pages/Home";
import Nosotros from "../../pages/Nosotros";
import Servicios from "../../pages/Servicios";
import Galeria from "../../pages/Servicios";
import Contacto from "../../pages/Contacto";


const Nav = (props) => {
    return (
        <nav className="barranav">
            <ul className="holder">
                <li>Home</li> <Home />
                <li>Nosotros</li> <Nosotros />
                <li>Servicios</li> <Servicios />
                <li>Galería</li> <Galeria />
                <li>Contacto</li> <Contacto />
            </ul>
        </nav>
    )
}

export default Nav;