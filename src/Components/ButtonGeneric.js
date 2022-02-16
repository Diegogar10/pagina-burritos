import React from "react";
import './ButtonGeneric.css'

const ButtonGeneric = ({nameButton})=> {

    const [estado, setEstado] = React.useState(false);
    const toggleState = ()=> setEstado(!estado);


    return(
        <button 
            className={estado? 'button-neon':'button-light'}
        >
            {nameButton}
        </button>
    );
}

export {ButtonGeneric};