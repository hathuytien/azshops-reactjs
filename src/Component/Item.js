import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

class Item extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 

    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit   = this.handleEdit.bind(this);
  }
  handleEdit(item){
    console.log(item);
    this.props.onClickEdit(item);
  }
  handleDelete(id, key){
    this.props.onClickDelete(id, key);
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
  render() {
    const {item}  = this.props;
    const {index} = this.props;

    return (
      <tr>
        <th className="text-center" scope="row">{index + 1}</th>
        <td>{item.name}</td>
        <td className="text-center">{this.showElementSize(item.parentId)}</td>
        <td className="text-center">
          <div className="btn-group" role="group" aria-label="Basic mixed styles example">
            <button onClick={()=>this.handleEdit(item)} type="button" className="btn btn-warning"><i className="bi bi-pencil-square"></i> Edit</button>
            <button onClick={()=>this.handleDelete(item.id, item.key)} type="button" className="btn btn-danger"><i className="bi bi-trash-fill"></i> Delete</button>
            {/* <button onClick={"/list-product/" + item.id} type="button" className="btn btn-info"><i className="bi bi-eye-fill"></i> View</button> */}
            <a href={"/item-detail/" + item.id + "." + this.to_slug(item.name)} type="button" className="btn btn-info" items={this.props.items}><i className="bi bi-eye-fill"></i> View</a>
            {/* <Link to={"/list-product/"+item.id}>
              <Button type="button" className="btn btn-info">
                <i className="bi bi-eye-fill"></i> View</Button> 
            </Link> */}
          </div>
        </td>
      </tr>
    );
  }
}
export default Item;
