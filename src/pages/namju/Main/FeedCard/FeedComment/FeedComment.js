import React, { useState } from 'react';
import './FeedComment.scss';

const FeedComment = props => {
  const [showResults, setShowResults] = useState(true);
  const [srcHeart, setSrcHeart] = useState(false);

  function handleDelete() {
    setShowResults(!showResults);
  }

  function toggleHeart() {
    setSrcHeart(!srcHeart);
  }

  return (
    showResults && (
      <div className="feed-comment">
        <div className="feed-comment-wrap">
          <div className="comment">
            <strong>{props.name}</strong>
            <span>{props.content}</span>
          </div>
          <div className="comment-btns">
            <button type="button" className="btn-delete" onClick={handleDelete}>
              <img alt="delete comment" src="/images/namju/delete.svg" />
            </button>
            <button type="button" className="btn-like">
              <img
                alt="like comment"
                src={
                  srcHeart
                    ? '/images/namju/heart-filled.svg'
                    : '/images/namju/heart-empty.svg'
                }
                onClick={toggleHeart}
              />
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default FeedComment;
