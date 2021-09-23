import { ActionType } from '../action-types';
import { ActionSelectedCategory } from '../actions';

const reducer = (state: string = 'All', action: ActionSelectedCategory) => {
  switch (action.type) {
    case ActionType.SET_SELECTED_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
