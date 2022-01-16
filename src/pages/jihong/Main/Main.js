import React from 'react';
import { useState } from 'react';
import Mainright from './Right/Mainright';
import './Main.scss';

const Main = () => {
  const [text, setText] = useState('');
  const [texts, setTexts] = useState([]);

  const onChange = event => setText(event.target.value);

  const onSubmit = event => {
    event.preventDefault();
    if (text === '') {
      return;
    }
    setText('');
    setTexts(currentArray => [text, ...currentArray]);
  };

  const [isLike, setIsLike] = useState(false);
  const isLikeClick = e => {
    setIsLike(!isLike);
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
            <i className="fas fa-heart" />
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
              {texts.map((item, index) => (
                <li key={index}>
                  <span>whoohawhooha</span>
                  {item}
                  <button onClick={isLikeClick}>
                    {isLike ? (
                      <i className="fas fa-heart" />
                    ) : (
                      <i className="far fa-heart" />
                    )}
                  </button>
                </li>
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
                value={text}
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
