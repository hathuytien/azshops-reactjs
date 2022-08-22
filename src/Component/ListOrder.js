import React from 'react';
//import logo from './logo.svg';
import Order from './Order';
import {filter, includes, orderBy as funcOrderBy, remove, reject} from 'lodash';
/* import Direction from '../Router/Direction'; */
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
//const uuidv4 = require('uuid/v4');
import { getDatabase , ref, onValue , set, push , child , get , update} from "firebase/database";
import { collection, query, getDocs, deleteDoc } from "firebase/firestore"; 
import { connect } from 'react-redux';

class ListOrder extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 
      ListOrder : [], 
      ListStatus:[]
    };
    //bind đối tượng this cho từng function
    this.handleClick  = this.handleClick .bind(this);
  }
  UNSAFE_componentWillMount() {
    let orders = JSON.parse(localStorage.getItem('order'));
    let status = JSON.parse(localStorage.getItem('status'));
    axios
        .get('https://azshops.herokuapp.com/api/inv/manage')
        .then((response) => {
          if(response.data.data!=[]){
            this.setState({
              ListOrder:response.data.data,
            });
          }
          else{
            this.setState({
              ListOrder:orders,
            });
          }
        })
        .catch((error) => {
          console.log('error', error)
    })
    axios
        .get('https://azshops.herokuapp.com/api/inv/status')
        .then((response) => {
          if(response.data.data!=[]){
            this.setState({
              ListStatus:response.data.data,
            });
          }
          else{
            this.setState({
              ListStatus:status,
            });
          }
        })
        .catch((error) => {
          console.log('error', error)
    })
  }
  handleClick (code){
    let orders = JSON.parse(localStorage.getItem('order'));
    axios
        .get('https://azshops.herokuapp.com/api/inv/manage', { params: { status: code } })
        .then((response) => {
          if(response.data.data!=[]){
            this.setState({
              ListOrder:response.data.data,
            });
          }
          else{
            this.setState({
              ListOrder:orders,
            });
          }
        })
        .catch((error) => {
          console.log('error', error)
    })
  }
  render() {
    //console.log(this.state.ListOrder);
    //console.log(this.props);
    const elmOrder = this.state.ListOrder.map((item, index) =>{
      return (
        <Order 
          key={index} 
          item={item} 
        />
      );
    })
    const elmStatus = this.state.ListStatus.map((item, index) =>{
      return (
        <li className="nav-item" key={index} onClick={() =>this.handleClick(item.code)} id={item.code} value={item.code}>
          <span className="nav-link">{item.name}</span>
        </li>
      );
    })
    return (
      <div className="pt-4 pb-4">
        <h2 className="mb-3">Quản lý đơn hàng</h2>
        <ul className="nav mb-4">
          {elmStatus}
          {/* <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Tất cả</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Chưa thanh toán</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Chờ đóng gói & bàn giao</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Đang vận chuyển</a>
          </li> */}
        </ul>
        <div className="row bg-w m-0 mb-3 p-0 pt-3 pb-3 rounded-pill">
          <div className="c-5">

          </div>
          <div className="c-35">
            Sản phẩm
          </div>
          <div className="c-10 text-center">
            Tổng cộng
          </div>
          <div className="c-10 text-center">
            Giao hàng
          </div>
          <div className="c-20">
            Trạng thái
          </div>
          <div className="c-20">
            Thao tác
          </div>
        </div>
        { elmOrder }
        <nav aria-label="...">
          <ul className="pagination">
            <li className="page-item disabled">
              <a className="page-link">Previous</a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item active" aria-current="page">
              <a className="page-link" href="#">2</a>
            </li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
/* export default ListOrder; */
const mapStateToProps = (state, ownProps) => {
  return {
    Order: state
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ShowListOrder: () => {
      dispatch({type:"SHOW_LIST_ORDER"})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListOrder);
