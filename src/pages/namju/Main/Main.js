import React, { useState, useEffect } from 'react';
import './Main.scss';
import Nav from '../../../components/Nav/Nav';
import FeedCard from './FeedCard/FeedCard';

function Main() {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/namju/feedData-namju.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFeedList(data);
      });
  }, []);

  const likeFeed = feedIndex => {
    let newArr = [...feedList];
    newArr[feedIndex].isLiked = newArr[feedIndex].isLiked ? false : true;
    newArr[feedIndex].isLiked
      ? newArr[feedIndex].numOfLikes++
      : newArr[feedIndex].numOfLikes--;
    setFeedList(newArr);
  };

  const STORY_ITEM_LIST = [
    {
      userName: 'dassboss',
      time: '10분전',
      profilePic: '/images/namju/like-info-img.jpeg',
    },
    {
      userName: 'tiagocanario',
      time: '12분전',
      profilePic: '/images/namju/profile-img-2.jpeg',
    },
    {
      userName: 'naejusikmangham',
      time: '23분전',
      profilePic: '/images/namju/profile-img-3.jpeg',
    },
    {
      userName: 'werkjqw',
      time: '30분전',
      profilePic: '/images/namju/profile-img-default.jpeg',
    },
  ];

  const REC_ITEM_LIST = [
    {
      userName: 'dassboss',
      desc: 'akwjerb님 외 4명이 팔로우 중입니다',
      profilePic: '/images/namju/like-info-img.jpeg',
    },
    {
      userName: 'dassboss',
      desc: 'akwjerb님 외 4명이 팔로우 중입니다',
      profilePic: '/images/namju/like-info-img.jpeg',
    },
    {
      userName: 'dassboss',
      desc: 'akwjerb님 외 4명이 팔로우 중입니다',
      profilePic: '/images/namju/like-info-img.jpeg',
    },
    {
      userName: 'dassboss',
      desc: 'akwjerb님 외 4명이 팔로우 중입니다',
      profilePic: '/images/namju/like-info-img.jpeg',
    },
  ];

  const TERMS_LIST = [
    'Instagram 정보',
    '지원',
    '홍보 센터',
    'API',
    '채용 정보',
    '개인정보처리방침',
    '약관',
    '디렉터리',
    '프로필',
    '해시태그',
    '언어',
  ];

  return (
    <div className="main-namju-container">
      <Nav />
      <main className="main-namju" id="main">
        <section className="feed" id="feed">
          {feedList.map((feed, index) => (
            <FeedCard
              key={feed.id}
              index={index}
              userName={feed.userName}
              profileSrc={feed.profileSrc}
              feedSrc={feed.feedSrc}
              commentDataUrl={feed.commentDataUrl}
              numOfLikes={feed.numOfLikes}
              caption={feed.caption}
              isLiked={feed.isLiked}
              time={feed.time}
              likeFeed={likeFeed}
              commentList={feed.commentList}
            />
          ))}
        </section>

        <aside className="sidebar" id="sideBar">
          <h1 className="info-me">
            <a href="#">
              <div className="profile-pic-wrap">
                <img
                  src="./images/namju/profile-img.jpeg"
                  alt="southpole_pbf profile"
                  className="profile-pic"
                />
              </div>
              <div className="profile-info">
                <strong>southpole_pbf</strong>
                <div>namju yun</div>
              </div>
            </a>
          </h1>

          <section className="story">
            <div className="story-title">
              <h1>스토리</h1>
              <h2>
                <button href="">모두 보기</button>
              </h2>
            </div>

            <ul className="story-list" id="storyList">
              {STORY_ITEM_LIST.map(item => (
                <li className="story-item" key={item.userName}>
                  <button type="button" className="img-gradient">
                    <div className="story-img-wrap">
                      <img src={item.profilePic} alt="" />
                    </div>
                    <div className="gradient" />
                  </button>
                  <div className="story-item-desc">
                    <a href="#">
                      <strong>{item.userName}</strong>
                    </a>
                    <span>{item.time}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="rec">
            <div className="rec-title">
              <h1>회원님을 위한 추천</h1>
              <h2>
                <a href="">모두 보기</a>
              </h2>
            </div>

            <ul className="rec-list">
              {REC_ITEM_LIST.map(item => (
                <li className="rec-item">
                  <a href="#" className="rec-profile">
                    <div className="rec-img-wrap">
                      <img src={item.profilePic} alt="" />
                    </div>
                    <div className="rec-item-desc">
                      <strong>{item.userName}</strong>
                      <span>{item.desc}</span>
                    </div>
                  </a>
                  <button>팔로우</button>
                </li>
              ))}
            </ul>
          </section>

          <section className="terms">
            <div className="terms-link">
              {TERMS_LIST.map(item => (
                <a href="">{item}</a>
              ))}
            </div>
            <div className="copyright">© 2019 INSTAGRAM</div>
          </section>
        </aside>
      </main>
    </div>
  );
}

export default Main;
