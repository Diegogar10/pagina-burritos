import React from "react";
import { AnchorGeneric } from '../Components/AnchorGeneric';
import { Asaid } from "../Containers/Asaid";
import { Footer } from "../Containers/Footer";
import { Menu } from "../Containers/Menu";
import { useGetLinks } from '../Hooks/useGetLink';
import { AppContext } from "../Context/AppContext";
import './Plantilla.css';


const Plantilla = ({children}) =>{

    const {menu, redes, whatsapp} =  useGetLinks();
    const { state } = React.useContext(AppContext);
    const { isHome } = state;

    return(
        <div className='main__container'>
            <Menu>
                {menu.map((item)=>(
                    <AnchorGeneric nombre={item.title} url={item.url}/>
                ))}
            </Menu>
            <main className="main__content">
                {children}
            </main>
            <Asaid info={redes} what={whatsapp}/>
            {!isHome && <Footer/>}
        </div>
    );
};

export {Plantilla};