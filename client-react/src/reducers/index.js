import { combineReducers } from 'redux';
import tenantReducer from './tenantReducer';
import edituser from './edituser';


export default combineReducers({
  tenantReducer,
  edituser
})