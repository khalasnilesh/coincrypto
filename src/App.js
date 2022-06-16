import React, { Component } from 'react';
import jwt from "jsonwebtoken";
import { createBrowserHistory } from 'history';

import {Provider} from 'react-redux';
import { BrowserRouter, Route, Link } from "react-router-dom";
import HeaderComponent  from './component/header'

import store from './redux/store';

import MainContainer from './component/MainContainer';

import './App.css';

function App() {

  

  return (
    <Provider store={store}>
    <div className="App">
          <MainContainer></MainContainer>     
    </div>
    </Provider>
  );
}

export default App;