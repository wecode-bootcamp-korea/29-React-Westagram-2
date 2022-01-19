import React from 'react';
import { useState } from 'react';

const AddComment = ({ userComments, setuserComments, com }) => {
  const [isLike, setisLike] = useState(com.isLike);
  const likeClick = () => {
    setisLike(isLike => !isLike);
  };

  const onClickDelte = id => {
    setuserComments(userComments.filter(usercomment => usercomment.id !== id));
  };

  return (
    <li>
      <div className="userwriteall">
        <div className="userwrite">
          <div className="userid">{com.name}</div>
          <div className="usercommnet">{com.comment}</div>
          <button className="hidden" onClick={() => onClickDelte(com.id)}>
            X
          </button>
        </div>
        <i
          onClick={likeClick}
          className={isLike ? 'fas fa-heart clicked' : 'fas fa-heart'}
        />
      </div>
    </li>
  );
};

export default AddComment;
