import Menu from './components/Menu';
import './styles/App.css';

import Nav from './components/Nav';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators, State } from './state';
import { bindActionCreators } from 'redux';

import { Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';
import AddItem from './components/AddItem';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const items = useSelector((state: State) => state.items);
  const cartItems = useSelector((state: State) => state.cartItems);
  const currentUser = useSelector((state: State) => state.currentUser);
  const usersCartItems = useSelector((state: State) => state.usersCartItems);

  const dispatch = useDispatch();

  const {
    initializeCategories,
    setCartCount,
    setTotal,
    initializeCartItems,
    addToUsersCartItems,
  } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    const distinct = (value: string, index: number, self: string[]) => {
      return self.indexOf(value) === index;
    };
    initializeCategories(
      [...items]
        .map((item) => item.category)
        .filter(distinct)
        .sort()
    );
    // eslint-disable-next-line
  }, [items]);

  useEffect(() => {
    if (cartItems) {
      let count = 0;
      let total = 0;
      [...cartItems].map((cartItem) => {
        count += cartItem.count;
        total += cartItem.count * cartItem.price;
        return cartItem;
      });

      setTotal(total);
      setCartCount(count);
      if (currentUser) {
        addToUsersCartItems({ username: currentUser, cartItems: cartItems });
      }
    }
    // eslint-disable-next-line
  }, [cartItems]);

  useEffect(() => {
    if (currentUser !== '' && currentUser !== 'admin') {
      const userCart = [...usersCartItems].find(
        (userCartItems) => userCartItems.username === currentUser
      );
      if (!(userCart?.cartItems === cartItems)) {
        if (userCart) {
          const ids = items.map((item) => item.id);

          const filteredUserCart = userCart.cartItems.filter((cartItem) =>
            ids.includes(cartItem.id)
          );
          initializeCartItems(filteredUserCart);
        }
      }
    }
    // eslint-disable-next-line
  }, [currentUser]);

  return (
    <div className='app'>
      <Nav />

      <Switch>
        <Route exact path='/'>
          <Menu />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/addItem'>
          <AddItem />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
