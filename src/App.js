import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from './pages/About';
import Contact from './pages/Contact';
import ShoppingCart from "./components/ShoppingCart";
import Login from './pages/auth/Login';
import Register from "./pages/auth/Register";
import Header from "./components/header/Header";
import Footer from "./components//Footer";
import ProductDetails from "./pages/ProductDetails";


function App() {
  return (
      <BrowserRouter>
      <Header/>
        <Routes>
            <Route index element={<Home />} />
            <Route path='shop' element={<Shop/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='cart' element={<ShoppingCart/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path="/product/:id" element={<ProductDetails/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
