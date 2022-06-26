import PropTypes from "prop-types";
import { ProfileContainer,ProfileCard,Description,Img,UserName,UserTag,UserLocation,UserStats,UserItem,UserLabel} from 'components/Profile/Profile.styled';


const Profile = ({
  username,
  avatar,
  location,
  stats: { followers, likes, views },
  tag,
}) => {
  return (
    < ProfileContainer>
      <ProfileCard>
        <Description>
          <Img 
            src={avatar}
            alt={username}
          />
          <UserName>{username}</UserName>
          <UserTag>{tag}</UserTag>
          <UserLocation>{location}</UserLocation>
        </Description>

        <UserStats>
          <UserItem >
            <UserLabel>Followers</UserLabel>
            <span>{followers}</span>
          </UserItem>
          <UserItem>
            <UserLabel>Views</UserLabel>
            <span >{views}</span>
          </UserItem>
          <UserItem>
            <UserLabel >Likes</UserLabel>
            <span >{likes}</span>
          </UserItem>
        </UserStats>
      </ProfileCard>
    </ProfileContainer>
  );
};

Profile.propTypes = {
    username:PropTypes.string.isRequired,
    tag:PropTypes.string.isRequired,
    location:PropTypes.string.isRequired,
    avatar:PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
  })
};

export default Profile;