import {call} from "redux-saga/effects";
import {getFriends} from "../Service/Friend";

function* getAllFriends(action) {
  try {
    const response = yield call(getFriends, action);
  } catch (error) {
    throw error;
  }
}

export {
  getAllFriends
};
