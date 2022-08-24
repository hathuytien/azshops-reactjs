const stateUI = {
  counterr: 1,
  listMaster: [],
  listDetail: [],
  selectedMaster: null
}
export const languageReducer = (state = stateUI, action) => {
  switch (action.type) {
    case "MASTER_SELECTED":
      return { ...state, selectedMaster: action.payload };
    case "DECREMENT":
      return { ...state, counterr: state.counterr - action.payload };
    case "INIT":
      return { ...state, listMaster: action.payload };
    case "DETAIL":
      return { ...state, listDetail: action.payload };
    default:
      return state;
  }
};
export default languageReducer;
