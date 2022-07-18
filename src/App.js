import React from 'react';
/* import Demo from './Component/Demo';
import AddNew from './Component/AddNew';
import { Routes, Route} from "react-router-dom"; */
import Nav from './Component/Nav';
import Direction from './Router/Direction';

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
          <div className="col-10">
            <Direction/>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
