import React from "react";

const initialState = {
    typeStyle: false,
    menuState: false, 
    isHome:true
}

const useInitialState = ()=>{
    const [state, setState] = React.useState(initialState);
    
    const toggleMenuState = ()=> setState({
        ...state,
        menuState: !state.menuState
    });

    const setHome = (value)=> setState({
        ...state,
        isHome: value,
    });

    return({
        state,
        toggleMenuState,
        setHome
    })
}

export {useInitialState};