import React from "react";
import { AppContext } from "../Context/AppContext";


const Contactenos = ()=>{

    const { setHome } = React.useContext(AppContext);

    const changeFooter = React.useEffect(()=>{
        setHome(false);
    },[]);

    return(
        <h2>Contactenos</h2>
    );
};

export {Contactenos};