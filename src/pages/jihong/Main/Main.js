import React from 'react';
import { useState } from 'react';
import Mainright from './Right/Mainright';
import './Main.scss';
import CommentItem from './Feed/CommentItem';

const Main = () => {
  const [commentInput, setCommentInput] = useState('');
  const [comments, setComments] = useState([]);

  const [isLike, setIsLike] = useState(false);
  const isLikeClick = () => {
    setIsLike(!isLike);
  };

  const onChange = event => setCommentInput(event.target.value);

  const onSubmit = event => {
    event.preventDefault();
    if (commentInput === '') {
      return;
    }
    setCommentInput('');
    setComments([...comments, { comment: commentInput, id: Math.random() }]);
  };

  return (
    <div className="mainContainer">
      <header className="navigationBar">
        <div className="navLeft">
          <i className="fab fa-instagram" />
          <span id="line">|</span>
          <h1 id="title">Westagram</h1>
        </div>
        <div className="navMiddle">
          <input id="inputBar" type="text" placeholder="검색" />
        </div>
        <div className="navRight">
          <i className="far fa-compass" />
          <i className="far fa-heart" />
          <i className="far fa-user" />
        </div>
      </header>

      <main className="main">
        <div className="feed">
          <div className="feedProfile">
            <img
              className="profileImg2"
              src="./images/jihong/jihong.jpeg"
              alt="프로필"
            />
            <span className="profileNickname">whoohawhooha</span>
            <i className="fas fa-ellipsis-h" />
          </div>

          <div className="feedArticle">
            <img
              className="articlePhoto"
              src="./images/jihong/nike.png"
              alt="게시물"
            />
          </div>

          <div className="feedEmoticon">
            <button className="LikeEmoticon" onClick={isLikeClick}>
              {isLike ? (
                <i className="fas fa-heart" />
              ) : (
                <i className="far fa-heart" />
              )}
            </button>
            <i className="far fa-comment" />
            <i className="far fa-paper-plane" />
            <i className="far fa-bookmark" />
          </div>

          <div className="feedLike">
            <img
              className="profileImg2"
              src="./images/jihong/jihong.jpeg"
              alt="프로필"
            />
            <p>
              <span>chang.mins</span>님<span> 외 10명</span>이 좋아합니다.
            </p>
          </div>

          <div className="feedContent">
            <p>
              <a href="/#">whoohawhooha</a>&nbsp;&nbsp;&nbsp;그냥해
            </p>
          </div>
          <div className="userComment">
            <div className="comment">
              {comments.map((comment, index) => (
                <CommentItem
                  comment={comment}
                  key={index}
                  id={comment.id}
                  setComments={setComments}
                  comments={comments}
                />
              ))}
            </div>
          </div>
          <form className="feedComment" onSubmit={onSubmit}>
            <div className="writeComment">
              <img
                className="profileImg2"
                src="./images/jihong/jihong.jpeg"
                alt="프로필"
              />
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
        <Mainright />
      </main>
    </div>
  );
};

export default Main;
