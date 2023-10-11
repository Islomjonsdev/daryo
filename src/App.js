import { useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import FooterBottom from './components/footerBottom/FooterBottom';
import Header from './components/header/Header';
import HeaderBottom from './components/headerBottom/HeaderBottom';
import Route from "./routes"
import Sidebar from './routes/sidebar/Sidebar';
import Overlay from './utils';

function App() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [isSidebarEnter, setIsSidebarEnter] = useState(false)
  return (
    <div>
        <Header />  
        <HeaderBottom setIsSidebarActive={setIsSidebarActive} setIsSidebarEnter={setIsSidebarEnter}/>
        <Sidebar isSidebarActive={isSidebarActive} setIsSidebarActive={setIsSidebarActive} isSidebarEnter={isSidebarEnter} setIsSidebarEnter={setIsSidebarEnter}/>
        {
          isSidebarActive && <Overlay type="sidebar" state={isSidebarActive} callback={setIsSidebarActive}/>
        }
        <Route />
        <Footer />
        <FooterBottom />
    </div>
  );
}

export default App;
