import React from "react";
import Tarjetas from "../Componentes/Tarjetas";
import '../css/Tarjeta.css';
const ListaTarjetas=({personajes})=>(
        <div className="lista-tarjetas">
            {personajes.map((azul) => {
            return(
            <Tarjetas
                key={azul.id}
                title={azul.title}
                descrip={azul.descrip}
                img={azul.img}
                color={azul.color}
                video={azul.video}
            />
            )
            })
        }
        
            
        </div>
    )
export default ListaTarjetas;