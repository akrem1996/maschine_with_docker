import axios from "axios";
import { push } from 'connected-react-router'


export const AuthActionsTypes = {
    FETCH_SIGNUP:"FETCH_SIGNUP",
    FETCH_LOGIN: "FETCH_LOGIN",
    FETCH_ERROR:"FETCH_ERROR",
    FETCH_LOGOUT: "FETCH_LOGOUT"
}

export const fetchSignup = (data) => ({
    type: AuthActionsTypes.FETCH_SIGNUP,
    data
}); 

export const fetchLogin = (data,userState) => ({
    type: AuthActionsTypes.FETCH_LOGIN,
    data,
    userState
}); 

export const fetchError = () => ({
    type: AuthActionsTypes.FETCH_ERROR
}); 

export const fetchLogout = () => ({
    type: AuthActionsTypes.FETCH_LOGOUT
}); 


 export const registerAction = (userState) => (dispatch) => {
     try{
        axios.post("http://localhost:8000/subscribe",userState)
        dispatch(fetchSignup(userState))
     } catch (error) {
        dispatch(fetchError())
     }    
 }
 
 export const loginAction = (userState) => (dispatch) => {
    axios.post("http://localhost:8000/login",userState)
    .then((response) => {
        const data = response.data.accessToken
        dispatch(fetchLogin(data , userState))
        localStorage.setItem('token',data)
        localStorage.setItem('username',userState.name)
        return dispatch(push("/ShowClassification"))
    })
    .catch(() => {
        return dispatch(fetchError())
    })
}

 