import React from "react";
import { AppContext } from "../Context/AppContext";

const Nosotros = ()=>{

    const { state, homeTrue } = React.useContext(AppContext);

    return(
        <h2 onChange={homeTrue}>Nosotros{console.log(state.isHome)}</h2>
    );
};

export {Nosotros};