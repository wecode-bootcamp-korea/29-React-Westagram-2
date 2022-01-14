import React, { useState } from 'react';
import './Comment.scss';

const CommentItem = ({ comment, comments, id, idx, setComments }) => {
  const [isLike, setIsLike] = useState(false);
  const likeClick = e => {
    setIsLike(!isLike);
  };

  const handleDelete = id => {
    setComments(comments.filter(commentGuest => commentGuest.id !== id));
  };
  return (
    <div className="post__comment__guest" key={idx}>
      <div className="post__comment__guest-info">
        <span>{comment.name}</span>
        <p>{comment.comment}</p>
      </div>
      <div className="post__comment__guest-icon">
        <i class="far fa-trash-alt" onClick={() => handleDelete(id)} />
        {isLike ? (
          <i class="fas fa-heart on" onClick={likeClick} />
        ) : (
          <i className="far fa-heart heart " onClick={likeClick} />
        )}
      </div>
    </div>
  );
};

export default CommentItem;
