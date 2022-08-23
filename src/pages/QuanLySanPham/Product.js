import React from 'react';
import Variants from './Variants';

class Product extends React.Component {
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
    /* this.props.ShowQuantity(qty) */
  }
  render() {
    const {item}  = this.props;
    
    return (
      <div className="group-category border-top pb-3">
          <div className="row m-0 p-0 pt-4 pb-4 row-hover">
            <div className="c-5 text-center">
              <input className="form-check-input" type="checkbox" defaultValue/>
            </div>
            <div className="row c-35 m-0">
              <div className="col-2 show-img">
                <img src={item.imgUrls[0]} alt={item.name}/>
              </div>
              <div className="col-10">
                {item.name}<br/>
                {/* <span className="text-black-50">Bình Nước: Ống hút<br/>
            Mã SKU NBH: 1768879222-1650809604005-1<br/>
            Thời gian giao hàng dự kiến: 28 Apr 2022 ~ 03 May 2022</span> */}
              </div>
            </div>
            <div className="c-15">
            {item.priceMin.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}-{item.priceMax.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}<sup>₫</sup> <i className="bi bi-pencil-fill text-black-50"></i>
            </div>
            <div className="c-15">
              {this.showQuantity(item.qty)} <i className="bi bi-pencil-fill text-black-50"></i>
            </div>
            <div className="c-15">
            <i className="bi bi-circle-fill text-warning"></i> {item.sysSuggest} <i className="bi bi-exclamation-circle text-black-50"></i>
            </div>
            <div className="c-15 text-primary">
              Chỉnh sửa <br/>xem thêm <i className="bi bi-chevron-down"></i>
            </div>
          </div>
          <div className="category">
            {
              item.variants.map((variant, index) =>{
                var imgs=item.imgUrls;
                return (
                  <Variants 
                    key={index} 
                    variant={variant} 
                    imgs={imgs}
                  />
                );
              })
            }
            
          </div>
        </div>
    );
  }
}
export default Product; 
