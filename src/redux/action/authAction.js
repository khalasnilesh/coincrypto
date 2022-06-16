 import jwt from "jsonwebtoken"; 

 const LOGIN_USER = 'LOGIN_USER'; 
 const REGISTER_USER = 'REGISTER_USER'; 
 const ADMIN_LOGOUT = 'ADMIN_LOGOUT'; 
 const REDIRECT_TO_LOGIN = 'REDIRECT_TO_LOGIN';
 const REDIRECT_TO_Register = 'REDIRECT_TO_Register';
 
 const REDIRECT_TO_UPDATE_PWD = 'REDIRECT_TO_UPDATE_PWD';

 const DB_ERROR = "DB_ERROR";
 const SET_CURRENT_USER = "SET_CURRENT_USER";

export function redirectTologIn(status)
{
    return {
        type : REDIRECT_TO_LOGIN,
        payload : status,
        useverificationstatus: status
     }
}

export function redirectToRegister(status)
{
    return {
        type : REDIRECT_TO_Register,
        payload : status,
        useverificationstatus: status
     }
}

export function logIn(userdata)
{
    
}

export function loginSuccess(token)
{
    return {
        type : REDIRECT_TO_UPDATE_PWD,
        payload : token,
        msg: 'Kindly reset your password!'
        //useverificationstatus: status
     }
}

export function loginSuccess11111(token)
{
    return {
        type : REDIRECT_TO_UPDATE_PWD,
        payload : token,
        msg: 'Kindly reset your password!'
        //useverificationstatus: status
     }
}

export function register(users)
{
    return {
        type : REGISTER_USER,
        payload : users
     }
}

export function LogOut(users){
}
export function dbError(error)
{
    return {
        type : DB_ERROR,
        payload : error
     }
}

export function setCurrentUser(userdata)
{
  return {
    type : SET_CURRENT_USER,
    payload : userdata
 }
}

export function loginFail(token)
{
    return {
        type : REDIRECT_TO_UPDATE_PWD,
        payload : token,
        msg:'Error while connecting to API!!!'
        //useverificationstatus: status
     }
}
export function updatepwdFail(status , msg)
{
    console.log(msg);
    return {
        type : REDIRECT_TO_UPDATE_PWD,
        payload : status,
        msg : msg
        //useverificationstatus: status
     }
}
export function updatepwdSuccess(status , msg)
{
    //console.log("hereinerror")
    return {
        type : REDIRECT_TO_UPDATE_PWD,
        payload : status,
        msg : msg
        //useverificationstatus: status
     }
}
