import { httpService } from "../../core/http-service";

export const increment = (number) => {
  return {
    type: "INCREMENT",
    payload: number,
  };
};
export const decrement = (number) => {
  console.log('sdf');
  return {
    type: "DECREMENT",
    payload: number,
  };
};
export const welcome = () => async (dispatch) =>{
  console.log('welcome')
  let rs = await httpService.get('/api/delivery/list');
  console.log(rs);
  dispatch( {
    type: "INIT",
    payload: rs.data,
  })
};
