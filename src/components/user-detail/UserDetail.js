import React from 'react';
import { Wrapper, Avatar, UserName, UserLogin, InfoDescription, ContentInfo, ImgInfo } from './styles';
import OrganizationIcon from '../../assets/icons/organization.svg';
import LocationnIcon from '../../assets/icons/location.svg';
import StarIcon from '../../assets/icons/star.svg';
import RepositorieIcon from '../../assets/icons/repositorie.svg';
import FollowersIcon from '../../assets/icons/followers.svg';
import PropTypes from 'prop-types';

const UserDetail = ({ user }) => {
  return (
    <Wrapper>
      <Avatar id="avatar" src={user.avatar_url} alt="avatar" />
      <UserName id="name">{user.name}</UserName>
      <UserLogin id="login">{user.login}</UserLogin>
      <ContentInfo>
        <ImgInfo src={OrganizationIcon} alt='location' />
        <InfoDescription id="company">{user.company ? user.company : 'no company'}</InfoDescription>
      </ContentInfo>
      <ContentInfo>
        <ImgInfo src={LocationnIcon} alt='location' />
        <InfoDescription id="location">{user.location ? user.location : 'no location'}</InfoDescription>
      </ContentInfo>
      <ContentInfo>
        <ImgInfo src={StarIcon} alt='location' />
        <InfoDescription id="star_all_repos">{user.star_all_repos ? user.star_all_repos : 0}</InfoDescription>
      </ContentInfo>
      <ContentInfo>
        <ImgInfo src={RepositorieIcon} alt='location' />
        <InfoDescription id="public_repos">{user.public_repos ? user.public_repos : 0}</InfoDescription>
      </ContentInfo>
      <ContentInfo>
        <ImgInfo src={FollowersIcon} alt='location' />
        <InfoDescription id="followers">{user.followers ? user.followers : 0}</InfoDescription>
      </ContentInfo>
    </Wrapper>
  );
};


UserDetail.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserDetail;
