import React from "react";
import { AppContext } from "../Context/AppContext";
import './ButtonMenu.css'

const ButtonMenu = ()=> {
    const {state, toggleMenuState} = React.useContext(AppContext);
    
    
    const handleClick = () => {
        toggleMenuState();
    }

    return(
        state.menuState? <button className="menu-visible"
                                onClick={handleClick}>
                            <div></div>
                            <div></div>
                        </button> 
                        :<button className="menu-invisible"
                                onClick={handleClick}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </button>
        
    );
}

export {ButtonMenu};