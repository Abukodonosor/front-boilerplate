import { User } from "../../entities";
import { initialState, StateType } from "./state";

type StateSlice = StateType["user"];

// maybe object mapper needs to be done here
export const userSelector = (state: StateType): StateSlice => state.user;

const UPDATE_USER = "user/update";
const SIGN_OUT = "user/signOut";

export interface UpdateUserActionType {
  type: string,
  user: User | null,
}

export const updateUserAction = (user: User | null): UpdateUserActionType => ({
  type: UPDATE_USER,
  user
});

const updateHandler = (
  state: StateSlice,
  action: UpdateUserActionType
): StateType["user"] => {
  return action.user;
};

export interface ActionType {
  type: string,
}

export const signOutAction = (): ActionType => ({
  type: SIGN_OUT,
});

const signOutHandler = () => null;


export const userReducer = (
  state: StateSlice = initialState.user,
  action: UpdateUserActionType,
): StateSlice => {
  switch (action.type) {
    case UPDATE_USER:
      return updateHandler(state, action);
    case SIGN_OUT:
      return signOutHandler();
    default:
      return state;
  }
};
