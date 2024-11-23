import { Outlet } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";
import Navbar from '../Navbar';

import './App.css';


const App = () => {

  return (
    <>
      <Header text="Hello">
        <Navbar />
      </Header>

      <Outlet />
            

      <Footer></Footer>
    </>
  );
};



export default App;
