import { ActionType } from '../action-types';
import { ActionIsUser } from '../actions';

const reducer = (state = false, action: ActionIsUser) => {
  switch (action.type) {
    case ActionType.SET_IS_USER:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
