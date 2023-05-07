import {
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from "../actions/authActions";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_START:
      return { ...state, loading: true };
    case SIGNUP_SUCCESS:
      return { ...state, user: action.payload, loading: false };
    case SIGNUP_FAIL:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default authReducer;
