import React from "react";
import { AppContext } from "../Context/AppContext";

const ArmaTuBurro = ()=>{


    const { setHome } = React.useContext(AppContext);

    const changeFooter = React.useEffect(()=>{
        setHome(false);
    },[]);

    return(
        <h2>ArmaTuBurro</h2>
    );
};

export {ArmaTuBurro};