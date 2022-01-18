import React from 'react';
import './FeedComment.scss';

const FeedComment = props => {
  return (
    <div className="feed-comment-namju">
      <div className="feed-comment-wrap">
        <div className="comment">
          <strong>{props.name}</strong>
          <span>{props.content}</span>
        </div>
        <div className="comment-btns">
          <button
            type="button"
            className="btn-delete"
            onClick={() => props.deleteComment(props.index)}
          >
            <img alt="delete comment" src="/images/namju/delete.svg" />
          </button>
          <button
            type="button"
            className="btn-like"
            onClick={() => props.likeComment(props.index)}
          >
            <img
              alt="like comment"
              src={
                props.isLiked
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
