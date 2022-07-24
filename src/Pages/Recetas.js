import React from "react";
import { AppContext } from "../Context/AppContext";

const Recetas = ()=>{

    const { setHome } = React.useContext(AppContext);

    const changeFooter = React.useEffect(()=>{
        setHome(false);
    },[]);

    return(
        <h2>Recetas</h2>
    );
};

export {Recetas};