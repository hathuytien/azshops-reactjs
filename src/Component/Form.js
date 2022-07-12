import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 
      product_id  : '',
      product_name: '',
      product_size: 0
    };
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.UpdateItem   = this.UpdateItem.bind(this);
  }
  componentWillMount(){
    this.UpdateItem(this.props.itemSelected)
  }
  componentWillReceiveProps(nextProps){
    this.UpdateItem(nextProps.itemSelected)
  }
  UpdateItem(item){
    if(item !== null){
      this.setState({
        product_id  : item.id,
        product_name: item.name,
        product_size: item.size
      })
    }
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
    let item = {
      id: this.state.product_id,
      name: this.state.product_name,
      size: this.state.product_size
    };
    this.props.onClickSubmit(item);
    event.preventDefault();
  }
  handleCancel(){
    this.props.onclickCancel();
  }
  render() {
    return (
      <form className="row justify-content-end mb-3" onSubmit={this.handleSubmit}>
        <div className="col-auto">
          <label className="visually-hidden" htmlFor="autoSizingInput">Name product</label>
          <input name="product_name" type="text" className="form-control" id="autoSizingInput" placeholder="Name product" value={this.state.product_name} onChange={this.handleChange} />
        </div>
        <div className="col-auto">
          <label className="visually-hidden" htmlFor="autoSizingSelect">Size</label>
          <select className="form-select" id="autoSizingSelect" name="product_size" value={this.state.product_size} onChange={this.handleChange}>
            <option value={0}>S</option>
            <option value={1}>M</option>
            <option value={2}>L</option>
          </select>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="button" onClick={this.handleCancel} className="btn border-secondary ms-2">Cancel</button>
        </div>
      </form>
    );
  }
}

export default Form;
