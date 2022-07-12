import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      strSearch   :'',
    };
    //bind đối tượng this cho từng function
    this.handleSearch     = this.handleSearch.bind(this);
    this.handleClear      = this.handleClear.bind(this);
    this.handleChange     = this.handleChange.bind(this);
  }
  handleSearch(){
    this.props.onClickGo(this.state.strSearch);
  }
  handleClear(){
    this.setState({strSearch: ''});
    this.props.onClickGo('');
  }
  handleChange(event){
    this.setState({
      strSearch: event.target.value
    })
  }
  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Name product" aria-describedby="button-addon2" value={this.state.strSearch} onChange={this.handleChange}/>
        <button onClick={this.handleSearch} className="btn btn-primary" type="button" id="button-addon2">Search</button>
        <button onClick={this.handleClear} className="btn btn-warning" type="button" id="button-addon2">Clear</button>
      </div>
    );
  }
}

export default Search;
