import { Dispatch } from 'redux';

import { MessageActions } from '../actions';

export interface IMessageDispatcher {
  info(message: string): void;
  warn(message: string): void;
  error(message: string): void;
  dismiss(): void;
}

export const getMessageDispatcher = (dispatch: Dispatch): IMessageDispatcher => {
  return {
    info: (message: string) => {
      dispatch(MessageActions.info(message));
    },
    warn: (message: string) => {
      dispatch(MessageActions.warn(message));
    },
    error: (message: string) => {
      dispatch(MessageActions.error(message));
    },
    dismiss: () => {
      dispatch(MessageActions.dismiss());
    },
  };
};
