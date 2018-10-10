import actionTypes from "../Action/ActionTypes";

const initialState = {
  friends: []
};

const friendsReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GET_ALL_FRIENDS:
      return {
        ...state,
        friends: ["praveen"]
      };
    default:
      return state;
  }
};

export default friendsReducer;
