import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./components/Header";
import BuscarCliente from './components/Buscar-Cliente';
import CotizadorCredito from './components/Cotizador-Credito';
import GenerarPresupuesto from './components/Generar-Presupuesto';
import React from 'react';

function App() {
  return (
    <Router basename="/DOCTOSDMAQ/2021/06Jun/REQDC8140/vista2">
      <div>
        <Header />
        <div className="contenedor-componentes">
          <Switch>
            <Route path="/generar-presupuesto">
              <GenerarPresupuesto />
            </Route>
            <Route path="/cotizador-credito">
              <CotizadorCredito />
            </Route>
            <Route path="/">
              <BuscarCliente />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
