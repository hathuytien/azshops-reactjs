import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import AddNew from '../Component/AddNew';
import Demo from '../Component/Demo';

class Direction extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 

    };
  }
  render() {
    return (
      <div>
          {/* <ul>
            <li><Route exact path="/" Component={AddNew}>Trang chủ</Route></li>
            <li><Route path="/demo" Component={Demo}>Quản lý sản phẩm</Route></li>
          </ul> */}
      </div>
    );
  }
}
export default Direction;
