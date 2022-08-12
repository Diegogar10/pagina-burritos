import React from "react";
import { PanelDescription } from "../Containers/PanelDescription";
import { AppContext } from "../Context/AppContext";
import { useGetLinks } from "../Hooks/useGetLink";
import './Styles/ArmaTuBurro.scss';

const ArmaTuBurro = ()=>{

    const { armaTuBurro } = useGetLinks(); 
    const { state, setHome} = React.useContext(AppContext);

    const changeFooter = React.useEffect(()=>{
        setHome(false);
    },[]);

    const arrayState1 = Object.entries(state.stateButtons);
    let arrayState2 = [];
    arrayState2.push(['buton1',true]);

    for(let i = 1 ; i< arrayState1.length ; i++) {
        arrayState2.push([arrayState1[i][0],arrayState1[i-1][1]]);
    }
    
    return(
        <div className="armatuburro__container">
            {
                
                armaTuBurro.map(item => {
                        
                const isVisibleButton = arrayState1.find(element =>element[0]===item.name);
                const isVisiblePanel = arrayState2.find(element => element[0]===item.name);
                
                return(
                    <PanelDescription data={item} isPanelVisible={isVisiblePanel[1]} isButtonVisible={isVisibleButton[1]}>
    
                    </PanelDescription>
                )
            } 
            )}
        </div>
    );
};

export {ArmaTuBurro};