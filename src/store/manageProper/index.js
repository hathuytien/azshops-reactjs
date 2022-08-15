const stateUI = {
  counterr: 1,
  listDelivery: []
}
export const counterReducer = (state = stateUI, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {...state, counterr: state.counterr + action.payload};
    case "DECREMENT":
      return {...state, counterr: state.counterr - action.payload};
    case "INIT":
        return {...state, listDelivery: action.payload};
    default:
      return state;
  }
};
export default counterReducer;
