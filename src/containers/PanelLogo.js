import React from "react";
import { Link } from "react-router-dom";

const PanelLogo = ({clase}) => {

    const logo = require('../Images/Home/logo.png');

    return(
        <section className={clase}>
            <Link to='/'>
                <img src={logo} alt="logo"></img>
            </Link>
        </section>
    )
}

export {PanelLogo};