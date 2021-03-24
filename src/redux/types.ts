export enum ActionType {
  Message_Info = 'demo/message/INFO',
}

export interface Action<T extends ActionType> {
  type: T;
}

export interface ActionWithPayload<T extends ActionType, P> extends Action<T> {
  payload: P;
}

export function createAction<T extends ActionType>(type: T): Action<T>;
export function createAction<T extends ActionType, P>(type: T, payload: P): ActionWithPayload<T, P>;
export function createAction<T extends ActionType, P>(type: T, payload?: P): Action<T> | ActionWithPayload<T, P> {
  return payload === undefined ? { type } : { type, payload };
}

type FunctionType = (...args: any[]) => any;
type ActionCreatorsMapObject = { [actionCreator: string]: FunctionType };

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;
