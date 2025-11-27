import React, {useState} from "react";
import { Formulario } from "./TareaFormulario.jsx";
import { Tarea } from "./tareas.jsx";
import '../estilos/ListaTareas.css';


export function ListaTareas(props) {

  const [tareas, setTareas] = useState([]);

  function agregarTarea(tarea) {
    console.log("tarea agregada");
    console.log(tarea);
  }

  return (
    <>
      <Formulario></Formulario>
      <div className="tarea-lista-contenedor">
        {
          tareas.map((tarea) => {
            <Tarea 
            texto={tarea.texto} 
            completado ={tarea.completado}/>
          })
        }
      </div>
    </>
  );
}
