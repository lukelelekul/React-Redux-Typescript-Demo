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
    case ActionType.Message_Warn:
      return {
        ...state,
        message: action.payload,
        type: MessageType.Warning,
      };
    case ActionType.Message_Error:
      return {
        ...state,
        message: action.payload,
        type: MessageType.Error,
      };
    case ActionType.Message_Dismiss:
      return {
        ...state,
        message: '',
        type: MessageType.None,
      };
    default:
      return state;
  }
};
