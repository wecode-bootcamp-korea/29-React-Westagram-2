import React from 'react';
import './FeedComment.scss';

const FeedComment = ({
  name,
  content,
  index,
  isLiked,
  deleteComment,
  likeComment,
}) => {
  return (
    <div className="feed-comment-namju">
      <div className="feed-comment-wrap">
        <div className="comment">
          <strong>{name}</strong>
          <span>{content}</span>
        </div>
        <div className="comment-btns">
          <button
            type="button"
            className="btn-delete"
            onClick={() => deleteComment(index)}
          >
            <img alt="delete comment" src="/images/namju/delete.svg" />
          </button>
          <button
            type="button"
            className="btn-like"
            onClick={() => likeComment(index)}
          >
            <img
              alt="like comment"
              src={
                isLiked
                  ? '/images/namju/heart-filled.svg'
                  : '/images/namju/heart-empty.svg'
              }
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedComment;
