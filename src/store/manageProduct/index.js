const stateUI = {
  strSearch:"",
  typeProduct:"",
  sort:"",
  proId:""

}
export const productReducer = (state = stateUI, action) => {
  switch (action.type) {
    case "SEARCH":
      console.log(action.strSearch);
      return { ...state, strSearch: action.strSearch };
    case "TYPE_PRODUCT":
      console.log(action.typeProduct);
      return { ...state, typeProduct: action.typeProduct };
    case "SORT":
      return { ...state, sort: action.sort };
    case "ID_PRODUCT":
      return { ...state, proId: action.proId };
    default:
      return state;
  }
};
export default productReducer;
