import setAuthToken from "../../componentes/utils/setAuthToken"
import jwt_decode from "jwt-decode";
import axios from 'axios'

    const api = axios.create({
        baseURL: "http://localhost:8080/api/CreateAccount"
    });

    
   export const getLogin =(Account)=>{
        return async(dispatch)=>{
            await api.post('/login',{
                Email:Account.Email,
                Password:Account.Password
                
            })
            .then(res=>{
                const {token} = res.data;

                setAuthToken(token)
                const decoded = jwt_decode(token);

                localStorage.setItem('token', token) 
                  
                dispatch({    
                    type:"GET_LOGIN",
                    payload : decoded
                })

                console.log("decoded",decoded);

                dispatch(setCurrentUser(decoded))
                
                
                
            })
            .catch(err=>{
                dispatch({
                    type:"LOGIN_USER_FAIL",
                    payload:err
                })
            })
        }
    }

export const getoutlogin=(isAuthenticated)=>(dispatch)=>{
        dispatch({
            type:"LOG_OUT",
            payload:isAuthenticated
        })
        
    }

export const setCurrentUser = decoded => {
        return{
            type: "SET_CURRENT_USER",
            payload: decoded
        }
    };



    