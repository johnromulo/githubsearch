import React from 'react';
import { Wrapper, Title, Description, StarNumber, ContentStar, Img } from './styles';
import PropTypes from 'prop-types';
import StarIcon from '../../assets/icons/star.svg';

const RepositoryInfo = (props) => {
  return (
    <Wrapper>
      <Title>Death Star</Title>
      <Description>
        The most powerful weapon in the universe.
      </Description>
      <ContentStar>
        <Img src={StarIcon} alt="logo" />
        <StarNumber>4200</StarNumber>
      </ContentStar>
    </Wrapper>
  );
};

RepositoryInfo.propTypes = {
  repository: PropTypes.object,
};

export default RepositoryInfo;
