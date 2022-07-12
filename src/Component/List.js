import React from 'react';
import Item from './Item';

class List extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 

    };
  }
  render() {
    const items   = this.props.items;
    const elmItem = items.map((item, index) =>{
      return (
        <Item 
          onClickEdit={this.props.onClickEdit}
          onClickDelete={this.props.onClickDelete} 
          key={index} 
          item={item} 
          index={index}
        />
      );
    })
    return (
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
          {elmItem}
          {/* <tr>
            <th>1</th>
            <td>Shirt</td>
            <td>S</td>
            <td>
              <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" className="btn btn-warning"><i className="bi bi-pencil-square"></i> Edit</button>
                <button type="button" className="btn btn-danger"><i className="bi bi-trash-fill"></i> Delete</button>
              </div>
            </td>
          </tr>
          <tr>
            <th>2</th>
            <td>Pant</td>
            <td>M</td>
            <td>
              <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" className="btn btn-warning"><i className="bi bi-pencil-square"></i> Edit</button>
                <button type="button" className="btn btn-danger"><i className="bi bi-trash-fill"></i> Delete</button>
              </div>
            </td>
          </tr>
          <tr>
            <th>3</th>
            <td>T-shirt</td>
            <td>L</td>
            <td>
              <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" className="btn btn-warning"><i className="bi bi-pencil-square"></i> Edit</button>
                <button type="button" className="btn btn-danger"><i className="bi bi-trash-fill"></i> Delete</button>
              </div>
            </td>
          </tr> */}
        </tbody>
      </table>
    );
  }
}
export default List;
