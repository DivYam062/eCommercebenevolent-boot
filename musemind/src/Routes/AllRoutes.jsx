import {Routes,Route} from "react-router-dom";
import Home from "../Components/Pages/Home";
import Login from "../Components/Pages/Login";

const AllRoutes = ()=>{
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/products" element={<></>}/>
            </Routes>
        </div>
    );
}
export default AllRoutes;