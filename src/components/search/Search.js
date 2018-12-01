import React from 'react';
import { Wrapper, Input, Button, Img } from './styles';
import SearchIcon from '../../assets/icons/search.svg';
import PropTypes from 'prop-types';

const Search = ({ justifyContent, widthWrapper, widthInput, onClick, value , onChange}) => {
  return (
    <Wrapper justifyContent={justifyContent} widthWrapper={widthWrapper}>
      <Input value={value} onChange={onChange} widthInput={widthInput} type="text" />
      <Button onClick={onClick}>
        <Img src={SearchIcon} alt="logo" />
      </Button>
    </Wrapper>
  );
};

Search.propTypes = {
  justifyContent: PropTypes.string,
  widthInput: PropTypes.string,
  onClick: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default Search;
