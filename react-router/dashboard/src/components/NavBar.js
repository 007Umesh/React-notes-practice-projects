import React from "react";
import logo from '../assests/logo.avif';
import { Link } from "react-router-dom";
import {toast} from "react-hot-toast";
function NavBar(props){
    let isLoggedIn =props.isLoggedIn;
    let setIsLoggedIn =props.setIsLoggedIn;
    return(
        <div className="flex justify-evenly border-2 border-black pl-0 items-center">
            <Link to='/'>
            <img src={logo} alt="logo" width={70}  loading="lazy"></img>
            </Link>
            <nav>
                <ul className="flex gap-3 ">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/'>About</Link>
                    </li>
                    <li>
                        <Link to='/'>Contact</Link>
                    </li>
                </ul>
            </nav>

            {/* Login - Signup - LogOut - Dashboard */}
            <div className="flex ml-3 gap-4">
                {!isLoggedIn &&
                    <Link to='/Login'>
                    <button>Login</button>
                    </Link>
                }
                {!isLoggedIn &&
                    <Link to='/signup'>
                    <button>Signup</button>
                    </Link>
                }
                {isLoggedIn &&
                    <Link to='/'>
                    <button onClick={()=>{
                        setIsLoggedIn(false);
                        toast.success("logged out");
                        }}>LogOut</button>
                    </Link>
                }
                {isLoggedIn &&
                    <Link to='/Dashboard'>
                    <button>Dashboard</button>
                    </Link>
                }
            </div>
        </div>
    )
}

export default NavBar;