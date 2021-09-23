import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators, State } from '../state';

import '../styles/Nav.css';

import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';

import { useState } from 'react';

const Nav = () => {
  const cartCount = useSelector((state: State) => state.cartCount);
  const isAdmin = useSelector((state: State) => state.isAdmin);
  const isUser = useSelector((state: State) => state.isUser);
  const currentUser = useSelector((state: State) => state.currentUser);

  const dispatch = useDispatch();
  const { setIsAdmin, setIsUser, setCurrentUser, emptyCart } =
    bindActionCreators(actionCreators, dispatch);

  const [show, setShow] = useState('');

  const logoutClickHandler = () => {
    setIsAdmin(false);
    setIsUser(false);
    setShow('');
    setCurrentUser('');
    emptyCart();
  };

  return (
    <nav>
      <ul className='nav'>
        <button className='nav__burger' onClick={() => setShow('show')}>
          <MenuIcon />
        </button>
        <div className={'link__group ' + show}>
          <button className='nav__close' onClick={() => setShow('')}>
            <CancelIcon />
          </button>
          <NavLink
            exact
            to='/'
            className='nav__link nav__link--home'
            activeClassName='selected'
            onClick={() => setShow('')}
          >
            Home
          </NavLink>
          {!isAdmin && !isUser && (
            <>
              <NavLink
                activeClassName='selected'
                exact
                to='/login'
                className='nav__link nav__link--admin'
                onClick={() => setShow('')}
              >
                Login
              </NavLink>
              <NavLink
                activeClassName='selected'
                exact
                to='/register'
                className='nav__link nav__link--admin'
                onClick={() => setShow('')}
              >
                Register
              </NavLink>
            </>
          )}
          {isAdmin && (
            <NavLink
              to='/addItem'
              className='nav__link nav__link--addItem'
              activeClassName='selected'
              onClick={() => setShow('')}
            >
              Add Item
            </NavLink>
          )}
          {(isAdmin || isUser) && (
            <NavLink
              exact
              to='/'
              className='nav__link nav__link--logout'
              onClick={logoutClickHandler}
            >
              Logout
            </NavLink>
          )}
        </div>
        {(isUser || isAdmin) && (
          <div className='nav__cart'>
            <span className='nav__user'>{currentUser}</span>
            {!isAdmin && (
              <>
                <NavLink
                  className='nav__link'
                  to='/cart'
                  activeClassName='selected'
                >
                  <ShoppingCartIcon fontSize='large' />
                </NavLink>
                <span className='nav__count'>{cartCount}</span>
              </>
            )}
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
