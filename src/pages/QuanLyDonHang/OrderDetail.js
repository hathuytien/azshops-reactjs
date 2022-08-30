import React from 'react';

class OrderDetail extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 
      
    };
    //bind đối tượng this cho từng function
    
  }
  render() {
    const {detail}  = this.props;
    return (
      <div className="row mb-3">
        <div className="col-2">
          <img src={detail.imgUrl} alt=""/>
        </div>
        <div className="col-8">
          {detail.proNm}<br/>
          <span className="text-black-50">{detail.proType} <br/> Mã SKU NBH: {detail.skuShop}<br/>
Thời gian giao hàng dự kiến: {detail.planDeliveryTo}</span>
        </div>
        <div className="col-2 text-center text-black-50">
          {Number.parseInt(detail.totalPrice).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}₫<br/>
<span className="text-primary">×{detail.qty}</span>
        </div>
      </div>
    );
  }
}

export default OrderDetail;
