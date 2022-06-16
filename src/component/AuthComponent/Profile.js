import React,{ useState } from 'react'
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import { adminLogin } from '../../redux/services/adminServices';



function AdminProfile(props) {

   const [email, setEmail] = useState(props.email);
   const [password, setPassword] = useState('');
   const [image , setImage] = useState('');

   return ( 
       <Container>
       <Row>
       <Col>
       <h1>Update Profile</h1>
       <Form className="form">     
   <p>{props.msg}</p>
 <Form.Group >
   <Form.Label>E-Mail</Form.Label>
   <Form.Control type="text" defaultValue={props.email} onChange={e=>setEmail(e.target.value)} />
 
 </Form.Group>
 
 <Form.Group >
   <Form.Label>Password</Form.Label>
   <Form.Control type="password" defaultValue={props.password} onChange={e=>setPassword(e.target.value)} />
 
 </Form.Group>
 <p><a href="/AdminRegister">Create New Account</a></p>
 <Button variant="primary" onClick={()=>props.adminLogin(email,password)}>Login</Button>
 </Form>
  </Col>
       <Col>
           
  </Col>
  
      </Row>
       </Container>
   )
   
   }
   
   
const mapStatetoProps=(state)=>{
   return{
      email:state.admin.loginUserDetails.email,
      password:state.admin.password,
      msg:state.admin.msg
   }
  }
  
  const mapDispatchtoProps=(dispatch)=>{
   return{
      
      adminLogin:function(username,password){
       dispatch(adminLogin(username,password));
   },
      
   }
  }
  

   export default connect(mapStatetoProps,mapDispatchtoProps)(AdminProfile);
