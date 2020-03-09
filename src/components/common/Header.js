import React from 'react';
import { NavLink } from "react-router-dom";

function Header () {
    const activeStyle = {color: "#17f135"};

    return (
        <nav>
            <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>
            {" | "}
            <NavLink to="/campaigns" activeStyle={activeStyle} exact>Campaigns</NavLink>
        </nav>
    )
}

export default Header;