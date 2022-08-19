const initialState = {
  loggedInUser: {},
};

export const userDataReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'SetUser':
      return {...state, ...payload};
    default:
      return state;
  }
};
