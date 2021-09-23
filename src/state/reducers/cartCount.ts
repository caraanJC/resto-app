import { ActionType } from '../action-types';
import { ActionCartCount } from '../actions';

const reducer = (state: number = 0, action: ActionCartCount) => {
  switch (action.type) {
    case ActionType.SET_CART_COUNT:
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
