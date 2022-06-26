import styled from '@emotion/styled';

export const FriendsList = styled.ul`
 width: 320px;
 margin: 30px auto 30px auto;
 padding: 0;
 list-style: none;
`;
export const FriendsItem = styled.li`
   display: flex;
    width: 100%;
    padding: 15px;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #000000;
    border-radius: 10px;

    :not(:last-child) {
    margin-bottom: 30px;
  
 }

    :hover {
     transform: scale(1.03);
     -webkit-box-shadow: 0px 2px 14px 5px rgba(0, 0, 0, 0.73);
     box-shadow: 0px 2px 14px 5px rgba(0, 0, 0, 0.73);
 }
`;

export const FriendsText = styled.span`
 display: block;
 width: 20px;
 height: 20px;
 border: 1px solid #000000;
 border-radius: 50%;
 margin-right: 30px;
 `;

export const ImgFriends = styled.img`
 display: block;
  margin-right: 30px;
  `;