import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Title, Description, StarNumber, ContentStar, Img } from './styles';
import StarIcon from '../../assets/icons/star.svg';

const RepositoryInfo = ({ repository }) => {
  return (
    <Wrapper>
      <Title id="title">{repository.name}</Title>
      <Description id="description">{repository.descripition ? repository.descripition : 'No descripton'}</Description>
      <ContentStar>
        <Img src={StarIcon} alt="logo" />
        <StarNumber id="starcount">{repository.stargazers_count}</StarNumber>
      </ContentStar>
    </Wrapper>
  );
};

RepositoryInfo.propTypes = {
  repository: PropTypes.object.isRequired,
};

export default RepositoryInfo;
