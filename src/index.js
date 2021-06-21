import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Base from './App';
//import Login from './componentes/login';
import Denuncia from './componentes/denuncia';
import AdminDenuncia from './componentes/mapaDenuncia';

ReactDOM.render((
  <React.StrictMode>
  <Router>
  <div>
      <Route exact path="/" component={Base}></Route>
      {/*<Route path="/login" component={Login}></Route>*/}
      <Route path="/user_denuncia" component={Denuncia}></Route>
      <Route path="/admin_denuncia" component={AdminDenuncia}></Route>
  </div>
</Router>
  </React.StrictMode>
),document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
