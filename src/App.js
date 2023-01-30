// import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Routes, Route, HashRouter} from "react-router-dom";

import Template from "./pages/temp";
import Home from "./pages/homeC";
import About from "./pages/aboutC";
import Menu from './pages/menuC';
import North from './pages/northC';
import French from './pages/frenchC';
import Chinese from './pages/chineseC';
import Italian from './pages/italianC';
import Japanese from './pages/japaneseC';
import Contact from './pages/contactC';
import Event from './pages/eventC';
import Login from './pages/loginC';
import Fastfood from './pages/fastfoodC';
import Drinks from './pages/drinksC';
import Desserts from './pages/dessertsC';
import Bites from './pages/bitesC';
import Ecatering from './pages/ecateringC';
import Booktable from './pages/booktableC';
import Cart from './pages/cartC';

// import { useContext, createContext } from 'react';

function App() {
  // const MyContext=React.createContext(defaultValue);

  
  // <MyContext.Provider value={}/>
  return (
    <div className="App">
      <BrowserRouter >{/*basename="/React-Portfolio"*/}
        <Routes>
          <Route path="/" element={<Template/>}> 
          <Route index element={<Home/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/menu" element={<Menu/>}></Route>
          <Route exact path="/north" element={<North/>}></Route>
          <Route exact path="/french" element={<French/>}></Route>
          <Route exact path="/chinese" element={<Chinese/>}></Route>
          <Route exact path="/italian" element={<Italian/>}></Route>
          <Route exact path="/japanese" element={<Japanese/>}></Route>
          <Route exact path="/fastfood" element={<Fastfood/>}></Route>
          <Route exact path="/drinks" element={<Drinks/>}></Route>
          <Route exact path="/desserts" element={<Desserts/>}></Route>
          <Route exact path="/bites" element={<Bites/>}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
          <Route exact path="/event" element={<Event/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/ecatering" element={<Ecatering/>}></Route>
          <Route exact path="/booktable" element={<Booktable/>}></Route>
          <Route exact path="/cart" element={<Cart/>}></Route>
          
          </Route>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
