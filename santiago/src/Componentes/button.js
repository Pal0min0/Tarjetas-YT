import React from 'react';
import buton from '../img/Boton.png';
import '../css/Boton.css'
import { Link } from 'react-router-dom';


const Botn=()=>(
    <div className="center">
        <Link to="/Crear/new">
        <img src={buton} alt="" className="Boton"/>
        </Link>
    </div>
)
export default Botn