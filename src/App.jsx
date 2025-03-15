import React from "react";
import { Routes, Route } from 'react-router-dom'
import Landing from "./components/Landing.jsx";


const App = () => {
  return (
    <>
      <Routes>  

      
        <Route path='/' element={<Landing />} />

      </Routes>

    </>
  );
};

export default App;
