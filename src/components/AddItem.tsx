import { useState } from 'react';
import '../styles/AddItem.css';

import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators, State } from '../state';
import { bindActionCreators } from 'redux';

const AddItem = () => {
  const initialState = {
    name: '',
    price: 100,
    category: 'Other',
    description: '',
    image: '',
    id: uuidv4(),
    priority: 10,
  };
  const items = useSelector((state: State) => state.items);
  const categories = useSelector((state: State) => state.categories);

  const dispatch = useDispatch();
  const { addItem } = bindActionCreators(actionCreators, dispatch);

  const [newItem, setNewItem] = useState(initialState);
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

  const addItemBtnClickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const isExisting = [...items].find((item) => item.name === newItem.name);
    if (isExisting) {
      return alert('Already added!');
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
    addItem(newItem, other);
    setNewItem({ ...initialState, category: newItem.category, id: uuidv4() });
  };

  return (
    <form className='addItem'>
      <p>
        <label htmlFor='addName'>Name: </label>
        <input
          type='text'
          id='addName'
          name='name'
          value={newItem.name}
          onChange={inputChangeHandler}
        />
      </p>
      <p>
        <label htmlFor='addPrice'>Price: </label>
        <input
          type='number'
          id='addPrice'
          name='price'
          value={newItem.price}
          onChange={inputChangeHandler}
        />
      </p>
      <p>
        <label htmlFor='addImage'>Image: </label>
        <input
          type='url'
          id='addImage'
          name='image'
          value={newItem.image}
          onChange={inputChangeHandler}
        />
      </p>
      <p>
        <label htmlFor='addCategory'>Category: </label>
        <select
          name='category'
          id='addCategory'
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
              placeholder='Other'
              type='text'
              value={other}
              onChange={otherInputChangeHandler}
            />
          </>
        )}
      </p>
      <p>
        <label htmlFor={'addPriority'}>Priority: </label>
        <input
          type='number'
          value={newItem.priority}
          onChange={inputChangeHandler}
          name='priority'
          id={'addPriority'}
        />
      </p>
      <button
        className='addItem__button button'
        onClick={addItemBtnClickHandler}
      >
        Add Item
      </button>
    </form>
  );
};

export default AddItem;
