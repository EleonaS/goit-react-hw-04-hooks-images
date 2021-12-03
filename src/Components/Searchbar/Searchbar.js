import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import {
  Header,
  SearchForm,
  Button,
  ButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

function Searchbar({ onSubmit }) {
  const [query, setQuery] =
    useState('');

  function handleInputChange(e) {
    const query =
      e.currentTarget.value.toLowerCase();
    setQuery(query);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (query.trim() === '') {
      toast.info(
        'Рlease ENTER CORRECT NAME',
        {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        },
      );
      return;
    }
    onSubmit(query);
    resetState();
  }

  function resetState() {
    setQuery('');
  }

  return (
    <Header>
      <SearchForm
        onSubmit={handleSubmit}
      >
        <Button type="submit">
          <ButtonLabel>
            Search
          </ButtonLabel>
        </Button>

        <SearchFormInput
          value={query}
          onChange={handleInputChange}
          placeholder="Search images"
          type="text"
          autoComplete="off"
          autoFocus
        />
      </SearchForm>
    </Header>
  );
}

export { Searchbar };
