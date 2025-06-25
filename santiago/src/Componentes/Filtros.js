import React from "react";
import '../css/Filtros.css';

function Filtros({ cambiarFiltro }) {
    const botones = [
        { id: 1, titulo: "Todos", valor: "todos" },
        { id: 2, titulo: "Vocaloid", valor: "vocaloid" },
        { id: 3, titulo: "UTAU", valor: "utau" },
        { id: 4, titulo: "Derivados", valor: "derivado" },
        { id: 5, titulo: "Populares", valor: "populares" },
    ];

    return (
        <div className="filtros-container">
            {botones.map((boton) => (
                <button key={boton.id} onClick={() => cambiarFiltro(boton.valor)}>
                    {boton.titulo}
                </button>
            ))}
        </div>
    );
}

export default Filtros;