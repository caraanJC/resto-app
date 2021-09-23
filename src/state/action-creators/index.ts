import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import {
  ActionCartCount,
  ActionCartItems,
  ActionCategories,
  ActionCurrentUser,
  ActionIsAdmin,
  ActionIsUser,
  ActionItems,
  ActionSelectedCategory,
  ActionTotal,
  ActionUsers,
  ActionUsersCartItems,
} from '../actions';

interface IParams {
  item: {
    name: string;
    price: number;
    category: string;
    description: string;
    image: string;
    id: string;
    priority: number;
  };
  itemID: string;
  cartItem: {
    name: string;
    price: number;
    category: string;
    description: string;
    image: string;
    id: string;
    priority: number;
    count: number;
  };
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
  user: {
    username: string;
    password: string;
  };
  userCartItems: {
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

const addItem = (item: IParams['item'], other: string) => {
  return (dispatch: Dispatch<ActionItems>) => {
    dispatch({
      type: ActionType.ADD_ITEM,
      payload: item,
      payload2: other,
    });
  };
};

const deleteItem = (itemID: IParams['itemID']) => {
  return (dispatch: Dispatch<ActionItems>) => {
    dispatch({
      type: ActionType.DELETE_ITEM,
      payload: itemID,
    });
  };
};

const editItem = (item: IParams['item'], other: string) => {
  return (dispatch: Dispatch<ActionItems>) => {
    dispatch({
      type: ActionType.EDIT_ITEM,
      payload: item,
      payload2: other,
    });
  };
};

const initializeCategories = (categories: string[]) => {
  return (dispatch: Dispatch<ActionCategories>) => {
    dispatch({
      type: ActionType.INITIALIZE_CATEGORIES,
      payload: categories,
    });
  };
};
const addCategory = (category: string) => {
  return (dispatch: Dispatch<ActionCategories>) => {
    dispatch({
      type: ActionType.ADD_CATEGORY,
      payload: category,
    });
  };
};
const deleteCategory = (category: string) => {
  return (dispatch: Dispatch<ActionCategories>) => {
    dispatch({
      type: ActionType.ADD_CATEGORY,
      payload: category,
    });
  };
};

const setSelectedCategory = (category: string) => {
  return (dispatch: Dispatch<ActionSelectedCategory>) => {
    dispatch({
      type: ActionType.SET_SELECTED_CATEGORY,
      payload: category,
    });
  };
};

const setCartCount = (num: number) => {
  return (dispatch: Dispatch<ActionCartCount>) => {
    dispatch({
      type: ActionType.SET_CART_COUNT,
      payload: num,
    });
  };
};

const initializeCartItems = (cartItems: IParams['cartItems']) => {
  return (dispatch: Dispatch<ActionCartItems>) => {
    dispatch({
      type: ActionType.INITIALIZE_CART_ITEMS,
      payload: cartItems,
    });
  };
};
const addCartItem = (cartItem: IParams['cartItem']) => {
  return (dispatch: Dispatch<ActionCartItems>) => {
    dispatch({
      type: ActionType.ADD_CART_ITEM,
      payload: cartItem,
    });
  };
};
const increaseCartItem = (cartItemID: string) => {
  return (dispatch: Dispatch<ActionCartItems>) => {
    dispatch({
      type: ActionType.INCREASE_CART_ITEM,
      payload: cartItemID,
    });
  };
};
const decreaseCartItem = (cartItemID: string) => {
  return (dispatch: Dispatch<ActionCartItems>) => {
    dispatch({
      type: ActionType.DECREASE_CART_ITEM,
      payload: cartItemID,
    });
  };
};
const deleteCartItem = (cartItemID: string) => {
  return (dispatch: Dispatch<ActionCartItems>) => {
    dispatch({
      type: ActionType.DELETE_CART_ITEM,
      payload: cartItemID,
    });
  };
};

const emptyCart = () => {
  return (dispatch: Dispatch<ActionCartItems>) => {
    dispatch({
      type: ActionType.EMPTY_CART,
    });
  };
};
const editCartItem = (cartItem: IParams['cartItem']) => {
  return (dispatch: Dispatch<ActionCartItems>) => {
    dispatch({
      type: ActionType.EDIT_CART_ITEM,
      payload: cartItem,
    });
  };
};

const setTotal = (num: number) => {
  return (dispatch: Dispatch<ActionTotal>) => {
    dispatch({
      type: ActionType.SET_TOTAL,
      payload: num,
    });
  };
};

const setIsAdmin = (status: boolean) => {
  return (dispatch: Dispatch<ActionIsAdmin>) => {
    dispatch({
      type: ActionType.SET_IS_ADMIN,
      payload: status,
    });
  };
};
const setIsUser = (status: boolean) => {
  return (dispatch: Dispatch<ActionIsUser>) => {
    dispatch({
      type: ActionType.SET_IS_USER,
      payload: status,
    });
  };
};

const addUser = (user: IParams['user']) => {
  return (dispatch: Dispatch<ActionUsers>) => {
    dispatch({
      type: ActionType.ADD_USER,
      payload: user,
    });
  };
};
const resetUsers = () => {
  return (dispatch: Dispatch<ActionUsers>) => {
    dispatch({
      type: ActionType.RESET_USERS,
    });
  };
};

const addToUsersCartItems = (userCartItems: IParams['userCartItems']) => {
  return (dispatch: Dispatch<ActionUsersCartItems>) => {
    dispatch({
      type: ActionType.ADD_TO_USERS_CART_ITEMS,
      payload: userCartItems,
    });
  };
};
const removeFromUsersCartItems = (username: string) => {
  return (dispatch: Dispatch<ActionUsersCartItems>) => {
    dispatch({
      type: ActionType.REMOVE_FROM_USERS_CART_ITEMS,
      payload: username,
    });
  };
};

const setCurrentUser = (username: string) => {
  return (dispatch: Dispatch<ActionCurrentUser>) => {
    dispatch({
      type: ActionType.SET_CURRENT_USER,
      payload: username,
    });
  };
};
export { addItem, deleteItem, editItem };
export { initializeCategories, addCategory, deleteCategory };
export { setSelectedCategory };
export { setCartCount };
export {
  initializeCartItems,
  addCartItem,
  decreaseCartItem,
  deleteCartItem,
  increaseCartItem,
  emptyCart,
  editCartItem,
};
export { setTotal };

export { setIsAdmin };
export { setIsUser };

export { addUser };
export { resetUsers };

export { addToUsersCartItems, removeFromUsersCartItems };
export { setCurrentUser };
