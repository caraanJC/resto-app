import { useDispatch, useSelector } from 'react-redux';
import { actionCreators, State } from '../state';
import CartItem from './CartItem';

import '../styles/Cart.css';
import { bindActionCreators } from 'redux';
import { useEffect } from 'react';

const Cart = () => {
  const items = useSelector((state: State) => state.items);
  const cartItems = useSelector((state: State) => state.cartItems);
  const total = useSelector((state: State) => state.total);

  const dispatch = useDispatch();
  const { emptyCart, editCartItem } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const checkoutBtnClickHandler = () => {
    alert(`
    Thank You for Your Purchase!!!! 
    Total: Php ${total}
    `);
    emptyCart();
  };

  useEffect(() => {
    [...items].map((item) => {
      const changedCartItem = [...cartItems].find(
        (cartItem) => cartItem['id'] === item.id
      );

      if (changedCartItem) {
        if (
          changedCartItem.name !== item.name ||
          changedCartItem.price !== item.price ||
          changedCartItem.image !== item.image ||
          changedCartItem.category !== item.category ||
          changedCartItem.priority !== item.priority
        ) {
          editCartItem({ ...item, count: changedCartItem.count });
        }
      }
      return item;
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className='cart'>
      <ul className='cart__list'>
        {[...cartItems].map((cartItem) => (
          <CartItem cartItem={cartItem} key={cartItem['id']} />
        ))}
      </ul>

      <div className='cart__total'>
        {[...cartItems].length === 0 ? (
          <p>Empty Cart</p>
        ) : (
          <>
            <p>Total: Php {total}</p>
            <button
              className='cart__checkout button'
              onClick={checkoutBtnClickHandler}
            >
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
