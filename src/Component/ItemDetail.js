import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export function withRouter(ItemDetail){

  return(props)=>{

     const match  = {params: useParams()};
     return <ItemDetail {...props}  match = {match}/>
 }
}
class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 
      items : []
    };
  }
  showElementSize(size){
    let elmSize = <span className="badge bg-secondary">S</span>;
    if(size === 1){
      elmSize = <span className="badge bg-primary">M</span>
    } else if(size === 2){
      elmSize = <span className="badge bg-danger">L</span>
    }
    return elmSize;
  }
  to_slug(str){
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();     

    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');

    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');

    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');

    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');

    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');

    // return
    return str;
}
  UNSAFE_componentWillMount() {
    let items = JSON.parse(localStorage.getItem('product'));
    axios
      .get('https://azshops.herokuapp.com/api/mst/category?parentId=1')
      .then((response) => {
        if(response.data.data!=[]){
          this.setState({
            items:response.data.data,
          });
        }
        else{
          this.setState({
            items:items,
          });
        }
      })
      .catch((error) => {
        console.log('error', error)
      });
    }
 render() {
  /* let ItemDetail = this.state.items.map((item, index) =>{
    if(parseInt(this.props.match.params.id) == parseInt(item.id)){
      return (
        <div key={index} className="mb-5">
          <h3>{item.name}</h3>
          <p>Size: {this.showElementSize(item.parentId)}</p>
        </div>
      );
    }
  }) */
  let number = 0;
  /* let ListItem = this.state.items.map((item, index) =>{
    if(parseInt(this.props.match.params.id) != parseInt(item.id)){
      number++;
      return (
        <tr key={index}>
          <th className="text-center" scope="row">{number}</th>
          <td>{item.name}</td>
          <td className="text-center">{this.showElementSize(item.parentId)}</td>
          <td className="text-center">
              <a href={"/item-detail/" + item.id + "." + this.to_slug(item.name)} type="button" className="btn btn-info" items={this.props.items}><i className="bi bi-eye-fill"></i> View</a>
          </td>
        </tr>
      );
    }
  }) */
    return (
      <div>
        {/* {ItemDetail} */}
        <div>
          {
            this.state.items.map((item, index) =>{
              if(parseInt(this.props.match.params.id) == parseInt(item.id)){
                return (
                  <div key={index} className="mb-5">
                    <h3>{item.name}</h3>
                    <p>Size: {this.showElementSize(item.parentId)}</p>
                  </div>
                );
              }
            })
          }
        </div>
        <h2>List product similar</h2>
        <table className="table align-middle table-striped table-hover">
          <thead>
            <tr>
              <th className="text-center" scope="col">#</th>
              <th scope="col">Name product</th>
              <th className="text-center" scope="col">Size</th>
              <th className="text-center" scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {/* {ListItem} */}
            {
              this.state.items.map((item, index) =>{
                if(parseInt(this.props.match.params.id) != parseInt(item.id)){
                  number++;
                  if(number<=3){
                    return (
                      <tr key={index}>
                        <th className="text-center" scope="row">{number}</th>
                        <td>{item.name}</td>
                        <td className="text-center">{this.showElementSize(item.parentId)}</td>
                        <td className="text-center">
                            <a href={"/item-detail/" + item.id + "." + this.to_slug(item.name)} type="button" className="btn btn-info" items={this.props.items}><i className="bi bi-eye-fill"></i> View</a>
                        </td>
                      </tr>
                    );
                  }
                }
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}
export default withRouter(ItemDetail);
