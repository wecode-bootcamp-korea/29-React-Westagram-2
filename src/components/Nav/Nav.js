import React from 'react';
import NavBtn from './NavBtn/NavBtn';
import ProfileModal from './ProfileModal/ProfileModal';
import './Nav.scss';

const Nav = () => {
  return (
    <header className="header" id="header">
      <div className="header-content">
        <h1 className="logo">
          <a href="./main.html">
            <i className="fab fa-instagram" />
            {/* <img src="./images/instagram.png" alt="westagram logo" /> */}
            <div className="logo-border" aria-hidden="true" />
            <strong className="westagram-logo">Westagram</strong>
          </a>
        </h1>

        <div className="search-box">
          <input
            type="text"
            id="searchInput"
            placeholder="&#xF002; 검색"
            style={{ fontFamily: 'Arial, FontAwesome' }}
          />
        </div>

        <nav className="nav-btns">
          <NavBtn
            className="explore"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            alt="explore"
          />
          <NavBtn
            className="likes"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt="likes and comments"
          />
          <NavBtn
            className="profile"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            alt="my profile"
            id="profileBtn"
          />
        </nav>

        <ProfileModal />
      </div>
    </header>
  );
};

export default Nav;
