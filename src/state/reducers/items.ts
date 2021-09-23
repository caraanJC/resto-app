import { v4 as uuidv4 } from 'uuid';
import { ActionType } from '../action-types';
import { ActionItems } from '../actions';

const initialState = [
  {
    name: 'Burger',
    price: 50,
    category: 'Food',
    description: '',
    image: 'https://image.flaticon.com/icons/svg/1046/1046784.svg',
    id: uuidv4(),
    priority: 10,
  },
  {
    name: 'Pizza',
    price: 100,
    category: 'Food',
    description: '',
    image: 'https://image.flaticon.com/icons/svg/1046/1046771.svg',
    id: uuidv4(),
    priority: 10,
  },
  {
    name: 'Fries',
    price: 25,
    category: 'Food',
    description: '',
    image: 'https://image.flaticon.com/icons/svg/1046/1046786.svg',
    id: uuidv4(),
    priority: 10,
  },
  {
    name: 'Coffee',
    price: 35,
    category: 'Drink',
    description: '',
    image: 'https://image.flaticon.com/icons/svg/1046/1046785.svg',
    id: uuidv4(),
    priority: 10,
  },
  {
    name: 'Iced Tea',
    price: 45,
    category: 'Drink',
    description: '',
    image: 'https://image.flaticon.com/icons/svg/1046/1046782.svg',
    id: uuidv4(),
    priority: 10,
  },
  {
    name: 'Hot Tea',
    price: 45,
    category: 'Drink',
    description: '',
    image: 'https://image.flaticon.com/icons/svg/1046/1046792.svg',
    id: uuidv4(),
    priority: 10,
  },
];

interface IState {
  items: {
    name: string;
    price: number;
    category: string;
    description: string;
    image: string;
    id: string;
    priority: number;
  }[];
}

const reducer = (
  state: IState['items'] = initialState,
  action: ActionItems
) => {
  switch (action.type) {
    case ActionType.ADD_ITEM:
      if (action.payload.category === 'Other') {
        action.payload.category = action.payload2;
      }
      return [...state, action.payload];

    case ActionType.DELETE_ITEM:
      return state.filter((item) => item.id !== action.payload);

    case ActionType.EDIT_ITEM:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          item = action.payload;

          if (item.category === 'Other') {
            item.category = action.payload2;
          }
        }

        return item;
      });
    default:
      return state;
  }
};

export default reducer;
