import React from "react";
import '../css/Saludo.css';

const Saludo=({name})=> (
        <div className="saludo-container">
        <div className="saludo-titulo">
            <h1>VOCALOID {name} of the future</h1>
        </div>
        <div className="saludo-subtitulo">
            <p>Metaverso</p>
        </div>
        </div>
    )
export default Saludo;