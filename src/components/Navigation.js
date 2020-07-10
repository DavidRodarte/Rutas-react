import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/acerca-de">Acerca de</NavLink>
            <NavLink to="/contacto">Contacto</NavLink>
        </div>
    );
}

export default Navigation;