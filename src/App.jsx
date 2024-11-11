import { Outlet } from 'react-router-dom'
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import AutoPopupModal from './Components/AutoPopupModal/AutoPopupModal';

function App() {

  return (
    <>
      <Header />
        <Outlet />
        <AutoPopupModal />
      <Footer />
    </>
  )
}

export default App
