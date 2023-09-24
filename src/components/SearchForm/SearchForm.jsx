import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
import { addTodo } from 'redux/reducers';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

export const SearchForm = () => {
  const [query, setQuery] = useState('');

  const dispatch = useDispatch();

  const handleInput = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newTodo = { id: nanoid(), text: query };
    dispatch(addTodo(newTodo));
    setQuery('');
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        onChange={handleInput}
        placeholder="What do you want to write?"
        name="search"
        required
        value={query}
        autoFocus
      />
    </SearchFormStyled>
  );
};
