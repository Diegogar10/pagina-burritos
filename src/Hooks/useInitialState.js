import React from "react";

const initialState = {
    typeStyle: false,
    menuState: false
}

const useInitialState = ()=>{
    const [state, setState] = React.useState(initialState);
    
    const toggleMenuState = ()=> setState({
        ...state,
        menuState: !state.menuState
    });

    return({
        state,
        toggleMenuState,
    })
}

export {useInitialState};