import React from "react";

function* iterator(array) {
        for(let value of array){
            yield value;
        }
    }

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
    },
    statePanels:{
        panel1: true,
        panel2: false,
        panel3: false,
        panel4: false,
        panel5: false
    },
    modelCart:{
        protein:0,
        proteinAdd:[],
        bases:[],
        additions:0,
        additionsAdd:[],
        gravy:[]
    },
    functionIterator: iterator(['buton1', 'buton2', 'buton3', 'buton4', 'buton5'])
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



    const arrayButtons = Object.entries(state.stateButtons);

    const generateArrayButtons = () => {

        let idButtonNow = state.functionIterator.next().value;

        const arrayButtonsResult = arrayButtons.map((item)=>{
            if(idButtonNow === item[0]){
                return [item[0], true];
            }else {
                return [item[0], item[1]];
            }
        });

        const newStateButtons = Object.fromEntries(arrayButtonsResult);
        
        return newStateButtons;
    }

    const setOption_statePanel = ({
                    protein: proteinNum,
                    additions: additionNum
                }) => {

                    const newStateButtons = generateArrayButtons();

                    setState({
                        ...state,
                        stateButtons: newStateButtons,
                        modelCart: {
                            ...state.modelCart,
                            protein:proteinNum,
                            additions: additionNum                            
                        }
                    })
    }

    const setProtein_statePanel = ({
            protein,
    }) => 
    {
        const proteinNumber = state.modelCart.protein;
        const proteinArray = state.modelCart.proteinAdd;
        if(proteinArray.length ===  proteinNumber - 1){
            const newArray = [...state.modelCart.proteinAdd, protein];
            const newStateButtons = generateArrayButtons();
            setState({
                ...state,
                stateButtons: newStateButtons,
                modelCart:{
                    ...state.modelCart,
                    proteinAdd:newArray,
                }
            });                
        }else if( proteinArray.length <  proteinNumber - 1){
            const newArray = [...state.modelCart.proteinAdd, protein];
            setState({
                ...state,
                modelCart:{
                    ...state.modelCart,
                    proteinAdd:newArray,
                }
            });
        }
    } 
        

    return({
        state,
        setOption_statePanel, 
        setProtein_statePanel,
        toggleMenuState,
        setOptImage,
        setHome
    })
}

export {useInitialState};