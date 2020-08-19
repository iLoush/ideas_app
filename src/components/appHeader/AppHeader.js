import React from 'react';

import './appHeader.css';
import styled from 'styled-components';

const Header = styled.div`
display: flex;
align-items: flex-end;
justify-content: space-between;
h1 {
   font-size: 26px;
   color: ${props => props.colored ? '#ddd' : 'black'};
   :hover {
      color: #444;
   }
}
h2 {
   font-size: 1.2rem;
   color: #444;
   }
`

const AppHeader = ({ liked, allPosts }) => {
   return (
      <Header colored>
         <h1>Irina Loushkina</h1>
         <h2>All posts are {allPosts}, and liked posts are {liked}</h2>
      </Header>
   )
}

export default AppHeader;