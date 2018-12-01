import React from 'react';
import { Wrapper, Input, Button, Img } from './styles';
import SearchIcon from '../../assets/icons/search.svg';
import PropTypes from 'prop-types';

const Search = ({ onClick, value, onChange }) => {
  return (
    <Wrapper>
      <Input value={value} onChange={onChange} type="text" />
      <Button onClick={onClick}>
        <Img src={SearchIcon} alt="logo" />
      </Button>
    </Wrapper>
  );
};

Search.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default Search;
