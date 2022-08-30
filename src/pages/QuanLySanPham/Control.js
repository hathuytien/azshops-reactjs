import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { httpService } from '../../core/http-service';
import { useDispatch, useSelector } from "react-redux";
import { RsetStrSearch, RsetType, RsetSort, RsetIdProduct } from "../../store/manageProduct/action";

function Control(props) {
  const [ListType, setListType] = useState([]);
  const [ListSort, setListSort] = useState([]);
  const [search, setSearch] = useState("name");
  const [text, setText] = useState("Tên sản phẩm");
  const [strSearch, setStrSearch] = useState("");
  const [type, setType] = useState("");
  const [sort, setSort] = useState("");
  
  const dispatch = useDispatch();

  useEffect(() => {
    FType();
    FSort();
  }, [dispatch]);
  async function FType() {
    let types = await httpService.get('api/mst/product/type');
    setListType(types.data);
  }
  async function FSort() {
    let sorts  = await httpService.get('api/com/util/manage/sort');
    setListSort(sorts.data);
  }
  function handleSearch(search, text){
    setSearch(search);
    setText(text);
  }
  function handleSubmit() {
    //event.preventDefault();
    /* var params={
      name: strSearch, 
      proType: type, 
      sortTpCd: sort,
      search: search

      
    } */
    if(search=="name"){
      dispatch(RsetIdProduct(""));
      dispatch(RsetStrSearch(strSearch));
    }
    if(search=="code"){
      dispatch(RsetStrSearch(""));
      dispatch(RsetIdProduct(strSearch));
    }
    
    dispatch(RsetType(type));
    dispatch(RsetSort(sort));
    //RsetIdProduct(pr)
    //props.handleSubmit(params);
    //FProduct();
  }
  return(
    <div className="row mb-3">
      <div className="col-4">
        <div className="input-group mb-3">
          <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{text}</button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" role="button" onClick={()=>handleSearch('name','Tên sản phẩm')}>Tên sản phẩm</a></li>
            <li><a className="dropdown-item" onClick={()=>handleSearch('code','Mã sản phẩm')}>Mã sản phẩm</a></li>
            <li><a className="dropdown-item" onClick={()=>handleSearch('sku','Mã SKU nhà bán hàng')}>Mã SKU nhà bán hàng</a></li>
          </ul>
          <input type="text" className="form-control" placeholder="Vui lòng nhập" aria-label="Text input with dropdown button" name="strSearch" value={strSearch} onChange={e => setStrSearch(e.target.value)}/>
          <button className="btn btn-outline-secondary" type="button" id="button-addon1"><i className="bi bi-search"></i></button>
        </div>
      </div>
      <div className="col-3">
        <div className="input-group mb-3">
          
          <span className="btn border">Ngành hàng</span>
          <select className="form-select" name="type" value={type} onChange={e => setType(e.target.value)}>
            <option value="">Vui lòng chọn</option>
            {
              ListType.map((type, key) =>{
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
          <select className="form-select" name="sort" value={sort} onChange={e => setSort(e.target.value)}>
            <option value="">Vui lòng chọn</option>
            {
              ListSort.map((sort, key) =>{
                return (
                  <option value={sort.code} key={key}>{sort.name}</option>
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
  )
}
export default Control;
