import React from "react";
import { AppContext } from "../Context/AppContext";
import { PanelIngredients } from "../Containers/PanelIngredients";
import { PanelLogo } from "../Containers/PanelLogo";
import { TextHome } from "../Containers/TextHome";
import './Styles/Home.scss'

const Home = ()=>{

    const { state, setHome } = React.useContext(AppContext);
    
    const changeFooter = React.useEffect(()=>{
        setHome(true);
    },[]);


    return(
        
        <div className={`Home ${state.optImage}`}>
            <PanelLogo clase="Logo"></PanelLogo>
            <TextHome clase="Texto"></TextHome>
            <PanelIngredients clase="description"></PanelIngredients>
        </div>
        
    );
};

export {Home};