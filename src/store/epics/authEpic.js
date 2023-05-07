import { from, of } from "rxjs";
import { combineEpics, ofType } from "redux-observable";
import { map, catchError, switchMap } from "rxjs/operators";
import {
  SIGNUP_START,
  signupFail,
  signupSuccess,
} from "../actions/authActions";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/config";

// signupEpic
const signupEpic = (action$) =>
  action$.pipe(
    ofType(SIGNUP_START),
    switchMap((action) =>
      from(
        createUserWithEmailAndPassword(
          getAuth(app),
          action.payload.email,
          action.payload.password
        )
      ).pipe(
        map((userCredential) => signupSuccess(userCredential.user)),
        catchError((error) => of(signupFail(error)))
      )
    )
  );

// Update the combineEpics call
const rootEpic = combineEpics(signupEpic);

export default rootEpic;
