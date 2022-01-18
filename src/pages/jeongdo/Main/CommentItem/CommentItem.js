import React, { useState } from 'react';
import './Comment.scss';

const CommentItem = ({ comment, comments, setComments, id }) => {
  const [isLike, setIsLike] = useState(false);
  const likeClick = e => {
    setIsLike(!isLike);
  };

  const handleDelete = id => {
    setComments(comments.filter(commentGuest => commentGuest.id !== id));
  };
  return (
    <div className="post__comment__guest">
      <div className="post__comment__guest-info">
        <span>{comment.userName}</span>
        <p>{comment.content}</p>
      </div>
      <div className="post__comment__guest-icon">
        <i className="far fa-trash-alt" onClick={() => handleDelete(id)} />
        {isLike ? (
          <i className="fas fa-heart on" onClick={likeClick} />
        ) : (
          <i className="far fa-heart heart " onClick={likeClick} />
        )}
      </div>
    </div>
  );
};

export default CommentItem;
