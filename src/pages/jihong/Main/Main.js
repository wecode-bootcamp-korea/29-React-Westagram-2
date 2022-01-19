import React, { useState, useEffect } from 'react';
import Nav from '../../../components/Nav/Nav';
import Aside from './Aside/Aside';
import Feed from './Feed/Feed';
import '../../../common.scss';
import './Main.scss';

const Main = () => {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/feedJihongData.json', {
      method: 'GET', // GET method는 기본값이라서 생략이 가능합니다.
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then(res => res.json())
      .then(data => {
        setFeedList(data);
      });
  }, []);

  return (
    <div className="Container">
      <Nav />
      <main className="main">
        <div className="feedBox">
          {feedList.map(feed => {
            return (
              <Feed
                userName={feed.userName}
                userImg={feed.userImg}
                feedImg={feed.feedImg}
                key={feed.key}
                description={feed.description}
                comment={feed.comment}
              />
            );
          })}
        </div>
        <Aside />
      </main>
    </div>
  );
};

export default Main;
