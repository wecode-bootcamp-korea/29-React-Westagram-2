import React from 'react';
import { useState } from 'react';

const CommentItem = ({
  comment,
  index,
  id,
  setComments,
  comments,
  userName,
}) => {
  const [isLiked, setIsLiked] = useState(comment.isLike);
  const isLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const onRemove = id => {
    setComments(comments.filter(user => user.id !== id));
  };

  return (
    <div>
      <li key={index}>
        <span>{userName}</span>
        {comment.comment}
        <button className="likeBtn" onClick={isLikeClick}>
          {isLiked ? (
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
