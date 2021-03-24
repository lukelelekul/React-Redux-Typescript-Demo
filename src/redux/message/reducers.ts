import { MessageType } from '@models';
import { ActionType } from '../types';
import { MessageActions } from './actions';

export interface IMessageState {
  message: string;
  type: MessageType;
}

const initialState: IMessageState = {
  message: '',
  type: MessageType.None,
};

export default (state = initialState, action: MessageActions): IMessageState => {
  switch (action.type) {
    case ActionType.Message_Info:
      return {
        ...state,
        message: action.payload,
        type: MessageType.Info,
      };
    default:
      return state;
  }
};
