import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
   display: flex;   
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding: 50px;
   margin: 0 auto;
`;
export const ProfileCard = styled.div`
  background-color: rgb(153, 213, 247);    
  border: 1px solid black; 
`;
export const Description = styled.div`
   padding: 60px;
   padding-bottom: 0;
   margin-bottom: 40px
    border: 1px solid black;
`;
export const Img = styled.img`
  width: 250px;
  height: 250px;   
  border-radius: 50%;
  background-color: rgb(245, 237, 237);
`;
export const UserName = styled.p`
font-size: 40px;
font-weight: 500;
padding: 30px 0;
`;
export const UserTag = styled.p`
 font-size: 25px;
 color: rgb(5, 4, 4);
  text-align: center;
  margin-bottom: 30px;
`;
export const UserLocation = styled.p`
 font-size: 20px;
 color: rgb(5, 4, 4);
  text-align: center;
  margin-bottom: 30px;
`;
export const UserStats = styled.ul`
 display: flex;
 justify-content: space-evenly;
 border: 1px solid black;
 padding: 0;
 margin: 0;
 width: 100%;
`;

export const UserItem = styled.li`
  width: calc(100% / 3);
   text-align: center;
    list-style: none;
    padding: 15px;
`;


export const UserLabel = styled.span`
display: block;
 padding: 10px;
font-weight: 600;
`;

// .item__stats:not(:last-child) {
//     border-right: 1px solid black;
// }

