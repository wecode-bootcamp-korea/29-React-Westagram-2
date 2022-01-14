import React, { useState } from 'react';
import './FeedCard.scss';
import FeedComment from './FeedComment/FeedComment';

// let textArr = [];

const FeedCard = props => {
  const [textareaValue, setTextareaValue] = useState('');
  const [textArr, setTextArr] = useState([]);

  const [srcHeart, setSrcHeart] = useState(false);

  function handleChange(e) {
    setTextareaValue(e.target.value);
  }

  function handleClick() {
    if (textareaValue) {
      setTextArr([...textArr, textareaValue]);
      setTextareaValue('');
    }
  }

  function toggleHeart() {
    setSrcHeart(!srcHeart);
  }

  function handleEnterPress(e) {
    e.preventDefault();
    handleClick();
  }

  return (
    <article className="feed-card" id="feedCard">
      <div className="feed-header">
        <a href="/main" className="feed-header-left">
          <div className="profile-pic-wrap">
            <img
              aria-hidden
              src={props.profileSrc}
              className="profile-pic"
              alt="profile picture"
            />
          </div>
          <strong className="user-name">{props.name}</strong>
        </a>
        <button type="button">
          <img alt="More options" src="/images/namju/icon-elipsis.svg" />
        </button>
      </div>
      <img src={props.feedSrc} alt="feed" className="feed-img" />
      <div className="feed-btns">
        <div className="feed-btns-left">
          <button type="button" className="btn-like">
            <img
              alt="like feed"
              src={
                srcHeart
                  ? '/images/namju/heart-filled.svg'
                  : '/images/namju/heart-empty.svg'
              }
              onClick={toggleHeart}
            />
          </button>
          <button type="button" className="btn-comment">
            <img alt="comment feed" src="/images/namju/bubble.svg" />
          </button>
          <button type="button" className="btn-share">
            <img alt="share feed" src="/images/namju/share.svg" />
          </button>
        </div>

        <div className="feed-btns-right">
          <button type="button" className="feed-btn-bookmark">
            <img alt="bookmark feed" src="./images/namju/bookmark.svg" />
          </button>
        </div>
      </div>
      <div className="feed-like-info">
        <div className="like-info-img-wrap">
          <img
            src="./images/namju/like-info-img.jpeg"
            alt=""
            className="like-info-img"
          />
        </div>
        <span>
          <a href="/main">dassboss</a>님
          <a href="/main">외 {props.likes - 1}명</a>이 좋아합니다
        </span>
      </div>
      <div className="feed-content">
        <strong>{props.name}</strong>
        <span>{props.caption}</span>
        <span className="short">...</span>
        <button className="btn-more" type="button">
          더 보기
        </button>
      </div>

      {/* 댓글 들어오는 영역 */}
      {textArr.map((e, index) => (
        <FeedComment name="unknown" content={e} key={index} />
      ))}

      <aside className="feed-time">{props.time} 전</aside>
      <form className="feed-comment-form" method="post">
        <textarea
          className="comment-area"
          placeholder="댓글 달기..."
          onChange={handleChange}
          onKeyPress={e => (e.key === 'Enter' ? handleEnterPress(e) : false)}
          value={textareaValue}
        />
        <button
          className="btn-add-comment"
          type="button"
          disabled={textareaValue === ''}
          onClick={handleClick}
        >
          게시
        </button>
      </form>
    </article>
  );
};

export default FeedCard;
