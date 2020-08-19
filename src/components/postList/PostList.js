import React from 'react';
import PostListItem from '../postListItem';

import './post-list.css';
import { ListGroup } from 'reactstrap';

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {

   const elementsFromServer = posts.map((item) => {
      const { id, ...itemProps } = item;

      return (
         <li key={id} className="list-group-item">
            <PostListItem
               {...itemProps}
               onDelete={() => onDelete(id)}
               onToggleImportant={() => onToggleImportant(id)}
               onToggleLiked={() => onToggleLiked(id)}
            />
         </li>
      )
   });

   return (
      <ListGroup className="app-list">
         {elementsFromServer}
      </ListGroup>
   )
}

export default PostList;