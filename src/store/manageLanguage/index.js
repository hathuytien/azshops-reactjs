const stateUI = {
  counterr: 1,
  listMaster: [],
  listDetail: [],
  selectedMaster: null,
  newMaster: {
    content: '',
    locale: 'vi',
    key: ''
  },
  newDetail: {
    content: '',
    locale: 'vi'
  }
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
    case "UPDATE_NEW_LANGUAGE_ITEM":
      return { ...state, newDetail: action.payload };
    default:
      return state;
  }
};
export default languageReducer;
