import React from 'react';
import { useState } from 'react';

const CommentItem = ({ comment, index, id, setComments, comments }) => {
  const [isLike, setIsLike] = useState(false);
  const isLikeClick = () => {
    setIsLike(!isLike);
  };

  const onRemove = id => {
    setComments(comments.filter(user => user.id !== id));
  };
  return (
    <div>
      <li key={index}>
        <span>whoohawhooha</span>
        {comment.comment}
        <button className="likeBtn" onClick={isLikeClick}>
          {isLike ? (
            <i className="fas fa-heart" />
          ) : (
            <i className="far fa-heart" />
          )}
        </button>
        <button className="deleteBtn" onClick={() => onRemove(id)}>
          X
        </button>
      </li>
    </div>
  );
};

export default CommentItem;
