import React, { useState } from 'react';
import CommentItem from './CommentItem';
import './Feed.scss';

const Feed = ({ userName, userImg, feedImg, description, userComments }) => {
  const [comments, setComments] = useState(userComments);
  const [commentInput, setCommentInput] = useState('');
  const [isLiked, setIsLiked] = useState(false);

  const isLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const onChange = event => setCommentInput(event.target.value);

  const onSubmit = event => {
    event.preventDefault();
    setComments([
      ...comments,
      {
        userName: 'guest',
        comment: commentInput,
        id: Math.ceil(Math.random() * 100),
      },
    ]);
    setCommentInput('');
  };
  return (
    <div className="feed">
      <div className="feedProfile">
        <img className="profileImg2" src={userImg} alt="프로필" />
        <span className="profileNickname">{userName}</span>
        <i className="fas fa-ellipsis-h" />
      </div>

      <div className="feedArticle">
        <img className="articlePhoto" src={feedImg} alt="게시물" />
      </div>

      <div className="feedEmoticon">
        <button className="LikeEmoticon" onClick={isLikeClick}>
          <i className={`${isLiked ? 'fas' : 'far'} fa-heart`} />
        </button>
        <i className="far fa-comment" />
        <i className="far fa-paper-plane" />
        <i className="far fa-bookmark" />
      </div>

      <div className="feedLike">
        <img className="profileImg2" src={userImg} alt="프로필" />
        <p>
          <span>chang.mins</span>님<span> 외 10명</span>이 좋아합니다.
        </p>
      </div>

      <div className="feedContent">
        <p>
          <span>{userName}</span>
          {description}
        </p>
      </div>
      <div className="userComment">
        <div className="comment">
          {comments?.map((comment, idx) => {
            return (
              <CommentItem
                userName={comment.userName}
                id={comment.id}
                key={idx}
                comment={comment}
                comments={comments}
                setComments={setComments}
              />
            );
          })}
        </div>
      </div>
      <form className="feedComment" onSubmit={onSubmit}>
        <div className="writeComment">
          <img className="profileImg2" src={userImg} alt="프로필" />
          <input
            className="inputComment"
            onChange={onChange}
            value={commentInput}
            type="text"
            placeholder="댓글 달기..."
          />
          <button className="inputBtn">게시</button>
        </div>
      </form>
    </div>
  );
};

export default Feed;
