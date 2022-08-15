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
import { isContentEditable } from '@testing-library/user-event/dist/utils';

class Variants extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 
      
    };
    //bind đối tượng this cho từng function
    
  }
  showQuantity(qty){
    let elmQty = "";
    if(qty === 0){
      elmQty = <b className="text-danger">Hết hàng</b>
    } else {
      elmQty = <b>Còn {qty} sản phẩm</b>
    }
    return elmQty;
  }
  render() {
    //console.log(this.props);
    const {variant}  = this.props;
    return (
      <div className="row m-0 p-2 row-hover">
        <div className="c-5 text-center">
        </div>
        <div className="row c-35 m-0">
          <div className="col-2 show-img">
            <img src={this.props.imgs[0]} alt="" />
          </div>
          <div className="col-10">
            {variant.typeNm1}: {variant.typeVal1}, {variant.typeNm2}: {variant.typeVal2}<br/>
            {/* <span className="text-black-50">Bình Nước: Ống hút<br />
              Mã SKU NBH: 1768879222-1650809604005-1<br />
              Thời gian giao hàng dự kiến: 28 Apr 2022 ~ 03 May 2022</span> */}
          </div>
        </div>
        <div className="c-15">
          {variant.price.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} <sup>₫</sup>
        </div>
        <div className="c-15">
          {this.showQuantity(variant.qty)}
        </div>
        <div className="c-15">
        </div>
        <div className="c-15">
        </div>
      </div>
    );
  }
}

export default Variants;
