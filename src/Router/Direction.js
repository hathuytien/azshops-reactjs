import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

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
          <ul>
            <li><Link  to="/">Trang chủ</Link></li>
            <li><Link  to="/demo">Quản lý sản phẩm</Link></li>
          </ul>
      </div>
    );
  }
}
export default Direction;
