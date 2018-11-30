import React from 'react';
import { Wrapper, Avatar, UserName, UserLogin, InfoDescription, ContentInfo, ImgInfo } from './styles';
import OrganizationIcon from '../../assets/icons/organization.svg';
import LocationnIcon from '../../assets/icons/location.svg';
import StarIcon from '../../assets/icons/star.svg';
import RepositorieIcon from '../../assets/icons/repositorie.svg';
import FollowersIcon from '../../assets/icons/followers.svg';
import PropTypes from 'prop-types';

const UserDetail = (props) => {
  return (
    <Wrapper>
      <Avatar src={'http://www.caferadioativo.com/wp-content/uploads/2014/02/dath-vader.jpg'} alt="avatar" />
      <UserName>
        Darth Vader
      </UserName>
      <UserLogin>anakinskywalker</UserLogin>
      <ContentInfo>
        <ImgInfo src={OrganizationIcon} alt='location' />
        <InfoDescription>The Galactic Empire</InfoDescription>
      </ContentInfo>
      <ContentInfo>
        <ImgInfo src={LocationnIcon} alt='location' />
        <InfoDescription>Tatooine</InfoDescription>
      </ContentInfo>
      <ContentInfo>
        <ImgInfo src={StarIcon} alt='location' />
        <InfoDescription>1.000.000</InfoDescription>
      </ContentInfo>
      <ContentInfo>
        <ImgInfo src={RepositorieIcon} alt='location' />
        <InfoDescription>4</InfoDescription>
      </ContentInfo>
      <ContentInfo>
        <ImgInfo src={FollowersIcon} alt='location' />
        <InfoDescription>9.999.999</InfoDescription>
      </ContentInfo>
    </Wrapper>
  );
};


UserDetail.propTypes = {
  fontSize: PropTypes.string,
};

export default UserDetail;
