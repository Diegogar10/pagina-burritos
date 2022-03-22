import React from "react";
import { AppContext } from "../Context/AppContext";

const Home = ()=>{

    const { homeTrue } = React.useContext(AppContext);
    

    return(
        
        <h2>{homeTrue}Home</h2>
        
        
    );
};

export {Home};