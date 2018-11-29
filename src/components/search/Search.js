import React from 'react';
import { Wrapper, Input, Button, Img } from './styles';
import SearchIcon from '../../assets/icons/search.svg'

const Search = () => {
  return (
    <Wrapper>
      <Input type="text" />
      <Button>
        <Img src={SearchIcon} alt="logo" />
      </Button>
    </Wrapper>
  );
};

export default Search;
