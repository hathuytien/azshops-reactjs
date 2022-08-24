import React, { useEffect, useState } from 'react';
import Order from './Order';
import Control from './Control';
import axios from 'axios';
import { connect } from 'react-redux';
import { httpService } from '../../core/http-service';

function ListOrder() {
  const [ListOrder, setListOrder] = useState([]);
  const [ListStatus, setListStatus] = useState([]);
  const [code, setCode] = useState("");
  const [codeOrder, setCodeOrder] = useState("");
  const [delivery, setDelivery] = useState("");
  useEffect(() => {
    FOrder();
    FStatus();
  }, []);
  async function FOrder() {
    let orders = await httpService.get('api/inv/manage', { status: code , invoidId: codeOrder, deliveryId: delivery });
    setListOrder(orders.data);
  }
  async function FStatus() {
    let status = await httpService.get('api/inv/status');
    setListStatus(status.data);
  }
  function handleClick(status){
    setCode(status);
    FOrder();
  }
  function handleSubmit(params) {
    setCodeOrder(params.invoidId); 
    setDelivery(params.deliveryId);
    FOrder();
  }
  return (
    <div className="pt-4 pb-4">
      <h2 className="mb-3">Quản lý đơn hàng</h2>
      <ul className="nav mb-4">
        <li className="nav-item" onClick={() =>handleClick("")} value="">
          <span className="nav-link active">All</span>
        </li>
        {
          ListStatus.map((item, index) =>{
            return (
              <li className="nav-item" key={index} onClick={() =>handleClick(item.code)} id={item.code} value={item.code}>
                <span className="nav-link">{item.name}</span>
              </li>
            );
          })
        }
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
      <Control handleSubmit={handleSubmit}/>
      {/* <form className="row mb-3" onSubmit={this.handleSubmit}>
        <div className="col-4">
          <div className="input-group mb-3">
            <span className="btn border">Số đơn hàng</span>
            <input type="text" className="form-control" placeholder="Vui lòng nhập" aria-label="Text input with dropdown button" name="codeOrder" value={this.state.codeOrder} onChange={this.handleChange}/>
            <button className="btn btn-outline-secondary" type="button" id="button-addon1"><i className="bi bi-search"></i></button>
          </div>
        </div>
        <div className="col-3">
          <div className="input-group mb-3">
            
            <span className="btn border">Loại vận chuyển</span>
            <select className="form-select" name="delivery" value={this.state.delivery} onChange={this.handleChange}>
              <option value="">Vui lòng chọn</option>
              {
                this.state.ListDelivery.map((delivery, key) =>{
                  return (
                    <option value={delivery.code} key={key}>{delivery.name}</option>
                  );
                })
              }
            </select>
          </div>
        </div>
        <div className="col-2">
          <button className="btn btn-outline-primary" type="submit"><i className="bi bi-search"></i> Tìm kiếm</button>
        </div>
      </form> */}
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
      { 
        ListOrder.map((item, index) =>{
          return (
            <Order 
              key={index} 
              item={item} 
            />
          );
        })
      }
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
