import { Outlet } from 'react-router-dom';
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import AutoPopupModal from './Components/AutoPopupModal/AutoPopupModal';

function App() {
  return (
    <>
      <Header />
        {/* <AutoPopupModal /> */}
        <Outlet />
      <Footer />
    </>
  );
}

export default App;
