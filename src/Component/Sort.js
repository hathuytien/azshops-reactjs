import React from 'react';

class Sort extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 
      
    };
    //bind đối tượng this cho từng function
    this.handleSort = this.handleSort.bind(this);
  }
  handleSort(orderBy, orderDir){
    this.props.onClickSort(orderBy, orderDir);
  }
  render() {
    let {orderBy, orderDir} = this.props;
    let strSort = orderBy + " - " + orderDir;
    return (
      <div className="btn-group">
        <button type="button" className="btn border-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Sort by
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" role="button" onClick={()=>this.handleSort('name', 'asc')}>Name - asc</a></li>
          <li><a className="dropdown-item" role="button" onClick={()=>this.handleSort('name', 'desc')}>Name - desc</a></li>
          <li><hr className="dropdown-divider" role="separator"/></li>
          <li><a className="dropdown-item" role="button" onClick={()=>this.handleSort('size', 'asc')}>Size - asc</a></li>
          <li><a className="dropdown-item" role="button" onClick={()=>this.handleSort('size', 'desc')}>Size - desc</a></li>
        </ul>
        <button type="button" className="btn btn-success ms-2">{strSort}</button>
      </div>
    );
  }
}

export default Sort;
