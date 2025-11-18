import './App.css';
import Logo from './imagenes/logo_monster.png'

function App() {
  return (
    <div className="Aplicacion-tareas">
      <div className="contenedor-logo">
        <img src={Logo} alt="logo de monster" className='logo'/>
      </div>
    </div>
  );
}

export default App;
