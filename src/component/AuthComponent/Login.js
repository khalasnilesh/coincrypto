import React,{ useState } from 'react'
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
import { BrowserRouter as Router, Route, useParams, useLocation ,Redirect } from "react-router-dom";
import {useNavigate} from "react-router-dom"

import {connect} from 'react-redux';
import { Login } from '../../redux/services/authServices';
import logo from '../public/images/logo.png';
import phoneimg from '../public/images/phone_img.png';
import Resetpwd from '../AuthComponent/Resetpwd';

import { createBrowserHistory } from 'history';
import useForm from './Hooks/useForm';
export const browserHistory = createBrowserHistory();


function LoginContainer(props) {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [msg, setMsg] = useState('');
   const [errors, setErrors] = useState('');
   const [emailerrors, setemailErrors] = useState('');
   const [pwderrors, setpwdErrors] = useState('');
   const [disable, setDisable] = useState(true);

   const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
/*   console.log(props.token);
*/   
 
    function handleChange(event) {
    //console.log("event called");
     event.preventDefault();
    const { name, value } = event.target;
    switch (name) {
     
      case 'email': 
        if(!new RegExp( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)){
            setemailErrors('Enter a valid email address')
            setDisable(true)
            setEmail('');
        }else{
            setemailErrors('');
            setEmail(value);
           // setDisable(false)
        }
        break;
      case 'password': 
        if(value == ''){
            setpwdErrors('Password should not blank!!')
            setDisable(true)
            setPassword('');

        }else{
            setpwdErrors('');
            setPassword(value);
            //setDisable(false)
        }
        break;
      default:
       // setDisable(false)
        break;
    }

  /*if(emailerrors != 'Enter a valid email address' && pwderrors != 'Password should not blank!!')
  {
    setDisable(false);
  }*/
  }
  
  console.log(props.email);
  console.log(props.password); 
 

   return ( 


     <div class="login_wrapper">
        <div class="container">
           
            <div class="login_header">
                <div class="row">
                    <div class="col-lg-6">
                         <img src={logo} />
                    </div>
                   <div class="col-lg-6 text-right">
                        <p>Don’t have an account? <a href="/register">Sign Up</a></p>
                    </div>
                </div>
            </div>
           
            <div class="login_sec">
                <div class="row">
                    <div class="col-md-5 text-center">
                       <img src={phoneimg} />
                    </div>
                    <div class="col-md-7">
                        <div class="login_form">
                            <h5 style={{color: "#fff"}}>{props.msg}</h5>
                            <h3>Log In</h3>
                            <form onSubmit={onSubmit} method="post">
                                <div class="form-group">
                                   <Form.Label>Email</Form.Label>
                                    <div class="input_border">
                                       <Form.Control type="email" name="email" defaultValue={props.email} onChange={handleChange} onBlur={handleChange} required />
                                    </div>  
                                     {
                                        emailerrors && <h7 style={{color: "#fff"}}>{emailerrors}</h7>
                                      }                          
                                </div>
                                <div class="form-group">
                                    <Form.Label>Password</Form.Label>
                                    <div class="input_border">
                                          <Form.Control type="password" name="password" defaultValue={props.password} onChange={handleChange} onBlur={handleChange} required/>

                                    </div>
                                     {
                                        pwderrors && <h7 style={{color: "#fff"}}>{pwderrors}</h7>
                                      }   
                                </div>
                                <div class="forgot_link">
                                     <p><a href="/register">Create New Account</a></p>
                                </div>
                                 
                                <div class="login_btn">
                                    <Button disabled={!email || !password} onClick={()=>props.Login(email,password)}  variant="primary" >Login</Button>
                                </div>                        
                            </form>
                        </div>
                    </div>
                </div>                                
            </div>
          
        </div>        
    </div>
   )
}
const onSubmit = async (event) => {
    console.log(this.props);
    event.preventDefault(); // Prevent default submission
}
const mapStatetoProps=(state)=>{
   console.log(state);
  /* return (
                 <Router >
                 <Route exact path="/resetpassword" component={Resetpwd} />
                 <Redirect to={{ pathname: '/resetpassword' }} />
                 </Router >
                 )*/
   return{
    token:state.auth.token,
    msg:state.auth.msg
   }
}
const mapDispatchtoProps=(dispatch)=>{
   return{  
    Login:function(email,password){
    dispatch(Login(email,password));
   },
 }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(LoginContainer);
