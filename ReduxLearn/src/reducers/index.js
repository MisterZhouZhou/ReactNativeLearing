import {combineReducers} from 'redux';
import loginIn from './Login';
import main from './Main';
const rootReducer = combineReducers({
  loginIn: loginIn,
  main: main
});

export default rootReducer;
