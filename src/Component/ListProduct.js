import React from 'react';
//import logo from './logo.svg';
import Product from './Product';
import {filter, includes, productBy as funcproductBy, remove, reject} from 'lodash';
/* import Direction from '../Router/Direction'; */
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
//const uuidv4 = require('uuid/v4');
import { getDatabase , ref, onValue , set, push , child , get , update} from "firebase/database";
import { collection, query, getDocs, deleteDoc } from "firebase/firestore"; 
import { connect } from 'react-redux';

const store = createStore(allReducers);

class ListProduct extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 
      ListProduct : []
    };
    //bind đối tượng this cho từng function
    
  }
  componentWillMount() {
    /* let products = JSON.parse(localStorage.getItem('product'));
    axios
        .get('https://azshops.herokuapp.com/api/mst/product/manage')
        .then((response) => {
          if(response.data!=[]){
            this.setState({
              ListProduct:response.data,
            });
          }
          else{
            this.setState({
              ListProduct:products,
            });
          }
        })
        .catch((error) => {
          console.log('error', error)
    }) */
    this.props.ShowListProduct();
    this.setState({
      ListProduct:this.props.LProduct
    });
  }
  render() {
    //console.log(this.state.ListProduct);
    /* console.log(this.props.ShowQuantity(20));
    console.log('elmQty ' + this.props.elmQty); */
    const elmProduct = this.state.ListProduct.map((item, index) =>{
      if(index < 5){
        return (
          <Product 
            key={index} 
            item={item} 
          />
        ); 
      }
    })
    return (
      <div className="pt-4 pb-4">
        <h2 className="mb-3">Quản lý sản phẩm</h2>
        <ul className="nav mb-4">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Tất cả</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Đang hoạt động</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Không hoạt động</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Bản nháp</a>
          </li>
        </ul>
        <div className="bg-w mb-3 rounded-3">
        <div className="row m-0 p-0 pt-3 pb-3">
          <div className="c-5 text-center">
            <input className="form-check-input" type="checkbox" defaultValue/>
          </div>
          <div className="c-35">
            Thông tin sản phẩm
          </div>
          <div className="c-15">
            Giá
          </div>
          <div className="c-15">
            Kho
          </div>
          <div className="c-15">
            Điểm nội dung
          </div>
          <div className="c-15">
            
          </div>
        </div>
        {elmProduct}
        {/* <div className="group-category border-top pt-3 pb-3">
          <div className="row m-0 p-0 pt-1 pb-1">
            <div className="c-5 text-center">
              <input className="form-check-input" type="checkbox" defaultValue/>
            </div>
            <div className="row c-35 m-0">
              <div className="col-2">
                <img src="" alt=""/>
              </div>
              <div className="col-10">
                <span className="text-black-50">Bình Nước: Ống hút<br/>
            Mã SKU NBH: 1768879222-1650809604005-1<br/>
            Thời gian giao hàng dự kiến: 28 Apr 2022 ~ 03 May 2022</span>
              </div>
            </div>
            <div className="c-15">
              1000₫ <i className="bi bi-pencil-fill text-black-50"></i>
            </div>
            <div className="c-15">
              <b className="text-danger">Hết hàng</b> <i className="bi bi-pencil-fill text-black-50"></i>
            </div>
            <div className="c-15">
            <i class="bi bi-circle-fill text-warning"></i> Cần cải thiện <i className="bi bi-exclamation-circle text-black-50"></i>
            </div>
            <div className="c-15 text-primary">
              Chỉnh sửa <br/>xem thêm <i className="bi bi-chevron-down"></i>
            </div>
          </div>
          <div className="category">
            <div className="row m-0 p-2">
              <div className="c-5 text-center">
                
              </div>
              <div className="row c-35 m-0">
                <div className="col-2">
                  <img src="" alt=""/>
                </div>
                <div className="col-10">
                  <span className="text-black-50">Bình Nước: Ống hút<br/>
              Mã SKU NBH: 1768879222-1650809604005-1<br/>
              Thời gian giao hàng dự kiến: 28 Apr 2022 ~ 03 May 2022</span>
                </div>
              </div>
              <div className="c-15">
                1000₫
              </div>
              <div className="c-15">
                <b className="text-danger">Hết hàng</b>
              </div>
              <div className="c-15">
              
              </div>
              <div className="c-15">
                
              </div>
            </div>
            <div className="row m-0 p-2">
              <div className="c-5 text-center">
                
              </div>
              <div className="row c-35 m-0">
                <div className="col-2">
                  <img src="" alt=""/>
                </div>
                <div className="col-10">
                  <span className="text-black-50">Bình Nước: Ống hút<br/>
              Mã SKU NBH: 1768879222-1650809604005-1<br/>
              Thời gian giao hàng dự kiến: 28 Apr 2022 ~ 03 May 2022</span>
                </div>
              </div>
              <div className="c-15">
                1000₫
              </div>
              <div className="c-15">
                <b className="text-danger">Hết hàng</b>
              </div>
              <div className="c-15">
              
              </div>
              <div className="c-15">
                
              </div>
            </div>
          </div>
        </div>
        <div className="group-category border-top pt-3 pb-3">
          <div className="row m-0 p-0 pt-1 pb-1">
            <div className="c-5 text-center">
              <input className="form-check-input" type="checkbox" defaultValue/>
            </div>
            <div className="row c-35 m-0">
              <div className="col-2">
                <img src="" alt=""/>
              </div>
              <div className="col-10">
                <span className="text-black-50">Bình Nước: Ống hút<br/>
            Mã SKU NBH: 1768879222-1650809604005-1<br/>
            Thời gian giao hàng dự kiến: 28 Apr 2022 ~ 03 May 2022</span>
              </div>
            </div>
            <div className="c-15">
              1000₫ <i className="bi bi-pencil-fill text-black-50"></i>
            </div>
            <div className="c-15">
              <b className="text-danger">Hết hàng</b> <i className="bi bi-pencil-fill text-black-50"></i>
            </div>
            <div className="c-15">
            <i class="bi bi-circle-fill text-warning"></i> Cần cải thiện <i className="bi bi-exclamation-circle text-black-50"></i>
            </div>
            <div className="c-15 text-primary">
              Chỉnh sửa <br/>xem thêm <i className="bi bi-chevron-down"></i>
            </div>
          </div>
          <div className="category">
            <div className="row m-0 p-2">
              <div className="c-5 text-center">
                
              </div>
              <div className="row c-35 m-0">
                <div className="col-2">
                  <img src="" alt=""/>
                </div>
                <div className="col-10">
                  <span className="text-black-50">Bình Nước: Ống hút<br/>
              Mã SKU NBH: 1768879222-1650809604005-1<br/>
              Thời gian giao hàng dự kiến: 28 Apr 2022 ~ 03 May 2022</span>
                </div>
              </div>
              <div className="c-15">
                1000₫
              </div>
              <div className="c-15">
                <b className="text-danger">Hết hàng</b>
              </div>
              <div className="c-15">
              
              </div>
              <div className="c-15">
                
              </div>
            </div>
            <div className="row m-0 p-2">
              <div className="c-5 text-center">
                
              </div>
              <div className="row c-35 m-0">
                <div className="col-2">
                  <img src="" alt=""/>
                </div>
                <div className="col-10">
                  <span className="text-black-50">Bình Nước: Ống hút<br/>
              Mã SKU NBH: 1768879222-1650809604005-1<br/>
              Thời gian giao hàng dự kiến: 28 Apr 2022 ~ 03 May 2022</span>
                </div>
              </div>
              <div className="c-15">
                1000₫
              </div>
              <div className="c-15">
                <b className="text-danger">Hết hàng</b>
              </div>
              <div className="c-15">
              
              </div>
              <div className="c-15">
                
              </div>
            </div>
          </div>
        </div> */}
        </div>
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
/* export default ListProduct; */
const mapStateToProps = (state, ownProps) => {
  return {
    elmQty: state.elmQty,
    LProduct: state.LProduct
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ShowQuantity: (qty) => {
      dispatch({type:"Show_Quantity", qty})
    },
    ShowListProduct: () => {
      dispatch({type:"Show_List_Product"})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);
