import React from "react";
import { useMachine } from "@xstate/react";
import burritoMachine from "../Machines/burroMachine";
import { PanelDescription } from "../Containers/PanelDescription";
import './Styles/ArmaTuBurro.scss';


const ChooseYourFood = () => {

  const [state, send] = useMachine(burritoMachine);

  console.log(state);

  const eventContinue = (e) => {
    state.matches('selectBurro') 
    ?  send('HOGARENO', { step: 2, opt: 'Hogareno' })
    :  state.matches('selectProteins1') 
    ?  send('COMPLETECOUNTS', { step: 3 })
    :  state.matches('defineDislikes') 
    ?  send('COMPLETECOUNTS', { step: 4 })
    :  state.matches('selectAdditions') 
    ?  send('COMPLETECOUNTS', { step: 5 })
    :  state.matches('withCombo') 
    ?  send('YES',  { step: 6 })
    :  state.matches('optionAddCart') 
    ?  send('CONTINUE')
    :  send('FINISH');
  }

  return(
    <div className='armatuburro__container'>
      {
        (state.context.step >= 1) && <PanelDescription><button onClick={eventContinue}>avanzar1</button></PanelDescription>
      }
      {
        (state.context.step >= 2) && <PanelDescription><button onClick={eventContinue}>avanzar2</button></PanelDescription>
      }
      {
        (state.context.step >= 3) && <PanelDescription><button onClick={eventContinue}>avanzar3</button></PanelDescription>
      }
      {
        (state.context.step >= 4) && <PanelDescription><button onClick={eventContinue}>avanzar4</button></PanelDescription>
      }
      {
        (state.context.step >= 5) && <PanelDescription><button onClick={eventContinue}>avanzar5</button></PanelDescription>
      }
      {
        (state.context.step >= 6) && <PanelDescription><button onClick={eventContinue}>avanzar6</button></PanelDescription>
      }
    </div>
  )
}

export default ChooseYourFood;