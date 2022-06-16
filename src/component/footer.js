import React from "react";
import {connect} from 'react-redux';

import { Container,Row,Col,Form ,Button , Table} from 'react-bootstrap';
import { Navbar,Nav,NavDropdown } from 'react-bootstrap';

import { BrowserRouter as Router, Route, Link, Switch , Redirect ,useHistory   } from "react-router-dom";

import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';


  
class footerComponent extends React.Component {
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
              <h2>Footer Section</h2>          
          </div>
      )
  }
}


export default footerComponent;
