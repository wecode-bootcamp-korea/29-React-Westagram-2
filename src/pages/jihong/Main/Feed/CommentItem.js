import React, { useState } from 'react';

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

  const deleteComment = id => {
    setComments(comments.filter(user => user.id !== id));
  };

  return (
    <div>
      <li key={index}>
        <span>{userName}</span>
        {comment.comment}
        <button className="likeBtn" onClick={isLikeClick}>
          <i className={`${isLiked ? 'fas' : 'far'} fa-heart`} />
        </button>
        <button className="deleteBtn" onClick={() => deleteComment(id)}>
          X
        </button>
      </li>
    </div>
  );
};

export default CommentItem;
