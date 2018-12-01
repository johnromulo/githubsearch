import React from 'react';
import { Wrapper, Input, Button, Img } from './styles';
import SearchIcon from '../../assets/icons/search.svg';
import PropTypes from 'prop-types';

const Search = ({ handleSearch, value, onChange }) => {
  return (
    <Wrapper onSubmit={handleSearch}>
      <Input value={value} onChange={onChange} type="text" />
      <Button onClick={handleSearch} type="submit">
        <Img src={SearchIcon} alt="logo" />
      </Button>
    </Wrapper>
  );
};

Search.propTypes = {
  handleSearch: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default Search;
