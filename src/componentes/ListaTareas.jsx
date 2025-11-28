import React, {useState} from "react";
import { Formulario } from "./TareaFormulario.jsx";
import { Tarea } from "./tareas.jsx";
import '../estilos/ListaTareas.css';


export function ListaTareas(props) {

  const [tareas, setTareas] = useState([]);

  function agregarTarea(tarea) {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  }

  function eleminarTarea(id){
    setTareas(tareas => tareas.filter(tarea => tarea.id !== id));
    console.log("tarea eliminada");
    console.log(tareas);
  }

  function completarTarea(id) {
    let nuevas = tareas.map(tarea =>
      {if (tarea.id ===id) {
        tarea.completado = !tarea.completado;
      }
      return tarea;
  })
    setTareas(nuevas)
  }

  return (
    <>
      <Formulario onSubmit={agregarTarea}></Formulario>
      <div className="tarea-lista-contenedor">
        {
          tareas.map((tarea) => 
            <Tarea
            key={tarea.id}
            id={tarea.id} 
            texto={tarea.texto} 
            completada ={tarea.completado}
            eliminarTarea = {eleminarTarea}
            completarTarea ={completarTarea}/>
          )
        }
      </div>
    </>
  );
}
