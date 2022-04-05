import React from "react";

const initialState = {
    typeStyle: false,
    menuState: false,
    optImage:'opt1', 
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

    const setOptImage = (value) => setState({
        ...state,
        optImage: value,
    });

    return({
        state,
        toggleMenuState,
        setOptImage,
        setHome
    })
}

export {useInitialState};