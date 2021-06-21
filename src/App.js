import React from 'react';
import './App.css';
import Login from './componentes/login';
import Denuncia from './componentes/denuncia';
import Mapadenuncia from './componentes/mapaDenuncia';
import NavBar from './componentes/navBar';


/* Wee francis oloo
esta es una prueba de merge en un conflito
*/
function SaludoMensaje() {
  console.log("que hace caesa??")
}

//Este es un comentario de Fran

export default function App() {
  return (
    <div>
      <NavBar />
      <Login />
      {/*<Denuncia  
        zoom={11} center={{ lat: -27.4502473335, lng: -58.76981735}}
      />
      <Mapadenuncia />*/}
      <NavBar />
    </div>
  );
}
