import { Outlet } from 'react-router-dom'
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa6';

function App() {

  return (
    <>
      <Header />
        <Outlet />
        
      <Footer />
    </>
  )
}

export default App
