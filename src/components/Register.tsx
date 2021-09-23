import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../state';

import '../styles/Register.css';

const Register = () => {
  const users = useSelector((state: State) => state.users);

  const dispatch = useDispatch();
  const { addUser } = bindActionCreators(actionCreators, dispatch);

  const initialNewUser = {
    username: '',
    password: '',
    confirmPassword: '',
  };

  const [newUser, setNewUser] = useState(initialNewUser);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const registerBtnClickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    history: any
  ) => {
    e.preventDefault();
    if (newUser.username === 'admin') {
      return alert('Invalid username');
    }
    if (!newUser.username || !newUser.password || !newUser.confirmPassword) {
      return alert('Please fill in the required fields');
    }
    if ([...users].find((user: any) => user.username === newUser.username)) {
      return alert('Username already registered');
    }
    if (newUser.username.length < 5) {
      return alert('Username is too short');
    }
    if (newUser.password !== newUser.confirmPassword) {
      return alert("Passwords don't match");
    }
    if (newUser.password.length < 5) {
      return alert('Password is too short');
    }

    if (!newUser.username.match(/^[a-zA-Z0-9]+$/)) {
      return alert('Username Invalid');
    }
    if (
      !(newUser.username === 'admin') &&
      !newUser.password.match(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
      )
    ) {
      return alert(
        'Password must contain at least one number and one special character'
      );
    }

    addUser({ username: newUser.username, password: newUser.password });
    setNewUser(initialNewUser);
    alert('Registered Successfully');
    history.push('/login');
  };

  return (
    <form className='register'>
      <input
        name='username'
        type='text'
        placeholder='Username'
        value={newUser.username}
        onChange={inputChangeHandler}
        className='register__username'
      />
      <input
        name='password'
        type='password'
        placeholder='Password'
        value={newUser.password}
        onChange={inputChangeHandler}
        className='register__password'
      />
      <input
        name='confirmPassword'
        type='password'
        placeholder='Confirm Password'
        value={newUser.confirmPassword}
        onChange={inputChangeHandler}
        className='register__confirmPassword'
      />
      <Route
        render={({ history }) => (
          <button
            onClick={(e) => registerBtnClickHandler(e, history)}
            className='register__btn button'
          >
            Register
          </button>
        )}
      />
    </form>
  );
};

export default Register;
