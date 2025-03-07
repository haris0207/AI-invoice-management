import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Dashboard from './Components/Dashboard/Dashboard'
import Navigation from './Components/Navigation/Navigation'
import MainSection from './Components/MainSection/MainSection'
import Invoice from './Components/Invoice/Invoice';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}>
          <Route index element={<MainSection />} />
          <Route path="invoice" element={<Invoice />} />
          
          
        </Route>
      </Routes>
    </BrowserRouter>
    
    
    
    
    </>
  )
}

export default App
