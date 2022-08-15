import React from 'react';
/* import Demo from './Component/Demo';
import AddNew from './Component/AddNew';
import { Routes, Route} from "react-router-dom"; */
import Nav from './Component/Nav';
import Direction from './Router/Direction';
import {app}  from './connectFirebase';
//import { getDatabase , ref, onValue } from "firebase/database";
/* import * as firebase from 'firebase/app'; */

class App extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 
      
    };
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Nav/>
          </div>
          <div className="col-10" style={{background: 'rgba(242,243,247,.8)'}}>
            <Direction/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
