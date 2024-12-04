import { Route,Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashborad from "./pages/Dashboard";
import { useState } from "react";

function App() {

  const[isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div >
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/Dashborad" element={<Dashborad/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
