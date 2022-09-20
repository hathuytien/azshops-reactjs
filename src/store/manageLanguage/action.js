import { httpService } from "../../core/http-service";
import { messageBox, TYPE } from "../../core/message-box";

// --------------------- MAIN PAGE --------------------------------
export const welcome = () => async (dispatch, getState) => {
  dispatch(loadMasterData()).then(()=>{
    let { languageReducer: { listMaster} } = getState();
    if (listMaster.length > 0) {
      dispatch(setSelectedMaster(listMaster[0]));
      dispatch(getDetail(listMaster[0].key));
    } else {
      dispatch(setSelectedMaster({}));
      dispatch({
        type: "DETAIL",
        payload: [],
      });
    }
  })
};

export const updateSearchCond = (cond) => {
  console.log(cond);
  return {
    type: "SEARCH_UPDATE",
    payload: cond,
  };
};

export const searchByCond = (cond) => async (dispatch, getState) => {
  dispatch(updateSearchCond(cond));
  dispatch(welcome());
};
// ---------------------- MASTER LIST -----------------------------
export const loadMasterData = () => async (dispatch, getState) => {
  let { languageReducer: { searchVal, defaultLocale} } = getState();
  let rs = await httpService.get('/api/com/lang/list', {locale: defaultLocale, searchVal: searchVal });
  dispatch({
    type: "INIT",
    payload: rs.data,
  })
};

export const setSelectedMaster = (master) => {
  return {
    type: "MASTER_SELECTED",
    payload: master,
  };
};

export const updateNewMaster = (newLanguageItem) => {
  return {
    type: "UPDATE_NEW_MASTER",
    payload: newLanguageItem,
  };
};

export const saveMaster = () => async (dispatch, getState) => {
  let { languageReducer: { newMaster, defaultLocale} } = getState();
  let data = {
    key: newMaster.key, 
    content: newMaster.content,
    locale: defaultLocale
  }
  let rs = await httpService.post('/api/com/lang/add', data);
  
  if (rs.responeCd === 'COM_010') {
    messageBox.show('COM_010', 'Ngôn ngữ này đã tồn tại!', TYPE.ALERT);
    return false;
  }
  
  if (rs.success) {
    let newItem = rs.newItem;
    // Reload master list
    dispatch(loadMasterData());
    // Set detail by new master item
    dispatch(setSelectedMaster(newItem));
    dispatch(getDetail(newItem.key));

    return true;
  }
};
export const deleteMasterItem = (item) => async (dispatch) => {

  let rs = await httpService.post('/api/com/lang/deleteByKey', {key: item.key})
  if (rs.success) {
    dispatch(welcome())
  }
};

// ---------------------- DETAIL LIST -----------------------------
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
  if (rs.responeCd === 'COM_010') {
    messageBox.show('COM_010', 'Ngôn ngữ này đã tồn tại!', TYPE.ALERT);
    return false;
  } else {
    dispatch(getDetail(selectedMaster.key))
  }
};

export const updateDetail = (updateDetail) => async (dispatch, getState) => {
  let { languageReducer: {selectedMaster} } = getState();
  let data = {
    id: updateDetail.id,
    key: selectedMaster.key, 
    content: updateDetail.content,
    locale: updateDetail.locale
  }
  let rs = await httpService.post('/api/com/lang/update', data);
  if (rs.success) {
    dispatch(getDetail(selectedMaster.key))
  }
};

export const deleteLanguageItem = (item) => async (dispatch, getState) => {
  let { languageReducer: { defaultLocale, selectedMaster} } = getState();
  if (item.locale === defaultLocale) {
    messageBox.show('0000', 'Cần duy trì tối thiểu 1 mô tả ngôn ngữ mặc định!', TYPE.ALERT);
    return;
  }

  let rs = await httpService.post('/api/com/lang/delete', {id: item.id})
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

export const updateDetailList = (detailList) => {
  console.log(detailList)
  return {
    type: "UPDATE_DETAIL_LIST",
    payload: detailList,
  };
};
