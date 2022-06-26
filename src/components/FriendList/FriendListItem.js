import PropTypes from "prop-types";
import { FriendsItem,ImgFriends,FriendsText } from 'components/FriendList/FriendList.styled';



const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <FriendsItem>
                <FriendsText
                style =  {{backgroundColor: isOnline? 'green': 'red' }}
                ></FriendsText>
            <ImgFriends
                src={avatar}
                alt={"User avatar" + {name}}
                width="48" />
            <p>{name}</p>
        </FriendsItem>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline:PropTypes.bool.isRequired,
}

export default FriendListItem;