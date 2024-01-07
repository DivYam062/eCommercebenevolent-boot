import {Routes,Route} from "react-router-dom";
import Home from "../Components/Pages/Home";
import {Login} from "../Pages/Login/Login";
import {SignupCard} from "../Pages/Login/SignUp";

const AllRoutes = ()=>{
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<SignupCard/>}/>
                <Route path="/products" element={<></>}/>
            </Routes>
        </div>
    );
}
export default AllRoutes;