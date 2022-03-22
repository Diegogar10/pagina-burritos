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

    const homeTrue = ()=> setState({
        ...state,
        isHome: true,
    });

    const homeFalse = ()=> setState({
        ...state,
        isHome: false,
    });

    return({
        state,
        toggleMenuState,
        homeFalse,
        homeTrue
    })
}

export {useInitialState};