import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import {
  saveChartTypeSuccess,
  saveChartTypeError,
} from '../Action/ChartTypeAction';

import { createChartType } from '../Service/ChartTypeService';

function* saveChartType (action) {
  try {
    const response = yield call(createChartType, action.data);
    console.log("respose", response);
    toast.success('Chart type added successfully!', {
      position: toast.POSITION.TOP_RIGHT
    });
    yield put(saveChartTypeSuccess(response));
  } catch (error) {
    toast.error('Error while creating toast type!', {
      position: toast.POSITION.TOP_RIGHT
    });
    yield put(saveChartTypeError(error.message));
  }
};

export {
  saveChartType
};
