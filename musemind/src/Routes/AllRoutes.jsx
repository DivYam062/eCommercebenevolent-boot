import {Routes,Route} from "react-router-dom";
import Home from "../Pages/Home";
import {Login} from "../Pages/Login/Login";

import ElectronicsList from "../Pages/Products/Electronics/ElectronicsList"
import { SignupCard } from "../Pages/Login/SignUp";

const AllRoutes = ()=>{
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/signUp" element={<SignupCard />}/>
                <Route path="/product" element={<ElectronicsList />}/>

            </Routes>
        </div>
    );
}


export default AllRoutes;