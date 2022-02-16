import React from 'react';
import { AnchorGeneric } from '../Components/AnchorGeneric';
import { Menu } from '../containers/Menu';
import { ModalContruccion } from '../Pages/ModalContruccion';
import './App.css';

function App() {



  return (
    //<ModalContruccion empresa='Tremendo Burrito Colombia'/> 
    <main className='main__container'>
      <Menu>
        <AnchorGeneric nombre='Nosotros0'/>
        <AnchorGeneric nombre='Nosotros1'/>
      </Menu>
    </main>
  );
}

export default App;
