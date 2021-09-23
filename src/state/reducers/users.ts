import { ActionType } from '../action-types';
import { ActionUsers } from '../actions';

interface IState {
  users: { username: string; password: string }[];
}

const initialState: IState['users'] = [
  {
    username: 'admin',
    password: 'admin',
  },
];

const reducer = (
  state: IState['users'] = initialState,
  action: ActionUsers
) => {
  switch (action.type) {
    case ActionType.ADD_USER:
      return [...state, action.payload];
    case ActionType.RESET_USERS:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
