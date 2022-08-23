import React, { useEffect, useState } from 'react';
import Product from './Product';
import Control from './Control';
import axios from 'axios';
import { httpService } from '../../core/http-service';
import { connect } from 'react-redux';

function ListProduct() {
  const [ListProduct, setListProduct] = useState([]);
  const [strSearch, setStrSearch] = useState("");
  const [type, setType] = useState("");
  const [sort, setSort] = useState("");
  const [proId, setProId] = useState("");
  
  useEffect(() => {
    FProduct();
  }, []);
  async function FProduct() {
    let products = await httpService.get('api/mst/product/manage', {proId: proId, name: strSearch, proType: type, sortTpCd: sort});
    setListProduct(products.data);
  }
  function handleSubmit(params) {
    if(params.search=="name"){
      setProId('');
      setStrSearch(params.name);
    }
    if(params.search=="code"){
      setStrSearch('');
      setProId(params.name);
    }

    setType(params.proType); 
    setSort(params.sortTpCd);
    FProduct();
  }
  return(
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
        <Control handleSubmit={handleSubmit} />
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
        {
          ListProduct.map((item, index) =>{
            return (
              <Product 
                key={index} 
                index={index} 
                item={item} 
              />
              );
          })
        }
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
  )
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
