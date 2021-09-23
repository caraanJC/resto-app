import { ActionType } from '../action-types';
import { ActionCartItems } from '../actions';

interface IState {
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
}

const reducer = (state: IState['cartItems'] = [], action: ActionCartItems) => {
  switch (action.type) {
    case ActionType.INITIALIZE_CART_ITEMS:
      return action.payload;

    case ActionType.ADD_CART_ITEM:
      return [...state, action.payload];

    case ActionType.INCREASE_CART_ITEM:
      return state.map((cartItem) => {
        if (cartItem.id === action.payload) {
          cartItem.count++;
        }
        return cartItem;
      });

    case ActionType.DECREASE_CART_ITEM:
      return state
        .map((cartItem) => {
          if (cartItem.id === action.payload) {
            cartItem.count--;
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.count > 0);

    case ActionType.DELETE_CART_ITEM:
      return state.filter((cartItem) => cartItem.id !== action.payload);

    case ActionType.EDIT_CART_ITEM:
      return state.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (cartItem.name !== action.payload.name) {
            cartItem.name = action.payload.name;
          }
          if (cartItem.price !== action.payload.price) {
            cartItem.price = action.payload.price;
          }
          if (cartItem.image !== action.payload.image) {
            cartItem.image = action.payload.image;
          }
          if (cartItem.category !== action.payload.category) {
            cartItem.category = action.payload.category;
          }
          if (cartItem.priority !== action.payload.priority) {
            cartItem.priority = action.payload.priority;
          }
        }
        return cartItem;
      });

    case ActionType.EMPTY_CART:
      return [];

    default:
      return state;
  }
};

export default reducer;
