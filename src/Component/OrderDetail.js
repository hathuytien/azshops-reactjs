import React from 'react';
//import logo from './logo.svg';
import Title from './Title';
import Control from './Control';
import Form from './Form';
import List from './List';
import {filter, includes, orderBy as funcOrderBy, remove, reject} from 'lodash';
/* import Direction from '../Router/Direction'; */
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
//const uuidv4 = require('uuid/v4');
import { getDatabase , ref, onValue , set, push , child , get , update} from "firebase/database";
import { collection, query, getDocs, deleteDoc } from "firebase/firestore"; 

class OrderDetail extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 
      
    };
    //bind đối tượng this cho từng function
    
  }
  render() {
    //console.log(this.props);
    const {detail}  = this.props;
    /* const elmDetail = detail.detail.map((item, index) =>{
      return (
        <div className="row" key={index}>
          <div className="col-2">
            <img src="" alt=""/>
          </div>
          <div className="col-8">
            {item.proNm}<br/>
            <span className="text-black-50">{item.proType} <br/> Mã SKU NBH: {item.proId}<br/>
  Thời gian giao hàng dự kiến: {item.planDeliveryTo}</span>
          </div>
          <div className="col-2 text-center text-black-50">
            {item.originPrice}₫<br/>
  <span className="text-primary">×{item.qty}</span>
          </div>
        </div>
      );
    }) */
    return (
      <div className="row mb-3">
        <div className="col-2">
          <img src="" alt=""/>
        </div>
        <div className="col-8">
          {detail.proNm}<br/>
          <span className="text-black-50">{detail.proType} <br/> Mã SKU NBH: {detail.proId}<br/>
Thời gian giao hàng dự kiến: {detail.planDeliveryTo}</span>
        </div>
        <div className="col-2 text-center text-black-50">
          {Number.parseInt(detail.originPrice).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}₫<br/>
<span className="text-primary">×{detail.qty}</span>
        </div>
      </div>
    );
  }
}

export default OrderDetail;
