import { fromJS } from 'immutable';

import { chartTypeConstant } from '../Constants/ChartType';

const initialState = fromJS({
  chartList: [],
  loader: false
});

const ChartTypeReducer = (state = initialState, action) => {
  switch(action.type) {
    case chartTypeConstant.SAVE_CHART_TYPE:
      return state
        .set('loader', true);
    case chartTypeConstant.SAVE_CHART_TYPE_SUCCESS:
      return state
        .set('loader', false)
        .set('chartList', action.response);
    case chartTypeConstant.SAVE_CHART_TYPE_ERROR:
      return state
        .set('loader', false);
    default:
      return state;
  }
}

export default ChartTypeReducer;
