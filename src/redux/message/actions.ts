import { ActionType, ActionWithPayload, createAction, ActionsUnion } from '@redux';

export const Actions = {
  info: (message: string): ActionWithPayload<ActionType.Message_Info, string> => createAction(ActionType.Message_Info, message),
}

export type MessageActions = ActionsUnion<typeof Actions>;