import React from "react";
import { useGetLinks } from "../Hooks/useGetLink";
import { AppContext } from "../Context/AppContext";
import { AnchorGeneric } from "../Components/AnchorGeneric";
import { Menu } from "./Menu";

const TextHome = ({clase}) => {
   
    let optCount = 0;
    const { images } = useGetLinks();
    const { state, setOptImage } = React.useContext(AppContext);
    
    const setImage = value => () =>{
        setOptImage(value);
    };

    const getFunction = (item) => {
        if(state.optImage === item.title){
            return <div className={`${item.class} select`} onClick={setImage(item.title)}></div>
        }else{
           return <div className={item.class} onClick={setImage(item.title)}></div>
        }
    };

    const getMessage = (item) => {
        return images.filter(image=>image.title===item);
    }


    React.useEffect(() => {
        const interval = setInterval(() => {
            
            if(optCount >= images.length - 1){
                optCount = 0;
            }else{
                optCount++;
            }
            setOptImage(images[optCount].title);
        }, 4500);
        return () => clearInterval(interval);
      }, [state.menuState, state.isHome]);


    return(
        <section className={clase}>
            {
                
            }
            <h2>{getMessage(state.optImage)[0].text1}<br/>{getMessage(state.optImage)[0].text2}</h2> 
            <h3>{getMessage(state.optImage)[0].text3}</h3>
            <div className="opt__container">
                {images.map((item)=>getFunction(item))}
            </div>
        </section>
    )
}

export {TextHome};