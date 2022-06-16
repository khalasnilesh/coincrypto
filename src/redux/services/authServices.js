import { logIn,updatepwdSuccess, register , dbError  , LogOut ,redirectTologIn,redirectToRegister, loginSuccess, loginFail,updatepwdFail} from '../action/authAction';
import { Redirect } from "react-router-dom";
import { push , browserHistory } from "react-router-redux";
const { createProxyMiddleware } = require('http-proxy-middleware');


const axios = require('axios');

export function checkuserbyemail(email,hmac,clientid)
{

  //return false;
  return dispatch => {
    //return dispatch(redirectTologIn(true))
    var OPTIONS = {
       url: "http://ec2-54-160-169-131.compute-1.amazonaws.com:8080/auth/verify-client-customer",
       method: "POST",
       data:{email:email },
       headers: {
         "content-type": "application/json",
         'x-coinspaze-hmac' : hmac,
         'x-coinspaze-client-id' : clientid,
       },
     }
       axios(OPTIONS)
       .then(response  => {
       console.log((response.data));
       if((response.data) == true)
       {

          return dispatch(redirectTologIn(response))
       }
       else
       {
          return dispatch(redirectToRegister(false))
       }
       
       })
       .catch(error => {
          console.log((error.message));
          console.log((error.response.status));
          //return  dispatch(redirectToRegister(error))
          return dispatch(redirectTologIn('true'))
       })
       //return dispatch(redirectTologIn(true))
       //return dispatch(redirectToRegister(false))

   }
}

export function Login(email,password)
{
  return dispatch => {
    var OPTIONS = {
       url: "http://ec2-54-160-169-131.compute-1.amazonaws.com:8080/verify-temporary-password?link=true",
       method: "POST",
       data:{email:email, password : password, status:'1' },
       headers: {
         "content-type": "application/json",
         "Access-Control-Allow-Origin" : '*'
       },
       auth: {
        Username: email,
        Password: password
      }
     }
       axios(OPTIONS)
       .then((response) => {
        dispatch(loginSuccess(response.token))
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(loginSuccess('12345678'));
        console.log(err);
      })

   }
}
export function updatepassword(password,confirmpassword)
{
  

  return dispatch => {

    if(password != confirmpassword)
  {
    console.log(password);
    console.log(confirmpassword);
    dispatch(updatepwdFail('fail' , 'Password and Confirm Password not matching!!'))
  }

    var OPTIONS = {
       url: "http://ec2-54-160-169-131.compute-1.amazonaws.com:8080/auth/reset-password",
       method: "POST",
       data:{password : password},
       headers: {
         "content-type": "application/json",
         "Access-Control-Allow-Origin" : '*',
         //"Authorization" : props.token,
       }
     }
       axios(OPTIONS)
       .then((response) => {
        dispatch(updatepwdSuccess(response, 'Password changed'))
      })
      .catch((err) => {
        dispatch(updatepwdFail(err , 'Error While updating password!!'))
      })
   }
}




export default function adminlogut(token)
{
  return dispatch => {
    dispatch(LogOut())
   }
}