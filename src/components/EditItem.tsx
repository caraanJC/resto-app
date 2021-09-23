import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../state';

import CancelIcon from '@material-ui/icons/Cancel';

import '../styles/EditItem.css';

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
  setEditToFalse: () => void;
}

const EditItem: React.FC<IProps> = (props) => {
  const items = useSelector((state: State) => state.items);
  const categories = useSelector((state: State) => state.categories);

  const dispatch = useDispatch();
  const { editItem } = bindActionCreators(actionCreators, dispatch);

  const [newItem, setNewItem] = useState({
    ...props.item,
  });
  const [other, setOther] = useState('');

  const inputChangeHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setNewItem((prevItem) => {
      return { ...prevItem, [e.target.name]: e.target.value };
    });
  };

  const otherInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOther(e.target.value);
  };

  const saveBtnClickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    let same = false;
    [...items].map((item) => {
      if (
        item.id === newItem.id &&
        item.name === newItem.name &&
        item.price === newItem.price &&
        item.image === newItem.image &&
        item.category === newItem.category &&
        item.priority === newItem.priority
      ) {
        same = true;
      }
      return item;
    });
    if (same) {
      return props.setEditToFalse();
    }
    if (
      !newItem.name ||
      !newItem.price ||
      !newItem.image ||
      !newItem.priority ||
      (newItem.category === 'Other' && !other)
    ) {
      return alert('Required Fields must not be empty');
    }
    editItem(newItem, other);

    props.setEditToFalse();
  };

  const closeBtnClickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    props.setEditToFalse();
  };

  return (
    <form className='editItem'>
      <p>
        <label htmlFor={`editName-${props.item.id}`}>Name: </label>
        <input
          type='text'
          id={`editName-${props.item.id}`}
          name='name'
          value={newItem.name}
          onChange={inputChangeHandler}
        />
      </p>
      <p>
        <label htmlFor={`editPrice-${props.item.id}`}>Price: </label>
        <input
          type='number'
          id={`editPrice-${props.item.id}`}
          name='price'
          value={newItem.price}
          onChange={inputChangeHandler}
        />
      </p>
      <p>
        <label htmlFor={`editImage-${props.item.id}`}>Image: </label>
        <input
          type='url'
          id={`editImage-${props.item.id}`}
          name='image'
          value={newItem.image}
          onChange={inputChangeHandler}
        />
      </p>
      <p>
        <label htmlFor={`editCategory-${props.item.id}`}>Category: </label>
        <select
          name='category'
          id={`editCategory-${props.item.id}`}
          value={newItem.category}
          onChange={inputChangeHandler}
        >
          {[...categories, 'Other'].map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
        {newItem.category === 'Other' && (
          <>
            <input
              type='text'
              value={other}
              onChange={otherInputChangeHandler}
            />
          </>
        )}
      </p>
      <p>
        <label htmlFor={`editPriority-${props.item.id}`}>Priority: </label>
        <input
          type='number'
          value={newItem.priority}
          onChange={inputChangeHandler}
          name='priority'
          id={`editPriority-${props.item.id}`}
        />
      </p>
      <button className='button button--edit' onClick={saveBtnClickHandler}>
        Save
      </button>
      <button className='editItem__cancel' onClick={closeBtnClickHandler}>
        <CancelIcon />
      </button>
    </form>
  );
};

export default EditItem;
