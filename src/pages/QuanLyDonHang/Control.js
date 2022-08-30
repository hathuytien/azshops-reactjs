import React, { useEffect, useState } from 'react';
import { httpService } from '../../core/http-service';
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { RsetCodeOrder, RsetDelivery, RsetStartDate, RsetEndDate } from "../../store/manageOrder/action";

function Control(props) {
  const [ListDelivery, setListDelivery] = useState([]);
  const [codeOrder, setCodeOrder] = useState("");
  const [delivery, setDelivery] = useState("");
  const [startDate, setStartDate] = useState(new Date);
  const [endDate, setEndDate] = useState(new Date);
  
  const dispatch = useDispatch();

  useEffect(() => {
    FDelivery();
  }, [dispatch]);
  async function FDelivery() {
    let deliverys = await httpService.get('api/delivery/list');
    setListDelivery(deliverys.data);
  }
  function handleSubmit() {
    dispatch(RsetCodeOrder(codeOrder));
    dispatch(RsetDelivery(delivery));
    dispatch(RsetStartDate(startDate));
    dispatch(RsetEndDate(endDate));
  }
  return (
    <div className="row mb-3 bg-w m-0 p-1 pt-3 pb-3 rounded-pill">
        <div className="col-4">
          <div className="input-group">
            <span className="btn border">Số đơn hàng</span>
            <input type="text" className="form-control" placeholder="Vui lòng nhập" aria-label="Text input with dropdown button" name="codeOrder" value={codeOrder} onChange={e => setCodeOrder(e.target.value)}/>
            <button className="btn btn-outline-secondary" type="button" id="button-addon1"><i className="bi bi-search"></i></button>
          </div>
        </div>
        <div className="col-3">
          <div className="input-group">
            <span className="btn border">Loại vận chuyển</span>
            <select className="form-select" name="delivery" value={delivery} onChange={e => setDelivery(e.target.value)}>
              <option value="">Vui lòng chọn</option>
              {
                ListDelivery.map((delivery, key) =>{
                  return (
                    <option value={delivery.code} key={key}>{delivery.name}</option>
                  );
                })
              }
            </select>
          </div>
        </div>
        <div className="col-1">
          <DatePicker className="input-group"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
        </div>
        <div className="col-1">
          <DatePicker className="input-group"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
        </div>
        <div className="col-2">
          <button className="btn btn-outline-primary" type="button" onClick={handleSubmit}><i className="bi bi-search"></i> Tìm kiếm</button>
        </div>
      </div>
  );
}
export default Control;
