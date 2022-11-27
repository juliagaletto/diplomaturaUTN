import React from 'react';
import '../../styles/components/layout/Nav.css';

import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav className="holder">
            <div className="barranav">
                <ul>
                    <li><NavLink activeClassName="activo" exact to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/nosotros">Nosotros</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/servicios">Servicios</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/galeria">Galeria</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/contacto">Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;