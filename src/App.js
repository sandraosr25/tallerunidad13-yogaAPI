import React from 'react';
import {Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Login from './pages/Login';
import Listado from './pages/Listado';
import Postures from './pages/Postures';
import { ProtectedRoutes } from './components/ProtectedRoutes';

function App() {

  return (
    <div className="App">
        <Header />
        <Routes>
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />

            <Route element={<ProtectedRoutes />} >
              <Route path="/listado" element={<Listado /> }/>
              <Route path="/detalle" element={<Postures />} />
            </Route>
        </Routes>
    </div>
  );
}

export default App;
