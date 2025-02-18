import axios from "axios";

import {  persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
const initialState = {
    loading : false , 
    user : {} ,
    token : null ,
    error : null      
};

export const init = ()=>
    {
        return {
            type : 'login_request' , 
        }
}
export const success = ({user , token})=>
    {
        return {
            type : 'success' ,
            payload : { user , token }
        }
}

export const logoutSuccess = () => {
    return {
        type: 'logout_success',
    };
};

export const loginFailure = (error)=>
    {
        return {
            type : 'login_failure' , 
            payload : error
        }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'login_request':
            return { ...state , loading : true }; 
        case 'success':
            return { loading : false , user : action.payload.user , token : action.payload.token , error : null };

        case 'login_failure':
            return { loading: false, user: {}, token: null, error: action.payload };

            case 'logout_success':
                return { loading: false, user: {}, token: null, error: action.payload };
        
            default:
            return state;    
        }
};



const persistConfig = {
    key: "root",
    storage
};

export const register = (user , navigate , toastr) => {
    return async (dispatch) => {
        try {
            dispatch(init()); 
            const response = await axios.post('http://127.0.0.1:8000/api/register', user);
            dispatch(success({ user: response.data.user, token: response.data.token }));
            navigate('/')
            
            } catch (error) {
            const errorMsg = error.response?.data?.message || error.message || "Registration failed";
            dispatch(loginFailure(errorMsg)); 
            toastr.error(errorMsg)

        }
    };
};



// export const login = (user , navigate , toastr) => {        
//     return async (dispatch) => {
//     try {
//         dispatch(init())
//         const response = await axios.post('http://127.0.0.1:8000/api/login' , user );
//         dispatch(success({ user:  response.data.user , token: response.data.token }));
//         navigate('/') 
//     } catch (error) {
//         dispatch(loginFailure(error))
//         toastr.error('username or password is incorrect!')
//         console.log(error);
//     }
//     };
// };

export const logout = () => {
    return async (dispatch, getState) => { 
        try {
            dispatch(init());

            const token = getState().auth.token; 

            const response = await axios.post(
                'http://127.0.0.1:8000/api/logout',
                {}, 
                {
                    headers: {
                        Authorization: `Bearer ${token}`, 
                    },
                }
            );
            console.log(response);

            dispatch(logoutSuccess());

        } catch (error) {
            console.log(error);
        }
    };
};




const authReducer = persistReducer(persistConfig, reducer);
export default authReducer;

















