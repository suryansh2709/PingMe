import {string} from '../../utils/strings';

const initialState = {
  loggedInUser: {},
};

export const userDataReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case string.SetUser:
      return {...state, ...payload};
    default:
      return state;
  }
};
