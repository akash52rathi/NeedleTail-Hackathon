import React,{useReducer} from 'react'
import axios from 'axios'
import AuthContext from './AuthContext'
import AuthReducer from './AuthReducer'
import  setAuthToken from '../../utils/setAuthToken'

import {
REGISTER_SUCCESS,
REGISTER_FAIL,
 USER_LOADED,
 AUTH_ERROR,
 LOGIN_SUCCESS,
 LOGIN_FAIL,
 LOGOUT,
CLEAR_ERRORS
} from '../types.js'

const AuthState = props =>{
    const intialState={
      token : localStorage.getItem('token'),
      isAuthenticated:null,
      loading: true,
      user:null,
      error:null        
    };

    const [state,dispatch]= useReducer(AuthReducer,intialState)

/// load users

const loadUser = async () =>{

if(localStorage.token)
{
    setAuthToken(localStorage.token);
}

    try{
        const res=  await axios.get('/api/auth');
        dispatch({
            type:USER_LOADED,
            payload:res.data
        });

        
    }
    catch(err)
    {
        dispatch({
            type:AUTH_ERROR
        })

    }
}

/// register user
const register = async FormData=>{
    const config ={
        headers:{
            'Content-Type': 'application/json'
        }
    }

    try{
        const res = await axios.post('/api/users',FormData,config)
        dispatch({
            type:REGISTER_SUCCESS,
            payload: res.data
        })
        loadUser();
    }
    catch(err)
    {
        dispatch({
            type:REGISTER_FAIL,
            payload: err.response.data.msg
        })

    }
}



//// log in  user
const login =async FormData=>{

    const config ={
        headers:{
            'Content-Type': 'application/json'
        }
    }

    try{
        const res = await axios.post('/api/auth',FormData,config)
        dispatch({
            type:LOGIN_SUCCESS,
            payload: res.data
        });
        loadUser();
    }
    catch(err)
    {
        dispatch({
            type:LOGIN_FAIL,
            payload: err.response.data.msg
        })

    }
}


//// log out user
const logout =()=>{
dispatch({type:LOGOUT})
}


///// clear error
const clearErrors = () => dispatch({ type: CLEAR_ERRORS });






    return (
        <AuthContext.Provider
            value ={{
             token:state.token,
             isAuthenticated:state.isAuthenticated,
             loading:state.loading,
             user:state.user,
             token:state.token,
             error:state.error,
             register,
             login,
             logout,
             clearErrors,
             loadUser

             

            }
            }
            >
                    {props.children}

        </AuthContext.Provider>

    );

}   

export default AuthState;