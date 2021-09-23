import { combineReducers } from 'redux';
import items from './items';
import categories from './categories';
import selectedCategory from './selectedCategory';
import cartCount from './cartCount';
import cartItems from './cartItems';
import total from './total';
import isAdmin from './isAdmin';
import isUser from './isUser';
import users from './users';
import usersCartItems from './usersCartItems';
import currentUser from './currentUser';

const reducers = combineReducers({
  items,
  categories,
  selectedCategory,
  cartCount,
  cartItems,
  total,
  isAdmin,
  users,
  isUser,
  usersCartItems,
  currentUser,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
