import { Dispatch } from 'redux';

import { MessageActions } from '../actions';

export interface IMessageDispatcher {
  info(message: string): void;
  dismiss(): void;
}

export const getMessageDispatcher = (dispatch: Dispatch): IMessageDispatcher => {
  return {
    info: (message: string) => {
      dispatch(MessageActions.info(message));
    },
    dismiss: () => {
      dispatch(MessageActions.dismiss());
    },
  };
};
