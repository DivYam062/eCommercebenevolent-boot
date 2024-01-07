import axios from "axios"
import { GET_FAILURE, GET_REQUEST, GET_SUCCESS } from "./actionType"

export const datafetch = async(dispatch) => {
    try{
        dispatch({type:GET_REQUEST});
        const res = await axios.get('https://products-3jez.onrender.com/product?_page=1&_limit=8');
        dispatch({ type: GET_SUCCESS, payload: res.data });
    }
    catch(error){
        console.log(error);
        dispatch({ type: GET_FAILURE });
    }
}

export const postdata = (id, data) => (dispatch) => {
    axios.patch(`https://shopkart-payload.onrender.com/userdata/${id}`, {cart:data})    
}