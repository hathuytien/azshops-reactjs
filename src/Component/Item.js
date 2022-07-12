import React from 'react';

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
    this.props.onClickEdit(item);
  }
  handleDelete(id){
    this.props.onClickDelete(id);
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
  render() {
    const {item}  = this.props;
    const {index} = this.props;

    return (
      <tr>
        <th className="text-center" scope="row">{index + 1}</th>
        <td>{item.name}</td>
        <td className="text-center">{this.showElementSize(item.size)}</td>
        <td className="text-center">
          <div className="btn-group" role="group" aria-label="Basic mixed styles example">
            <button onClick={()=>this.handleEdit(item)} type="button" className="btn btn-warning"><i className="bi bi-pencil-square"></i> Edit</button>
            <button onClick={()=>this.handleDelete(item.id)} type="button" className="btn btn-danger"><i className="bi bi-trash-fill"></i> Delete</button>
          </div>
        </td>
      </tr>
    );
  }
}
export default Item;
