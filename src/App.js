import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashbord from "./pages/Dashbord";
import { Routes,Route } from "react-router-dom";
import { useState } from "react";

function App() {

  const [isLoggedIn , setIsLoggedIn] = useState(false);


  return (
  <div>
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
      <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
      <Route path="/dashbord" element={<Dashbord/>} />

    </Routes>
  </div>
  );}

export default App;
