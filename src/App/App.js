import React from 'react';
import { AnchorGeneric } from '../Components/AnchorGeneric';
import { Menu } from '../Containers/Menu';
import { AppContext } from '../Context/AppContext';
import { useGetLinks } from '../Hooks/useGetLink';
import { useInitialState } from '../Hooks/useInitialState';
import { ModalContruccion } from '../Pages/ModalContruccion';
import './App.css';

function App() {

  const initialState = useInitialState();
  const {menu} =  useGetLinks();

  return (
    //<ModalContruccion empresa='Tremendo Burrito Colombia'/> 
    <AppContext.Provider value={initialState}>
      <main className='main__container'>
        <Menu>
          {menu.map((item)=>(
            <AnchorGeneric nombre={item.title}/>
          ))}
        </Menu>
      </main>
    </AppContext.Provider>
    
  );
}

export default App;
