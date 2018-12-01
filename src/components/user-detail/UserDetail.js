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
      <Avatar src={user.avatar_url} alt="avatar" />
      <UserName>{user.name}</UserName>
      <UserLogin>{user.login}</UserLogin>
      <ContentInfo>
        <ImgInfo src={OrganizationIcon} alt='location' />
        <InfoDescription>{user.company ? user.company : 'no company'}</InfoDescription>
      </ContentInfo>
      <ContentInfo>
        <ImgInfo src={LocationnIcon} alt='location' />
        <InfoDescription>{user.location ? user.location : 'no location'}</InfoDescription>
      </ContentInfo>
      <ContentInfo>
        <ImgInfo src={StarIcon} alt='location' />
        <InfoDescription>{user.star_all_repos ? user.star_all_repos : 0}</InfoDescription>
      </ContentInfo>
      <ContentInfo>
        <ImgInfo src={RepositorieIcon} alt='location' />
        <InfoDescription>{user.public_repos ? user.public_repos : 0}</InfoDescription>
      </ContentInfo>
      <ContentInfo>
        <ImgInfo src={FollowersIcon} alt='location' />
        <InfoDescription>{user.followers ? user.followers : 0}</InfoDescription>
      </ContentInfo>
    </Wrapper>
  );
};


UserDetail.propTypes = {
  user: PropTypes.object,
};

export default UserDetail;
