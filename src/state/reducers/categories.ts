import { ActionType } from '../action-types';
import { ActionCategories } from '../actions';

const reducer = (state: string[] = [], action: ActionCategories) => {
  switch (action.type) {
    case ActionType.INITIALIZE_CATEGORIES:
      return action.payload;

    case ActionType.ADD_CATEGORY:
      return [...state, action.payload];

    case ActionType.DELETE_CATEGORY:
      return state.filter((category) => category !== action.payload);

    default:
      return state;
  }
};

export default reducer;
