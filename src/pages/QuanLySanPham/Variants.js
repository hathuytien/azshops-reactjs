import React from 'react';

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
            <img src={variant.imgUrl} alt="" />
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
