import React from "react";

const initialState = {
    typeStyle: false,
    menuState: false,
    optImage:'opt1', 
    isHome:true,
    stateButtons:{
        buton1: false,
        buton2: false,
        buton3: false,
        buton4: false,
        buton5: false
    }
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

    const setStateButtons = (id, value) => {

        const arrayStateButtons = Object.entries(state.stateButtons);
        const newArrayStateButtons = arrayStateButtons.map(item => {
           if( item[0]===id ) item[1]=value;
           return item;
        });
        const newStateButtons = Object.fromEntries(newArrayStateButtons);

        setState({
            ...state,
            stateButtons: newStateButtons,
        });
    }

    return({
        state,
        setStateButtons,
        toggleMenuState,
        setOptImage,
        setHome
    })
}

export {useInitialState};