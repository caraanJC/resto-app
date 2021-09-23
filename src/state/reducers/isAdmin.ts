import { ActionType } from '../action-types';
import { ActionIsAdmin } from '../actions';

const reducer = (state = false, action: ActionIsAdmin) => {
  switch (action.type) {
    case ActionType.SET_IS_ADMIN:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
