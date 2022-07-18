import React                          from 'react'           ;
import ReactDOM                       from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import App                            from './App'           ;

import 'bootstrap/dist/css/bootstrap.min.css'

import Inicio      from './routes/Inicio'     ;
import Blog        from './routes/Blog'       ;
import Contacto    from './routes/Contacto'   ;
import NotFound404 from './routes/NotFound404';
import ItemPost from './routes/ItemPost';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
  <React.StrictMode>
     <BrowserRouter>
     
     <Routes>
     
      <Route path='/'        element= {<  App              />}   >
     
      <Route index           element= {<  Inicio           />}  /> 
      
      <Route path='blog'     element=  {<  Blog             />}  />
      <Route path='blog/:id' element=  {<  ItemPost        />}   />
    
      
      <Route path='contacto' element= {<  Contacto         />}  />
      
      <Route path='*'        element= {<  NotFound404      />}  /> 
      
      </Route> 
      
      </Routes>
     
     </BrowserRouter>
  </React.StrictMode>

);


