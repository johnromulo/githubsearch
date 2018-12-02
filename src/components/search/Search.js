import React from 'react';
import { Wrapper, Input, Button, Img } from './styles';
import SearchIcon from '../../assets/icons/search.svg';
import PropTypes from 'prop-types';

const Search = ({ handleSearch, value, onChange }) => {
  return (
    <Wrapper id="formUsername" onSubmit={handleSearch}>
      <Input id="inputUserName" value={value} onChange={onChange} type="text" />
      <Button id="buttonSearch" onClick={handleSearch} type="submit">
        <Img src={SearchIcon} alt="logo" />
      </Button>
    </Wrapper>
  );
};

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Search;
