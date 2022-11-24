import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { fetchDocument } from '../store/actions/documentActions';

import NavigationBar from '../components/common/NavigationBar';
import InputKeyboard from '../components/generic/form/input/InputKeyboard';

const Home = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  const onChange = (e) => {
    setSearchText(e.target.value);
  };

  const onSearch = () => {
    dispatch(fetchDocument(searchText));
  };

  return (
    <>
      <NavigationBar />
      <div className='max-w-md mx-auto mt-64 px-3 lg:px-0'>
        <InputKeyboard
          searchText={searchText}
          onChange={onChange}
          onSearch={onSearch}
        />
      </div>
    </>
  );
};

export default Home;
