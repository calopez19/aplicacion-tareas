import "./App.css";
import Logo from "./imagenes/logo_monster.png";
import { ListaTareas } from "./componentes/ListaTareas.jsx";

function App() {
  return (
    <div className="Aplicacion-tareas">
      <div className="contenedor-logo">
        <img src={Logo} alt="logo de monster" className="logo" />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
        <ListaTareas></ListaTareas>
      </div>
    </div>
  );
}

export default App;
