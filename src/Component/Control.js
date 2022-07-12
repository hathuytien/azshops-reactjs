import React from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      
    };
    //bind đối tượng this cho từng function
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleAdd(){
    this.props.onClickAdd();
  }
  render() {
    let {orderBy, orderDir} = this.props;
    let elmButton = <button onClick={this.handleAdd} type="button" className="btn btn-primary col-12 mb-3">Add</button>;
    if(this.props.isShowForm === true){
      elmButton = <button onClick={this.handleAdd} type="button" className="btn btn-success col-12 mb-3">Close</button>;
    }
    return (
      <div className="row">
          <div className="col-4 mb-3">
            <Search onClickGo={this.props.onClickSearchGo}/>
          </div>
          <div className="col-3 mb-3">
            <Sort
              onClickSort={this.props.onClickSort}
              orderBy={orderBy}
              orderDir={orderDir}
            />
          </div>
          <div className="col-5">
            {elmButton}
          </div>
        </div>
    );
  }
}

export default Control;
