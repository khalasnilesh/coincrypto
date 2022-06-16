import React, {useEffect, useState} from 'react';
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';

import { connect } from 'react-redux';
import {useSelector, useDispatch} from 'react-redux';

import { BrowserRouter as Router, Route, useParams, useLocation ,Redirect } from "react-router-dom";
import { checkuserbyemail } from "../redux/services/authServices";

import HeaderComponent from './header'; 
import FooterComponent from './footer'; 
import SplashScreen from './SplashScreen';

import AuthLogin from './AuthComponent/Login';
import Resetpwd from './AuthComponent/Resetpwd';
import AuthRegister from './AuthComponent/Register';
import AuthResetPassword from './AuthComponent/Resetpwd';

function MainContainer(props) {

    const [useverificationstatus, setuseverificationstatus] = useState('');


var results = new RegExp('[\?&]email=([^&#]*)').exec(window.location.href);
if(results)
{
    var hmac = new RegExp('[\?&]x-coinspaze-hmac=([^&#]*)').exec(window.location.href)
    console.log(hmac[1]);

    var client_id = new RegExp('[\?&]x-coinspaze-client-id=([^&#]*)').exec(window.location.href)
    console.log(client_id[1]);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(checkuserbyemail(results[1] , hmac[1], client_id[1]))
    }, []);
    let useverificationstatus = useSelector(state=>state.auth.useverificationstatus);
    console.log(useverificationstatus);

    if(useverificationstatus == 'true')
    {
        console.log(useverificationstatus);

        return (
                 <Router >
                 <Route exact path="/login" component={AuthLogin} />
                 <Route exact path="/resetpassword" component={Resetpwd} />
                 <Redirect to={{ pathname: '/login' }} />
                 </Router >
                 )
        
    }
    else
    {       console.log(useverificationstatus);
           return (
            
                    <div>
                        <h2> {props.msg} </h2>
                    </div>
                
             )
    }
    
}
else
{   
    console.log('root component');
    return (
    <>  
                    
                    <Router>
                        
                        <Route exact path="/login" component={AuthLogin} />
                        <Route exact path="/resetpassword" component={Resetpwd} />
                        <Route exact path="/" component={SplashScreen} />
                    </Router>
                </>
                )
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
   

export default connect(mapStatetoProps,mapDispatchtoProps)(MainContainer);
