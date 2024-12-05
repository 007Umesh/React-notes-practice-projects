import { Route,Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Private from "./components/Private";
import { useState } from "react";

function App() {

  const[isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div >
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>}></Route>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} ></Route>
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/dashboard" element={
          
         <Private isLoggedIn={isLoggedIn}>
          <Dashboard/>
         </Private> 
          }></Route>
      </Routes>
    </div>
  );
}

export default App;
