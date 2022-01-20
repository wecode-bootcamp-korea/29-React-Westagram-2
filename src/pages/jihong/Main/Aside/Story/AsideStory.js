import React from 'react';

const AsideStory = ({ userImg, userName, timeline }) => {
  return (
    <div className="story">
      <img className="profileImg4" src={userImg} alt="프로필" />
      <div className="storyProfile">
        <span>{userName}</span>
        <span>{timeline}</span>
      </div>
    </div>
  );
};

export default AsideStory;
