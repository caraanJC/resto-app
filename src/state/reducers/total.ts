import { ActionType } from '../action-types';
import { ActionTotal } from '../actions';

const reducer = (state = 0, action: ActionTotal) => {
  switch (action.type) {
    case ActionType.SET_TOTAL:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
