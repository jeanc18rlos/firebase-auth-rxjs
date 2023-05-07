// Sign up action types
export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

// sign up action creators
export const signupStart = (payload) => ({ type: SIGNUP_START, payload });
export const signupSuccess = (user) => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});
export const signupFail = (error) => ({ type: SIGNUP_FAIL, payload: error });
