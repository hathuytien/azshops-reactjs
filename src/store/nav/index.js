const stateUI = {
  mode: null,
  activeMenu: {}
}
export const navReducer = (state = stateUI, action) => {
  switch (action.type) {
    case "UPDATE_ACTIVE":
      return { ...state, activeMenu: action.payload };
    default:
      return state;
  }
};
export default navReducer;
