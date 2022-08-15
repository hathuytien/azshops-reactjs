import axios from 'axios';

var redux = require('redux');

const orderInitialState = {
  elmQty : '123',
  LProduct:[]
}
//let List = JSON.parse(localStorage.getItem('product'));

const allReducer = (state = orderInitialState, action) => {
  switch (action.type) {
    case "Show_Quantity":
      let elmQty = "a";
      /* if(qty === 0){
        elmQty = <b className="text-danger">Hết hàng</b>
      } else {
        elmQty = <b>Còn {qty} sản phẩm</b>
      } */
      return state
    case "Show_List_Product":
      var products = JSON.parse(localStorage.getItem('product'));
      axios
          .get('https://azshops.herokuapp.com/api/mst/product/manage')
          .then((response) => {
            if(response.data!=[]){
              products = response.data
              /* this.setState({
                ListProduct:response.data,
              }); */
              console.log(products);
              
              state.setState({
                LProduct:response.data,
              });
              console.log(state.LProduct);
              return {...state, LProduct:products}
              
            }
            else{
              //products = []
              /* this.setState({
                ListProduct:products,
              }); */
              /* return {
                ...state, LProduct : []
              } */
            }
            
          })
          .catch((error) => {
            console.log('error', error)
      })
      /* return {
        ...state, LProduct : products
      } */
    default:
      return state
  }
}
var store = redux.legacy_createStore(allReducer);
export default store;