import { takeLatest } from "redux-saga/effects";

import { chartTypeConstant } from "../Constants/ChartType";

import { saveChartType } from './ChartTypeSaga';

export default function* saga() {
  yield takeLatest(chartTypeConstant.SAVE_CHART_TYPE, saveChartType);
}
