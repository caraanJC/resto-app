import { useDispatch, useSelector } from 'react-redux';
import { actionCreators, State } from '../state';
import Item from './Item';

import '../styles/Menu.css';
import { bindActionCreators } from 'redux';

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
}

const Menu = () => {
  const items = useSelector((state: State) => state.items);
  const categories = useSelector((state: State) => state.categories);
  const selectedCategory = useSelector(
    (state: State) => state.selectedCategory
  );

  const dispatch = useDispatch();
  const { setSelectedCategory } = bindActionCreators(actionCreators, dispatch);

  const selectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const compare = (a: IParams['item'], b: IParams['item']) => {
    if (a.priority < b.priority) {
      return -1;
    }
    if (a.priority > b.priority) {
      return 1;
    }
    return 0;
  };

  return (
    <main className='menu'>
      <h1 className='menu__title'>Restaurant App</h1>
      <select
        name='menuCategory'
        className='menu__category'
        value={selectedCategory}
        onChange={selectChangeHandler}
      >
        {['All', ...categories].map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
      <ul className='menu__list'>
        {[...items]
          .filter(
            (item) =>
              item.category === selectedCategory || selectedCategory === 'All'
          )
          .sort(compare)
          .map((item) => (
            <Item item={item} key={item.id} />
          ))}
      </ul>
    </main>
  );
};

export default Menu;
