import PropTypes from "prop-types";
import FriendListItem from 'components/FriendList/FriendListItem';
import {FriendsList} from 'components/FriendList/FriendList.styled';


const FriendList = ({ friends }) => {
  return (
  
      <FriendsList>
        {friends.map(({ id, avatar, name, isOnline }) => (
            <FriendListItem
              avatar={avatar}
              name={name}
              isOnline={isOnline}
              key={id}
            />
        ))}
      </FriendsList>
  );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object).isRequired,
   
};

export default FriendList;