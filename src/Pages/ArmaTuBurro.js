import React from "react";
import { PanelDescription } from "../Containers/PanelDescription";
import { AppContext } from "../Context/AppContext";
import './Styles/ArmaTuBurro.scss';

const ArmaTuBurro = ()=>{

    const data = {
        class:'paso1',
        isVisible: true,
        position:'izq',
        number: 1,
        src:'/'

    }

    const { state, setHome, setStateButtons } = React.useContext(AppContext);

    const changeFooter = React.useEffect(()=>{
        setHome(false);
    },[]);

    const setStateButtons2 = (id, value) => ()=>{
        setStateButtons(id,value);
    }

    return(
        <div className="armatuburro__container">
            <PanelDescription data={data} isVisible={false}>
                <h3>Other content</h3>
            </PanelDescription>
        </div>
    );
};

export {ArmaTuBurro};