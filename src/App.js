import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./components/Header";
import BuscarCliente from './components/Buscar-Cliente';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="contenedor-componentes">
          <Switch>
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
