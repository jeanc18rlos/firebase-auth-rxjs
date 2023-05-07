import { combineEpics } from 'redux-observable';
import authEpic from './authEpic';

const rootEpic = combineEpics(
  authEpic
);

export default rootEpic;
