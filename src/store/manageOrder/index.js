const stateUI = {
  codeOrder:"",
  delivery:"",
  startDate: "",
  endDate: ""
}
export const orderReducer = (state = stateUI, action) => {
  switch (action.type) {
    case "CODE_ORDER":
      return { ...state, codeOrder: action.codeOrder };
    case "DELIVERY":
      return { ...state, delivery: action.delivery };
    case "START_DATE":
      return { ...state, startDate: action.startDate };
    case "END_DATE":
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};
export default orderReducer;
