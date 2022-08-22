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

class ListProduct extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 
      ListProduct : [],
      ListType:[],
      ListSort:[],
      search:"name",
      text:"Tên sản phẩm",
      strSearch:"",
      type:"",
      sort:""
    };
    //bind đối tượng this cho từng function
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.FProduct = this.FProduct.bind(this);
    this.FSort = this.FSort.bind(this);
    this.FType = this.FType.bind(this);
  }
  componentWillMount() {
    this.FProduct();
    this.FType();
    this.FSort();
  }
  FProduct = () =>{
    let products = JSON.parse(localStorage.getItem('product'));
    axios
        .get('https://azshops.herokuapp.com/api/mst/product/manage', { params: { name: this.state.strSearch, proType: this.state.type, sortTpCd: this.state.sort} })
        .then((response) => {
          if(response.data.data!=[]){
            this.setState({
              ListProduct:response.data.data,
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
    })
  }
  FType = () =>{
    let types = JSON.parse(localStorage.getItem('type'));
    axios
        .get('https://azshops.herokuapp.com/api/mst/product/type')
        .then((response) => {
          if(response.data.data!=[]){
            this.setState({
              ListType:response.data.data,
            });
          }
          else{
            this.setState({
              ListType:types,
            });
          }
        })
        .catch((error) => {
          console.log('error', error)
    })
  }
  FSort = () =>{
    let sorts = JSON.parse(localStorage.getItem('sort'));
    axios
    .get('https://azshops.herokuapp.com/api/com/util/manage/sort')
    .then((response) => {
      if(response.data.data!=[]){
        this.setState({
          ListSort:response.data.data,
        });
      }
      else{
        this.setState({
          ListSort:sorts,
        });
      }
    })
    .catch((error) => {
      console.log('error', error)
})
  }
  handleSearch(search, text){
    this.setState({
      search:search,
      text:text
    });
  }

  handleChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.FProduct();
  }
  render() {
    const elmProduct = this.state.ListProduct.map((item, index) =>{
      return (
        <Product 
          key={index} 
          index={index} 
          item={item} 
        />
      ); 
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
        <form className="row mb-3" onSubmit={this.handleSubmit}>
          <div className="col-4">
            <div className="input-group mb-3">
              <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{this.state.text}</button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" role="button" onClick={()=>this.handleSearch('name','Tên sản phẩm')}>Tên sản phẩm</a></li>
                <li><a className="dropdown-item" onClick={()=>this.handleSearch('code','Mã sản phẩm')}>Mã sản phẩm</a></li>
                <li><a className="dropdown-item" onClick={()=>this.handleSearch('sku','Mã SKU nhà bán hàng')}>Mã SKU nhà bán hàng</a></li>
              </ul>
              <input type="text" className="form-control" placeholder="Vui lòng nhập" aria-label="Text input with dropdown button" name="strSearch" value={this.state.strSearch} onChange={this.handleChange}/>
              <button className="btn btn-outline-secondary" type="button" id="button-addon1"><i className="bi bi-search"></i></button>
            </div>
          </div>
          <div className="col-3">
            <div className="input-group mb-3">
              
              <span className="btn border">Ngành hàng</span>
              <select className="form-select" name="type" value={this.state.type} onChange={this.handleChange}>
                <option value="">Vui lòng chọn</option>
                {
                  this.state.ListType.map((type, key) =>{
                    return (
                      <option value={type.id} key={key}>{type.name}</option>
                    );
                  })
                }
              </select>
            </div>
          </div>
          <div className="col-3">
            <div className="input-group mb-3">
              <span className="btn border">Sắp xếp</span>
              <select className="form-select" name="sort" value={this.state.sort} onChange={this.handleChange}>
                <option value="">Vui lòng chọn</option>
                {
                  this.state.ListSort.map((sort, key) =>{
                    return (
                      <option value={sort.code} key={key}>{sort.name}</option>
                    );
                  })
                }
              </select>
            </div>
          </div>
          <div className="col-2">
            <button className="btn btn-outline-primary" type="submit"><i className="bi bi-search"></i> Tìm kiếm</button>
          </div>
        </form>
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
