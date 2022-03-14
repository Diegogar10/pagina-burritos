import React from "react";
import { AnchorGeneric } from '../Components/AnchorGeneric';
import { Asaid } from "../Containers/Asaid";
import { Footer } from "../Containers/Footer";
import { Menu } from "../Containers/Menu";
import { useGetLinks } from '../Hooks/useGetLink';


const Plantilla = ({children}) =>{

    const {menu, redes} =  useGetLinks();

    return(
        <main className='main__container'>
            <Menu>
                {menu.map((item)=>(
                    <AnchorGeneric nombre={item.title} url={item.url}/>
                ))}
            </Menu>
            {children}
            <Asaid info={redes}/>
            <Footer/>
        </main>
    );
};

export {Plantilla};