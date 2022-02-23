import React from "react";
import { AppContext } from "../Context/AppContext";
import './ButtonMenu.css'

const ButtonMenu = ()=> {
    const {state, toggleMenuState} = React.useContext(AppContext);
    
    
    return(
        state.menuState? <button className="menu-visible"
                                onClick={toggleMenuState}>
                            <div></div>
                            <div></div>
                        </button> 
                        :<button className="menu-invisible"
                                onClick={toggleMenuState}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </button>
        
    );
}

export {ButtonMenu};