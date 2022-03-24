import React from "react";

const PanelLogo = ({clase}) => {

    const logo = require('../Images/Home/logo.png');

    return(
        <section className={clase}>
            <img src={logo} alt="logo"></img>
        </section>
    )
}

export {PanelLogo};