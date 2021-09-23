import { ActionType } from '../action-types';

interface AddItem {
  type: ActionType.ADD_ITEM;
  payload: {
    name: string;
    price: number;
    category: string;
    description: string;
    image: string;
    id: string;
    priority: number;
  };
  payload2: string;
}
interface EditItem {
  type: ActionType.EDIT_ITEM;
  payload: {
    name: string;
    price: number;
    category: string;
    description: string;
    image: string;
    id: string;
    priority: number;
  };
  payload2: string;
}
interface DeleteItem {
  type: ActionType.DELETE_ITEM;
  payload: string;
}

interface InitializeCategories {
  type: ActionType.INITIALIZE_CATEGORIES;
  payload: string[];
}

interface AddCategory {
  type: ActionType.ADD_CATEGORY;
  payload: string;
}

interface DeleteCategory {
  type: ActionType.DELETE_CATEGORY;
  payload: string;
}

interface SetSelectedCategory {
  type: ActionType.SET_SELECTED_CATEGORY;
  payload: string;
}

interface SetCartCount {
  type: ActionType.SET_CART_COUNT;
  payload: number;
}

interface InitializeCartItems {
  type: ActionType.INITIALIZE_CART_ITEMS;
  payload: {
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
interface AddCartItem {
  type: ActionType.ADD_CART_ITEM;
  payload: {
    name: string;
    price: number;
    category: string;
    description: string;
    image: string;
    id: string;
    priority: number;
    count: number;
  };
}
interface IncreaseCartItem {
  type: ActionType.INCREASE_CART_ITEM;
  payload: string;
}
interface DecreaseCartItem {
  type: ActionType.DECREASE_CART_ITEM;
  payload: string;
}
interface DeleteCartItem {
  type: ActionType.DELETE_CART_ITEM;
  payload: string;
}
interface EmptyCart {
  type: ActionType.EMPTY_CART;
}
interface EditCartItemPrice {
  type: ActionType.EDIT_CART_ITEM;
  payload: {
    name: string;
    price: number;
    category: string;
    description: string;
    image: string;
    id: string;
    priority: number;
    count: number;
  };
}

interface SetTotal {
  type: ActionType.SET_TOTAL;
  payload: number;
}

interface SetIsAdmin {
  type: ActionType.SET_IS_ADMIN;
  payload: boolean;
}

interface SetIsUser {
  type: ActionType.SET_IS_USER;
  payload: boolean;
}

interface AddUser {
  type: ActionType.ADD_USER;
  payload: {
    username: string;
    password: string;
  };
}
interface ResetUsers {
  type: ActionType.RESET_USERS;
}

interface AddToUsersCartItems {
  type: ActionType.ADD_TO_USERS_CART_ITEMS;
  payload: {
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
  };
}
interface RemoveFromUsersCartItems {
  type: ActionType.REMOVE_FROM_USERS_CART_ITEMS;
  payload: string;
}

interface SetCurrentUser {
  type: ActionType.SET_CURRENT_USER;
  payload: string;
}
export type ActionItems = AddItem | EditItem | DeleteItem;
export type ActionCategories =
  | InitializeCategories
  | AddCategory
  | DeleteCategory;
export type ActionSelectedCategory = SetSelectedCategory;
export type ActionCartCount = SetCartCount;
export type ActionCartItems =
  | InitializeCartItems
  | AddCartItem
  | DecreaseCartItem
  | DeleteCartItem
  | IncreaseCartItem
  | EmptyCart
  | EditCartItemPrice;

export type ActionTotal = SetTotal;
export type ActionIsAdmin = SetIsAdmin;
export type ActionIsUser = SetIsUser;
export type ActionUsers = AddUser | ResetUsers;

export type ActionUsersCartItems =
  | AddToUsersCartItems
  | RemoveFromUsersCartItems;

export type ActionCurrentUser = SetCurrentUser;
