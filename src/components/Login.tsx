import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../state';

import '../styles/Login.css';

const Login = () => {
  const users = useSelector((state: State) => state.users);
  const dispatch = useDispatch();
  const { setIsAdmin, setIsUser, setCurrentUser } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const [userCredentials, setUserCredentials] = useState({
    username: '',
    password: '',
  });

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const loginBtnClickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    history: any
  ) => {
    e.preventDefault();
    if (!userCredentials.username || !userCredentials.password) {
      return alert('Please fill the required fields.');
    }

    const userCheck = [...users].find(
      (user: any) => user.username === userCredentials.username
    );
    if (!userCheck) {
      return alert('User does not exit');
    }
    if (userCheck['password'] !== userCredentials.password) {
      return alert('Wrong Password');
    }
    if (userCheck['password'] === userCredentials.password) {
      if (userCheck['username'] === 'admin') {
        setIsAdmin(true);
        setCurrentUser(userCredentials.username);
        setUserCredentials({
          username: '',
          password: '',
        });
        history.push('/');
        return;
      }
      setCurrentUser(userCredentials.username);
      setIsUser(true);
    }
    history.push('/');
  };

  return (
    <form className='login'>
      <input
        type='text'
        placeholder='Username'
        name='username'
        onChange={inputChangeHandler}
        value={userCredentials.username}
        className='login__username'
      />
      <input
        type='password'
        placeholder='Password'
        name='password'
        onChange={inputChangeHandler}
        value={userCredentials.password}
        className='login__password'
      />
      <Route
        render={({ history }) => (
          <button
            onClick={(e) => loginBtnClickHandler(e, history)}
            className='login__btn button'
          >
            Login
          </button>
        )}
      />

      <p className='login__suggestion'>
        Don't have an account?{' '}
        <Link to='/register' className='login__registerLink'>
          Register
        </Link>
      </p>
    </form>
  );
};

export default Login;
