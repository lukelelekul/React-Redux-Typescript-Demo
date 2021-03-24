import { combineReducers } from 'redux';

import message, { IMessageState } from './message/reducers';

export interface IRootState {
  readonly message: IMessageState;
}

export default combineReducers<IRootState>({
  message,
});
