import React from 'react';
import { TextGit, TextSearch, Wrapper } from './styles';
import PropTypes from 'prop-types';

const Logo = (props) => {
  return (
    <Wrapper fontSize={props.fontSize} margin={props.margin}>
      <TextGit>Github</TextGit>
      <TextSearch>Search</TextSearch>
    </Wrapper>
  );
};

Logo.propTypes = {
  fontSize: PropTypes.string,
};

export default Logo;
