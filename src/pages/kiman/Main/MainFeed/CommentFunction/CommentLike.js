import React from 'react';
import { useState } from 'react';

const CommentLike = () => {
  const [isLike, setisLike] = useState(false);
  const likeClick = () => {
    setisLike(isLike => !isLike);
  };

  return (
    <i
      onClick={likeClick}
      className={isLike ? 'fas fa-heart clicked' : 'fas fa-heart'}
    />
  );
};

export default CommentLike;
