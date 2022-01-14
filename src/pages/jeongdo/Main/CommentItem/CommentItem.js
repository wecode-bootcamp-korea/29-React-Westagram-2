import React, { useState } from 'react';

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
      <div>
        <i class="far fa-trash-alt" onClick={() => handleDelete(id)} />
        <button className="rmBack" onClick={likeClick}>
          {isLike ? (
            <i class="fas fa-heart on" />
          ) : (
            <i className="far fa-heart heart " />
          )}
        </button>
      </div>
    </div>
  );
};

export default CommentItem;
