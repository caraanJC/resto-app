import { ActionType } from '../action-types';
import { ActionUsersCartItems } from '../actions';

interface IState {
  usersCartItems: {
    username: string;
    cartItems: {
      name: string;
      price: number;
      category: string;
      description: string;
      image: string;
      id: string;
      priority: number;
      count: number;
    }[];
  }[];
}

const initialState: IState['usersCartItems'] = [];

const reducer = (state = initialState, action: ActionUsersCartItems) => {
  switch (action.type) {
    case ActionType.ADD_TO_USERS_CART_ITEMS:
      if (
        !state.find(
          (userCartItems) => userCartItems.username === action.payload.username
        )
      ) {
        return [...state, action.payload];
      }
      return state.map((userCartItems) => {
        if (userCartItems.username === action.payload.username) {
          userCartItems.cartItems = action.payload.cartItems;
        }
        return userCartItems;
      });

    case ActionType.REMOVE_FROM_USERS_CART_ITEMS:
      return state.filter(
        (userCartItems) => userCartItems.username !== action.payload
      );
    default:
      return state;
  }
};

export default reducer;
