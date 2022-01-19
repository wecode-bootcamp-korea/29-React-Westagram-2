import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FeedComment from './FeedComment/FeedComment';
import './FeedCard.scss';

const FeedCard = ({
  index,
  userName,
  profileSrc,
  feedSrc,
  numOfLikes,
  caption,
  isLiked,
  time,
  handleLikeFeed,
  commentData,
}) => {
  const [textareaValue, setTextareaValue] = useState('');
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    setCommentList(commentData);
  }, []);

  const handleChange = e => {
    setTextareaValue(e.target.value);
  };

  const handleEnterPress = e => {
    e.preventDefault();
    handleClick();
  };

  const handleClick = () => {
    if (textareaValue) {
      setCommentList(prevArr => [
        ...prevArr,
        {
          id: prevArr.length + 1,
          userName: 'userName',
          content: textareaValue,
          isLiked: false,
        },
      ]);

      setTextareaValue('');
    }
  };

  const deleteComment = commentIndex => {
    setCommentList(prev =>
      prev.filter((item, index) => index !== commentIndex)
    );
  };

  const likeComment = commentIndex => {
    let newArr = [...commentList];
    newArr[commentIndex].isLiked = newArr[commentIndex].isLiked ? false : true;
    setCommentList(newArr);
  };

  return (
    <article className="feed-card-namju" id="feedCard">
      <div className="feed-header">
        <Link to="/main-namju" className="feed-header-left">
          <div className="profile-pic-wrap">
            <img
              aria-hidden
              src={profileSrc}
              className="profile-pic"
              alt="profile picture"
            />
          </div>
          <strong className="user-name">{userName}</strong>
        </Link>
        <button type="button">
          <img alt="More options" src="/images/namju/icon-elipsis.svg" />
        </button>
      </div>
      <img src={feedSrc} alt="feed" className="feed-img" />
      <div className="feed-btns">
        <div className="feed-btns-left">
          <button
            type="button"
            className="btn-like"
            onClick={() => handleLikeFeed(index)}
          >
            <img
              alt="like feed"
              src={
                isLiked
                  ? '/images/namju/heart-filled.svg'
                  : '/images/namju/heart-empty.svg'
              }
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
          <Link to="/main-namju">dassboss</Link>님
          {numOfLikes >= 2 && (
            <Link to="/main-namju"> 외 {numOfLikes - 1}명</Link>
          )}
          이 좋아합니다
        </span>
      </div>
      <div className="feed-content">
        <strong>{userName}</strong>
        <span>{caption}</span>
        <button className="btn-more" type="button">
          더 보기
        </button>
      </div>

      {commentList.map((comment, index) => (
        <FeedComment
          name={comment.userName}
          content={comment.content}
          key={index}
          index={index}
          isLiked={comment.isLiked}
          deleteComment={deleteComment}
          likeComment={likeComment}
        />
      ))}

      <aside className="feed-time">{time} 전</aside>
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
