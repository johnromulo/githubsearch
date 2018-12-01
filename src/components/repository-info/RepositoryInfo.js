import React from 'react';
import { Wrapper, Title, Description, StarNumber, ContentStar, Img } from './styles';
import PropTypes from 'prop-types';
import StarIcon from '../../assets/icons/star.svg';

const RepositoryInfo = ({ repository }) => {
  return (
    <Wrapper>
      <Title>{repository.name}</Title>
      <Description>
        {repository.descripition}
      </Description>
      <ContentStar>
        <Img src={StarIcon} alt="logo" />
        <StarNumber>{repository.stargazers_count}</StarNumber>
      </ContentStar>
    </Wrapper>
  );
};

RepositoryInfo.propTypes = {
  repository: PropTypes.object,
};

export default RepositoryInfo;
