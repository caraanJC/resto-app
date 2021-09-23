export enum ActionType {
  ADD_ITEM = 'addItem',
  DELETE_ITEM = 'deleteItem',
  EDIT_ITEM = 'editItem',

  INITIALIZE_CATEGORIES = 'initializeCategories',
  ADD_CATEGORY = 'addCategory',
  DELETE_CATEGORY = 'deleteCategory',

  SET_SELECTED_CATEGORY = 'setSelectedCategory',

  SET_CART_COUNT = 'setCartCount',

  INITIALIZE_CART_ITEMS = 'initializeCartItems',
  ADD_CART_ITEM = 'addCartItem',
  INCREASE_CART_ITEM = 'increaseCartItem',
  DECREASE_CART_ITEM = 'decreaseCartItem',
  DELETE_CART_ITEM = 'deleteCartItem',
  EDIT_CART_ITEM = 'editCartItem',
  EMPTY_CART = 'emptyCart',

  SET_TOTAL = 'setTotal',

  ADD_USER = 'addUser',
  RESET_USERS = 'resetUsers',

  SET_IS_ADMIN = 'setIsAdmin',
  SET_IS_USER = 'setIsUser',

  ADD_TO_USERS_CART_ITEMS = 'addToUsersCartItems',
  REMOVE_FROM_USERS_CART_ITEMS = 'removeFromUsersCartItems',

  SET_CURRENT_USER = 'setCurrentUser',
}
