import React,{ useState } from 'react'
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import { Login,updatepassword } from '../../redux/services/authServices';
import logo from '../public/images/logo.png';
import phoneimg from '../public/images/phone_img.png';
import { createBrowserHistory } from 'history';

export const browserHistory = createBrowserHistory();


function ResetpwdContainer(props) {

   const [confirmpassword, setConfirmpassword] = useState('');
   const [confirmPasswordError, setConfirmPasswordError] = useState("");
   const [password, setPassword] = useState('');
   const [cpassword, setcPassword] = useState('');
   const [msg, setMsg] = useState('');
   const [cpwderrors, setcpwdErrors] = useState('');
   const [pwderrors, setpwdErrors] = useState('');
   const [disable, setDisable] = useState(true);

     /*if(props.confirmpassword !== props.password)
        {
           return{
            msg:"password doen't match, please check"
           }
       }*/

    function handleChange(event) {
    console.log("event called");
     event.preventDefault();
    const { name, value } = event.target;
      switch (name) {
     
      case 'password': 
        if(value == ''){
            setpwdErrors('Password should not blank!!')
            setDisable(true)
            setPassword('');
        }else{
            setpwdErrors('');
            setPassword(value);
        }
        break;
      case 'cpassword': 
        console.log(password);
        if(value == ''){
            setcpwdErrors('Confirm password should not blank!!')
            setDisable(true)
            setcPassword('');
        }else if (value != password){
            setcpwdErrors('password and confirm password not matching!!');
            setDisable(true)
            setcPassword('');
        }
        else
        {
           setcpwdErrors('');
            setcPassword(value);
        }
        break;
      default:
        break;
    }
   
 
  }
   console.log(props);
   return ( 
     <div class="login_wrapper">
        <div class="container">
           
            <div class="login_header">
                <div class="row">
                    <div class="col-lg-6">
                         <img src={logo} />
                    </div>
                    <div class="col-lg-6 text-right">
                        <p>Don’t have an account? <a href="/register">Create Account</a></p>
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
                            <h3>Reset Password</h3>
                            <form>
                                <div class="form-group">
                                   <Form.Label>Password</Form.Label>
                                    <div class="input_border">
                                       <Form.Control name="password" type="password" defaultValue={props.password} onBlur={handleChange} onChange={handleChange}  required/>
                                       
                                       
                                    </div>    {
                                        pwderrors && <h7 style={{color: "#fff"}}>{pwderrors}</h7>
                                      }                         
                                </div>
                                <div class="form-group">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <div class="input_border">
                                          <Form.Control name="cpassword" type="password" defaultValue={props.confirmpassword} onBlur={handleChange} onChange={handleChange} required/>
                                          
                                    </div>{
                                        cpwderrors && <h7 style={{color: "#fff"}}>{cpwderrors}</h7>
                                      } 
                                </div>
                                /*<div class="forgot_link">
                                     <p><a href="/register">Create New Account</a></p>
                                </div>*/
                                <div class="login_btn">
                                    <Button  disabled={!cpassword || !password}  variant="primary" onClick={()=>props.updatepassword(password,confirmpassword)}>Reset Password</Button>
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
   
function validate()
{

}
const mapStatetoProps=(state)=>{
  /*  console.log(state);*/
    browserHistory.push('/resetpassword');

   return{
    username:state.auth.token,
    password:state.auth.password,
    msg:state.auth.msg
   }
  }
  
  const mapDispatchtoProps=(dispatch)=>{
   return{  
    updatepassword:function(password,confirmpassword){
    dispatch(updatepassword(password,confirmpassword));
        
   
   },
      
   }
  }
  

   export default connect(mapStatetoProps,mapDispatchtoProps)(ResetpwdContainer);
