import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../state';
import '../styles/Item.css';
import EditItem from './EditItem';

interface IProps {
  item: {
    name: string;
    price: number;
    category: string;
    description: string;
    image: string;
    id: string;
    priority: number;
  };
}

const Item: React.FC<IProps> = (props) => {
  const cartItems = useSelector((state: State) => state.cartItems);
  const isAdmin = useSelector((state: State) => state.isAdmin);
  const isUser = useSelector((state: State) => state.isUser);

  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();
  const { addCartItem, increaseCartItem, deleteItem, deleteCartItem } =
    bindActionCreators(actionCreators, dispatch);

  const orderBtnClickHandler = () => {
    const isExisting = [...cartItems].find(
      (cartItem) => cartItem['id'] === props.item.id
    );
    if (isExisting) {
      return increaseCartItem(props.item.id);
    }
    addCartItem({ ...props.item, count: 1 });
  };

  const deleteBtnClickHandler = () => {
    deleteItem(props.item.id);
    deleteCartItem(props.item.id);
  };

  const editBtnClickHandler = () => {
    setEdit(true);
  };

  const setEditToFalse = () => {
    setEdit(false);
  };

  return (
    <li className='item'>
      {edit && isAdmin ? (
        <EditItem item={props.item} setEditToFalse={setEditToFalse} />
      ) : (
        <>
          <div className='item__imgContainer'>
            <img
              className='item__img'
              src={props.item.image}
              alt={props.item.name}
            />
          </div>

          <div className='item__details'>
            <p className='item__name'>{props.item.name}</p>
            <p className='item__price'>Php {props.item.price}</p>
          </div>
          {isUser && (
            <button className='button' onClick={orderBtnClickHandler}>
              Order
            </button>
          )}
          {isAdmin && (
            <p className='item__adminBtns'>
              <button className='button' onClick={editBtnClickHandler}>
                Edit
              </button>
              <button
                className='button button--warning'
                onClick={deleteBtnClickHandler}
              >
                Delete
              </button>
            </p>
          )}
        </>
      )}
    </li>
  );
};

export default Item;
