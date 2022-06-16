import ReactDOM from 'react-dom';
import React from 'react';
import { connect } from 'react-redux';
import logo from './public/images/logo.png';
import phoneimg from './public/images/phone_img.png';
import {Button} from "react-bootstrap";
class SplashScreen extends React.Component {
 constructor(props) {
  super(props);
 }
 render() {
 
  return (
        <div class="login_wrapper">
        <div class="container">
           
            <div class="login_header">
                <div class="row">
                    <div class="col-lg-6">
                       <img src={logo} />
                    </div>
                    <div class="col-lg-6 text-right">
                        <p>Already have an account? <a href="/login">Log In</a></p>
                    </div>
                </div>
            </div>
          
            <div class="splash_sec">
                <div class="row">
                    <div class="col-md-5 text-center">
                        <img src={phoneimg} />
                    </div>
                    <div class="col-md-7">
                        <div class="splash_content">
                            <a href="/login" class="login_btn">Log In</a>
                            <a href="/register" class="signup_btn">Sign Up</a>
                        </div>    
                    </div>
                </div>                            
            </div>
        </div>        
    </div>
    );
  }
}
const mapStatetoProps=(state)=>{
    return{
    useverificationstatus:state.auth.useverificationstatus,
    msg:state.auth.msg
    }
   }
   
   const mapDispatchtoProps=(dispatch)=>{
    return{
       // signupUser:function(username,email,password,confirmPassword){
         //  dispatch(signupUser(username,email,password,confirmPassword));
       }
       
    }
   

export default connect(mapStatetoProps,mapDispatchtoProps)(SplashScreen);
