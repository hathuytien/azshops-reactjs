const stateUI = {
  counterr: 1,
  searchVal: '',
  listMaster: [],
  listDetail: [],
  localeList: [{
    value: 'en',
    label: 'English',
  },
  {
    value: 'ch',
    label: 'China',
  },
  {
    value: 'vi',
    label: 'Việt nam',
  }],
  selectedMaster: {},
  defaultLocale: 'vi',
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
    case "INIT":
      return { ...state, listMaster: action.payload };
    case "SEARCH_UPDATE":
      return { ...state, searchVal: action.payload };
    case "MASTER_SELECTED":
      return { ...state, selectedMaster: action.payload };
    case "UPDATE_NEW_MASTER":
      return { ...state, newMaster: action.payload };
    case "DETAIL":
      return { ...state, listDetail: action.payload };
    case "UPDATE_NEW_LANGUAGE_ITEM":
      return { ...state, newDetail: action.payload };
    case "UPDATE_DETAIL_LIST":
      return { ...state, listDetail: action.payload };
    default:
      return state;
  }
};
export default languageReducer;
