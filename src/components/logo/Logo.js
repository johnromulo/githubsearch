import React from 'react';
import { TextGit, TextSearch, Wrapper } from './styles';
import PropTypes from 'prop-types';

const Logo = ({ fontSize }) => {
  return (
    <Wrapper fontSize={fontSize} >
      <TextGit id="textGit">Github</TextGit>
      <TextSearch id="textSearch">Search</TextSearch>
    </Wrapper>
  );
};

Logo.propTypes = {
  fontSize: PropTypes.string,
};

export default Logo;
