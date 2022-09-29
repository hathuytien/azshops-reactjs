import React, { useEffect, useState } from 'react';
import Order from './Order';
import Control from './Control';

import { httpService } from '../../core/http-service';
import "./react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";

function ListOrder() {
  const [ListOrder, setListOrder] = useState([]);
  const [ListStatus, setListStatus] = useState([]);
  const [code, setCode] = useState("");

  const codeOrder = useSelector((state) => state.orderReducer.codeOrder);
  const delivery = useSelector((state) => state.orderReducer.delivery);
  const startDate = useSelector((state) => state.orderReducer.startDate);
  const endDate = useSelector((state) => state.orderReducer.endDate);

  const dispatch = useDispatch();

  useEffect(() => {
    FOrder();
    FStatus();
  }, [codeOrder, delivery, startDate, endDate]);
  async function FOrder() {
    let orders = await httpService.get('api/inv/manage', { status: code , invoidId: codeOrder, deliveryId: delivery, createdFmDt: startDate, createdToDt:endDate });
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
  /* useEffect(() => {
    FOrder();
  }); */
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
      </ul>
      <Control/>
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
export default ListOrder;
