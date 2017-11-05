import * as types from '../constants/ActionTypes';
export function ShowMsg(value)
{
  return (dispatch, getState) => {
    dispatch({
      type: types.SHOW,
      msg: 'user'});
  }
}
