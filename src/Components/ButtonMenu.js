import React from "react";
import './ButtonMenu.css'

const ButtonMenu = ()=> {
    const [menuState, setMenuState] = React.useState(false);
    const toggleMenuState = ()=> setMenuState(!menuState);
    
    return(
        menuState? <button className="menu-visible"
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