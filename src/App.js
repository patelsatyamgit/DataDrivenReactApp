import "./App.css";
import Navbar from "./Components/Navbar";
import Demo from "./Pages/Demo";
import  Home  from "./Pages/Home";
import { Route,Routes } from "react-router-dom";
import UserDetails from "./Pages/UserDetails";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div>
      
      <Navbar/>
      <Routes>
        <Route path="/demo" element={<Home/>}>
        </Route>
        <Route path="/" element={<Demo/>}></Route>
        <Route path="/cart/:id" element={<Cart/>}></Route>
        <Route path="/user/:id" element={<UserDetails/>}>
       
        </Route>
      </Routes>
    </div>
  );
}

export default App;
