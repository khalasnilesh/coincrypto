import React from "react";
import {connect} from 'react-redux';

import { Container,Row,Col,Form ,Button , Table} from 'react-bootstrap';
import { Navbar,Nav,NavDropdown } from 'react-bootstrap';

import { BrowserRouter as Router, Route, Link, Switch , Redirect ,useHistory   } from "react-router-dom";

import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import AuthLogin from './AuthComponent/Login';
import AuthRegister from './AuthComponent/Register';

  
class headerComponent extends React.Component {
    constructor(props) {


        super(props);
        this.state = {
          clientName: ''
        }
    }

    componentDidMount() {

      }

    

  render() {
      return(
          <div>
            
            <div>
            <Router>
            <Switch>  
             <Route exact path="/login" component={AuthLogin} />
              </Switch> 
            </Router>
            
        </div>
            
          </div>
      )
  }
}


const mapStatetoProps=(state)=>{

 }

 const mapDispatchtoProps=(dispatch)=>{


 }
export default connect(mapStatetoProps,mapDispatchtoProps)(headerComponent);
