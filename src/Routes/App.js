import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { useInitialState } from '../Hooks/useInitialState';
import { ModalContruccion } from '../Pages/ModalContruccion';
import './App.css';
import { Home } from '../Pages/Home';
import { Nosotros } from '../Pages/Nosotros';
import { NotFound } from '../Pages/NotFound';
import { Contactenos } from '../Pages/Contactenos';
import { ArmaTuBurro } from '../Pages/ArmaTuBurro';
import { Recetas } from '../Pages/Recetas';
import { Plantilla } from '../Templates/Plantilla';

function App() {

  const initialState = useInitialState();

  return (
    //<ModalContruccion empresa='Tremendo Burrito Colombia'/> 
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Plantilla>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/nosotros' element={<Nosotros/>} />
            <Route path='/recetas' element={<Recetas/>} />
            <Route path='/arma-tu-burro' element={<ArmaTuBurro/>} />
            <Route path='/contactenos' element={<Contactenos/>} />
            <Route path='*' element={<NotFound/>} /> 
          </Routes>
        </Plantilla>
      </BrowserRouter>
    </AppContext.Provider>
    
  );
}

export default App;
