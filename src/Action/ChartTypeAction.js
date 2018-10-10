import { chartTypeConstant } from "../Constants/ChartType";

const saveChartType = data => ({
  type: chartTypeConstant.SAVE_CHART_TYPE,
  data
});

const saveChartTypeSuccess = response => ({
  type: chartTypeConstant.SAVE_CHART_TYPE_SUCCESS,
  response
});

const saveChartTypeError = error => ({
  type: chartTypeConstant.SAVE_CHART_TYPE_ERROR,
  error
});

const getChartTypeList = () => ({
  type: chartTypeConstant.GET_TYPE_LIST,
});

const getChartTypeListSuccess = response => ({
  type: chartTypeConstant.GET_TYPE_LIST_SUCCESS,
  response
});

const getChartTypeListError = error => ({
  type: chartTypeConstant.GET_TYPE_LIST_ERROR,
  error
});

export {
  saveChartType,
  saveChartTypeSuccess,
  saveChartTypeError,
  getChartTypeList,
  getChartTypeListSuccess,
  getChartTypeListError
};
