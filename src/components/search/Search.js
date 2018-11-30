import React from 'react';
import { Wrapper, Input, Button, Img } from './styles';
import SearchIcon from '../../assets/icons/search.svg';
import PropTypes from 'prop-types';

const Search = (props) => {
  console.log('props', props);
  return (
    <Wrapper justifyContent={props.justifyContent} widthWrapper={props.widthWrapper}>
      <Input widthInput={props.widthInput} type="text" />
      <Button>
        <Img src={SearchIcon} alt="logo" />
      </Button>
    </Wrapper>
  );
};

Search.propTypes = {
  justifyContent: PropTypes.string,
  widthInput: PropTypes.string,
};

export default Search;
