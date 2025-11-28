import React from "react";
import '../estilos/TareaFormulario.css'
import { useState } from "react";
import {v4 as uuidv4} from "uuid";

export function Formulario(texto) {

    const [input, setInput] = useState("");

    const manejarCambio = e => {
        setInput(e.target.value);
    }
    const manejarEnvio = e => {
        e.preventDefault();
        console.log("envienado formualrio...");
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completado: false
        }
        console.log(tareaNueva);
    }
    return(
        <form action="" className="tarea-formulario" onSubmit={manejarEnvio}>
            <input 
            type="text" 
            className="tarea-input" 
            placeholder="escribe tu tarea"  
            name="texto"
            onChange={manejarCambio}/>
            <button className="tarea-boton">
                Agregar tarea
            </button>
        </form>
    );
}