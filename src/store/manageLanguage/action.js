import { httpService } from "../../core/http-service";

export const setSelectedMaster = (master) => {
  return {
    type: "MASTER_SELECTED",
    payload: master,
  };
};
export const getDetail = (key) => async (dispatch) => {
  let rs = await httpService.get('/api/com/lang/detail', { key: key });
  console.log('action');
  dispatch({
    type: "DETAIL",
    payload: rs.data,
  });
};
export const welcome = () => async (dispatch) => {
  console.log('welcome')
  let rs = await httpService.get('/api/com/lang/list');
  dispatch({
    type: "INIT",
    payload: rs.data,
  })
};
