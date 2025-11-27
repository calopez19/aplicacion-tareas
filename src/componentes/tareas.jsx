import React from "react";
import "../estilos/tarea.css";
import { AiOutlineClose  } from "react-icons/ai";

export function Tarea({ id, texto, completado, completarTarea, eliminarTarea }) {

  return (
    <div className= {completado? "tarea-contenedor completada": "tarea-contenedor"}>
      <div className="tarea-texto" onClick={() => completarTarea(id)} >{texto}</div>
      <div className="tarea-contenedor-icono" onClick={() => eliminarTarea(id)}> <AiOutlineClose  className="tarea-icono"/></div>
    </div>
  );
}
