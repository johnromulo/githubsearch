import React from 'react';
import PropTypes from 'prop-types';
import { Content, TextNotFound } from './styles';

const NotFound = ({text}) => {
  return (
    <Content>
      <TextNotFound id="textNotfound">{text}</TextNotFound>
    </Content>
  );
};

NotFound.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NotFound;
