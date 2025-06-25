import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Crear from '../paginas/Crear.js';
import Principal from '../paginas/Page.js';
import NotFound from '../Componentes/NotFound.js';

const App=()=>(
        <BrowserRouter>
         <Routes>
            <Route exact path="/" element={<Principal/>} />
            <Route exact path="/Crear/new" element={<Crear/>} />
            <Route exact path="*" element={<NotFound/>} />
         </Routes>
        </BrowserRouter>
)
export default App