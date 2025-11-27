import React from "react";
import '../estilos/TareaFormulario.css'

export function Formulario(texto) {

    return(
        <form action="" className="tarea-formulario">
            <input 
            type="text" 
            className="tarea-input" 
            placeholder="escribe tu tarea"  
            name="texto"/>
            <button className="tarea-boton">
                Agregar tarea
            </button>
        </form>
    );
}