import React from 'react';
import Demo from './Component/Demo';
import AddNew from './Component/AddNew';
import Direction from './Router/Direction';
import Nav from './Component/Nav';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 
      
    };
  }
  render() {
    return (
      <Router>
        <div>
          <Nav/>
            <Direction/>
        </div>
      </Router>
    );
  }
}

export default App;
