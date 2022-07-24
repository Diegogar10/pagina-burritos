import React from "react";
import { AppContext } from "../Context/AppContext";


const NotFound = ()=>{

    const { setHome } = React.useContext(AppContext);

    const changeFooter = React.useEffect(()=>{
        setHome(false);
    },[]);

    return(
        <h2>NotFound</h2>
    );
};

export {NotFound};