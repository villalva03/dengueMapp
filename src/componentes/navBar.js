import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import logo from '../222.png';

export default function Navbar(){


    return(
<React.Fragment>


 <nav class="navbar navbar-expand-lg navbar-light bg-dark">

 <Link to="/" className="navbar-brand text-white" href="#">
 <img src={logo} className="App-logo" alt="logo" />
 </Link>
   
<nav className="ml-auto mr-4">
 
<button type="button" class="btn btn-outline-primary text-white btn-lg ml-auto mr-2">Contacto</button>
    
{/*<button type="button" class="btn btn-outline-primary text-white btn-lg ml-auto mr-1"></button>*/}
</nav>

</nav>

</React.Fragment>

    )
}