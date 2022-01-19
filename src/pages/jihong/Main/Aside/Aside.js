import React from 'react';
import './Aside.scss';
import AsideStory from './Story/AsideStory';
import STORY_LIST from './Story/storyData';
import AsideInfo from './AsideInfo';
import AsideFollow from './Follow/AsideFollow';
import FOLLOW_LIST from './Follow/followData';

const Aside = () => {
  return (
    <div className="aside">
      <div className="asideProfile">
        <img
          className="profileImg3"
          src="./images/jihong/jihong.jpeg"
          alt="프로필"
        />
        <div>
          <p>whoohawhooha</p>
          <p>FrontEnd Engineer | JiHong Ju</p>
        </div>
      </div>

      <div className="asideStory">
        <div className="storyInfo">
          <h1>스토리</h1>
          <a href="/#">모두 보기</a>
        </div>
        <div className="storyContent">
          {STORY_LIST.map(aside => {
            return (
              <AsideStory
                key={aside.id}
                userName={aside.userName}
                timeline={aside.timeline}
                userImg={aside.userImg}
              />
            );
          })}
        </div>
      </div>

      <div className="asideFollow">
        <div className="followInfo">
          <h1>회원님을 위한 추천</h1>
          <a href="/#">모두 보기</a>
        </div>
        <div className="followContent">
          {FOLLOW_LIST.map(follow => {
            return (
              <AsideFollow
                key={follow.id}
                userName={follow.userName}
                userImg={follow.userImg}
                followPeople={follow.followPeople}
              />
            );
          })}
        </div>
      </div>
      <AsideInfo />
    </div>
  );
};

export default Aside;
