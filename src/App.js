import React from 'react';
import {useState} from 'react';
import Head from './components/Header';
import Listado from './components/Listado';
import Details from './components/Details';
import Login from './components/Login';
import { DatosPosturas } from './Objeto';

function App() {
  const [itemSeleccionado, setItemSeleccionado] = useState(null);
  const [login, setLogin] = useState(false);
  const [estadoListado, setEstadoListado] = useState(false);

  const handleItemOnClick = (itemId) => {
    setEstadoListado(true);
    const itemSeleccionado = DatosPosturas.find((item) => item.id === itemId);
    setItemSeleccionado(itemSeleccionado);
  };

  const handleLogin = () => {
    setLogin(true);
    setEstadoListado(false);
  };

  const handleLogout = () => {
    setLogin(false);
    setItemSeleccionado(null);
  };

  return (
    <div className="App">
      <div>
        <Head />
        
      </div>
      {!login ? (
        <Login onLogin={handleLogin} />
      ):(
          <>
            {!estadoListado ? (
              <div>
                <h3 className='mensaje-seleccion-postura'>Selecciona una postura para ver los detalles</h3>        
                <Listado DatosPosturas={DatosPosturas} onItemClick={handleItemOnClick}/>
              </div>
            ) : (
              <Details itemSeleccionado={itemSeleccionado} setEstadoListado={setEstadoListado} />
            )}
              
            <button className="button-logout" onClick={handleLogout}>
              Cerrar Sesión
            </button>
          </>
      )}
    </div>
  );
}

export default App;
