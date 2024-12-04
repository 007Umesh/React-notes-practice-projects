import { Outlet } from "react-router-dom";

function Home(){
    return(
        <div>
        <Outlet></Outlet>
            welcome to Home page</div>
    )
}

export default Home;