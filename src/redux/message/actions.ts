import { ActionType, ActionWithPayload, Action, createAction, ActionsUnion } from '@redux';

export const Actions = {
  info: (message: string): ActionWithPayload<ActionType.Message_Info, string> =>
    createAction(ActionType.Message_Info, message),
  warn: (message: string): ActionWithPayload<ActionType.Message_Warn, string> =>
    createAction(ActionType.Message_Warn, message),
  error: (message: string): ActionWithPayload<ActionType.Message_Error, string> =>
    createAction(ActionType.Message_Error, message),
  dismiss: (): Action<ActionType.Message_Dismiss> => createAction(ActionType.Message_Dismiss),
};

export type MessageActions = ActionsUnion<typeof Actions>;
