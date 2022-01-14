import React from 'react';
import CommentLike from './CommentLike';

const AddComment = ({ userComments, setuserComments, com }) => {
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
        <CommentLike />
      </div>
    </li>
  );
};

export default AddComment;
