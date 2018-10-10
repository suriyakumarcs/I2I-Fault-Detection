import {combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form';
import friend from "./Friend";
import ChartTypeReducer from './ChartTypeReducer';

export default combineReducers({
  friend,
  form: formReducer,
  ChartTypeReducer
});
