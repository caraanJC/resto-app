import { ActionType } from '../action-types';
import { ActionCurrentUser } from '../actions';

const initialState = '';

const reducer = (state = initialState, action: ActionCurrentUser) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_USER:
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
