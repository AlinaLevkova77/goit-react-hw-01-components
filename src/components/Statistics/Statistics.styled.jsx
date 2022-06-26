import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
text-align: center;
 margin-top: 30px;
 `;
export const StatisticsTitle = styled.h2`
text-transform: uppercase;
`;
export const StatisticsList = styled.ul`
 list-style: none;
 display: inline-flex;
 border: 1px solid black;
 margin-top: 20px;
 padding: 0;
 margin: 0;
 `;

export const StatisticsItem = styled.li`
 width: 100px;
  background-color: rgb(127, 202, 245)\
  
  :not(:last-child) {
         border-right: 1px solid black;
 }
  `;

export const Label = styled.span`
display: block;
padding: 15px;
font-size: 16px;
font-weight: 500;
`;
export const Percentage = styled.span`
font-weight: 500;
font-size: 20px;
display: inline-block;
padding-bottom: 15px;
`;


