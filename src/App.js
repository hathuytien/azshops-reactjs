import React from 'react';
import Demo from './Component/Demo';
import AddNew from './Component/AddNew';
import { Routes, Route} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 
      
    };
  }
  render() {
    return (
      <Routes>
        <Route path="/" element={<AddNew />} />
        <Route path="demo" element={<Demo />} />
      </Routes>
    );
  }
}

export default App;
