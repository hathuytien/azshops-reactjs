import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import AddNew from './AddNew';
import Demo from './Demo';


function Nav() {
  return (
    <nav aria-label="breadcrumb">
      {/* <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/">Trang chủ</Link><i className="bi bi-chevron-right"></i></li>
        <li className="breadcrumb-item"><Link to="/demo">Quản lý sản phẩm</Link><i className="bi bi-chevron-right"></i></li>
        <li className="breadcrumb-item active" aria-current="page">Thêm sản phẩm</li>
      </ol> */}
      <Link to="/">Trang chủ</Link>
      <Link to="/demo">Quản lý sản phẩm</Link>
      {/* <ul>
          <li><Route exact path="/" Component={AddNew}>Trang chủ</Route></li>
          <li><Route path="/demo" Component={Demo}>Quản lý sản phẩm</Route></li>
      </ul> */}
    </nav>
  );
}

export default Nav;
