import { httpService } from "../../core/http-service";

export const setSelectedMaster = (master) => {
  return {
    type: "MASTER_SELECTED",
    payload: master,
  };
};

export const getDetail = (key) => async (dispatch) => {
  let rs = await httpService.get('/api/com/lang/detail', { key: key });
  dispatch({
    type: "DETAIL",
    payload: rs.data,
  });
};

export const saveDetail = () => async (dispatch, getState) => {
  let { languageReducer: { newDetail, selectedMaster} } = getState();
  let data = {
    key: selectedMaster.key, 
    content: newDetail.content,
    locale: newDetail.locale
  }
  let rs = await httpService.post('/api/com/lang/add', data);
  if (rs.success) {
    dispatch(getDetail(selectedMaster.key))
  }
};

export const deleteLanguageItem = (id) => async (dispatch, getState) => {
  let { languageReducer: { selectedMaster} } = getState();
  let rs = await httpService.post('/api/com/lang/delete', {id})
  console.log(rs)
  if (rs.success) {
    dispatch(getDetail(selectedMaster.key))
  }
};

export const updateNewDetail = (newLanguageItem) => {
  return {
    type: "UPDATE_NEW_LANGUAGE_ITEM",
    payload: newLanguageItem,
  };
};

export const welcome = () => async (dispatch) => {
  let rs = await httpService.get('/api/com/lang/list');
  dispatch({
    type: "INIT",
    payload: rs.data,
  })
};
