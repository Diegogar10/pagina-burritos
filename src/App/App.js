import React from 'react';
import { ButtonGeneric } from '../Components/ButtonGeneric';
import { ButtonMenu } from '../Components/ButtonMenu';
import { ModalContruccion } from '../Pages/ModalContruccion';
import './App.css';

function App() {
  return (
    <ModalContruccion empresa='Tremendo Burrito Colombia'/> 
    //<div>
      //<ButtonMenu></ButtonMenu>
      //<ButtonGeneric nameButton='Nosotros'/>
    //</div>
  );
}

export default App;
