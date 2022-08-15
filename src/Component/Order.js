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

class Order extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 
      
    };
    //bind đối tượng this cho từng function
    
  }
  render() {
    const {item}  = this.props;
    return (
      <div className="bg-w rounded-3 mb-3">
          <div className="row m-0 p-0 pt-3 pb-3 border-bottom">
            <div className="c-5 text-center">
              <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
            </div>
            <div className="c-35">
              <i className="bi bi-person-circle text-primary"></i> <span className="phone text-primary">0812944844</span> <i className="bi bi-messenger text-primary"></i> <span className="quantity">({item.qty} Sản phẩm)</span>
            </div>
            <div className="c-10">
              
            </div>
            <div className="c-10">
            
            </div>
            <div className="c-20 text-black-50">
              Số đơn hàng: <span className="text-primary">350373360523120</span>
            </div>
            <div className="c-20 text-black-50">
              Thời gian tạo: 27 Apr 2022 21:29
            </div>
          </div>
          <div className="row m-0 mb-3 p-0 pt-3 pb-3 ">
            <div className="c-5">

            </div>
            <div className="row c-35 m-0">
              <div className="col-2">
                <img src={item.imgUrls[0]} alt=""/>
              </div>
              <div className="col-8">
                {item.name}<br/>
                <span className="text-black-50">Bình Nước: Ống hút<br/>
Mã SKU NBH: 1768879222-1650809604005-1<br/>
Thời gian giao hàng dự kiến: 28 Apr 2022 ~ 03 May 2022</span>
              </div>
              <div className="col-2 text-center text-black-50">
                {item.price}₫<br/>
<span className="text-primary">×1</span>
              </div>
            </div>
            <div className="c-10 text-center text-black-50">
              13,800₫<br/>
              <span className="badge rounded-pill bg-primary">CODE</span>
            </div>
            <div className="c-10 text-center">
              Tiêu chuẩn
            </div>
            <div className="c-20">
              Đã hủy <br/>
              <span className="text-black-50"><i className="bi bi-printer"></i> Mã vận đơn <i className="bi bi-printer"></i> Hóa đơn <br/>
              <i className="bi bi-printer"></i> Danh sách chọn<br/>
              Lý do hủy: [Seller] Hủy bởi nhà bán hàng do sai giá<br/>
Thời gian hủy: 27 Apr 2022 23:39</span>
            </div>
            <div className="c-20">
              <button type="button" className="btn btn-primary">IN HÓA ĐƠN</button>
            </div>
          </div>
        </div>
    );
  }
}

export default Order;
