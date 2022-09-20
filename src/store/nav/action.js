export const setActiveMenu = (menuItem) => {
  return {
    type: "UPDATE_ACTIVE",
    payload: menuItem,
  }
};
