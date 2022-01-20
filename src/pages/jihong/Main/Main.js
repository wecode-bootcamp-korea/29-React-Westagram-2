import React, { useState, useEffect } from 'react';
import Nav from '../../../components/Nav/Nav';
import Feed from './Feed/Feed';
import Aside from './Aside/Aside';
import './Main.scss';

const Main = () => {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('/data/feedJihongData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFeedList(data);
      });
  }, []);

  return (
    <>
      <Nav />
      <div className="container">
        <main className="main">
          <div className="feedBox">
            {feedList.map((feed, idx) => {
              return (
                <Feed
                  userName={feed.userName}
                  userImg={feed.userImg}
                  feedImg={feed.feedImg}
                  key={idx}
                  description={feed.description}
                  userComments={feed.comments}
                />
              );
            })}
          </div>
          <Aside />
        </main>
      </div>
    </>
  );
};

export default Main;
