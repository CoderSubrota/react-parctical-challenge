
import { RouterProvider } from 'react-router-dom';
import './App.css';
import React from 'react';
import routers from './Components/routers/Routers';
import Context from './Context';
function App() {
  return (
     <React.Fragment>

       <RouterProvider router={routers}></RouterProvider>
       <Context></Context>
     </React.Fragment>
  );
}

export default App;
