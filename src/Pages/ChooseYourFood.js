import React from "react";
import { useMachine } from "@xstate/react";
import burritoMachine from "../Machines/burroMachine";
import './Styles/ArmaTuBurro.scss';

const ChooseYourFood = () => {

  const [state, send] = useMachine(burritoMachine);

  

  return(
    <diV className='armatuburro__container'>
      
    </diV>
  )
}

export default ChooseYourFood;