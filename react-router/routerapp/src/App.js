import { NavLink, Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home.js';
import Labs from './components/Labs.js';
import NotFound from './components/NotFound.js';
import About from './components/About.js';
import Support from './components/Support.js';
import MainHeader from './components/MainHeader.js';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
        <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/lab">Labs</NavLink>
          </li>
        </ul>
      </nav>
   <Routes>
    <Route path='/' element={<MainHeader/>}>
    {/* this is default router */}
    <Route index element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/support' element={<Support/>}/>
    <Route path='/lab' element={<Labs/>}/>
    <Route path='/*' element={<NotFound/>}/>
    </Route>
   </Routes>
    </div>
  );
}

export default App;
