import * as types from '../constants/ActionTypes';
const initialState = {
  status: 'default',
  msg: '我是默认信息',
}
export default function Show(state = initialState, action) {
  switch (action.type) {
     case types.SHOW:
      return Object.assign({}, state, {
        status: 'showing',
        msg: action.msg
      });
    default:
      return state;
  }
}
