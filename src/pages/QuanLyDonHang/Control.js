import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { httpService } from '../../core/http-service';

function Control(props) {
  const [ListDelivery, setListDelivery] = useState([]);
  const [codeOrder, setCodeOrder] = useState("");
  const [delivery, setDelivery] = useState("");
  useEffect(() => {
    FDelivery();
  }, []);
  async function FDelivery() {
    let deliverys = await httpService.get('api/delivery/list');
    setListDelivery(deliverys.data);
  }
  function handleSubmit() {
    var params={
      invoidId: codeOrder, 
      deliveryId: delivery
    }
    props.handleSubmit(params);
  }
  return (
    <div className="row mb-3">
        <div className="col-4">
          <div className="input-group mb-3">
            <span className="btn border">Số đơn hàng</span>
            <input type="text" className="form-control" placeholder="Vui lòng nhập" aria-label="Text input with dropdown button" name="codeOrder" value={codeOrder} onChange={e => setCodeOrder(e.target.value)}/>
            <button className="btn btn-outline-secondary" type="button" id="button-addon1"><i className="bi bi-search"></i></button>
          </div>
        </div>
        <div className="col-3">
          <div className="input-group mb-3">
            
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
        <div className="col-2">
          <button className="btn btn-outline-primary" type="button" onClick={handleSubmit}><i className="bi bi-search"></i> Tìm kiếm</button>
        </div>
      </div>
  );
}
export default Control;
