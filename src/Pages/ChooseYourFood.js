import React from "react";
import { useMachine } from "@xstate/react";
import burritoMachine from "../Machines/burroMachine";
import { PanelDescription } from "../Containers/PanelDescription";
import './Styles/ArmaTuBurro.scss';

const ChooseYourFood = () => {

  const [state, send] = useMachine(burritoMachine);

  const eventContinue = (e) => {
    state.matches('selectBurro') 
    ?  send('HOGARENO')
    :  state.matches('selectProteins1') 
    ?  send('COMPLETECOUNTS')
    :  state.matches('defineDislikes') 
    ?  send('COMPLETECOUNTS')
    :  state.matches('selectAdditions') 
    ?  send('COMPLETECOUNTS')
    :  state.matches('withCombo') 
    ?  send('YES')
    :  state.matches('optionAddCart') 
    ?  send('CONTINUE')
    :  send('FINISH');
  }

  return(
    <div className='armatuburro__container'>
      {
        state.matches('selectBurro') && <PanelDescription><button onClick={eventContinue}>avanzar1</button></PanelDescription>
      }
      {
        state.matches('selectProteins1') && <PanelDescription><button onClick={eventContinue}>avanzar2</button></PanelDescription>
      }
      {
        state.matches('defineDislikes') && <PanelDescription><button onClick={eventContinue}>avanzar3</button></PanelDescription>
      }
      {
        state.matches('selectAdditions') && <PanelDescription><button onClick={eventContinue}>avanzar4</button></PanelDescription>
      }
      {
        state.matches('withCombo') && <PanelDescription><button onClick={eventContinue}>avanzar5</button></PanelDescription>
      }
      {
        state.matches('optionAddCart') && <PanelDescription><button onClick={eventContinue}>avanzar6</button></PanelDescription>
      }
    </div>
  )
}

export default ChooseYourFood;