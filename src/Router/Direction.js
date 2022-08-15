import React from 'react';
import Demo from '../Component/Demo';
import AddNew from '../Component/AddNew';
import {Routes, Route} from "react-router-dom";
import ItemDetail from '../Component/ItemDetail';
import Samples from '../pages/Samples/ListSample'
import QuanLyDonHang from '../pages/QuanLyDonHang'

class Direction extends React.Component {
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
        <Route path="sample" element={<Samples />} />
        <Route path="item-detail/:id.:name" element={<ItemDetail />} />
        <Route path="order" element={<QuanLyDonHang />} />
      </Routes>
    );
  }
}
export default Direction;
