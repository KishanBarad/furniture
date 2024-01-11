
import { useState } from 'react';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';


function App() {
  
  return (
   <>
   <div className='sticky' >
    <div className='container'>
      <div className='row header'>
         <div className='col-md-3 col-sm-4'>
          <h3>Furn.</h3>
         </div>
         <div className='col-md-6 col-sm-6 mid-head'>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>New Arrival</a></li>
            <li><a href='#'>Features</a></li>
            <li><a href='#'>Blog</a></li>
            <li><a href='#'>Contact</a></li>
          </ul>
         </div>
         <div className='col-md-3 col-sm-12 end-head' >
          <ul>
            <li><a href='#'><i class="fa-solid fa-magnifying-glass"></i></a></li>
            <li><a href='#'><i class="fa-solid fa-gear"></i></a></li>
            <li><a href='#'><i class="fa-solid fa-cart-shopping"></i></a></li>
          </ul>
         </div>
      </div>
    </div>
    </div>
    
   </>
  );
}

export default App;
