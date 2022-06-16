import React,{ useState } from 'react'
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import { Login } from '../../redux/services/authServices';
import logo from '../public/images/logo.png';
import phoneimg from '../public/images/phone_img.png';

function Register(props) {

   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [msg, setMsg] = useState('');
   const [errors, setErrors] = useState('');
   const [emailerrors, setemailErrors] = useState('');
   const [pwderrors, setpwdErrors] = useState('');
   const validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
   

    function handleChange(event) {
         /*  <Button variant="primary" onClick={()=>props.Login(email,password)}>Register</Button>*/
    console.log("event called");
    event.preventDefault();
    const { name, value } = event.target;
    console.log(name);
        switch (name) {
         
          case 'email': 
            if(!new RegExp( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)){
                setemailErrors('Enter a valid email address')
            }else{
                setemailErrors('');
            }
            break;
          case 'password': 
            if(!new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)){
                setpwdErrors('Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers')
            }else{
                setpwdErrors('');
            }
            break;
          default:
            break;
        }
    }
   return ( 
    <div class="login_wrapper">
        <div class="container">
           
            <div class="login_header">
                <div class="row">
                    <div class="col-lg-6">
                         <img src={logo} />
                    </div>
                    <div class="col-lg-6 text-right">
                        <p>Already Account? <a href="/login">Login</a></p>
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
                            <h3>Sign Up</h3>
                            <form>
                             <p>{props.msg}</p>
                                <div class="form-group">
                                   <Form.Label>Email</Form.Label>
                                    <div class="input_border">
                                       <Form.Control type="text" name="email" defaultValue={props.username} onChange={handleChange} />
                                    </div>
                                     {
                                        emailerrors && <h7 style={{color: "#fff"}}>{emailerrors}</h7>
                                      }                         
                                </div>
                                <div class="form-group">
                                    <Form.Label>Password</Form.Label>
                                    <div class="input_border">
                                       <Form.Control type="password" name="password" defaultValue={props.password} onChange={handleChange} />
                                     </div>
                                     {
                                        pwderrors && <h7 style={{color: "#fff"}}>{pwderrors}</h7>
                                      } 
                                </div>
                                <div class="forgot_link">
                                     <p><a href="/login">Login</a></p>
                                </div>
                                <div class="login_btn">
                                    <Button variant="primary" >Register</Button>

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
   
   
const mapStatetoProps=(state)=>{
    console.log(state);
   return{
    email:state.auth.email,
    msg:state.auth.msg
   }
  }
  
  const mapDispatchtoProps=(dispatch)=>{
   return{
      
      adminLogin:function(username,password){
       dispatch(Login(username,password));
   },
      
   }
  }
  

   export default connect(mapStatetoProps,mapDispatchtoProps)(Register);
