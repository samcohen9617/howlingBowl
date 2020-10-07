import React, {Component} from 'react';
import InputPreview from '../components/InputPreview';
import {connect} from 'react-redux';
import {setMessage} from '../actions/message';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
//const db = require('../db');
import 'bootstrap';
import logo from '../images/howling_bowl_logo.jpg'
class App extends Component {
    _
    render () {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%"
          }}
        ><Link to="/welcome">
         <img src={logo} alt="Logo" style={{width: "400px"}} />
         </Link>
        </div>
      )
    }
  }
  export default connect(state => state)(App);