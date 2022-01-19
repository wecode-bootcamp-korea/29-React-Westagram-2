import React from 'react';

const AsideFollow = ({ userImg, userName, followPeople }) => {
  return (
    <div className="follow">
      <img className="profileImg5" src={userImg} alt="프로필" />
      <div className="followProfile">
        <span>{userName}</span>
        <span>{followPeople}</span>
      </div>
      <a href="/#">팔로우</a>
    </div>
  );
};

export default AsideFollow;
