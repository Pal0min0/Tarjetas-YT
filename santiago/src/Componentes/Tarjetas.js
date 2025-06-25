import React, { useState, useEffect } from 'react';
import '../css/Tarjeta.css';

const Tarjetas = ({ img, title, descrip, color, video }) => {
  const [imagen, setImagen] = useState(
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlI0ik8o35tdiyVMydFVi8u5Kw9nwf0Pjxkg&s'
  );

  const [fondo] = useState(color); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setImagen(img);
    }, 5000);
    return () => clearTimeout(timer);
  }, [img]);

  return (
    <div className="todo">
      <a href={video} target="_blank" rel="noopener noreferrer">
      <div className="contenedor" style={{ background: fondo }}>
        <div>
          <img src={imagen} alt={title} className="imagen" />
        </div>
        <div>
          <h1 className="Titulo">{title}</h1>
          <p className="Texto">{descrip}</p>
        </div>
      </div>
      </a>
    </div>
  );
};

export default Tarjetas;