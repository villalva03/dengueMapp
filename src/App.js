import React from 'react';
import './App.css';
import Login from './componentes/login';
import Denuncia from './componentes/denuncia';
import Mapadenuncia from './componentes/mapaDenuncia';
import NavBar from './componentes/navBar';

export default function App() {
  return (
    <div>
      <NavBar/>
      <NavBar/>
      <Login />
      {/*<Denuncia  
        zoom={11} center={{ lat: -27.4502473335, lng: -58.76981735}}
      />
      <Mapadenuncia />*/}
  </div>
  );
}
