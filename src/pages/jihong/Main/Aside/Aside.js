import React from 'react';
import './Aside.scss';
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
        <div className="story">
          <img
            className="profileImg4"
            src="./images/jihong/jihong.jpeg"
            alt="프로필"
          />
          <div className="storyProfile">
            <span>whoohawhooha</span>
            <span>16분전</span>
          </div>
        </div>
        <div className="story">
          <img
            className="profileImg4"
            src="./images/jihong/jihong.jpeg"
            alt="프로필"
          />
          <div className="storyProfile">
            <span>whoohawhooha</span>
            <span>24분전</span>
          </div>
        </div>
        <div className="story">
          <img
            className="profileImg4"
            src="./images/jihong/jihong.jpeg"
            alt="프로필"
          />
          <div className="storyProfile">
            <span>whoohawhooha</span>
            <span>30분전</span>
          </div>
        </div>
        <div className="story">
          <img
            className="profileImg4"
            src="./images/jihong/jihong.jpeg"
            alt="프로필"
          />
          <div className="storyProfile">
            <span>whoohawhooha</span>
            <span>30분전</span>
          </div>
        </div>
      </div>

      <div className="asideFollow">
        <div className="followInfo">
          <h1>회원님을 위한 추천</h1>
          <a href="/#">모두 보기</a>
        </div>
        <div className="follow">
          <img
            className="profileImg5"
            src="./images/jihong/jihong.jpeg"
            alt="프로필"
          />
          <div className="followProfile">
            <span>whoohawhooha</span>
            <span>ooo님 외3명이 팔로우합니다.</span>
          </div>
          <a href="/#">팔로우</a>
        </div>
        <div className="follow">
          <img
            className="profileImg5"
            src="./images/jihong/jihong.jpeg"
            alt="프로필"
          />
          <div className="followProfile">
            <span>whoohawhooha</span>
            <span>ooo님 외3명이 팔로우합니다.</span>
          </div>
          <a href="/#">팔로우</a>
        </div>
        <div className="follow">
          <img
            className="profileImg5"
            src="./images/jihong/jihong.jpeg"
            alt="프로필"
          />
          <div className="followProfile">
            <span>whoohawhooha</span>
            <span>ooo님 외3명이 팔로우합니다.</span>
          </div>
          <a href="/#">팔로우</a>
        </div>
        <div className="follow">
          <img
            className="profileImg5"
            src="./images/jihong/jihong.jpeg"
            alt="프로필"
          />
          <div className="followProfile">
            <span>whoohawhooha</span>
            <span>ooo님 외3명이 팔로우합니다.</span>
          </div>
          <a href="/#">팔로우</a>
        </div>
      </div>

      <div className="asideInfo">
        <p>
          Westagram 정보&middot;지원&middot;홍보 센터&middot;API&middot;채용
          정보&middot;약관
          <br />
          &middot;개인정보처리방침&middot;디렉터리&middot;프로필&middot;해시태그&middot;언어
        </p>
        <p>&copy;&nbsp;&nbsp;2022 WESTAGRAM&nbsp;</p>
      </div>
    </div>
  );
};

export default Aside;
