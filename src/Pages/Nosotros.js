import React from "react";
import { AppContext } from "../Context/AppContext";
import { PanelLogo } from "../Containers/PanelLogo";
import { useGetLinks } from "../Hooks/useGetLink";
import { ContenidoEscalonado } from "../Containers/ContenidoEscalonado";
import './Styles/Nosotros.scss';

const Nosotros = ()=>{

    const { nosotros } = useGetLinks();
    const { setHome } = React.useContext(AppContext);

    const changeFooter = React.useEffect(()=>{
        setHome(false);
    },[]);

    return(
        <div className="nosotros__container">
            <PanelLogo clase="Logo"></PanelLogo>
            <div className="nosotros__info">
                {nosotros.map((item) => (
                    <ContenidoEscalonado info={item}></ContenidoEscalonado> 
                ))} 
            </div>
        </div>

    );
};

export {Nosotros};